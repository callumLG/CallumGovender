"use client";

import { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatter = new Intl.DateTimeFormat("en-ZA", {
        timeZone: "Africa/Johannesburg",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formatter.format(now));
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000); // update every second

    return () => clearInterval(interval);
  }, []);

  return <p>{time} SAST</p>;
}
