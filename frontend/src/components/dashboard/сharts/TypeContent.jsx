import { Doughnut } from 'react-chartjs-2'
import { ArcElement } from 'chart.js'
function TypeContent( {report} ) {

    const types = report?.typeDistribution || {}

    const labels = Object.keys(types)
    const values = Object.values(types)
    const total = values.reduce((a, b) => a + b, 0)

    const labelMap = {
        photo: 'Фото',
        video: 'Видео',
        text: 'Текст',
        link: 'Ссылка',
        multi: 'Мульти',
    }

    const colors = ['#6ba3d9', '#7cc4a3', '#ff9d76', '#b8a5d9', '#d99090'];

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: 'rgba(42, 37, 32, 0.95)',
                titleColor: '#faf6f0',
                bodyColor: '#faf6f0',
                padding: 12,
                cornerRadius: 12,
                callbacks: {
                    title: (items) => {
                        const label = items[0].label
                        return labelMap[label] || label
                    },
                    label: (ctx) => {
                        const pct = ((ctx.parsed / total) * 100).toFixed(1)
                        return ` ${ctx.parsed.toLocaleString('ru-RU')} · ${pct}%`
                    }
                }
            }
        }
    }

    const data = {
        labels,
        datasets: [{
            data: values,
            backgroundColor: colors,
            borderColor: 'rgba(255, 255, 255, 0.7)',
            borderWidth: 3,
            hoverOffset: 8,
            spacing: 2
        }]
    }

    return (
        <>
            <div className="card rounded-3xl p-6 md:p-8 lg:col-span-2 rise" style={{animationDelay: '0.4s'}}>
                <div className="block-tag mb-2">Глава третья</div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-1">
                    Типы <span className="italic" style={{color: 'var(--lavender-deep)'}}>контента</span>
                </h2>
                <p className="text-sm mb-6" style={{color: 'var(--ink-soft)'}}>распределение публикаций</p>

                <div className="relative" style={{height: '220px'}}>
                    <Doughnut data={data} options={options} />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="text-center">
                            <div className="font-display text-3xl font-semibold leading-none">2 114</div>
                            <div className="text-xs mt-1" style={{color: 'var(--ink-soft)'}}>всего</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-2.5 mt-6">
                    { labels.map((label, i) => (
                        <div className="flex items-center justify-between text-sm" key={label}>
                            <span className="flex items-center" style={{color: 'var(--ink)'}}>
<                               span className="legend-dot" style={{background: colors[i]}}></span>
                                {labelMap[label] || label}
                            </span>
                            <span className="font-mono" style={{color: 'var(--ink-soft)'}}>
                              {values[i]} · {Math.round(values[i] / values.reduce((a,b) => a+b, 0) * 100)}%
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TypeContent