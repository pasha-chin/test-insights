import { Bar, Line } from 'react-chartjs-2'
function DynamicOfEngagementByDay( {report} ) {

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'short' });
    };

    return (
        <>
            <section className="card rounded-3xl p-6 md:p-8 mb-6 rise" style={{animationDelay: '0.3s'}}>
                <div className="flex items-baseline justify-between mb-1">
                    <div>
                        <div className="block-tag mb-2">Глава первая</div>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold">
                            Динамика <span className="italic"
                                           style={{color: 'var(--peach-deep)'}}>вовлечённости</span> по
                            дням
                        </h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-xs font-mono"
                         style={{color: 'var(--ink-soft)'}}>
                        <span className="w-1.5 h-1.5 rounded-full pulse-dot"
                              style={{background: 'var(--mint-deep)'}}></span>
                        актуально на сегодня
                    </div>
                </div>

                <div className="chart-frame mt-8 mb-4" style={{height: '340px'}}>
                    <Line
                        data={{
                            labels: Object.keys(report?.dailyEngagement || {}).map(formatDate),
                            datasets: [
                                {
                                    label: 'Ср. engagement',
                                    data: Object.values(report?.dailyEngagement || {}),
                                    borderColor: '#6ba3d9',
                                    backgroundColor: (ctx) => {
                                        const chart = ctx.chart
                                        const {chartArea} = chart
                                        if (!chartArea) return 'rgba(107,163,217,0)'
                                        const grad = chart.ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom)
                                        grad.addColorStop(0, 'rgba(107, 163, 217, 0.35)')
                                        grad.addColorStop(1, 'rgba(107, 163, 217, 0)')
                                        return grad
                                    },
                                    borderWidth: 2.2,
                                    tension: 0.35,
                                    fill: true,
                                    pointRadius: 0,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: '#6ba3d9',
                                    pointHoverBorderColor: '#fff',
                                    pointHoverBorderWidth: 2,
                                    yAxisID: 'y',
                                },
                                {
                                    label: 'Кол-во постов',
                                    data: Object.keys(report?.dailyEngagement || {}).map(
                                        date => report?.dailyActivity?.[date] ?? 0
                                    ),
                                    borderColor: '#7cc4a3',
                                    borderWidth: 2,
                                    borderDash: [5, 4],
                                    tension: 0.35,
                                    fill: false,
                                    pointRadius: 0,
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: '#7cc4a3',
                                    pointHoverBorderColor: '#fff',
                                    pointHoverBorderWidth: 2,
                                    yAxisID: 'y1',
                                },
                            ],
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            interaction: {mode: 'index', intersect: false},
                            plugins: {
                                legend: {display: false},
                                tooltip: {
                                    backgroundColor: 'rgba(42, 37, 32, 0.95)',
                                    titleColor: '#faf6f0',
                                    bodyColor: '#faf6f0',
                                    padding: 12,
                                    borderColor: 'rgba(255, 157, 118, 0.3)',
                                    borderWidth: 1,
                                    cornerRadius: 12,
                                    displayColors: true,
                                    boxPadding: 4,
                                    titleFont: {family: "'Fraunces', serif", size: 13, weight: '600'},
                                    bodyFont: {family: "'Inter Tight', sans-serif", size: 12},
                                },
                            },
                            scales: {
                                x: {
                                    grid: {display: false},
                                    ticks: {
                                        maxTicksLimit: 8,
                                        color: '#6b5f55',
                                        font: {size: 11, family: "'JetBrains Mono', monospace"},
                                    },
                                    border: {color: '#ebe2d4'},
                                },
                                y: {
                                    position: 'left',
                                    grid: {color: 'rgba(235, 226, 212, 0.6)', drawBorder: false},
                                    ticks: {
                                        color: '#6b5f55',
                                        font: {size: 11, family: "'JetBrains Mono', monospace"},
                                        callback: v => v.toLocaleString('ru-RU'),
                                    },
                                    border: {display: false},
                                },
                                y1: {
                                    position: 'right',
                                    grid: {display: false},
                                    ticks: {
                                        color: '#7cc4a3',
                                        font: {size: 11, family: "'JetBrains Mono', monospace"},
                                    },
                                    border: {display: false},
                                },
                            },
                        }}
                    />
                </div>

                <div className="flex items-center justify-center gap-6 text-sm pt-2">
                        <span style={{color: 'var(--ink-soft)'}}>
                            <span className="legend-dot" style={{background: 'var(--sky-deep)'}}></span>
                            Ср. engagement
                        </span>
                    <span style={{color: 'var(--ink-soft)'}}>
                            <span className="legend-dot" style={{background: 'var(--mint-deep)'}}></span>
                            Кол-во постов
                        </span>
                </div>
            </section>
        </>
    )
}

export default DynamicOfEngagementByDay