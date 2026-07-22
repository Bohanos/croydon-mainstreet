export default function BookingSection() {
  return (
    <section id="booking" className="bg-barber-charcoal py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-barber-gold text-center mb-12 uppercase">
          Book Your Session
        </h2>
        
        {/* The Embedded Google Form */}
        <div className="w-full h-[800px] overflow-hidden rounded-lg shadow-2xl border border-barber-gold">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfzge8KpzOtcP-xg6wdwZaHyeyviGK7Pf_fGylFUKQdYNzynA/viewform?embedded=true" 
            className="w-full h-full"
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
          >
            Loading booking form…
          </iframe>
        </div>
      </div>
    </section>
  );
}