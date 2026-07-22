"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Counts up from 0 to `value` once the number scrolls into view.
export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 900;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </motion.span>
  );
}
