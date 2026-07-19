export default function Navbar() {
  const LogoImg = "https://res.cloudinary.com/z3qujb2c/image/upload/v1784424104/croydonlogo_h7gjgs.png";
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-barber-black text-white sticky top-0 z-50 shadow-lg">
      
      <a href="/" className="flex items-center gap-3">
        <img 
          src={LogoImg} 
          alt="Croydonmainstreet Logo" 
          className="h-12 w-auto object-contain"
        />
        <span className="font-heading text-2xl font-bold tracking-widest leading-none">
          THE BARBER MASTER
        </span>
      </a>
      <div className="hidden md:flex items-center space-x-8 font-body text-sm uppercase tracking-wider">
        <a href="#services" className="hover:text-barber-gold transition">Services</a>
        <a href="#legacy" className="hover:text-barber-gold transition">Our Legacy</a>
        <a href="#community" className="hover:text-barber-gold transition">Community</a>
        <a 
          href="mailto:bookings@croydoncut.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-barber-gold transition"
        >
          Contact
        </a>
      </div>
      <a 
        href="https://forms.gle/xXEX1ASTWkVGBqhX8" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-barber-gold px-6 py-2.5 text-barber-black font-bold uppercase hover:bg-white transition cursor-pointer text-sm"
      >
        Book Session
      </a>
    </nav>
  );
}