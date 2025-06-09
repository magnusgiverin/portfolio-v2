const Header = () => {
  return (
    <header className="z-20 fixed top-0 left-0 w-full z-10 flex items-center justify-between px-16 py-4 backdrop-blur-lg
      md:top-0 md:bottom-auto md:flex-row
      bottom-0 top-auto border-t border-neutral-200 border-b-0 md:border-t-0
      flex-col md:flex-row
      md:justify-between
      md:px-16 px-4
      md:py-4 py-2
      ">
      <div className="hidden md:flex items-center gap-4 md:mb-0 mb-2">
        <span className="uppercase tracking-widest text-sm text-black font-mono font-semibold">
          Magnus Giverin
        </span>
      </div>
      <nav className="flex gap-8 text-xs uppercase tracking-widest text-neutral-400 font-mono
        md:flex-row flex-row
        ">
        <a href="#about" className="text-black hover:text-orange-600 transition">About</a>
        <a href="#projects" className="text-black hover:text-orange-600 transition">Projects</a>
        <a href="#skills" className="text-black hover:text-orange-600 transition">Skills</a>
        <a href="#contact" className="text-black hover:text-orange-600 transition">Contact</a>
      </nav>
    </header>
  )
}

export default Header;