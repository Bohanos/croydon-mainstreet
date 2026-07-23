export default function Navbar({ onBookClick }) {
  const LogoImg = "https://res.cloudinary.com/z3qujb2c/image/upload/v1784424104/croydonlogo_h7gjgs.png";
  
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between px-6 py-4 bg-barber-black text-white sticky top-0 z-50 shadow-lg gap-4">
      
      {/* Logo & Brand */}
      <a href="/" className="flex items-center gap-3">
        <img src={LogoImg} alt="Croydonmainstreet Logo" className="h-10 w-auto object-contain" />
        <span className="font-heading text-xl font-bold tracking-widest">
          THE BARBER MASTER
        </span>
      </a>

      {/* Links & Button Container */}
      <div className="flex flex-wrap items-center justify-center gap-6 font-body text-xs uppercase tracking-wider">
        <a href="#services" className="hover:text-barber-gold transition">Services</a>
        <a href="#legacy" className="hover:text-barber-gold transition">Our Legacy</a>
        <a href="#community" className="hover:text-barber-gold transition">Community</a>
        <a href="mailto:bookings@croydoncut.com" className="hover:text-barber-gold transition">Contact</a>
      
        <a href="#booking">
          <button 
            onClick={onBookClick}
            className="bg-barber-gold px-4 py-2 text-barber-black font-bold uppercase hover:bg-white transition text-xs cursor-pointer"
          >
            Book Session
          </button>
        </a>
      </div>
    </nav>
  );
}