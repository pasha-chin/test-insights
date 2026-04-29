import { useState } from 'react';
import {IconCheck} from "../../icons/IconCheck";
import {IconArrowDownToLine} from "../../icons/IconArrowDownToLine.jsx";

function HeaderCommunity( { group, from, to } ) {

    const [exportOpen, setExportOpen] = useState(false);
    const formatDate = (dateStr) =>
        new Date(dateStr).toLocaleDateString('ru-RU');

    function handleExport(format) {
        window.open(`http://localhost:3000/api/v1/export/${group.id}?from=${from}&to=${to}&format=${format}`, '_blank');
    }

    return (
        <>
            <section className="card rounded-3xl p-6 md:p-8 mb-6 rise relative z-100" style={{animationDelay: '0.05s'}}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">

                        <div className="relative">
                            {group?.photo_200 ? (
                                <img
                                    src={group.photo_200}
                                    alt={group.name}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 rounded-2xl object-cover"
                                />
                            ) : (
                                <div
                                    className="w-20 h-20 rounded-2xl flex items-center justify-center font-display font-bold text-2xl"
                                    style={{
                                        background: 'linear-gradient(135deg, var(--lavender) 0%, var(--peach) 100%)',
                                        color: 'var(--ink)'
                                    }}>
                                    {group?.name?.slice(0, 3).toUpperCase() || 'VK'}
                                </div>
                            )}
                            <div
                                className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full flex items-center justify-center"
                                style={{background: 'var(--mint-deep)'}}>

                                <IconCheck/>
                            </div>
                        </div>
                        <div>
                            <div className="block-tag mb-1">Сообщество</div>

                            <h1 className="font-display text-2xl md:text-2xl font-semibold leading-tight mb-1.5">{group?.name}</h1>

                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" style={{color: 'var(--ink-soft)'}}>

                                <span className="font-mono">@{group?.screen_name}</span>
                                <span className="w-1 h-1 rounded-full" style={{background: 'var(--ink-faint)'}}></span>

                                <span>
                                    <strong style={{color: 'var(--ink)'}}>{group?.members_count?.toLocaleString('ru-RU')}</strong> подписчиков
                                </span>

                                <span className="w-1 h-1 rounded-full" style={{background: 'var(--ink-faint)'}}></span>

                                <span className="font-mono text-xs">{formatDate(from)} — {formatDate(to)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative self-start md:self-center">
                        <button
                            onClick={() => setExportOpen(prev => !prev)}
                            className="btn-primary text-white font-medium px-6 py-3 rounded-2xl flex items-center gap-2 hover:opacity-90 cursor-pointer">
                            <IconArrowDownToLine/>
                            <span className="font-mono">Экспорт</span>
                        </button>
                        {exportOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden z-999">
                                <button
                                    onClick={() => { handleExport('json'); setExportOpen(false); }}
                                    className="w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                                    <IconArrowDownToLine />
                                    JSON
                                </button>
                                <button
                                    onClick={() => { handleExport('csv'); setExportOpen(false); }}
                                    className="w-full px-4 py-3 text-left text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                                    <IconArrowDownToLine />
                                    CSV
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderCommunity