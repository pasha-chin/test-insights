import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IconArrowRight } from "../../icons/IconArrowRight.jsx";
export default function AnalyzeForm() {

    const [community, setCommunity] = useState('');
    const [dateFrom, setDateFrom] = useState('2026-01-16');
    const [dateTo, setDateTo] = useState('2026-04-16');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        console.log('submit fired');
        e.preventDefault();

        setError(null);
        setLoading(true);

        try {
            const response = await fetch('/api/v1/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    groupId: community,
                    from: Math.floor(new Date(dateFrom).getTime() / 1000),
                    to: Math.floor(new Date(dateTo).getTime() / 1000),
                }),
            });

            if( !response.ok ) {
                const data = await response.json();
                throw new Error(data.error || 'Ошибка сервера');
            }

            const data = await response.json();
            navigate(`/dashboard/${community}`, {
                state: {
                    data,
                    from: dateFrom,
                    to: dateTo
                }
            });

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="card rounded-3xl p-7 md:p-9 rise" style={{animationDelay: '0.4s'}}>

                <div className="flex items-baseline justify-between mb-3">
                    <label htmlFor="community" className="text-sm font-medium">
                        ID или имя сообщества
                    </label>
                    <span className="text-[11px] tracking-wider uppercase"
                          style={{color: 'var(--ink-soft)'}}>шаг 1</span>
                </div>

                <div className="relative mb-4">
                    <span
                        className="absolute left-4 top-1/2 -translate-y-1/2 font-display italic text-base pointer-events-none"
                        style={{color: 'var(--ink-soft)'}}>vk.com /</span>
                    <input
                        type="text"
                        id="community"
                        placeholder="durov"
                        value={community}
                        onChange={(e) => setCommunity(e.target.value)}
                        className="field w-full rounded-2xl pl-[88px] pr-4 py-3.5 text-base placeholder:text-stone-400"
                    />
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-8">
                    <span className="text-xs mr-1" style={{color: 'var(--ink-soft)'}}>Попробуйте:</span>
                    <button type="button" onClick={() => setCommunity('curlrocknroll')}
                            className="chip text-sm px-3 py-1 rounded-full font-medium"
                            style={{background: 'var(--curlshop)', color: '#ffffff'}}>
                        curlrocknroll
                    </button>
                    <button type="button" onClick={() => setCommunity('vkvideo')}
                            className="chip text-sm px-3 py-1 rounded-full font-medium"
                            style={{background: 'var(--peach)', color: '#8b3a1a'}}>
                        vkvideo
                    </button>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 h-px" style={{background: 'var(--line)'}}></div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="1.5" fill="var(--peach-deep)"/>
                        <circle cx="2" cy="8" r="1" fill="var(--ink-soft)" opacity="0.4"/>
                        <circle cx="14" cy="8" r="1" fill="var(--ink-soft)" opacity="0.4"/>
                    </svg>
                    <div className="flex-1 h-px" style={{background: 'var(--line)'}}></div>
                </div>

                <div className="flex items-baseline justify-between mb-3">
                        <span className="text-sm font-medium">
                            Период анализа
                        </span>
                    <span className="text-[11px] tracking-wider uppercase"
                          style={{color: 'var(--ink-soft)'}}>шаг 2</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div>
                        <label htmlFor="date-from" className="block text-xs mb-1.5" style={{color: 'var(--ink-soft)'}}>
                            Начало
                        </label>
                        <input
                            type="date"
                            id="date-from"
                            value={dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                            className="field w-full rounded-2xl px-4 py-3 text-base"
                        />
                    </div>
                    <div>
                        <label htmlFor="date-to" className="block text-xs mb-1.5" style={{color: 'var(--ink-soft)'}}>
                            Конец
                        </label>
                        <input
                            type="date"
                            id="date-to"
                            value={dateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                            className="field w-full rounded-2xl px-4 py-3 text-base"
                        />
                    </div>
                </div>

                <button
                    className="btn-primary w-full text-white font-medium py-4 rounded-2xl flex items-center justify-center gap-2 group">
                    <span className="text-base">Анализировать</span>
                    <IconArrowRight />
                </button>

            </form>

            <p className="rise text-center text-xs mt-6" style={{color: 'var(--ink-soft)', animationDelay: '0.5s'}}>
                Анализ занимает до 30&nbsp;секунд — без регистрации.
            </p>
        </>
    )
}