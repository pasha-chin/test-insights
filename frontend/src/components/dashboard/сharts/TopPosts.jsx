import React, { useRef } from 'react'
import { Bar } from 'react-chartjs-2'

function TopPosts( {report} ) {

    const chartRef = useRef(null)
    const tooltipRef = useRef(null)

    const labels = report?.topPosts?.map((_, i) => `#${i + 1}`) || []
    const values = report?.topPosts?.map(p => p.engagement) || []

    const PEACH = 'rgb(255, 180, 140)'

    const colors = values.map((_, i) => {
        if (i === 0) return PEACH
        const t = i / (values.length - 1)
        const r = Math.round(184 + (107 - 184) * t)
        const g = Math.round(165 + (163 - 165) * t)
        const b = Math.round(217 + (217 - 217) * t)
        return `rgb(${r},${g},${b})`
    })

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: false,
                external: ({ chart, tooltip }) => {
                    const el = tooltipRef.current
                    if (!el) return

                    if (tooltip.opacity === 0) {
                        el.style.opacity = 0
                        return
                    }

                    const i = tooltip.dataPoints?.[0]?.dataIndex
                    const post = report.topPosts[i]
                    if (!post) return

                    const date = new Date(post.date).toLocaleDateString('ru-RU', {
                        day: '2-digit', month: 'short', year: 'numeric'
                    })

                    const iconLikes = `
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="color: var(--lavender-deep);">
                            <path d="M10 17s-6-3.5-6-8a4 4 0 017-2.5A4 4 0 0118 9c0 4.5-6 8-6 8h-2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                        </svg>
                    `;
                    const iconComments = `
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="color: var(--peach-darker);">
                            <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M7 9h6M7 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>`;
                    const iconRepost = `
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="color: var(--sky-deep);">
                            <path d="M3 17l4-7 4 4 6-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14 5h3v3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    `;

                    el.innerHTML = `
                        <div style="background:rgba(42,37,32,0.95);color:#faf6f0;padding:12px 16px;border-radius:12px;font-size:13px;line-height:1.6">
                            <div style="font-weight:600;margin-bottom:4px">${date}</div>
                            <div>Пост #${post.id}</div>
                            <div style="display:inline-flex;align-items:center;gap:16px;flex-wrap:nowrap">
                                <span style="display:inline-flex;align-items:center;gap:4px">${iconLikes} ${post.likes}</span>
                                <span style="display:inline-flex;align-items:center;gap:4px">${iconComments} ${post.comments}</span>
                                <span style="display:inline-flex;align-items:center;gap:4px">${iconRepost} ${post.reposts}</span>
                            </div>
                            <div style="margin-top:4px;opacity:0.7">Engagement: ${post.engagement}</div>
                        </div>`

                    const { x, y } = tooltip.caretX
                        ? { x: tooltip.caretX, y: tooltip.caretY }
                        : { x: 0, y: 0 }

                    const rect = chart.canvas.getBoundingClientRect()
                    el.style.left = rect.left + x + 12 + 'px'
                    el.style.top = rect.top + y - 10 + 'px'
                    el.style.opacity = 1
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#888', font: { size: 11, family: "'JetBrains Mono', monospace" } },
                border: { color: '#e0d8cc' }
            },
            y: {
                grid: { color: 'rgba(235, 226, 212, 0.6)' },
                ticks: {
                    color: '#888',
                    font: { size: 11, family: "'JetBrains Mono', monospace" },
                    callback: v => v >= 1000 ? (v / 1000) + 'k' : v
                },
                border: { display: false }
            }
        }
    }

    const chartData = {
        labels,
        datasets: [{
            data: values,
            backgroundColor: colors,
            borderRadius: { topLeft: 10, topRight: 10, bottomLeft: 2, bottomRight: 2 },
            borderSkipped: false,
            barPercentage: 0.7,
            categoryPercentage: 0.85
        }]
    }

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
                    <Bar ref={chartRef} data={chartData} options={chartOptions}/>
                </div>
            </div>
            <div ref={tooltipRef} style={{
                position: 'fixed',
                pointerEvents: 'none',
                opacity: 0,
                zIndex: 9999
            }}/>
        </>
    )
}

export default TopPosts