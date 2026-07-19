export default function Hero() {
  const precision = "https://res.cloudinary.com/z3qujb2c/image/upload/v1784424106/precision_ld6xp1.jpg";

  return (
    <section className="grid md:grid-cols-2 bg-barber-charcoal text-white min-h-[65vh] items-center">
      <div className="p-12 md:p-24">
        <h1 className="font-heading text-5xl md:text-7xl mb-6 text-barber-gold">Two Decades of Mastery</h1>
        <p className="font-body text-lg text-gray-300 leading-relaxed">
          Blending 25 years of tradition with modern precision. Experience the Croydon legacy.
        </p>
      </div>
      <div className="aspect-square md:aspect-auto md:h-[500px] w-full bg-gray-800 relative overflow-hidden">
        <img 
          src={precision} 
          alt="A professional barber at CroydonMainstreet finishing a sharp fade haircut." 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-8">
        <a 
          href="https://forms.gle/xXEX1ASTWkVGBqhX8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-barber-gold px-8 py-4 text-barber-black font-bold uppercase tracking-widest hover:bg-white transition"
        >
          Secure Your Seat
        </a>
      </div>
    </section>
  );
}