// services/analytics.js

function detectPostType(post) {
    const attachments = post.attachments || [];
    if( attachments.some(a => a.type === 'video') ) {
        return 'video';
    }
    if( attachments.some(a => a.type === 'photo') ) {
        return 'photo';
    }
    if( attachments.some(a => a.type === 'link') ) {
        return 'link';
    }
    return 'text';
}

function calcEngagement(post) {
    const likes = post.likes?.count || 0;
    const comments = post.comments?.count || 0;
    const reposts = post.reposts?.count || 0;
    return likes + comments + reposts;
}

function mapPost(post) {
    return {
        id: post.id,
        date: new Date(post.date * 1000).toISOString().split('T')[0],
        text: post.text?.slice(0, 100) || '',
        likes: post.likes?.count || 0,
        comments: post.comments?.count || 0,
        reposts: post.reposts?.count || 0,
        views: post.views?.count || 0,
        engagement: calcEngagement(post),
        type: detectPostType(post),
        isPinned: !!post.is_pinned
    };
}

function getTopPosts(posts, limit = 10) {
    return posts
        .map( mapPost )
        .sort( (a, b) => b.engagement - a.engagement )
        .slice(0, limit);
}

function getAvgEngagement(posts) {
    if( !posts.length ) {
        return 0;
    }
    const total = posts.reduce((sum, p) => sum + calcEngagement(p), 0);
    return +(total / posts.length).toFixed(2);
}

function getTypeDistribution(posts) {
    return posts.reduce(
        ( acc, post ) => {
            const type = detectPostType(post);
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        },
    {});
}

function getDailyActivity(posts) {
    return posts.reduce(
        ( acc, post ) => {
            const date = new Date(post.date * 1000).toISOString().split('T')[0];
            acc[date] = (acc[date] || 0) + 1;
            return acc;
        },
    {});
}

function analyzeWallPosts(posts) {
    return {
        totalPosts: posts.length,
        avgEngagement: getAvgEngagement(posts),
        topPosts: getTopPosts(posts),
        typeDistribution: getTypeDistribution(posts),
        dailyActivity: getDailyActivity(posts),
    };
}

module.exports = {
    detectPostType,
    calcEngagement,
    mapPost,
    getTopPosts,
    getAvgEngagement,
    getTypeDistribution,
    getDailyActivity,
    analyzeWallPosts
};