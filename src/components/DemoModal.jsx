import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const DemoModal = ({ isOpen, onClose }) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState({ month: todayMonth, year: todayYear });
  const [step, setStep] = useState('calendar');

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
  ];

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(currentMonth.month, currentMonth.year);
    const firstDay = getFirstDayOfMonth(currentMonth.month, currentMonth.year);
    const days = [];

    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [currentMonth]);

  const isPastDate = (day) => {
    if (!day) return true;
    if (currentMonth.year < todayYear) return true;
    if (currentMonth.year === todayYear && currentMonth.month < todayMonth) return true;
    if (currentMonth.year === todayYear && currentMonth.month === todayMonth && day < todayDate) return true;
    return false;
  };

  const goToPrevMonth = () => {
    setCurrentMonth(prev => {
      if (prev.month === 0) return { month: 11, year: prev.year - 1 };
      return { month: prev.month - 1, year: prev.year };
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth(prev => {
      if (prev.month === 11) return { month: 0, year: prev.year + 1 };
      return { month: prev.month + 1, year: prev.year };
    });
  };

  const handleDateClick = (day) => {
    if (isPastDate(day)) return;
    setSelectedDate(day);
    setSelectedTime(null);
    setStep('time');
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setStep('confirm');
  };

  const handleConfirm = () => {
    alert(`Demo booked for ${months[currentMonth.month]} ${selectedDate}, ${currentMonth.year} at ${selectedTime}`);
    resetAndClose();
  };

  const resetAndClose = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    setStep('calendar');
    onClose();
  };

  const handleBack = () => {
    if (step === 'confirm') setStep('time');
    else if (step === 'time') { setStep('calendar'); setSelectedDate(null); }
  };

  const getDayName = (day) => {
    const date = new Date(currentMonth.year, currentMonth.month, day);
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={resetAndClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <motion.div
            className="relative bg-[#111116] rounded-2xl border border-[#2A2A32] w-full max-w-[760px] overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row min-h-[480px]">
              {/* Left Panel - Calendar */}
              <div className="flex-1 p-6 border-r border-[#2A2A32]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-bold text-lg">
                    {months[currentMonth.month]} {currentMonth.year}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <button onClick={goToPrevMonth} className="w-8 h-8 rounded-lg bg-[#120E1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all">
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button onClick={goToNextMonth} className="w-8 h-8 rounded-lg bg-[#120E1A] flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {daysOfWeek.map((day) => (
                    <div key={day} className="text-center text-[10px] uppercase tracking-wider text-[#A0A0AA] py-2 font-mono">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarDays.map((day, index) => (
                    <div key={index} className="flex justify-center">
                      {day ? (
                        <button
                          onClick={() => handleDateClick(day)}
                          disabled={isPastDate(day)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-all relative ${
                            isPastDate(day)
                              ? 'text-gray-600 cursor-not-allowed'
                              : selectedDate === day
                              ? 'bg-white text-gray-900 font-semibold'
                              : 'text-gray-300 hover:bg-[#120E1A] hover:text-white cursor-pointer'
                          }`}
                        >
                          {day}
                        </button>
                      ) : (
                        <div className="w-10 h-10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Panel - Time / Confirm */}
              <div className="flex-1 p-6 flex flex-col">
                {step === 'calendar' && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="text-[#A0A0AA] text-sm">Select a date to view available times</p>
                  </div>
                )}

                {step === 'time' && (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <button onClick={handleBack} className="text-[#A0A0AA] hover:text-white text-sm mb-1 transition-colors">
                          ← Back
                        </button>
                        <h3 className="text-white font-bold text-lg">
                          {getDayName(selectedDate)} {selectedDate}
                        </h3>
                      </div>
                      <span className="text-xs text-[#A0A0AA]">30 min</span>
                    </div>

                    <div className="space-y-2 flex-grow overflow-y-auto max-h-[340px] pr-1">
                      {timeSlots.map((slot, index) => (
                        <motion.button
                          key={slot}
                          onClick={() => handleTimeClick(slot)}
                          className={`w-full py-3 px-4 rounded-xl border text-sm transition-all text-left ${
                            selectedTime === slot
                              ? 'border-white bg-white text-gray-900 font-semibold'
                              : 'border-[#2A2A32] text-white hover:border-purple-500/50 hover:bg-purple-500/5'
                          }`}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          {slot}
                        </motion.button>
                      ))}
                    </div>
                  </>
                )}

                {step === 'confirm' && (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <button onClick={handleBack} className="text-[#A0A0AA] hover:text-white text-sm mb-6 transition-colors self-start">
                      ← Back
                    </button>
                    <div className="bg-[#120E1A] rounded-xl border border-[#2A2A32] p-6 w-full max-w-[300px]">
                      <p className="text-white font-semibold text-lg mb-1">Confirm your booking</p>
                      <p className="text-[#A0A0AA] text-sm mb-6">
                        {months[currentMonth.month]} {selectedDate}, {currentMonth.year}
                        <br />
                        {selectedTime} · 30 min
                      </p>
                      <motion.button
                        onClick={handleConfirm}
                        className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Confirm Booking
                      </motion.button>
                    </div>
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-[#2A2A32] text-center">
                  <span className="text-xs text-[#A0A0AA]">
                    Powered by <span className="font-semibold text-gray-300">Cal.com</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
