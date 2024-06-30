"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "../typhography/Typography";

interface CountdownTimerProps {
  targetDate: string; // ISO 8601 format: "2024-12-31T23:59:59"
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [mounted, targetDate]);

  if (!mounted) {
    return null; // Prevent server-side rendering mismatch
  }

  const formatTime = (time: number) => String(time).padStart(2, "0");

  return (
    <div className="flex space-x-2">
      <div className="flex flex-col items-center">
        <Typography fontSize="2xl" fontWeight="normal">
          {formatTime(timeLeft.days)}
        </Typography>
        <Typography fontSize="sm" fontWeight="normal">
          DAYS
        </Typography>
      </div>
      <Typography fontSize="2xl" fontWeight="normal">
        :
      </Typography>
      <div className="flex flex-col items-center">
        <Typography fontSize="2xl" fontWeight="normal">
          {formatTime(timeLeft.hours)}
        </Typography>
        <Typography fontSize="sm" fontWeight="normal">
          HOURS
        </Typography>
      </div>
      <Typography fontSize="2xl" fontWeight="normal">
        :
      </Typography>
      <div className="flex flex-col items-center">
        <Typography fontSize="2xl" fontWeight="normal">
          {formatTime(timeLeft.minutes)}
        </Typography>
        <Typography fontSize="sm" fontWeight="normal">
          MINS
        </Typography>
      </div>
      <Typography fontSize="2xl" fontWeight="normal">
        :
      </Typography>
      <div className="flex flex-col items-center">
        <Typography fontSize="2xl" fontWeight="normal">
          {formatTime(timeLeft.seconds)}
        </Typography>
        <Typography fontSize="sm" fontWeight="normal">
          SECS
        </Typography>
      </div>
    </div>
  );
};

export default CountdownTimer;
