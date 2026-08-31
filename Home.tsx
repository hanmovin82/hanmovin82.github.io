/*
 * Ink & Marigold design reminder: contemporary Bengali editorial stationery.
 * Keep the experience tactile, warm, asymmetrical, and emotionally direct.
 * Bengali copy leads; vermilion is reserved for personal moments and actions.
 */

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Flower2,
  Heart,
  LockKeyhole,
  MailOpen,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const heroImage = "/manus-storage/ink-marigold-hero_8c859d80.jpg";
const envelopeImage = "/manus-storage/ink-marigold-envelope_b88369af.png";
const markImage = "/manus-storage/ink-marigold-mark_b33d76ba.png";
const paperTexture = "/manus-storage/ink-marigold-paper-texture_15d1be4d.jpg";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const revealLetter = () => {
    setIsOpen(true);
    window.setTimeout(() => {
      document.getElementById("letter")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 140);
  };

  const closeLetter = () => {
    setIsOpen(false);
    window.setTimeout(() => {
      document.getElementById("envelope")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
  };

  return (
    <main className="site-shell" style={{ backgroundImage: `url(${paperTexture})` }}>
      <div className="ambient-wash" aria-hidden="true" />
      <div className="petal petal-one" aria-hidden="true">✦</div>
      <div className="petal petal-two" aria-hidden="true">•</div>
      <div className="petal petal-three" aria-hidden="true">✳</div>

      <header className="topbar">
        <a className="brand-lockup" href="#top" aria-label="চিঠিটা তোমার জন্য — শুরুতে ফিরে যান">
          <span className="brand-seal" aria-hidden="true">♡</span>
          <img src={markImage} alt="" className="brand-mark" />
          <span>
            <strong>চিঠিটা</strong>
            <small>তোমার জন্য</small>
          </span>
        </a>
        <div className="topbar-note">
          <span className="topbar-dot" aria-hidden="true" />
          <span>একটা ছোট্ট চমক</span>
        </div>
      </header>

      <section id="top" className="hero-section page-width">
        <div className="hero-copy">
          <div className="eyebrow"><span>১৪ ফেব্রুয়ারি</span><span className="eyebrow-line" /><span>Letter Day</span></div>
          <p className="margin-note note-left">শুধু তোমার জন্য</p>
          <h1>তোমার জন্য<br /><em>একটা চিঠি</em> লিখেছি।</h1>
          <p className="hero-intro">
            খুব বড় কিছু না—শুধু মনের ভেতর জমে থাকা কয়েকটা কথা, আজ তোমার হাতে তুলে দিতে চাই।
          </p>
          <div className="hero-actions">
            <Button className="primary-action" onClick={revealLetter} aria-controls="letter" aria-expanded={isOpen}>
              {isOpen ? "চিঠিটা দেখা হচ্ছে" : "খামটা খুলবে?"}
              {isOpen ? <Check size={17} strokeWidth={2.2} /> : <ArrowRight size={17} strokeWidth={2.2} />}
            </Button>
            <a className="quiet-link" href="#little-things">
              আগে একটু বলি <ArrowDown size={15} />
            </a>
          </div>
          <div className="hero-signature"><span>ভালোবাসা দিয়ে লেখা</span><span className="signature-line" /></div>
        </div>

        <div className="hero-visual" id="envelope">
          <div className="visual-label label-top"><span>01</span><span>একটু খুলবে?</span></div>
          <div className={`envelope-stage ${isOpen ? "is-open" : ""}`}>
            <div className="paper-fold fold-one" aria-hidden="true" />
            <div className="paper-fold fold-two" aria-hidden="true" />
            <div className="scribble-ring" aria-hidden="true" />
            <img className="hero-art" src={heroImage} alt="ক্রিম রঙের একটি খাম, পাশে গাঁদা ফুল ও ছোট্ট লাল সিল" />
            <div className="hero-art-wash" aria-hidden="true" />
            <div className="envelope-focus">
              <span className="hero-stamp">চিঠি<br /><small>১৪</small></span>
              <button className="envelope-button" onClick={revealLetter} aria-label="চিঠির খাম খুলুন">
                <img src={envelopeImage} alt="" />
                <span className="seal-pulse"><MailOpen size={18} /></span>
              </button>
            </div>
          </div>
          <div className="visual-caption"><Flower2 size={15} /><span>খুব সাবধানে খুলতে হবে</span></div>
        </div>
      </section>

      <section className="intro-strip page-width" aria-label="চিঠির ছোট্ট ভূমিকা">
        <span className="strip-number">A / 01</span>
        <p>কিছু মানুষ জীবনে আসে, তারপর সাধারণ দিনগুলোও একটু বেশি সুন্দর হয়ে যায়। <strong>তুমি ঠিক তেমন।</strong></p>
        <div className="strip-stamp" aria-hidden="true"><span>♥</span><small>তোমার জন্য</small></div>
      </section>

      <section id="little-things" className="reasons-section page-width">
        <div className="section-heading">
          <div>
            <p className="section-kicker">তোমার কথা ভাবলে</p>
            <h2>এই ছোট ছোট<br /><em>জিনিসগুলো</em> মনে পড়ে।</h2>
          </div>
          <p className="section-aside">সব কথা মুখে বলা হয় না।<br />কিছু কথা চিঠিতে<br />আরও ভালো থাকে।</p>
        </div>

        <div className="reasons-list">
          <article className="reason-row">
            <span className="reason-index">০১</span>
            <div className="reason-icon"><Heart size={21} fill="currentColor" /></div>
            <div><span className="reason-note">সবার আগে মনে পড়ে</span><h3>তোমার হাসি</h3><p>একটা কঠিন দিনকেও খুব সহজে নরম করে দিতে পারে।</p></div>
            <span className="reason-mark">♥</span>
          </article>
          <article className="reason-row">
            <span className="reason-index">০২</span>
            <div className="reason-icon"><Flower2 size={21} /></div>
            <div><span className="reason-note">চুপচাপ, কিন্তু খুব বড়</span><h3>তোমার যত্ন</h3><p>ছোট্ট ছোট্ট খেয়ালগুলোতেই তোমার বড় ভালোবাসা লুকিয়ে থাকে।</p></div>
            <span className="reason-mark">✳</span>
          </article>
          <article className="reason-row">
            <span className="reason-index">০৩</span>
            <div className="reason-icon"><Sparkles size={21} /></div>
            <div><span className="reason-note">সবদিনের জন্য</span><h3>তোমার পাশে থাকা</h3><p>তুমি থাকলে পৃথিবীটা একটু বেশি নিজের মতো মনে হয়।</p></div>
            <span className="reason-mark">✦</span>
          </article>
        </div>
      </section>

      <section id="letter" className={`letter-section page-width ${isOpen ? "letter-visible" : "letter-hidden"}`} aria-live="polite">
        <div className="letter-topline"><span>তোমার নামে</span><span className="topline-rule" /><span>১৪.০২.২০২৬</span><div className="letter-stamp" aria-hidden="true"><span>♡</span><small>LOVE<br />LETTER</small></div></div>
        <div className="letter-layout">
          <div className="letter-side-note">
            <LockKeyhole size={16} />
            <span>ব্যক্তিগত<br />চিঠি</span>
          </div>
          <article className="letter-paper">
            <div className="letter-decor letter-decor-left" aria-hidden="true">❧</div>
            <p className="letter-greeting">প্রিয়তমা,</p>
            <p>তোমাকে নিয়ে লিখতে বসলে শব্দগুলো কেমন যেন লাজুক হয়ে যায়। কীভাবে বলব—তুমি আমার দিনের সবচেয়ে প্রিয় অংশ, আমার ব্যস্ততার ভেতর ছোট্ট শান্তি, আর আমার হাসির খুব বড় একটা কারণ।</p>
            <p>তোমার সঙ্গে কাটানো সময়গুলো হয়তো সবসময় ছবির মতো নিখুঁত নয়, কিন্তু সেগুলো আমার কাছে সত্যি। তোমার সঙ্গে হাসি, অভিমান, গল্প আর নীরবতা—সবকিছুই আমার খুব আপন।</p>
            <p>আজ Letter Day-তে শুধু এটুকু মনে করিয়ে দিতে চাই: <strong>তুমি ভালোবাসার যোগ্য, প্রতিদিন, প্রতিটি রূপে।</strong> আর আমি ভাগ্যবান যে তোমাকে ভালোবাসতে পারি।</p>
            <p className="letter-closing">আমার আজকের, আগামীকালের,<br />আর সবদিনের মানুষ—</p>
            <p className="signature">তোমার <span>আমি</span></p>
            <div className="letter-seal" aria-hidden="true">♡</div>
          </article>
        </div>
        <div className="letter-footer">
          <span>চিঠিটা পড়া শেষ?</span>
          <Button variant="ghost" className="reset-action" onClick={closeLetter}><RotateCcw size={15} /> আবার খামে রাখি</Button>
        </div>
      </section>

      <footer className="footer page-width">
        <div className="footer-rule" />
        <div className="footer-content">
          <span className="footer-brand"><img src={markImage} alt="" />চিঠিটা তোমার জন্য</span>
          <span className="footer-heart">ভালোবাসা থাকুক <Heart size={14} fill="currentColor" /></span>
          <span>∞</span>
        </div>
      </footer>
    </main>
  );
}
