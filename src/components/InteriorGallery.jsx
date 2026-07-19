export default function InteriorGallery() {
  const interiorImageUrl = "https://res.cloudinary.com/z3qujb2c/image/upload/v1784424144/shopview_ovchgp.jpg";

  return (
    <section className="py-16 bg-barber-black">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-heading text-barber-gold text-center mb-10">Our Space</h2>
        <div className="overflow-hidden rounded-lg border-2 border-barber-gold shadow-2xl aspect-video md:aspect-[21/9]">
            <img 
                src={interiorImageUrl} 
                alt="The warm, professional interior of CroydonMainstreet barber shop." 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            </div>
      </div>
    </section>
  );
}