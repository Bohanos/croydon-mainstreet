export default function CommunitySection() {
  const theteam = "https://res.cloudinary.com/z3qujb2c/image/upload/v1784424105/theteam_p4wqup.jpg";

  return (
    <section id="community" className="py-20 px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="overflow-hidden rounded-lg aspect-video">
            <img 
            src={theteam} 
            alt="The team at CroydonMainstreet" 
            className="w-full h-full object-cover"
            />
        </div>
        <div>
            <h2 className="font-heading text-4xl mb-6">Beyond the Chair</h2>
            <p className="font-body text-gray-700 leading-relaxed">
            CroydonMainstreet is more than a barber shop...
            </p>
        </div>
    </section>
  );
}