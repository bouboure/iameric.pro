import Image from 'next/image';

const media = [
  { type: 'image', src: "https://source.unsplash.com/random/800x600/?baby,football", alt: "Eric's first football" },
  { type: 'video', src: "https://www.youtube.com/embed/dQw4w9WgXcQ", title: "Eric's First Kick" },
  { type: 'image', src: "https://source.unsplash.com/random/800x600/?toddler,soccer", alt: "Eric's first steps with a ball" },
  { type: 'video', src: "https://www.youtube.com/embed/M7lc1UVf-VE", title: "Eric's Training Session" },
  { type: 'image', src: "https://source.unsplash.com/random/800x600/?child,goal", alt: "Eric's first goal" },
  { type: 'image', src: "https://source.unsplash.com/random/800x600/?kid,training", alt: "Eric's training session" },
  { type: 'video', src: "https://www.youtube.com/embed/aqz-KE-bpKQ", title: "Eric's First Match" },
  { type: 'image', src: "https://source.unsplash.com/random/800x600/?family,soccer", alt: "Family football time" },
  { type: 'image', src: "https://source.unsplash.com/random/800x600/?youth,soccer", alt: "Eric's first match" },
];

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold mb-10 text-center">Eric in Action</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {media.map((item, index) => (
          <div key={index} className="relative aspect-square">
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="custom-img"
              />
            ) : (
              <iframe
                src={item.src}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              ></iframe>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}