export default function Footer() {
  return (
    <footer className="bg-barber-black text-gray-400 py-12 px-8 text-center border-t border-barber-gold">
      
      {/* Location Map */}
      <div className="mb-10 w-full max-w-xl mx-auto shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.25!2d145.2785!3d-37.7964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63a9acb56f1c3%3A0x2f9198eaacddf7d1!2sMain%20St%2C%20Croydon%20VIC%203136!5e0!3m2!1sen!2sau!4v1620000000000!5m2!1sen!2sau" 
          width="100%" 
          height="250" 
          style={{ border: "2px solid #C5A059" }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Map showing the location of CroydonMainstreet"
        ></iframe>
      </div>

      {/* Branding and Info */}
      <p className="font-heading text-barber-gold text-3xl mb-4 tracking-wider">CroydonMainstreet</p>
      
      <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mb-8 text-sm">
        <span>Tue - Sat: 9am - 6pm</span>
        <span className="hidden md:block">|</span>
        <span>Main Street, Croydon, VIC 3136</span>
      </div>

      <p className="text-xs font-body text-gray-500">
        © 2026 CroydonMainstreet. All rights reserved.
      </p>
    </footer>
  );
}