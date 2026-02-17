import Image from "next/image";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80", alt: "Academy training" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80", alt: "Hands-on practice" },
  { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80", alt: "Instructor demo" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80", alt: "Tools setup" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80", alt: "Graduation" },
  { src: "https://images.unsplash.com/photo-1587909209111-5097ee578ec3?w=600&q=80", alt: "Practice session" },
  { src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80", alt: "Fade technique" },
  { src: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&q=80", alt: "Classroom" },
];

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Galerie
        </h2>

        <div className="mt-12 columns-2 gap-3 sm:columns-3 lg:columns-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="group mb-3 overflow-hidden rounded-lg">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={i % 3 === 0 ? 500 : 300}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
