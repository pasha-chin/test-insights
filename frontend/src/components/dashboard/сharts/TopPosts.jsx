function TopPosts() {

    return (
        <>
            <div className="card rounded-3xl p-6 md:p-8 lg:col-span-3 rise" style={{animationDelay: '0.35s'}}>
                <div className="flex items-baseline justify-between mb-2">
                    <div>
                        <div className="block-tag mb-2">Глава вторая</div>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold">
                            Топ-<span className="underline-stroke">10 постов</span>
                        </h2>
                    </div>
                    <div className="text-xs font-mono" style={{color: 'var(--ink-soft)'}}>по engagement</div>
                </div>

                <div className="chart-frame mt-8" style={{height: '300px'}}>
                    <canvas id="chart-top"></canvas>
                </div>
            </div>
        </>
    )
}

export default TopPosts