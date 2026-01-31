"use client";

import "./page.css";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] text-white overflow-hidden relative font-sans">
      {/* Background Glows */}
      <div className="fixed w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-128 lg:h-128 xl:w-160 xl:h-160 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] opacity-25 -top-20 -right-10 sm:-top-24 sm:-right-16 md:-top-32 md:-right-20 lg:-top-40 lg:-right-24 bg-linear-to-br from-amber-400 to-yellow-200 pointer-events-none" />
      <div className="fixed w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-128 lg:h-128 xl:w-160 xl:h-160 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[140px] opacity-20 -bottom-20 -left-10 sm:-bottom-24 sm:-left-16 md:-bottom-32 md:-left-20 lg:-bottom-40 lg:-left-24 bg-linear-to-br from-blue-900 to-cyan-600 pointer-events-none" />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="fixed w-0.5 h-0.5 sm:w-1 sm:h-1 md:w-1.5 md:h-1.5 bg-amber-400 rounded-full pointer-events-none opacity-50 sm:opacity-60"
          style={{
            top: `${15 + i * 14}%`,
            left: i % 2 === 0 ? `${8 + i * 6}%` : "auto",
            right: i % 2 !== 0 ? `${12 + i * 5}%` : "auto",
            animation: `pulse 3s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}

      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10"
        style={{ animation: "fadeInUp 1s ease-out forwards" }}
      >
        {/* Ring Icon */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 drop-shadow-lg"
            viewBox="0 0 100 100"
            fill="none"
            style={{ animation: "bounce 2.5s ease-in-out infinite" }}
          >
            <defs>
              <linearGradient
                id="goldGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#f5e6a3" />
                <stop offset="100%" stopColor="#d4af37" />
              </linearGradient>
            </defs>
            <ellipse
              cx="50"
              cy="52"
              rx="38"
              ry="40"
              stroke="url(#goldGradient)"
              strokeWidth="4"
              fill="none"
            />
            <ellipse
              cx="50"
              cy="52"
              rx="30"
              ry="32"
              stroke="url(#goldGradient)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.4"
            />
            <circle cx="50" cy="18" r="10" fill="url(#goldGradient)" />
            <circle cx="50" cy="18" r="6" fill="white" opacity="0.35" />
            <circle cx="48" cy="16" r="2" fill="white" opacity="0.6" />
          </svg>
        </div>

        {/* Brand Name */}
        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[4px] sm:tracking-[6px] md:tracking-[8px] lg:tracking-[10px] xl:tracking-[12px] uppercase mb-2 sm:mb-3 md:mb-4 text-center text-amber-400 px-4"
          style={{
            fontFamily: "Georgia, Times New Roman, serif",
            textShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
          }}
        >
          Ocean Light Jewels
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg tracking-[2px] sm:tracking-[3px] md:tracking-[4px] lg:tracking-[5px] text-amber-200 uppercase font-medium mb-6 sm:mb-8 md:mb-10">
          Handcrafted Gold Rings
        </p>

        {/* Decorative Line */}
        <div className="w-16 sm:w-20 md:w-24 lg:w-28 h-px bg-linear-to-r from-transparent via-amber-500 to-transparent mb-6 sm:mb-8 md:mb-10" />

        {/* Coming Soon Text */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 sm:mb-6 md:mb-8 tracking-wide text-center text-white px-4"
          style={{
            fontFamily: "Georgia, Times New Roman, serif",
            textShadow: "0 2px 20px rgba(255,255,255,0.1)",
          }}
        >
          Coming Soon
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-normal leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-14 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center px-4 sm:px-6">
          We are crafting something beautiful. Our new online home is under
          construction, where you will discover our exquisite handcrafted gold
          rings.
        </p>

        {/* Shop on Etsy Button */}
        <a
          href="https://www.etsy.com/shop/Oceanlightjewels"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 py-3 sm:py-4 md:py-5 bg-linear-to-r from-amber-500 via-yellow-500 to-amber-500 text-gray-900 text-xs sm:text-sm md:text-base font-semibold tracking-[2px] sm:tracking-[3px] md:tracking-[4px] uppercase rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(212,175,55,0.35)] shadow-[0_10px_40px_rgba(212,175,55,0.25)]"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
          </svg>
          Shop on Etsy
        </a>

        <p className="mt-4 sm:mt-5 md:mt-6 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 font-normal px-4">
          Visit our Etsy store while we build our new home
        </p>

        {/* Footer */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 text-center text-xs sm:text-sm md:text-base text-gray-500 tracking-wide sm:tracking-wider md:tracking-widest px-4">
          <p>© 2025 Ocean Light Jewels. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
