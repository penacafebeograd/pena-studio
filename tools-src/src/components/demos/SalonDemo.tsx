import React, { useState, useMemo } from 'react';
import {
  Plus,
  Scissors,
  Calendar,
  AlertTriangle,
  Check,
  CheckCircle2,
  TrendingUp,
  X,
  Phone,
  Smartphone,
} from 'lucide-react';
import { Language } from '../../types';

export interface SalonBooking {
  id: string;
  clientName: string;
  phone: string;
  service: string;
  time: string;
  chair: string;
  price: number;
  status: 'confirmed' | 'in_chair' | 'completed';
  reminderSent?: boolean;
  reminderSentAt?: string;
  pastNoShow?: boolean;
  noShowDate?: string;
}

export type DayKey = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface DayInfo {
  key: DayKey;
  label: string;
  shortLabel: string;
  dateStr: string;
  dayNum: string;
  isToday?: boolean;
}

const DAYS: DayInfo[] = [
  { key: 'mon', label: 'Monday', shortLabel: 'Mon', dateStr: 'Sep 14', dayNum: '14' },
  { key: 'tue', label: 'Tuesday', shortLabel: 'Tue', dateStr: 'Sep 15', dayNum: '15' },
  { key: 'wed', label: 'Wednesday', shortLabel: 'Wed', dateStr: 'Sep 16', dayNum: '16', isToday: true },
  { key: 'thu', label: 'Thursday', shortLabel: 'Thu', dateStr: 'Sep 17', dayNum: '17' },
  { key: 'fri', label: 'Friday', shortLabel: 'Fri', dateStr: 'Sep 18', dayNum: '18' },
  { key: 'sat', label: 'Saturday', shortLabel: 'Sat', dateStr: 'Sep 19', dayNum: '19' },
  { key: 'sun', label: 'Sunday', shortLabel: 'Sun', dateStr: 'Sep 20', dayNum: '20' },
];

