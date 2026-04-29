export default function PageHero() {
    return (
        <>
            <div className="rise text-center mb-5" style={{animationDelay: '0.1s'}}>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase"
                                  style={{color: 'var(--ink-soft)'}}>
                    <span className="w-8 h-px"
                                      style={{background: 'var(--ink-soft)', opacity: '0.4'}}></span>
                                №01 — Аналитика
                    <span className="w-8 h-px" style={{background: 'var(--ink-soft)', opacity: '0.4'}}></span>
                </span>
            </div>

            <h1 className="rise font-display text-center text-5xl md:text-6xl font-light leading-[1.05] mb-6 tracking-tight"
                style={{animationDelay: '0.2s'}}>
                Понимайте
                <span className="italic font-normal" style={{color: 'var(--peach-deep)'}}>сообщества</span>
                <br/>
                <span className="underline-stroke">ВКонтакте</span> глубже
            </h1>

            <p className="rise text-center text-base md:text-lg leading-relaxed max-w-md mx-auto mb-12"
               style={{color: 'var(--ink-soft)', animationDelay: '0.3s'}}>
                Введите ID или короткое имя сообщества и&nbsp;выберите период — мы&nbsp;соберём метрики по&nbsp;постам.
            </p>
        </>
    )
}