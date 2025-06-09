const ContactSection = () => {
    return (
        <section id="contact" className="relative z-10 flex flex-col items-center justify-center px-6 py-32 bg-white/90">
        <h2 className="text-xs uppercase tracking-widest text-orange-600 font-mono font-bold mb-4">Contact</h2>
        <p className="text-lg text-neutral-700 font-mono tracking-wide mb-8 text-center max-w-xl">
          Interested in working together or just want to say hi? Reach out and let’s connect!
        </p>
        <a
          href="mailto:hello@magnus.com"
          className="px-10 py-3 border border-black bg-white text-black uppercase text-sm font-bold tracking-widest rounded-none hover:bg-orange-600 hover:text-white transition-colors duration-150 shadow-lg"
          style={{ boxShadow: "0 0 0 2px #FF6600" }}
        >
          Email Me
        </a>
        <div className="flex gap-6 mt-8">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 underline text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 underline text-sm">
            LinkedIn
          </a>
        </div>
        {/* Micrographic */}
        <svg width="80" height="8" className="mt-10" aria-hidden>
          <rect width="80" height="8" rx="4" fill="#FF6600" opacity="0.15" />
        </svg>
      </section>
    )
}

export default ContactSection;