const INITIAL_SCHEDULE: Record<DayKey, SalonBooking[]> = {
  mon: [
    {
      id: 'm1',
      clientName: 'Marija Simić',
      phone: '+381 64 211 9981',
      service: 'Haircut & Blowdry',
      time: '09:30 - 10:30',
      chair: 'Chair 1 (Ana)',
      price: 30,
      status: 'completed',
      reminderSent: true,
      reminderSentAt: '08:15',
    },
    {
      id: 'm2',
      clientName: 'Nemanja Kostić',
      phone: '+381 63 442 8810',
      service: 'Beard Trim & Fade',
      time: '11:00 - 11:45',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'completed',
      reminderSent: true,
      reminderSentAt: '09:30',
    },
    {
      id: 'm3',
      clientName: 'Tijana Lazić',
      phone: '+381 65 334 1120',
      service: 'Balayage & Blowdry',
      time: '13:00 - 14:30',
      chair: 'Chair 1 (Ana)',
      price: 65,
      status: 'completed',
    },
    {
      id: 'm4',
      clientName: 'Danijela Ilić',
      phone: '+381 60 771 9923',
      service: 'Gel Manicure',
      time: '15:00 - 16:00',
      chair: 'Nails (Milica)',
      price: 35,
      status: 'confirmed',
    },
    {
      id: 'm5',
      clientName: 'Milan Đurić',
      phone: '+381 62 884 5501',
      service: 'Men’s Classic Cut',
      time: '17:00 - 17:45',
      chair: 'Chair 2 (Miloš)',
      price: 20,
      status: 'confirmed',
    },
  ],
  tue: [
    {
      id: 't1',
      clientName: 'Milena Vuković',
      phone: '+381 64 552 1109',
      service: 'Full Color & Blowdry',
      time: '10:00 - 11:15',
      chair: 'Chair 1 (Ana)',
      price: 55,
      status: 'completed',
      reminderSent: true,
      reminderSentAt: '08:30',
    },
    {
      id: 't2',
      clientName: 'Miloš Pavlović',
      phone: '+381 63 118 7724',
      service: 'Men’s Haircut & Beard',
      time: '11:30 - 12:15',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'completed',
      reminderSent: true,
      reminderSentAt: '09:45',
    },
    {
      id: 't3',
      clientName: 'Zorana Pešić',
      phone: '+381 65 994 2210',
      service: 'Wash & Volume Blowdry',
      time: '13:30 - 14:15',
      chair: 'Chair 1 (Ana)',
      price: 20,
      status: 'completed',
    },
    {
      id: 't4',
      clientName: 'Snežana Tadić',
      phone: '+381 60 120 4488',
      service: 'Gel Nails Refill',
      time: '14:45 - 15:45',
      chair: 'Nails (Milica)',
      price: 30,
      status: 'confirmed',
    },
    {
      id: 't5',
      clientName: 'Vladimir Bajić',
      phone: '+381 64 309 8812',
      service: 'Fade & Styling',
      time: '16:30 - 17:15',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
    },
    {
      id: 't6',
      clientName: 'Anja Marković',
      phone: '+381 69 443 2200',
      service: 'Keratin Smoothing Treatment',
      time: '18:00 - 19:30',
      chair: 'Chair 1 (Ana)',
      price: 85,
      status: 'confirmed',
    },
  ],
  wed: [
    {
      id: 'w1',
      clientName: 'Jelena Nikolić',
      phone: '+381 64 211 4432',
      service: 'Balayage & Blowdry',
      time: '10:00 - 11:15',
      chair: 'Chair 1 (Ana)',
      price: 65,
      status: 'in_chair',
      reminderSent: true,
      reminderSentAt: '08:45',
    },
    {
      id: 'w2',
      clientName: 'Marko Petrović',
      phone: '+381 63 908 1224',
      service: 'Men’s Cut & Beard Trim',
      time: '11:30 - 12:00',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
      reminderSent: false,
    },
    {
      id: 'w3',
      clientName: 'Sara Jovanović',
      phone: '+381 65 443 8976',
      service: 'Gel Manicure & Polish',
      time: '12:15 - 13:00',
      chair: 'Nails (Milica)',
      price: 35,
      status: 'confirmed',
      pastNoShow: true,
      noShowDate: 'Aug 24 (missed without calling)',
      reminderSent: false,
    },
    {
      id: 'w4',
      clientName: 'Ivana Vasić',
      phone: '+381 62 119 7788',
      service: 'Root Touchup & Style',
      time: '14:00 - 15:00',
      chair: 'Chair 1 (Ana)',
      price: 45,
      status: 'confirmed',
      reminderSent: false,
    },
    {
      id: 'w5',
      clientName: 'Dušan Popović',
      phone: '+381 60 773 1190',
      service: 'Full Restyle & Beard',
      time: '16:30 - 17:30',
      chair: 'Chair 2 (Miloš)',
      price: 45,
      status: 'confirmed',
      reminderSent: false,
    },
  ],
  thu: [
    {
      id: 'th1',
      clientName: 'Katarina Stanković',
      phone: '+381 64 901 3344',
      service: 'Highlights & Tone',
      time: '10:00 - 11:30',
      chair: 'Chair 1 (Ana)',
      price: 70,
      status: 'confirmed',
    },
    {
      id: 'th2',
      clientName: 'Boris Milić',
      phone: '+381 63 221 4455',
      service: 'Men’s Scissor Cut',
      time: '12:00 - 12:45',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
    },
    {
      id: 'th3',
      clientName: 'Sanja Tešić',
      phone: '+381 65 778 9911',
      service: 'Color Correction',
      time: '13:15 - 14:45',
      chair: 'Chair 1 (Ana)',
      price: 80,
      status: 'confirmed',
    },
    {
      id: 'th4',
      clientName: 'Nina Radić',
      phone: '+381 60 334 2211',
      service: 'Shellac Manicure',
      time: '15:00 - 15:45',
      chair: 'Nails (Milica)',
      price: 30,
      status: 'confirmed',
    },
    {
      id: 'th5',
      clientName: 'Filip Petrović',
      phone: '+381 62 559 8812',
      service: 'Haircut & Beard',
      time: '16:15 - 17:00',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
    },
    {
      id: 'th6',
      clientName: 'Olivera Kovač',
      phone: '+381 64 112 7788',
      service: 'Blowdry & Treatment',
      time: '17:15 - 18:00',
      chair: 'Chair 1 (Ana)',
      price: 35,
      status: 'confirmed',
    },
    {
      id: 'th7',
      clientName: 'Aleksandar Grujić',
      phone: '+381 63 998 1234',
      service: 'Fade & Wash',
      time: '18:15 - 19:00',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
    },
  ],
  fri: [
    {
      id: 'f1',
      clientName: 'Teodora Ristić',
      phone: '+381 64 445 6677',
      service: 'Full Balayage & Gloss',
      time: '09:30 - 11:00',
      chair: 'Chair 1 (Ana)',
      price: 75,
      status: 'confirmed',
    },
    {
      id: 'f2',
      clientName: 'Petar Nikolić',
      phone: '+381 63 778 9900',
      service: 'Skin Fade & Hot Towel',
      time: '11:15 - 12:00',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
    },
    {
      id: 'f3',
      clientName: 'Kristina Lazarević',
      phone: '+381 65 221 4433',
      service: 'Haircut & Color Touchup',
      time: '12:15 - 13:30',
      chair: 'Chair 1 (Ana)',
      price: 60,
      status: 'confirmed',
    },
    {
      id: 'f4',
      clientName: 'Maja Todorović',
      phone: '+381 60 994 1122',
      service: 'Nail Art & Gel Extension',
      time: '14:00 - 15:15',
      chair: 'Nails (Milica)',
      price: 45,
      status: 'confirmed',
    },
    {
      id: 'f5',
      clientName: 'Goran Vidaković',
      phone: '+381 62 334 5566',
      service: 'Men’s Classic Haircut',
      time: '15:30 - 16:15',
      chair: 'Chair 2 (Miloš)',
      price: 20,
      status: 'confirmed',
    },
    {
      id: 'f6',
      clientName: 'Marina Cvetković',
      phone: '+381 64 887 9901',
      service: 'Blowdry & Curls (Event)',
      time: '16:30 - 17:30',
      chair: 'Chair 1 (Ana)',
      price: 35,
      status: 'confirmed',
    },
    {
      id: 'f7',
      clientName: 'Bojan Nedeljković',
      phone: '+381 63 554 2211',
      service: 'Cut & Beard Trim',
      time: '17:45 - 18:30',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
    },
    {
      id: 'f8',
      clientName: 'Svetlana Jović',
      phone: '+381 69 112 3344',
      service: 'Gloss & Silk Blowdry',
      time: '18:45 - 19:45',
      chair: 'Chair 1 (Ana)',
      price: 45,
      status: 'confirmed',
    },
  ],
  sat: [
    {
      id: 's1',
      clientName: 'Tamara Milošević',
      phone: '+381 64 332 1199',
      service: 'Bridal Hair Styling & Veil',
      time: '09:00 - 10:30',
      chair: 'Chair 1 (Ana)',
      price: 75,
      status: 'confirmed',
    },
    {
      id: 's2',
      clientName: 'Dragana Stojić',
      phone: '+381 63 998 4455',
      service: 'Cut & Blowdry',
      time: '10:45 - 11:45',
      chair: 'Chair 1 (Ana)',
      price: 35,
      status: 'confirmed',
    },
    {
      id: 's3',
      clientName: 'Dejan Savić',
      phone: '+381 65 112 4477',
      service: 'Men’s Haircut & Wash',
      time: '11:00 - 11:45',
      chair: 'Chair 2 (Miloš)',
      price: 20,
      status: 'confirmed',
    },
    {
      id: 's4',
      clientName: 'Marija Obradović',
      phone: '+381 60 776 2233',
      service: 'Full Color Treatment',
      time: '12:00 - 13:15',
      chair: 'Chair 1 (Ana)',
      price: 55,
      status: 'confirmed',
    },
    {
      id: 's5',
      clientName: 'Nevena Stanić',
      phone: '+381 62 445 9988',
      service: 'Gel Nails Extension',
      time: '13:00 - 14:15',
      chair: 'Nails (Milica)',
      price: 45,
      status: 'confirmed',
    },
    {
      id: 's6',
      clientName: 'Vukašin Đorđević',
      phone: '+381 64 667 8811',
      service: 'Fade & Full Beard',
      time: '14:30 - 15:15',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
    },
    {
      id: 's7',
      clientName: 'Biljana Vujić',
      phone: '+381 63 223 9900',
      service: 'Wash, Deep Mask & Cut',
      time: '15:30 - 16:30',
      chair: 'Chair 1 (Ana)',
      price: 40,
      status: 'confirmed',
    },
    {
      id: 's8',
      clientName: 'Lazar Dimitrijević',
      phone: '+381 65 889 1122',
      service: 'Fade & Line Up',
      time: '16:45 - 17:30',
      chair: 'Chair 2 (Miloš)',
      price: 25,
      status: 'confirmed',
    },
  ],
  sun: [
    {
      id: 'su1',
      clientName: 'Elena Krunić',
      phone: '+381 64 120 9988',
      service: 'VIP Event Styling & Waves',
      time: '11:00 - 12:30',
      chair: 'Chair 1 (Ana)',
      price: 75,
      status: 'confirmed',
    },
    {
      id: 'su2',
      clientName: 'Sofija Nedić',
      phone: '+381 63 776 1122',
      service: 'Private Blowout & Manicure',
      time: '13:00 - 14:30',
      chair: 'Chair 1 (Ana)',
      price: 65,
      status: 'confirmed',
    },
  ],
};

