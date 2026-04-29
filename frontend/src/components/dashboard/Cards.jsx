import {IconRectAlignLeft} from "../../icons/IconRectAlignLeft.jsx";
import {IconHeart} from "../../icons/IconHeart.jsx";
import {IconCalendarNoDate} from "../../icons/IconCalendarNoDate.jsx";
import {IconChartLineTop} from "../../icons/IconChartLineTop.jsx";

function Cards( { group, report } ) {

    console.log(report?.topPosts?.[0]?.date)

    return (
        <>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                <div className="card card-stat rounded-3xl p-6 rise relative overflow-hidden"
                     style={{animationDelay: '0.1s'}}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full"
                         style={{background: 'var(--peach)', filter: 'blur(40px)', opacity: '0.5'}}></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <span className="block-tag">№01</span>

                            <IconRectAlignLeft />
                        </div>
                        <div className="text-sm mb-2" style={{color: 'var(--ink-soft)'}}>Всего постов</div>
                        <div className="font-display text-4xl font-semibold tracking-tight">{report?.totalPosts?.toLocaleString('ru-RU')}</div>
                    </div>
                </div>

                <div className="card card-stat rounded-3xl p-6 rise relative overflow-hidden" style={{animationDelay: '0.15s'}}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full" style={{background: 'var(--lavender)', filter: 'blur(40px)', opacity: '0.6'}}></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <span className="block-tag">№02</span>
                            <IconHeart />
                        </div>
                        <div className="text-sm mb-2" style={{color: 'var(--ink-soft)'}}>Ср. вовлечённость</div>
                        <div className="font-display text-4xl font-semibold tracking-tight mb-1.5">
                            {report?.avgEngagement?.toLocaleString('ru-RU')}
                        </div>
                        <div className="text-xs font-mono" style={{color: 'var(--ink-faint)'}}>лайки + комментарии +
                            репосты
                        </div>
                    </div>
                </div>

                <div className="card card-stat rounded-3xl p-6 rise relative overflow-hidden"
                     style={{animationDelay: '0.2s'}}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full"
                         style={{background: 'var(--mint)', filter: 'blur(40px)', opacity: '0.6'}}></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <span className="block-tag">№03</span>
                            <IconCalendarNoDate />
                        </div>
                        <div className="text-sm mb-2" style={{color: 'var(--ink-soft)'}}>Самый активный день</div>
                        <div className="font-display text-3xl font-semibold tracking-tight mb-1.5">
                            {report?.busiestDay?.date ?? '—'}
                        </div>
                        <div className="text-xs font-mono" style={{color: 'var(--ink-faint)'}}>
                            {report?.busiestDay?.count?.toLocaleString('ru-RU')} постов · {report?.busiestDay?.year}
                        </div>
                    </div>
                </div>

                <div className="card card-stat rounded-3xl p-6 rise relative overflow-hidden" style={{animationDelay: '0.25s'}}>
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full" style={{background: 'var(--sky)', filter: 'blur(40px)', opacity: '0.6'}}></div>
                    <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                            <span className="block-tag">№04</span>
                            <IconChartLineTop />
                        </div>
                        <div className="text-sm mb-2" style={{color: 'var(--ink-soft)'}}>Макс. engagement</div>
                        <div className="font-display text-4xl font-semibold tracking-tight mb-1.5">
                            {report?.topPosts?.[0]?.engagement?.toLocaleString('ru-RU')}
                        </div>
                        <div className="text-xs font-mono" style={{color: 'var(--ink-faint)'}}>
                            {report?.topPosts?.[0]?.date
                                ? new Date(report.topPosts[0].date).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' })
                                : '—'}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards