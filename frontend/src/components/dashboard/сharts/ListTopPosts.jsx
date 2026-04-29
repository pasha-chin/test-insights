function ListTopPosts() {

    return (
        <>
            <section className="card rounded-3xl p-6 md:p-10 mb-6 mt-6 rise" style={{animationDelay: '0.1s'}}>

                <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                    <div>
                        <div className="block-tag mb-2">Глава четвёртая</div>
                        <h2 className="font-display text-3xl md:text-4xl font-semibold">
                            Топ-<span className="underline-stroke">10 постов</span>
                        </h2>
                    </div>
                    <div className="text-xs font-mono" style={{color: 'var(--ink-soft)'}}>сортировка: engagement ↓</div>
                </div>

                <div
                    className="hidden md:flex items-center gap-4 px-6 mt-8 mb-2 text-[11px] tracking-[0.15em] uppercase"
                    style={{color: 'var(--ink-faint)'}}>
                    <div style={{width: '56px'}}>№</div>
                    <div className="flex-1">Заголовок и дата</div>
                    <div style={{width: '280px'}} className="text-right pr-2">Метрики</div>
                </div>

                <div className="px-6">

                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-1">№01</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>В японском
                                сегменте Твиттера стал популярным новый тренд — девушки пытаются согнуться так, чтобы
                                форма ягодиц была максимальн…</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>05 апр 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>39 897</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>3 125</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>99 438</span>
                        </div>
                    </div>

                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-2">№02</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>Российские
                                власти… начали закупать средства обхода блокировок. Они нужны "для защиты данных,
                                удалённой работы сотрудников и п…</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>14 апр 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>15 662</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>2 999</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>32 156</span>
                        </div>
                    </div>

                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-3">№03</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>Ютуберы поймали
                                мошенника, укравшего у пенсионеров $27 млн. В США к 40 годам тюрьмы готовят Цзяньдуна
                                Чена, который годами об…</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>09 апр 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>17 995</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>1 065</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>27 773</span>
                        </div>
                    </div>


                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-other">№04</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>На Ebay продают…
                                фотографию PlayStation 5 по цене самой PlayStation 5. При этом формально никакого
                                развода нет: в описании чётко ук…</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint);'}}>10 апр 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>16 072</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>330</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>27 594</span>
                        </div>
                    </div>


                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-other">№05</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>В сети заметили
                                странную (и довольно мерзкую) деталь в Resident Evil Requiem — у некоторых зомби…
                                засранные штаны. Да-да, прямо на …</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>09 мар 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>13 250</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>863</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>25 174</span>
                        </div>
                    </div>


                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-other">№06</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>РКН начал
                                блокировать игры — игра Final Sentence не работает в России и разработчики предлагают
                                возврат средств. Это королевская б…</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>11 апр 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>13 072</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>3 840</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>22 939</span>
                        </div>
                    </div>


                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-other">№07</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>Мем стал
                                реальностью. Чел с ником sxydoctor проходил мимо местного магазина компьютерного железа
                                и заметил там видеокарту будущ…</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>02 мар 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>13 068</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>253</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>22 545</span>
                        </div>
                    </div>


                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-other">№08</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>А игровое
                                комьюнити точно токсичное? Девушка под ником FjotraTheGodless показала свой бюджетный
                                косплей на Охотницу из Dead by D…</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>07 апр 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>18 293</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>873</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>21 909</span>
                        </div>
                    </div>

                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-other">№09</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>«Покойся с
                                миром… друг» Геймер показал свой брелок-аутентификатор, который он использовал для
                                защиты аккаунта в Battle.net с 2010 …</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>05 апр 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>16 456</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>502</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>20 706</span>
                        </div>
                    </div>


                    <div className="post-row flex items-start md:items-center gap-4 flex-col md:flex-row">
                        <div className="rank rank-other">№10</div>
                        <div className="flex-1 min-w-0 pr-4">
                            <p className="text-[15px] leading-snug truncate" style={{color: 'var(--ink)'}}>В сети появились
                                первые слитые кадры со съёмочной площадки сериала по Baldur's Gate 3 от HBO. Судя по
                                всему, сериал будет максимал…</p>
                            <p className="text-xs font-mono mt-1" style={{color: 'var(--ink-faint)'}}>07 фев 2026</p>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M7 12s-5-3-5-7a3 3 0 015.5-1.5A3 3 0 0112 5c0 4-5 7-5 7z" fill="currentColor"
                                opacity="0.5"/></svg>8 004</span>
                            <span className="metric"><svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path
                                d="M2 6a4 4 0 014-4h2a4 4 0 014 4v1a4 4 0 01-4 4H6l-3 2v-2.5A4 4 0 012 7V6z"
                                fill="currentColor" opacity="0.5"/></svg>749</span>
                            <span className="metric font-semibold star-engagement"><svg width="14" height="14"
                                                                                        viewBox="0 0 14 14"
                                                                                        fill="currentColor"><path
                                d="M7 1l1.8 3.7 4.1.6-3 2.9.7 4.1L7 10.4l-3.6 1.9.7-4.1-3-2.9 4.1-.6L7 1z"/></svg>20 499</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListTopPosts