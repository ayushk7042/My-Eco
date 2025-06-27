// import React from "react";
// import { motion } from "framer-motion";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const slides = [
//   {
//     image: "https://images.unsplash.com/photo-1501769214405-5e86c1f7fdf4",
//     title: "Melting Glaciers",
//     tip: "Glaciers are melting at an alarming rate due to rising temperatures.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1505480420430-4ef62f57e5fd",
//     title: "Air Pollution",
//     tip: "Over 90% of the world breathes polluted air every day.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1555664424-778a1e5fdffa",
//     title: "Deforestation",
//     tip: "We lose over 10 million hectares of forest annually.",
//   },
//   {
//     image: "https://images.unsplash.com/photo-1586773860418-d37222d8f238",
//     title: "Sustainable Living",
//     tip: "Using renewable energy can reduce your carbon footprint by 60%.",
//   },
// ];

// const ClimateSlideshow = () => {
//   return (
//     <div className="max-w-5xl mx-auto mb-10">
//       <h2 className="text-2xl font-bold text-center text-green-700 mb-4">🌍 Climate Awareness Slideshow</h2>
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showThumbs={false}
//         interval={4000}
//         showStatus={false}
//         swipeable
//       >
//         {slides.map((slide, index) => (
//           <motion.div
//             key={index}
//             className="relative group"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="rounded-lg w-full h-[400px] object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 rounded-lg flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <h3 className="text-white text-2xl font-bold mb-1">{slide.title}</h3>
//               <p className="text-gray-200">{slide.tip}</p>
//             </div>
//           </motion.div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default ClimateSlideshow;
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Slides data (images must be inside /public/images/)
const slides = [
  {
    image: "/images/forest.jpg",
    title: "Protect Forests",
    caption: "Forests absorb CO₂ and support biodiversity."
  },
  {
    image: "/images/solar.jpg",
    title: "Switch to Solar",
    caption: "Solar power drastically reduces emissions."
  },
  {
    image: "/images/recycle.jpg",
    title: "Recycle Daily",
    caption: "Cut down landfill waste and CO₂ output."
  },
  {
    image: "/images/transport.jpg",
    title: "Use Public Transport",
    caption: "Reduce fuel emissions with eco-commuting."
  }
];

const ClimateSlideshow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-5xl mx-auto mt-10 shadow-xl rounded-lg overflow-hidden"
    >
      <Carousel
        autoPlay
        infiniteLoop
        interval={4500}
        showThumbs={false}
        showStatus={false}
        transitionTime={600}
        stopOnHover={true}
        emulateTouch={true}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative group"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-[400px] w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:bg-black/70 transition duration-500 flex flex-col justify-end px-6 py-5">
              <h2 className="text-white text-2xl font-bold">{slide.title}</h2>
              <p className="text-white text-sm">{slide.caption}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </motion.div>
  );
};

export default ClimateSlideshow;
