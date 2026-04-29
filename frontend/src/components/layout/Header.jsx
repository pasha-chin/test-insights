export default function Header() {
    return (
        <>
            <header className="px-8 py-6 flex items-center justify-between">
                <div className="flex items-center gap-3 rise" style={{animationDelay: '0.05s'}}>
                    <div className="relative">

                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                             style={{background: 'var(--ink)', transform: 'rotate(-4deg)'}}>
                            <span className="font-display text-cream font-black text-lg"
                                  style={{color: 'var(--cream)', transform: 'rotate(4deg)'}}>vk</span>
                        </div>

                        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full pulse-dot"
                             style={{background: 'var(--peach-deep)'}}></div>
                    </div>
                    <div className="leading-tight">
                        <div className="font-display font-semibold text-base">Insights</div>
                        <div className="text-[11px] tracking-widest uppercase" style={{color: 'var(--ink-soft'}}>est.
                            2026
                        </div>
                    </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
                     style={{background: 'rgba(212, 235, 224, 0.6)', color: '#2d6a4f'}}>
                    <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{background: '#2d6a4f'}}></span>
                    Сервис работает
                </div>
            </header>
        </>
    )
}