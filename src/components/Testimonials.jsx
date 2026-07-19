export default function Testimonials() {
  const reviews = [
    {
      name: "James D.",
      text: "I've been coming here for 5 years. The attention to detail on the fades is unmatched in Croydon. Always a professional atmosphere.",
    },
    {
      name: "Marcus T.",
      text: "The best hot towel shave I've ever had. You can really tell they have decades of experience. Highly recommended.",
    },
    {
      name: "Liam S.",
      text: "Solid, consistent cuts every single time. It’s rare to find a place that values tradition and quality this much.",
    },
  ];

  return (
    <section className="bg-barber-charcoal py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl text-barber-gold text-center mb-16">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-barber-black p-8 border-t-2 border-barber-gold">
              <p className="font-body text-gray-300 italic mb-6">"{review.text}"</p>
              <p className="font-heading text-white font-bold">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}