interface SalonDemoProps {
  lang?: Language;
}

export const SalonDemo: React.FC<SalonDemoProps> = () => {
  const [selectedDay, setSelectedDay] = useState<DayKey>('wed');
  const [schedule, setSchedule] = useState<Record<DayKey, SalonBooking[]>>(INITIAL_SCHEDULE);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [newClientName, setNewClientName] = useState('');
  const [newPhone, setNewPhone] = useState('+381 64 ');
  const [newService, setNewService] = useState('Haircut & Styling (€30)');
  const [newTime, setNewTime] = useState('15:30');
  const [newChair, setNewChair] = useState('Chair 1 (Ana)');

  const currentBookings = schedule[selectedDay] || [];

  // Calculate week total and daily average dynamically
  const { weekTotal, dailyAverage, activeDayTotal } = useMemo(() => {
    let sum = 0;
    (Object.values(schedule) as SalonBooking[][]).forEach((bookings) => {
      bookings.forEach((b) => {
        sum += b.price;
      });
    });
    const avg = Math.round(sum / 7);
    const daySum = (schedule[selectedDay] || []).reduce((acc, b) => acc + b.price, 0);
    return { weekTotal: sum, dailyAverage: avg, activeDayTotal: daySum };
  }, [schedule, selectedDay]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleAddBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName.trim()) return;

    let price = 30;
    if (newService.includes('€65')) price = 65;
    else if (newService.includes('€55')) price = 55;
    else if (newService.includes('€45')) price = 45;
    else if (newService.includes('€35')) price = 35;
    else if (newService.includes('€25')) price = 25;
    else if (newService.includes('€80')) price = 80;

    const cleanService = newService.replace(/\s*\(\s*€\d+\s*\)/, '');

    const startHour = parseInt(newTime.split(':')[0], 10) || 15;
    const startMin = newTime.split(':')[1] || '00';
    const endHour = startHour + 1;
    const timeFormatted = `${newTime} - ${endHour}:${startMin}`;

    const newBooking: SalonBooking = {
      id: `sb-${Date.now()}`,
      clientName: newClientName.trim(),
      phone: newPhone.trim() || '+381 64 555 0192',
      service: cleanService,
      time: timeFormatted,
      chair: newChair,
      price,
      status: 'confirmed',
      reminderSent: false,
    };

    setSchedule((prev) => ({
      ...prev,
      [selectedDay]: [...prev[selectedDay], newBooking],
    }));

    showToast(`✓ Appointment added for ${newClientName} on ${selectedDay.toUpperCase()} at ${newTime}`);
    setNewClientName('');
    setShowAddForm(false);
  };

  const toggleStatus = (id: string) => {
    setSchedule((prev) => ({
      ...prev,
      [selectedDay]: prev[selectedDay].map((b) => {
        if (b.id !== id) return b;
        const nextStatus =
          b.status === 'confirmed'
            ? 'in_chair'
            : b.status === 'in_chair'
            ? 'completed'
            : 'confirmed';
        return { ...b, status: nextStatus };
      }),
    }));
  };

  const handleSendSms = (e: React.MouseEvent, booking: SalonBooking) => {
    e.stopPropagation();
    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setSchedule((prev) => ({
      ...prev,
      [selectedDay]: prev[selectedDay].map((b) =>
        b.id === booking.id
          ? { ...b, reminderSent: true, reminderSentAt: timeStr }
          : b
      ),
    }));

    showToast(
      `✓ SMS sent to ${booking.clientName} (${booking.phone}): "Studio Milena podsetnik: Vaš termin je ${selectedDay.toUpperCase()} u ${booking.time.split(' - ')[0]} (${booking.chair}). Vidimo se!"`
    );
  };

  return (
    <div className="space-y-4">
      {/* Real-time Toast Alert */}
      {toastMessage && (
        <div className="rounded-xl border border-teal-200 dark:border-teal-800/80 bg-teal-50/95 dark:bg-teal-950/90 p-3.5 text-xs font-medium text-teal-950 dark:text-teal-200 shadow-lg flex items-start gap-2.5 transition-all animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="h-4 w-4 text-teal-700 dark:text-teal-400 shrink-0 mt-0.5" />
          <div className="flex-1 leading-relaxed">{toastMessage}</div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-teal-700 dark:text-teal-400 hover:text-teal-900 cursor-pointer p-0.5"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Revenue & Weekly Performance Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#1c1e28] p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-stone-400 text-xs">
            <span className="font-mono uppercase tracking-wider font-semibold">This Week Total</span>
            <Calendar className="h-4 w-4 text-teal-800 dark:text-teal-400" />
          </div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              €{weekTotal.toLocaleString()}
            </span>
            <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">
              39 slots filled
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#1c1e28] p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-stone-400 text-xs">
            <span className="font-mono uppercase tracking-wider font-semibold">Daily Average</span>
            <TrendingUp className="h-4 w-4 text-teal-800 dark:text-teal-400" />
          </div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              €{dailyAverage}
              <span className="text-xs font-normal text-slate-500 dark:text-stone-400">/day</span>
            </span>
            <span className="text-[11px] text-slate-500 dark:text-stone-400">Mon – Sun</span>
          </div>
        </div>

        <div className="rounded-xl border border-teal-200/80 dark:border-teal-800/80 bg-teal-50/50 dark:bg-teal-950/30 p-3.5 shadow-2xs">
          <div className="flex items-center justify-between text-teal-900 dark:text-teal-300 text-xs">
            <span className="font-mono uppercase tracking-wider font-semibold">
              {DAYS.find((d) => d.key === selectedDay)?.label} Total
            </span>
            <Scissors className="h-4 w-4 text-teal-800 dark:text-teal-400" />
          </div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-xl font-bold font-mono text-teal-950 dark:text-teal-100">
              €{activeDayTotal}
            </span>
            <span className="text-[11px] text-teal-800 dark:text-teal-300 font-medium">
              {currentBookings.length} appointments
            </span>
          </div>
        </div>
      </div>

      {/* 7-Day Week Strip (Mon-Sun) */}
      <div className="rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-[#181a22] p-1.5">
        <div className="grid grid-cols-7 gap-1 sm:gap-1.5">
          {DAYS.map((day) => {
            const count = (schedule[day.key] || []).length;
            const isSelected = selectedDay === day.key;
            return (
              <button
                key={day.key}
                type="button"
                onClick={() => setSelectedDay(day.key)}
                className={`flex flex-col items-center justify-center py-2 sm:py-2.5 px-1 rounded-lg transition-all text-center cursor-pointer relative ${
                  isSelected
                    ? 'bg-teal-800 dark:bg-teal-700 text-white shadow-xs font-semibold'
                    : 'bg-white/80 dark:bg-[#1e212c] text-slate-700 dark:text-stone-300 hover:bg-white dark:hover:bg-[#252936]'
                }`}
              >
                {day.isToday && (
                  <span
                    className={`absolute -top-1.5 text-[9px] font-mono px-1.5 py-0.2 rounded-full uppercase tracking-tighter ${
                      isSelected
                        ? 'bg-amber-400 text-slate-900 font-bold'
                        : 'bg-teal-700 text-white'
                    }`}
                  >
                    Today
                  </span>
                )}
                <span className="text-[11px] sm:text-xs font-bold leading-tight">
                  {day.shortLabel}
                </span>
                <span
                  className={`text-[10px] font-mono mt-0.5 ${
                    isSelected ? 'text-teal-100' : 'text-slate-500 dark:text-stone-400'
                  }`}
                >
                  {day.dayNum} Sep
                </span>
                <span
                  className={`mt-1 text-[10px] rounded-full px-1.5 py-0.2 font-mono ${
                    isSelected
                      ? 'bg-teal-900/60 text-teal-100'
                      : 'bg-stone-100 dark:bg-stone-800 text-slate-600 dark:text-stone-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Bar: Day Header & Quick Add */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 pb-1">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Studio Milena — {DAYS.find((d) => d.key === selectedDay)?.label} Schedule
            </h3>
            <span className="text-xs font-mono font-medium text-slate-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded">
              {currentBookings.length} clients
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-stone-400 mt-0.5">
            Click any appointment card to toggle status: <span className="font-semibold text-slate-700 dark:text-stone-300">Confirmed → In Chair → Completed</span>
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          id="salon-add-appointment-btn"
          className="inline-flex items-center gap-1.5 rounded-lg bg-teal-800 dark:bg-teal-700 px-3.5 py-2 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs cursor-pointer self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          <span>{showAddForm ? 'Cancel Form' : '+ Add Appointment'}</span>
        </button>
      </div>

      {/* Fast + Add Appointment Form (Under 10s) */}
      {showAddForm && (
        <form
          onSubmit={handleAddBooking}
          className="rounded-xl border-2 border-teal-700/60 dark:border-teal-500/60 bg-teal-50/70 dark:bg-teal-950/40 p-4 space-y-3.5 animate-in fade-in"
        >
          <div className="flex items-center justify-between">
            <div className="text-xs font-bold text-teal-950 dark:text-teal-200">
              Quick 10-Second Booking ({DAYS.find((d) => d.key === selectedDay)?.label})
            </div>
            <span className="text-[11px] font-mono text-teal-800 dark:text-teal-300">
              Auto-calculates daily & weekly earnings
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-[11px] font-semibold text-slate-800 dark:text-stone-200 mb-1">
                Client Name *
              </label>
              <input
                type="text"
                value={newClientName}
                onChange={(e) => setNewClientName(e.target.value)}
                placeholder="e.g. Maja Popović"
                required
                autoFocus
                className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-stone-400 focus:border-teal-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-800 dark:text-stone-200 mb-1">
                Phone (for SMS reminder)
              </label>
              <input
                type="text"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                placeholder="+381 64 ..."
                className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-stone-400 focus:border-teal-700 focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-800 dark:text-stone-200 mb-1">
                Service
              </label>
              <select
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3 py-2 text-xs text-slate-900 dark:text-white focus:border-teal-700 focus:outline-none"
              >
                <option>Haircut & Styling (€30)</option>
                <option>Full Color & Blowdry (€55)</option>
                <option>Balayage & Blowdry (€65)</option>
                <option>Men’s Cut & Beard (€25)</option>
                <option>Root Touchup & Style (€45)</option>
                <option>Keratin Treatment (€80)</option>
                <option>Gel Manicure (€35)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-800 dark:text-stone-200 mb-1">
                Time & Chair
              </label>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  placeholder="15:30"
                  className="w-20 rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-2.5 py-2 text-xs text-slate-900 dark:text-white text-center font-mono focus:border-teal-700 focus:outline-none"
                />
                <select
                  value={newChair}
                  onChange={(e) => setNewChair(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-2.5 py-2 text-xs text-slate-900 dark:text-white focus:border-teal-700 focus:outline-none"
                >
                  <option>Chair 1 (Ana)</option>
                  <option>Chair 2 (Miloš)</option>
                  <option>Nails (Milica)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="rounded-lg border border-stone-300 dark:border-stone-700 bg-white dark:bg-[#1c1e28] px-3.5 py-1.5 text-xs text-slate-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg bg-teal-800 dark:bg-teal-700 px-4 py-1.5 text-xs font-semibold text-white hover:bg-teal-900 dark:hover:bg-teal-600 transition-colors shadow-2xs cursor-pointer"
            >
              Save to {DAYS.find((d) => d.key === selectedDay)?.shortLabel} Schedule
            </button>
          </div>
        </form>
      )}

      {/* Appointments List for Selected Day */}
      <div className="space-y-2.5">
        {currentBookings.length === 0 ? (
          <div className="rounded-xl border border-dashed border-stone-300 dark:border-stone-700 p-8 text-center bg-white dark:bg-[#181a24]">
            <p className="text-sm font-medium text-slate-600 dark:text-stone-300">
              No appointments scheduled for this day yet.
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-3 text-xs font-bold text-teal-800 dark:text-teal-400 hover:underline cursor-pointer"
            >
              + Add first appointment
            </button>
          </div>
        ) : (
          currentBookings.map((b) => (
            <div
              key={b.id}
              onClick={() => toggleStatus(b.id)}
              className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border p-3.5 transition-all cursor-pointer group ${
                b.pastNoShow
                  ? 'border-amber-300 dark:border-amber-700/80 bg-amber-50/40 dark:bg-amber-950/20 hover:border-amber-500'
                  : 'border-stone-200 dark:border-stone-800 bg-white dark:bg-[#1c1e28] hover:border-teal-700/50 dark:hover:border-teal-500/50 shadow-2xs hover:shadow-xs'
              }`}
            >
              {/* Left Column: Time badge & Client info */}
              <div className="flex items-start sm:items-center gap-3">
                <div className="rounded-lg bg-stone-100 dark:bg-stone-800 px-2.5 py-1.5 text-center font-mono shrink-0 min-w-[62px]">
                  <span className="block text-xs font-bold text-slate-900 dark:text-white">
                    {b.time.split(' - ')[0]}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-stone-400">
                    {b.time.split(' - ')[1]}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {b.clientName}
                    </span>

                    {/* Status Pill */}
                    <span
                      className={`rounded px-2 py-0.5 text-[10px] font-semibold tracking-tight ${
                        b.status === 'in_chair'
                          ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300'
                          : b.status === 'completed'
                          ? 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300'
                          : 'bg-stone-100 dark:bg-stone-800 text-slate-600 dark:text-stone-300'
                      }`}
                    >
                      {b.status === 'in_chair'
                        ? 'In Chair now'
                        : b.status === 'completed'
                        ? 'Completed & Paid'
                        : 'Confirmed'}
                    </span>

                    {/* Prominent Past No-Show Warning Badge */}
                    {b.pastNoShow && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-amber-100 dark:bg-amber-900/60 border border-amber-300 dark:border-amber-700 px-2 py-0.5 text-[11px] font-bold text-amber-900 dark:text-amber-200">
                        <AlertTriangle className="h-3.5 w-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
                        <span>1 Past No-Show ({b.noShowDate})</span>
                      </span>
                    )}
                  </div>

                  {/* Service, Chair & Phone */}
                  <div className="text-xs text-slate-500 dark:text-stone-400 flex flex-wrap items-center gap-2">
                    <span className="font-medium text-slate-700 dark:text-stone-300">{b.service}</span>
                    <span className="text-stone-300 dark:text-stone-700">•</span>
                    <span className="text-teal-800 dark:text-teal-400 font-medium">{b.chair}</span>
                    <span className="text-stone-300 dark:text-stone-700">•</span>
                    <span className="font-mono text-slate-600 dark:text-stone-400 flex items-center gap-1">
                      <Phone className="h-3 w-3 inline opacity-70" />
                      {b.phone}
                    </span>
                  </div>

                  {/* Warning advice if no-show */}
                  {b.pastNoShow && (
                    <div className="text-[11px] text-amber-800 dark:text-amber-300 italic">
                      ⚠️ Client missed previous slot without calling. Re-confirmation required before holding chair.
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column: Price & SMS Toggle Action */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 pt-2.5 sm:pt-0 border-stone-100 dark:border-stone-800 shrink-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-base font-bold font-mono text-slate-900 dark:text-white">
                    €{b.price}
                  </span>
                  <span className="text-[11px] text-teal-700 dark:text-teal-400 group-hover:underline hidden sm:inline">
                    Tap to change status →
                  </span>
                </div>

                {/* SMS Reminder simulated toggle */}
                <div onClick={(e) => e.stopPropagation()}>
                  {b.reminderSent ? (
                    <button
                      type="button"
                      onClick={(e) => handleSendSms(e, b)}
                      title="Click to re-send SMS reminder"
                      className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 px-2.5 py-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 transition-colors cursor-pointer"
                    >
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Reminder sent ✓</span>
                      {b.reminderSentAt && (
                        <span className="text-[10px] opacity-75">({b.reminderSentAt})</span>
                      )}
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => handleSendSms(e, b)}
                      className="inline-flex items-center gap-1 rounded-lg bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 px-2.5 py-1 text-[11px] font-semibold text-slate-700 dark:text-stone-300 hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:border-teal-700 hover:text-teal-900 dark:hover:text-teal-200 transition-all cursor-pointer"
                    >
                      <Smartphone className="h-3.5 w-3.5 text-teal-700 dark:text-teal-400" />
                      <span>Send SMS reminder</span>
                    </button>
                  )}
                </div>
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
            <strong className="text-slate-800 dark:text-stone-200">Studio Milena Live Counter:</strong> Changes sync instantly across reception tablet and staff mobile phones.
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-500 dark:text-stone-400">
          No monthly subscription • Fixed 1-day build
        </span>
      </div>
    </div>
  );
};
