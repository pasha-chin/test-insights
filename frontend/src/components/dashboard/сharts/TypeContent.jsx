function TypeContent() {

    return (
        <>
            <div className="card rounded-3xl p-6 md:p-8 lg:col-span-2 rise" style={{animationDelay: '0.4s'}}>
                <div className="block-tag mb-2">Глава третья</div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-1">
                    Типы <span className="italic" style={{color: 'var(--lavender-deep)'}}>контента</span>
                </h2>
                <p className="text-sm mb-6" style={{color: 'var(--ink-soft)'}}>распределение публикаций</p>

                <div className="relative" style={{height: '220px'}}>
                    <canvas id="chart-types"></canvas>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                            <div className="font-display text-3xl font-semibold leading-none">2 114</div>
                            <div className="text-xs mt-1" style={{color: 'var(--ink-soft)'}}>всего</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-2.5 mt-6">
                    <div className="flex items-center justify-between text-sm">
                                <span className="flex items-center" style={{color: 'var(--ink)'}}>
                                    <span className="legend-dot" style={{background: 'var(--sky-deep)'}}></span>
                                    Фото
                                </span>
                        <span className="font-mono" style={{color: 'var(--ink-soft)'}}>1 902 · 90%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                                <span className="flex items-center" style={{color: 'var(--ink)'}}>
                                    <span className="legend-dot" style={{background: 'var(--mint-deep)'}}></span>
                                    Мульти
                                </span>
                        <span className="font-mono" style={{color: 'var(--ink-soft)'}}>148 · 7%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                                <span className="flex items-center" style={{color: 'var(--ink)'}}>
                                    <span className="legend-dot" style={{background: 'var(--peach-deep)'}}></span>
                                    Видео
                                </span>
                        <span className="font-mono" style={{color: 'var(--ink-soft)'}}>64 · 3%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TypeContent