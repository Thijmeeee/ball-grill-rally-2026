import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  onFinish?: () => void;
  targetDate?: string | Date;
}

const Countdown = ({ onFinish, targetDate }: CountdownProps) => {
  const defaultTarget = new Date("2025-11-22T20:00:00");
  const resolvedTarget = targetDate ? new Date(targetDate) : defaultTarget;
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = resolvedTarget.getTime() - new Date().getTime();
    
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
  const [finished, setFinished] = useState<boolean>(() => {
    return resolvedTarget.getTime() - new Date().getTime() <= 0;
  });

  useEffect(() => {
    // If already finished on mount, call onFinish immediately
    if (finished && onFinish) {
      onFinish();
      return;
    }

    const timer = setInterval(() => {
      const next = calculateTimeLeft();
      setTimeLeft(next);

      const remaining = resolvedTarget.getTime() - new Date().getTime();
      if (remaining <= 0) {
        setFinished(true);
        if (onFinish) onFinish();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [resolvedTarget, onFinish, finished]);

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
