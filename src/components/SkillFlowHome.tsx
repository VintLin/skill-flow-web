'use client';

import { useState } from 'react';
import { mockData } from '@/data/mockData';
import type { GroupCard } from '@/types/skillflow';

export function SkillFlowHome() {
  const [cards, setCards] = useState(mockData);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    card.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const togglePin = (cardId: string) => {
    setCards(cards.map(c => c.id === cardId ? { ...c, isPinned: !c.isPinned } : c));
  };

  const toggleSkill = (cardId: string, skillId: string) => {
    setCards(cards.map(c =>
      c.id === cardId
        ? { ...c, skills: c.skills.map(s => s.id === skillId ? { ...s, isEnabled: !s.isEnabled } : s) }
        : c
    ));
  };

  const toggleTarget = (cardId: string, targetId: string) => {
    setCards(cards.map(c =>
      c.id === cardId
        ? { ...c, targets: c.targets.map(t => t.id === targetId ? { ...t, isEnabled: !t.isEnabled } : t) }
        : c
    ));
  };

  const toggleAllSkills = (cardId: string) => {
    const card = cards.find(c => c.id === cardId);
    if (!card) return;
    const enabled = card.skills.filter(s => s.isEnabled).length;
    const newState = enabled === card.skills.length ? false : true;
    setCards(cards.map(c =>
      c.id === cardId
        ? { ...c, skills: c.skills.map(s => ({ ...s, isEnabled: newState })) }
        : c
    ));
  };

  const toggleAllTargets = (cardId: string) => {
    const card = cards.find(c => c.id === cardId);
    if (!card) return;
    const enabled = card.targets.filter(t => t.isEnabled).length;
    const newState = enabled === card.targets.length ? false : true;
    setCards(cards.map(c =>
      c.id === cardId
        ? { ...c, targets: c.targets.map(t => ({ ...t, isEnabled: newState })) }
        : c
    ));
  };

  const getSelectionState = (items: { isEnabled: boolean }[]) => {
    const enabled = items.filter(i => i.isEnabled).length;
    if (enabled === 0) return 'off';
    if (enabled === items.length) return 'on';
    return 'partial';
  };

  const getSelectionLabel = (state: string) => {
    return { off: 'OFF', partial: 'PART', on: 'ON' }[state] || 'OFF';
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans text-[#262626]">
      {/* Top Bar */}
      <div className="sticky top-0 z-[100] bg-[#f9f9f9] border-b border-[#f2f2f2] px-4 py-2.5 flex items-center gap-3 h-[52px]">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.open('https://github.com/VintLin/skill-flow', '_blank')}>
          <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#3b82f6] to-[#8b5cf6] rounded-lg flex items-center justify-center text-white font-semibold text-xs">
            SF
          </div>
          <div className="text-[17px] font-semibold">Skill Flow</div>
        </div>

        <div className="flex items-center gap-2 px-3 w-[320px] h-[34px] bg-[#fdfdfd] border-[0.5px] border-[#f2f2f2] rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
          <svg className="w-[11px] h-[11px] opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder="SEARCH GROUP AUTHOR"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 border-none outline-none bg-transparent text-[10px] font-medium uppercase placeholder:text-[rgba(38,38,38,0.62)]"
          />
        </div>

        <div className="flex-1" />

        <button className="w-[34px] h-[34px] bg-[#fdfdfd] border-[0.5px] border-[#f2f2f2] rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.12)] flex items-center justify-center hover:bg-[#f5f5f5] transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>

        <button className="w-[34px] h-[34px] bg-[#fdfdfd] border-[0.5px] border-[#f2f2f2] rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.12)] flex items-center justify-center hover:bg-[#f5f5f5] transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
          </svg>
        </button>

        <button className="w-[34px] h-[34px] bg-[#fdfdfd] border-[0.5px] border-[#f2f2f2] rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.12)] flex items-center justify-center hover:bg-[#f5f5f5] transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
          </svg>
        </button>
      </div>

      {/* Grid Section */}
      <div className="p-4">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(304px,1fr))] gap-3.5 max-w-[1260px] mx-auto">
          {filteredCards.map(card => {
            const targetState = getSelectionState(card.targets);
            const skillState = getSelectionState(card.skills);

            return (
              <div key={card.id} className="bg-[#fdfdfd] border-[0.5px] border-[#f2f2f2] rounded-[10px] p-3 shadow-[0_6px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all min-h-[206px] flex flex-col gap-2.5">
                {/* Card Header */}
                <div className="flex justify-between items-start gap-2 pb-0.5">
                  <div className="flex-1 min-w-0 flex flex-col gap-1">
                    <div className="flex items-baseline gap-1.5">
                      <div className="text-[17px] font-semibold text-[#3b82f6]">{card.title}</div>
                      <div className="text-[11px] text-[rgba(38,38,38,0.62)]">{card.subtitle}</div>
                    </div>
                    <div className="text-[11px] text-[rgba(38,38,38,0.62)]">{card.metaLine}</div>
                  </div>
                  <button
                    onClick={() => togglePin(card.id)}
                    className={`w-[22px] h-[22px] flex items-center justify-center text-xs transition-all ${card.isPinned ? 'text-[#3b82f6]' : 'text-[rgba(38,38,38,0.62)] hover:text-[#3b82f6]'}`}
                  >
                    {card.isPinned ? '📌' : '⋯'}
                  </button>
                </div>

                {/* Agents Section */}
                <div className="flex flex-col gap-1.5 -mx-3">
                  <div className="text-xs font-semibold text-[rgba(38,38,38,0.62)] uppercase px-3 pt-[1.5px]">Agents</div>
                  <div className="relative h-[34px]">
                    <div className="absolute left-0 top-0 w-[14px] h-[34px] bg-gradient-to-r from-[#fdfdfd] from-0% via-[#fdfdfd] via-40% to-transparent to-100% pointer-events-none z-[1]" />
                    <div className="flex gap-1.5 overflow-x-auto overflow-y-hidden h-[34px] px-3 scrollbar-none">
                      <button
                        onClick={() => toggleAllTargets(card.id)}
                        className={`w-[34px] h-[34px] rounded-lg text-[10px] font-bold flex items-center justify-center transition-all flex-shrink-0 ${
                          targetState === 'off' ? 'bg-[#f2f2f2] text-[rgba(38,38,38,0.82)]' :
                          targetState === 'partial' ? 'bg-[rgba(234,179,8,0.32)] text-[#eab308]' :
                          'bg-[rgba(34,197,94,0.30)] text-[#22c55e]'
                        }`}
                      >
                        {getSelectionLabel(targetState)}
                      </button>
                      {card.targets.map(target => (
                        <button
                          key={target.id}
                          onClick={() => toggleTarget(card.id, target.id)}
                          title={target.label}
                          className={`w-[34px] h-[34px] rounded-lg text-[11px] font-bold font-mono flex items-center justify-center transition-all flex-shrink-0 ${
                            target.isEnabled ? 'bg-[rgba(59,130,246,0.30)] text-[#262626]' : 'bg-[#f2f2f2] text-[rgba(38,38,38,0.78)]'
                          }`}
                        >
                          {target.shortLabel}
                        </button>
                      ))}
                    </div>
                    <div className="absolute right-0 top-0 w-[14px] h-[34px] bg-gradient-to-r from-transparent from-0% via-[#fdfdfd] via-60% to-[#fdfdfd] to-100% pointer-events-none z-[1]" />
                  </div>
                </div>

                {/* Skills Section */}
                <div className="flex flex-col gap-1.5 -mx-3">
                  <div className="text-xs font-semibold text-[rgba(38,38,38,0.62)] uppercase px-3 pt-[1.5px]">Skills</div>
                  <div className="relative h-[34px]">
                    <div className="absolute left-0 top-0 w-[14px] h-[34px] bg-gradient-to-r from-[#fdfdfd] from-0% via-[#fdfdfd] via-40% to-transparent to-100% pointer-events-none z-[1]" />
                    <div className="flex gap-1.5 overflow-x-auto overflow-y-hidden h-[34px] px-3 scrollbar-none">
                      <button
                        onClick={() => toggleAllSkills(card.id)}
                        className={`w-[34px] h-[34px] rounded-lg text-[10px] font-bold flex items-center justify-center transition-all flex-shrink-0 ${
                          skillState === 'off' ? 'bg-[#f2f2f2] text-[rgba(38,38,38,0.82)]' :
                          skillState === 'partial' ? 'bg-[rgba(234,179,8,0.32)] text-[#eab308]' :
                          'bg-[rgba(34,197,94,0.30)] text-[#22c55e]'
                        }`}
                      >
                        {getSelectionLabel(skillState)}
                      </button>
                      {card.skills.map(skill => (
                        <button
                          key={skill.id}
                          onClick={() => toggleSkill(card.id, skill.id)}
                          title={skill.description || skill.label}
                          className={`px-2.5 h-[34px] rounded-lg text-[11px] font-bold flex items-center transition-all whitespace-nowrap flex-shrink-0 ${
                            skill.isEnabled ? 'bg-[rgba(59,130,246,0.30)] text-[#262626]' : 'bg-[#f2f2f2] text-[#262626]'
                          }`}
                        >
                          {skill.label}
                        </button>
                      ))}
                    </div>
                    <div className="absolute right-0 top-0 w-[14px] h-[34px] bg-gradient-to-r from-transparent from-0% via-[#fdfdfd] via-60% to-[#fdfdfd] to-100% pointer-events-none z-[1]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
