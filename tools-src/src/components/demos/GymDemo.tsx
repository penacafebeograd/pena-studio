import React, { useState, useMemo } from 'react';
import {
  Search,
  Check,
  AlertCircle,
  MessageCircle,
  CheckCircle2,
  X,
  UserPlus,
} from 'lucide-react';
import { Language } from '../../types';

export interface GymMember {
  id: string;
  name: string;
  phone: string;
  plan: string;
  remainingPasses: number;
  expiresAt: string;
  status: 'active' | 'expiring' | 'expired';
  lastVisit?: string;
  renewalReminderSent?: boolean;
  renewalReminderSentAt?: string;
}

interface DayCheckInStat {
  day: string;
  shortDay: string;
  count: number;
  dateStr: string;
  isToday?: boolean;
  peakHours: string;
}

const WEEKLY_CHECKINS: DayCheckInStat[] = [
  { day: 'Monday', shortDay: 'Mon', count: 84, dateStr: 'Sep 14', peakHours: '18:00 - 20:30' },
  { day: 'Tuesday', shortDay: 'Tue', count: 96, dateStr: 'Sep 15', peakHours: '17:30 - 20:00' },
  { day: 'Wednesday', shortDay: 'Wed', count: 89, dateStr: 'Sep 16', isToday: true, peakHours: '18:30 - 21:00' },
  { day: 'Thursday', shortDay: 'Thu', count: 108, dateStr: 'Sep 17', peakHours: '18:00 - 21:00 (Peak)' },
  { day: 'Friday', shortDay: 'Fri', count: 92, dateStr: 'Sep 18', peakHours: '17:00 - 19:30' },
  { day: 'Saturday', shortDay: 'Sat', count: 68, dateStr: 'Sep 19', peakHours: '11:00 - 14:00' },
  { day: 'Sunday', shortDay: 'Sun', count: 42, dateStr: 'Sep 20', peakHours: '10:30 - 13:00' },
];

const INITIAL_MEMBERS: GymMember[] = [
  {
    id: 'm1',
    name: 'Luka Đorđević',
    phone: '+381 63 442 1198',
    plan: '12-Session Pass',
    remainingPasses: 5,
    expiresAt: 'Oct 24, 2026',
    status: 'active',
    lastVisit: 'Yesterday, 18:30',
  },
  {
    id: 'm2',
    name: 'Tamara Bojić',
    phone: '+381 60 998 3341',
    plan: 'Monthly Unlimited',
    remainingPasses: 99,
    expiresAt: 'Sep 19, 2026 (3 days left)',
    status: 'expiring',
    lastVisit: '3 days ago',
    renewalReminderSent: false,
  },
  {
    id: 'm3',
    name: 'Nikola Simić',
    phone: '+381 64 332 8847',
    plan: '10-Session Pass',
    remainingPasses: 0,
    expiresAt: 'Expired Sep 01',
    status: 'expired',
    lastVisit: 'Sep 01, 2026',
    renewalReminderSent: false,
  },
  {
    id: 'm4',
    name: 'Milica Radović',
    phone: '+381 65 771 2249',
    plan: 'Morning Pass (10-14h)',
    remainingPasses: 8,
    expiresAt: 'Nov 15, 2026',
    status: 'active',
    lastVisit: 'Today, 10:15',
  },
  {
    id: 'm5',
    name: 'Vuk Vuković',
    phone: '+381 64 119 5543',
    plan: '12-Session Pass',
    remainingPasses: 2,
    expiresAt: 'Sep 21, 2026 (5 days left)',
    status: 'expiring',
    lastVisit: 'Monday, 19:40',
    renewalReminderSent: false,
  },
  {
    id: 'm6',
    name: 'Anđela Kostić',
    phone: '+381 63 881 2234',
    plan: 'Monthly Unlimited',
    remainingPasses: 99,
    expiresAt: 'Nov 02, 2026',
    status: 'active',
    lastVisit: 'Today, 16:45',
  },
];

interface GymDemoProps {
  lang?: Language;
}

