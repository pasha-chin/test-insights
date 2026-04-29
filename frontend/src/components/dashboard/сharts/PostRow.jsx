import {IconStarLikes} from "../../../icons/IconStarLikes.jsx";
import {IconComments} from "../../../icons/IconComments.jsx";
import {IconEngagement} from "../../../icons/IconEngagement.jsx";

function PostRow({ post, index }) {

    return (
        <>
            <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">

                <div className={`rank rank-${index < 3 ? index + 1 : 'other'}`}>
                    №{String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex-1 min-w-0 pr-4 w-full">
                    <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>
                        {post.text}
                    </p>
                    <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>
                        {new Date(post.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                    <span className="metric">
                        <IconStarLikes />
                        {post.likes}
                    </span>
                    <span className="metric">
                        <IconComments />
                        {post.comments}
                    </span>
                    <span className="metric font-semibold star-engagement">
                        <IconEngagement />
                        {post.engagement}
                    </span>
                </div>
            </div>
        </>
    )
}

export default PostRow