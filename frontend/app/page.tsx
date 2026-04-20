"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const LAUNCH_DATE = new Date("2026-09-09T00:00:00");
  useEffect(() => {
    setMounted(true);
    const tick = () => {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Geist+Mono:wght@300;400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0c0c0c;
          --fg: #e8e4dc;
          --muted: #4a4844;
          --accent: #c8b89a;
          --border: #1f1e1c;
        }
        html, body { height: 100%; background: var(--bg); }
        .page {
          min-height: 100vh;
          background: var(--bg);
          color: var(--fg);
          font-family: 'Cormorant Garamond', Georgia, serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          position: relative;
          overflow: hidden;
        }
        .page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }
        .page::after {
          content: '';
          position: fixed;
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          width: 60vw;
          height: 60vw;
          background: radial-gradient(ellipse, rgba(200, 184, 154, 0.04) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* ── Logo header ── */
        .logo-header {
          position: fixed;
          top: 2.2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          animation: fadeDown 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        /* Image logo (Option A) */
        .logo-img {
          height: 28px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.85;
        }
        /* SVG + wordmark logo (Option B — default) */
        .logo-svg {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .logo-mark {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
        }
        .logo-name {
          font-family: 'Geist Mono', monospace;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--fg);
          opacity: 0.7;
        }

        .inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 640px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
        }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .wordmark {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(0.7rem, 1.5vw, 0.8rem);
          font-weight: 300;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 5rem;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }
        .headline {
          font-size: clamp(3.5rem, 10vw, 7rem);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.02em;
          text-align: center;
          color: var(--fg);
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
        }
        .headline em {
          font-style: italic;
          color: var(--accent);
        }
        .sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          font-weight: 300;
          color: var(--muted);
          text-align: center;
          line-height: 1.6;
          max-width: 380px;
          margin-bottom: 5rem;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards;
        }
        .countdown {
          display: flex;
          align-items: flex-start;
          gap: 2.5rem;
          margin-bottom: 5rem;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
        }
        .unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .unit-number {
          font-family: 'Geist Mono', monospace;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 300;
          color: var(--fg);
          line-height: 1;
          letter-spacing: -0.03em;
          min-width: 2ch;
          text-align: center;
          transition: color 0.3s;
        }
        .unit-label {
          font-family: 'Geist Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .divider {
          font-family: 'Geist Mono', monospace;
          font-size: clamp(2rem, 6vw, 3.5rem);
          font-weight: 300;
          color: var(--border);
          line-height: 1;
          align-self: flex-start;
        }
        .sep {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, var(--muted), transparent);
          margin-bottom: 4rem;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
        }
        .footer {
          position: fixed;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          font-family: 'Geist Mono', monospace;
          font-size: 0.55rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--border);
          white-space: nowrap;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 1.4s forwards;
        }
        .hidden { visibility: hidden; }
        .visible { visibility: visible; }
        @media (max-width: 480px) {
          .countdown { gap: 1.5rem; }
          .sub { margin-bottom: 3.5rem; }
          .wordmark { margin-bottom: 3.5rem; }
          .countdown { margin-bottom: 3.5rem; }
          .sep { margin-bottom: 3rem; }
          .logo-header { top: 1.5rem; }
        }
      `}</style>

      {/* ── Logo — fixed, centred at top ── */}
      <header className="logo-header" aria-label="FRAS logo">

        * <Image src="/icon.png" loading="eager" alt="FRAS" className="logo-img" width={120} height={28} />

  */}
      </header>

      <div className="page">
        <div className={`inner ${mounted ? "visible" : "hidden"}`}>
          <span className="wordmark">FRAS</span>
          <h1 className="headline">
            Something <em>new</em><br />is coming
          </h1>
          <p className="sub">
            We're crafting something worth waiting for.
          </p>
          <div className="countdown">
            <div className="unit">
              <span className="unit-number">{pad(timeLeft.days)}</span>
              <span className="unit-label">Days</span>
            </div>
            <span className="divider" aria-hidden>·</span>
            <div className="unit">
              <span className="unit-number">{pad(timeLeft.hours)}</span>
              <span className="unit-label">Hours</span>
            </div>
            <span className="divider" aria-hidden>·</span>
            <div className="unit">
              <span className="unit-number">{pad(timeLeft.minutes)}</span>
              <span className="unit-label">Mins</span>
            </div>
            <span className="divider" aria-hidden>·</span>
            <div className="unit">
              <span className="unit-number">{pad(timeLeft.seconds)}</span>
              <span className="unit-label">Secs</span>
            </div>
          </div>
          <div className="sep" aria-hidden />
        </div>
        <p className="footer">© 2026 FRAS — All rights reserved</p>
      </div>
    </>
  );
}