export const GymDemo: React.FC<GymDemoProps> = () => {
  const [gymMembers, setGymMembers] = useState<GymMember[]>(INITIAL_MEMBERS);
  const [gymSearch, setGymSearch] = useState('');
  const [checkInAlert, setCheckInAlert] = useState<string | null>(null);
  const [activeBarDay, setActiveBarDay] = useState<string>('Wed');

  // New Member Form state
  const [showAddMember, setShowAddMember] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('+381 64 ');
  const [newPlan, setNewPlan] = useState('12-Session Pass (€35)');
  const [newStartDate, setNewStartDate] = useState('2026-09-09');

  const totalWeeklyCheckins = useMemo(() => {
    return WEEKLY_CHECKINS.reduce((acc, d) => acc + d.count, 0);
  }, []);

  const dailyAverageCheckins = Math.round(totalWeeklyCheckins / 7);
  const maxCheckinCount = Math.max(...WEEKLY_CHECKINS.map((d) => d.count));

  const handleGymCheckIn = (member: GymMember) => {
    // Keep the expired-member check-in block exactly as is
    if (member.status === 'expired') {
      setCheckInAlert(`⚠️ Cannot check in ${member.name}: Membership expired! Collect €35 renewal first.`);
      return;
    }

    if (member.remainingPasses > 0 && member.remainingPasses < 90) {
      setGymMembers((prev) =>
        prev.map((m) =>
          m.id === member.id
            ? {
                ...m,
                remainingPasses: m.remainingPasses - 1,
                lastVisit: 'Just now',
              }
            : m
        )
      );
      setCheckInAlert(`✓ Check-in successful for ${member.name}. ${member.remainingPasses - 1} visits left.`);
    } else {
      setGymMembers((prev) =>
        prev.map((m) =>
          m.id === member.id
            ? {
                ...m,
                lastVisit: 'Just now',
              }
            : m
        )
      );
      setCheckInAlert(`✓ Check-in successful for ${member.name} (Monthly Unlimited active).`);
    }

    setTimeout(() => setCheckInAlert(null), 3500);
  };

  const handleRenewPass = (member: GymMember) => {
    setGymMembers((prev) =>
      prev.map((m) =>
        m.id === member.id
          ? {
              ...m,
              status: 'active',
              remainingPasses: 10,
              expiresAt: 'Oct 15, 2026',
              lastVisit: 'Renewed just now',
              renewalReminderSent: false,
            }
          : m
      )
    );
    setCheckInAlert(`✓ Membership renewed for ${member.name} (€35 collected). Ready to check in!`);
    setTimeout(() => setCheckInAlert(null), 4000);
  };

  const handleSendRenewalReminder = (e: React.MouseEvent, member: GymMember) => {
    e.stopPropagation();
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setGymMembers((prev) =>
      prev.map((m) =>
        m.id === member.id
          ? {
              ...m,
              renewalReminderSent: true,
              renewalReminderSentAt: timeStr,
            }
          : m
      )
    );

    setCheckInAlert(
      `✓ WhatsApp reminder sent to ${member.name} (${member.phone}): "Zdravo ${member.name.split(' ')[0]}, tvoja članarina u Iron & Kettle ističe uskoro. Obnovi na pultu za nastavak treninga."`
    );
  };

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    let passes = 12;
    let cleanPlan = '12-Session Pass';
    let durationDays = 45;

    if (newPlan.includes('Monthly Unlimited')) {
      passes = 99;
      cleanPlan = 'Monthly Unlimited';
      durationDays = 30;
    } else if (newPlan.includes('10-Session Pass')) {
      passes = 10;
      cleanPlan = '10-Session Pass';
      durationDays = 30;
    } else if (newPlan.includes('Morning Pass')) {
      passes = 15;
      cleanPlan = 'Morning Pass (10-14h)';
      durationDays = 30;
    }

    const expDate = new Date();
    expDate.setDate(expDate.getDate() + durationDays);
    const expStr = expDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    const newMember: GymMember = {
      id: `gm-${Date.now()}`,
      name: newName.trim(),
      phone: newPhone.trim() || '+381 64 000 0000',
      plan: cleanPlan,
      remainingPasses: passes,
      expiresAt: expStr,
      status: 'active',
      lastVisit: 'New member (never)',
    };

    setGymMembers([newMember, ...gymMembers]);
    setCheckInAlert(`✓ New member registered: ${newName} (${cleanPlan}). Account active.`);
    setNewName('');
    setShowAddMember(false);
  };

  const filteredMembers = gymMembers.filter(
    (m) =>
      m.name.toLowerCase().includes(gymSearch.toLowerCase()) ||
      m.phone.includes(gymSearch) ||
      m.plan.toLowerCase().includes(gymSearch.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* 7-Day Check-Ins Bar Chart / Sparkline Widget */}
      <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#1c1e28] p-4 shadow-2xs">
        {/* Header with totals and peak stats */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-800 dark:text-stone-200">
                Weekly Turnstile Traffic • 7-Day Attendance
              </h4>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-stone-400 mt-0.5">
              Live RFID & desk check-ins per day. Hover or tap bars for peak hours.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-500 dark:text-stone-400 block">
                Week Total
              </span>
              <span className="font-mono font-bold text-sm text-slate-900 dark:text-white">
                {totalWeeklyCheckins} visits
              </span>
            </div>
            <div className="h-6 w-px bg-stone-200 dark:bg-stone-700"></div>
            <div>
              <span className="text-[10px] uppercase font-mono text-slate-500 dark:text-stone-400 block">
                Daily Avg
              </span>
              <span className="font-mono font-bold text-sm text-teal-800 dark:text-teal-400">
                {dailyAverageCheckins} visits/day
              </span>
            </div>
            <div className="h-6 w-px bg-stone-200 dark:bg-stone-700 hidden sm:block"></div>
            <div className="hidden sm:block">
              <span className="text-[10px] uppercase font-mono text-slate-500 dark:text-stone-400 block">
                Peak Shift
              </span>
              <span className="font-mono font-semibold text-xs text-amber-700 dark:text-amber-400">
                Thu (108 visits)
              </span>
            </div>
          </div>
        </div>

        {/* The Bar Chart */}
        <div className="mt-4 pt-2">
          <div className="grid grid-cols-7 gap-2 sm:gap-3 items-end h-28 sm:h-32 px-1">
            {WEEKLY_CHECKINS.map((item) => {
              const heightPct = Math.round((item.count / maxCheckinCount) * 100);

              return (
                <div
                  key={item.shortDay}
                  onClick={() => setActiveBarDay(item.shortDay)}
                  className="flex flex-col items-center h-full justify-end group cursor-pointer"
                >
                  {/* Top counter label */}
                  <span
                    className={`text-[10px] font-mono font-bold mb-1 transition-all ${
                      item.isToday
                        ? 'text-teal-800 dark:text-teal-400 font-extrabold'
                        : 'text-slate-600 dark:text-stone-400 group-hover:text-slate-900 dark:group-hover:text-white'
                    }`}
                  >
                    {item.count}
                  </span>

                  {/* The Vertical Bar */}
                  <div className="w-full max-w-[38px] bg-stone-100 dark:bg-stone-800/80 rounded-t-md relative flex items-end overflow-hidden h-full">
                    <div
                      style={{ height: `${heightPct}%` }}
                      className={`w-full rounded-t-md transition-all duration-300 ${
                        item.isToday
                          ? 'bg-teal-700 dark:bg-teal-500 shadow-xs'
                          : item.count === maxCheckinCount
                          ? 'bg-amber-600/90 dark:bg-amber-500/90'
                          : 'bg-stone-400 dark:bg-stone-600 group-hover:bg-teal-700/80'
                      }`}
                    ></div>
                  </div>

                  {/* Day Label Below */}
                  <div className="mt-1.5 text-center">
                    <span
                      className={`block text-[11px] font-bold leading-tight ${
                        item.isToday
                          ? 'text-teal-800 dark:text-teal-400'
                          : 'text-slate-700 dark:text-stone-300'
                      }`}
                    >
                      {item.shortDay}
                    </span>
                    <span className="block text-[9px] font-mono text-slate-400 dark:text-stone-500">
                      {item.dateStr.split(' ')[0]}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Day Details Footer */}
          {activeBarDay && (
            <div className="mt-3.5 rounded-lg bg-stone-50 dark:bg-[#14161e] px-3 py-2 text-[11px] text-slate-600 dark:text-stone-400 flex items-center justify-between border border-stone-200/80 dark:border-stone-800">
              {(() => {
                const stat = WEEKLY_CHECKINS.find((d) => d.shortDay === activeBarDay);
                if (!stat) return null;
                return (
                  <>
                    <span className="font-semibold text-slate-800 dark:text-stone-200">
                      {stat.day} ({stat.dateStr}): {stat.count} check-ins logged
                      {stat.isToday && ' • Today'}
                    </span>
                    <span className="font-mono text-teal-800 dark:text-teal-400 font-medium">
                      Rush hour: {stat.peakHours}
                    </span>
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>

      {/* Main Terminal Header & Search & +New Member Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Iron & Kettle — Front Desk Terminal
            </h3>
            <span className="text-xs font-mono font-medium text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded">
              RFID & Desk Scanner Active
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-stone-400 mt-0.5">
            Search member by name, phone or plan. 1-tap check-in with live visit countdown.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto w-full sm:w-auto">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-56">
            <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400 dark:text-stone-500" />
            <input
              type="text"
              value={gymSearch}
              onChange={(e) => setGymSearch(e.target.value)}
              placeholder="Search (e.g. Luka, 064)..."
              className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] pl-8 pr-3 py-1.5 text-xs text-slate-900 dark:text-white placeholder:text-stone-400 focus:border-teal-700 focus:outline-none"
            />
          </div>

          {/* + New Member Flow Button */}
          <button
            onClick={() => setShowAddMember(!showAddMember)}
            id="gym-new-member-btn"
            className="inline-flex items-center gap-1.5 rounded-lg bg-teal-800 dark:bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs cursor-pointer shrink-0"
          >
            <UserPlus className="h-3.5 w-3.5" />
            <span>{showAddMember ? 'Close Form' : '+ New Member'}</span>
          </button>
        </div>
      </div>

      {/* + New Member Signup Flow Modal/Form */}
      {showAddMember && (
        <form
          onSubmit={handleAddMember}
          className="rounded-xl border-2 border-teal-700/60 dark:border-teal-500/60 bg-teal-50/70 dark:bg-teal-950/40 p-4 space-y-3 animate-in fade-in"
        >
          <div className="flex items-center justify-between pb-1 border-b border-teal-200/80 dark:border-teal-800">
            <div className="text-xs font-bold text-teal-950 dark:text-teal-200 flex items-center gap-1.5">
              <UserPlus className="h-4 w-4 text-teal-800 dark:text-teal-400" />
              <span>Register New Member at Front Desk (Takes 15 seconds)</span>
            </div>
            <span className="text-[11px] font-mono text-teal-800 dark:text-teal-300">
              Collect payment at counter
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-[11px] font-semibold text-slate-800 dark:text-stone-200 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Milan Vasić"
                required
                autoFocus
                className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-stone-400 focus:border-teal-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-800 dark:text-stone-200 mb-1">
                Phone Number (for SMS & WhatsApp) *
              </label>
              <input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="+381 64 123 4567"
                required
                className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-stone-400 focus:border-teal-700 focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-800 dark:text-stone-200 mb-1">
                Membership Plan *
              </label>
              <select
                value={newPlan}
                onChange={(e) => setNewPlan(e.target.value)}
                className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3 py-2 text-xs text-slate-900 dark:text-white focus:border-teal-700 focus:outline-none"
              >
                <option>12-Session Pass (€35)</option>
                <option>Monthly Unlimited (€45)</option>
                <option>10-Session Pass (€30)</option>
                <option>Morning Pass (10-14h) (€25)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-800 dark:text-stone-200 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={newStartDate}
                onChange={(e) => setNewStartDate(e.target.value)}
                className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3 py-2 text-xs text-slate-900 dark:text-white focus:border-teal-700 focus:outline-none font-mono"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowAddMember(false)}
              className="rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3.5 py-1.5 text-xs text-slate-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-teal-800 dark:bg-teal-700 px-4 py-1.5 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs cursor-pointer"
            >
              Register & Issue Digital Pass
            </button>
          </div>
        </form>
      )}

      {/* Live Alert Toast */}
      {checkInAlert && (
        <div
          className={`rounded-xl border p-3.5 text-xs font-semibold shadow-md flex items-start gap-2.5 transition-all animate-in fade-in slide-in-from-top-2 ${
            checkInAlert.includes('Cannot check in')
              ? 'border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/80 text-red-950 dark:text-red-200'
              : 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/80 text-teal-950 dark:text-teal-200'
          }`}
        >
          {checkInAlert.includes('Cannot check in') ? (
            <AlertCircle className="h-4 w-4 text-red-700 dark:text-red-400 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="h-4 w-4 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
          )}
          <div className="flex-1 leading-relaxed">{checkInAlert}</div>
          <button
            onClick={() => setCheckInAlert(null)}
            className="opacity-70 hover:opacity-100 cursor-pointer p-0.5"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Members Terminal List */}
      <div className="space-y-2.5">
        {filteredMembers.length === 0 ? (
          <div className="rounded-xl border border-dashed border-stone-300 dark:border-stone-700 p-8 text-center bg-white dark:bg-[#181a24]">
            <p className="text-sm font-medium text-slate-600 dark:text-stone-300">
              No members found matching "{gymSearch}".
            </p>
            <button
              onClick={() => {
                setGymSearch('');
                setShowAddMember(true);
              }}
              className="mt-3 text-xs font-bold text-teal-800 dark:text-teal-400 hover:underline cursor-pointer"
            >
              + Register as new member
            </button>
          </div>
        ) : (
          filteredMembers.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border p-3.5 transition-colors ${
                m.status === 'expired'
                  ? 'border-red-200 dark:border-red-900/60 bg-red-50/40 dark:bg-red-950/30'
                  : m.status === 'expiring'
                  ? 'border-amber-200 dark:border-amber-900/60 bg-amber-50/30 dark:bg-amber-950/30'
                  : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-[#1c1e28]'
              }`}
            >
              {/* Left Column: Avatar & Member Profile */}
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg font-bold shrink-0 font-mono text-sm ${
                    m.status === 'expired'
                      ? 'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-300'
                      : m.status === 'expiring'
                      ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300'
                      : 'bg-stone-100 dark:bg-stone-800 text-slate-700 dark:text-stone-300'
                  }`}
                >
                  {m.name.charAt(0)}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {m.name}
                    </span>

                    {/* Status badge */}
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                        m.status === 'expired'
                          ? 'bg-red-100 dark:bg-red-900/60 text-red-800 dark:text-red-300'
                          : m.status === 'expiring'
                          ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300'
                          : 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300'
                      }`}
                    >
                      {m.status}
                    </span>

                    {/* Renewal reminder tag */}
                    {m.renewalReminderSent && (
                      <span className="inline-flex items-center gap-1 rounded bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 px-1.5 py-0.2 text-[10px] font-medium text-emerald-800 dark:text-emerald-300">
                        <Check className="h-3 w-3 text-emerald-600" />
                        <span>Reminder sent ({m.renewalReminderSentAt})</span>
                      </span>
                    )}
                  </div>

                  {/* Plan details & expiry */}
                  <div className="text-xs text-slate-500 dark:text-stone-400 mt-1 flex flex-wrap items-center gap-2">
                    <span className="font-medium text-slate-700 dark:text-stone-300">{m.plan}</span>
                    <span className="text-stone-300 dark:text-stone-700">•</span>
                    <span className={m.status === 'expired' ? 'text-red-700 dark:text-red-400 font-semibold' : ''}>
                      {m.expiresAt}
                    </span>
                    <span className="text-stone-300 dark:text-stone-700">•</span>
                    <span className="font-mono text-slate-500 dark:text-stone-400">{m.phone}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visits Left, Renewal Reminder Action, Check In Button */}
              <div className="flex sm:flex-row items-center justify-between sm:justify-end gap-2.5 border-t sm:border-t-0 pt-2.5 sm:pt-0 border-stone-100 dark:border-stone-800 shrink-0">
                {/* Visits countdown */}
                <div className="text-left sm:text-right pr-1">
                  <span className="block text-xs font-mono font-bold text-slate-900 dark:text-white">
                    {m.remainingPasses >= 90 ? 'Unlimited' : `${m.remainingPasses} visits left`}
                  </span>
                  <span className="text-[10px] text-slate-400 dark:text-stone-500">
                    Last: {m.lastVisit}
                  </span>
                </div>

                {/* "Send renewal reminder" action next to expiring/expired members */}
                {(m.status === 'expiring' || m.status === 'expired') && (
                  <div>
                    {m.renewalReminderSent ? (
                      <button
                        type="button"
                        onClick={(e) => handleSendRenewalReminder(e, m)}
                        title="Click to re-send reminder"
                        className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 px-2.5 py-1.5 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Reminder sent ✓</span>
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => handleSendRenewalReminder(e, m)}
                        className="inline-flex items-center gap-1 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 dark:text-stone-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:border-amber-500 hover:text-amber-900 dark:hover:text-amber-200 transition-all cursor-pointer"
                      >
                        <MessageCircle className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400" />
                        <span>Send renewal reminder</span>
                      </button>
                    )}
                  </div>
                )}

                {/* Check In OR Renew Pass Action */}
                {m.status === 'expired' ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleGymCheckIn(m)}
                      title="Test expired lock block"
                      className="rounded-lg bg-stone-200 dark:bg-stone-700 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-stone-200 hover:bg-stone-300 transition-colors cursor-pointer"
                    >
                      Check In
                    </button>
                    <button
                      onClick={() => handleRenewPass(m)}
                      className="rounded-lg bg-red-700 hover:bg-red-800 text-white px-3 py-1.5 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                    >
                      Renew Pass (€35)
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleGymCheckIn(m)}
                    className="rounded-lg bg-teal-800 dark:bg-teal-700 hover:bg-teal-900 dark:hover:bg-teal-600 text-white px-3.5 py-1.5 text-xs font-semibold shadow-2xs transition-colors cursor-pointer"
                  >
                    Check In
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Reassurance Callout */}
      <div className="mt-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#161820] p-3 text-xs text-slate-600 dark:text-stone-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
          <span>
            <strong className="text-slate-800 dark:text-stone-200">Iron & Kettle Front Desk:</strong> Eliminates lost paper card disputes and stops expired members automatically.
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-500 dark:text-stone-400">
          No monthly SaaS license • Built in 24 hours
        </span>
      </div>
    </div>
  );
};
