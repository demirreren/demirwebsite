export function Closing() {
  return (
    <section className="py-24 relative border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            What is next
          </h2>

          <p className="text-base text-gray-400 leading-relaxed mb-10">
            I am always looking for interesting problems and interesting people. If you are building something meaningful, rethinking how things work, or just want to trade travel stories - I would love to hear from you.
          </p>

          <div className="flex justify-center text-orange-400/50 mb-10">
            <svg viewBox="0 0 120 40" fill="none" className="w-24 h-8">
              <path d="M0 20C20 20 20 8 40 8C60 8 60 32 80 32C100 32 100 20 120 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-60" />
              <path d="M0 28C20 28 20 16 40 16C60 16 60 40 80 40C100 40 100 28 120 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="opacity-30" />
            </svg>
          </div>

          <a
            href="mailto:deren@uwaterloo.ca"
            className="inline-flex items-center gap-3 px-6 py-3 
                     bg-gray-900 border border-gray-700 rounded-full
                     text-white text-base font-medium
                     hover:border-orange-400 hover:text-orange-400
                     transition-all duration-300 group"
          >
            Let us connect
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
