import Image from "next/image";

const galleryImages = [
  { src: "/images/gallery/gallery-1.jpeg", alt: "Wavy fade profil" },
  { src: "/images/gallery/gallery-2.jpeg", alt: "Fade detail" },
  { src: "/images/gallery/gallery-3.jpeg", alt: "Curly fade" },
  { src: "/images/gallery/gallery-4.jpeg", alt: "Textured crop" },
  { src: "/images/gallery/gallery-5.jpeg", alt: "Curly fade zezadu" },
  { src: "/images/gallery/gallery-6.jpeg", alt: "Styling vlasů" },
  { src: "/images/gallery/gallery-7.jpeg", alt: "Výuka v akademii" },
  { src: "/images/gallery/gallery-8.jpeg", alt: "Stříhání strojkem" },
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
