const Footer = () => {
    return (
<footer className="relative z-10 flex flex-col items-center gap-2 py-8 bg-white/95 border-t border-black">
        <div className="flex gap-4 text-[10px] text-neutral-400 font-mono uppercase tracking-widest">
          <span>© 2024 Magnus Andersen</span>
          <span>|</span>
          <span>All Rights Reserved</span>
        </div>
        <div className="text-[9px] text-orange-600 font-mono tracking-widest">
          Designed & coded with precision
        </div>
      </footer>
    )
}

export default Footer;