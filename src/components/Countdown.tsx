import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const targetDate = new Date("2025-11-22T20:00:00");
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Dagen" },
    { value: timeLeft.hours, label: "Uren" },
    { value: timeLeft.minutes, label: "Minuten" },
    { value: timeLeft.seconds, label: "Seconden" }
  ];

  return (
    <div className="flex justify-center gap-4 py-8">
      {timeUnits.map((unit, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mb-2 border border-primary/20">
            <span className="text-3xl font-bold text-primary tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </span>
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
