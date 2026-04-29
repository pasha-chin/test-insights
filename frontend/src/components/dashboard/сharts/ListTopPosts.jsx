import { useState } from 'react';
import PostRow from './PostRow';
function ListTopPosts( {report} ) {

    const [sortBy, setSortBy] = useState('engagement');

    const sortedPosts = [...(report?.topPosts ?? [])].sort((a, b) => {
        if( sortBy === 'likes' ) {
            return b.likes - a.likes;
        }
        if( sortBy === 'comments' ) {
            return b.comments - a.comments;
        }

        return b.engagement - a.engagement;
    });

    return (
        <>
            <section className="card rounded-3xl p-6 md:p-10 mb-6 mt-6 rise" style={{animationDelay: '0.1s', minHeight: '600px'}}>

                <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                    <div>
                        <div className="block-tag mb-2">Глава четвёртая</div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold">
                            Топ-<span className="underline-stroke">10 постов</span>
                        </h2>
                    </div>
                    <div className="relative group">
                        <div className="text-xs font-mono" style={{color: 'var(--ink-soft)'}}>
                            сортировка: {sortBy} ↓
                        </div>

                        <div
                            className="absolute right-0 top-full pt-1 hidden group-hover:flex flex-col items-end gap-0.5 z-10">
                            {['engagement', 'likes', 'comments']
                                .filter((key) => key !== sortBy)
                                .map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setSortBy(key)}
                                        className="text-xs font-mono italic cursor-pointer bg-transparent border-none"
                                        style={{color: 'var(--ink-soft)'}}
                                    >
                                        {key} ↓
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>

                <div
                    className="hidden md:flex items-center gap-4 px-6 mt-8 mb-2 text-[11px] tracking-[0.15em] uppercase"
                    style={{color: 'var(--ink-faint)'}}>
                    <div style={{width: '56px'}}>№</div>
                    <div className="flex-1">Заголовок и дата</div>
                    <div style={{width: '280px'}} className="text-right pr-2">Метрики</div>
                </div>

                <div className="px-6">
                    {sortedPosts.map((post, index) => (
                        <PostRow key={post.id} post={post} index={index}/>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ListTopPosts