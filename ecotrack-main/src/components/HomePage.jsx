

import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import axios from "axios";
import WorldEmissionsMap from "./WorldEmissionsMap";
import LiveClimateStats from "./LiveClimateStats";
import ImpactScorecard from "./ImpactScorecard";
import EcoEventsSlider from "./EcoEventsSlider";

const testimonials = [
  {
    name: "Aarav Singh",
    quote: "EcoTrack helped me cut down my emissions by 35% in 3 months!",
    city: "Delhi"
  },
  {
    name: "Priya Mehta",
    quote: "I never realized my daily habits mattered this much. Thank you!",
    city: "Mumbai"
  },
  {
    name: "Rahul Jain",
    quote: "Beautiful interface, powerful impact. Love using EcoTrack!",
    city: "Bangalore"
  }
];

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.climatechangenews.com/feed/"
        );
        const items = res.data.items.slice(0, 5);
        setNews(items);
      } catch (error) {
        console.error("Error fetching climate news", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">

      {/* 🎥 Video Banner Hero Section
      <div className="relative w-full h-[90vh] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          src="/videos/earth-loop.mp4" // Make sure this exists in public/videos/
        onError={(e) => console.error("Video failed to load", e)}
       />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-xl">Act for the Planet 🌍</h1>
          <p className="text-xl drop-shadow-md">Every step matters. Reduce, reuse, restore.</p>
          <button
            onClick={() => window.location.href = "/calculator"}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
          >
            Start Tracking
          </button>
        </div>
      </div> */}
      {/* 🌿 Hero Banner with Image and Stats
<div className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('/images/eco-banner.jpg')" }}>
  <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center max-w-3xl">
    <h1 className="text-5xl font-bold mb-4">Join the Climate Action Movement 🌍</h1>
    <p className="text-lg mb-6">EcoTrack empowers individuals to monitor and reduce their carbon footprint with real-time insights.</p>
    <div className="grid grid-cols-3 gap-4 text-center text-green-200 font-semibold text-lg mb-6">
      <div><span className="text-3xl font-bold">12,345</span><br />Users Tracked</div>
      <div><span className="text-3xl font-bold">85 Tons</span><br />CO₂ Saved</div>
      <div><span className="text-3xl font-bold">7 Countries</span><br />Using EcoTrack</div>
    </div>
    <button
      onClick={() => window.location.href = "/calculator"}
      className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full"
    >
      Start Tracking Now
    </button>
  </div>
</div> */}
{/* 🌍 Earth Impact Info Slider */}
<div className="bg-gradient-to-r from-green-100 to-blue-100 py-12 px-6 text-center">
  <h1 className="text-4xl font-bold text-green-800 mb-6">The Planet Needs You 🌱</h1>

  <Carousel
    autoPlay
    interval={1000}
    infiniteLoop
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
  >
    {[
      {
        title: "Global Temperature Rise",
        fact: "The Earth’s average temperature has increased by 1.2°C since the late 19th century.",
        icon: "🌡️"
      },
      {
        title: "Melting Ice Caps",
        fact: "Arctic sea ice is declining at a rate of 13% per decade.",
        icon: "🧊"
      },
      {
        title: "Deforestation",
        fact: "We lose around 10 million hectares of forest each year — that’s about the size of Portugal.",
        icon: "🌳"
      },
      {
        title: "Ocean Acidification",
        fact: "30% of the CO₂ released into the atmosphere is absorbed by oceans, causing harm to marine life.",
        icon: "🌊"
      }
    ].map((slide, i) => (
      <div key={i} className="px-6">
        <div className="bg-white shadow-xl p-8 rounded-xl max-w-3xl mx-auto">
          <div className="text-5xl mb-4">{slide.icon}</div>
          <h3 className="text-2xl font-bold text-green-700 mb-2">{slide.title}</h3>
          <p className="text-gray-700 text-lg">{slide.fact}</p>
        </div>
      </div>
    ))}
  </Carousel>

  <button
    onClick={() => window.location.href = "/calculator"}
    className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg"
  >
    Track My Impact
  </button>
</div>


      {/* 💡 Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-8">
        {[
          { title: "Track Emissions", icon: "📈", route: "/calculator" },
          { title: "View Dashboard", icon: "📊", route: "/dashboard" },
          { title: "Top CO₂ Absorbing Plants", icon: "🌱", route: "/plants" }
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white shadow-xl p-6 rounded-lg hover:scale-105 transition-transform text-center cursor-pointer border border-gray-200"
            onClick={() => window.location.href = feature.route}
          >
            <div className="text-5xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-bold text-green-700">{feature.title}</h3>
          </div>
        ))}
      </div>

      {/* 📖 About Section */}
      <div className="my-16 px-10 flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/earth.jpg"
          className="rounded-lg w-full md:w-1/2 shadow-lg"
          alt="Earth"
        />
        <div className="text-gray-700 text-lg leading-7">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Why EcoTrack?</h2>
          <p>
            EcoTrack helps you take control of your carbon emissions by tracking
            daily activities like electricity usage, transport, and food habits.
            Understand your personal impact and get suggestions to reduce it.
          </p>
          <p className="mt-4">
            Together, we can make a significant change for our planet’s future.
          </p>
        </div>
      </div>

      {/* 🌟 User Testimonials */}
      <div className="bg-green-50 py-12 px-8">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">User Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <p className="text-green-800 font-semibold mt-4">{t.name} — {t.city}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 📰 Climate News Ticker */}
      <div className="bg-gray-100 border-t border-b py-4 mt-10">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex gap-12 text-sm text-blue-700 font-medium px-4">
            {news.length > 0
              ? news.map((item, index) => (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    🌍 {item.title}
                  </a>
                ))
              : <span>Loading climate news...</span>
            }
          </div>
        </div>
      </div>

      {/* 📊 Live Global Climate Stats */}
      <LiveClimateStats />

      {/* 🏆 User Impact Scorecard */}
      <ImpactScorecard />

      {/* 📅 Upcoming Events */}
      <EcoEventsSlider />

      {/* 🔁 News ticker animation */}
      <style>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%) }
          100% { transform: translateX(-100%) }
        }
      `}</style>
    </div>
  );
};

export default HomePage;


// const testimonials = [
//   {
//     name: "Aarav Singh",
//     quote: "EcoTrack helped me cut down my emissions by 35% in 3 months!",
//     city: "Delhi"
//   },
//   {
//     name: "Priya Mehta",
//     quote: "I never realized my daily habits mattered this much. Thank you!",
//     city: "Mumbai"
//   },
//   {
//     name: "Rahul Jain",
//     quote: "Beautiful interface, powerful impact. Love using EcoTrack!",
//     city: "Bangalore"
//   }
// ];

// const HomePage = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.rss2json.com/v1/api.json?rss_url=https://www.climatechangenews.com/feed/"
//         );
//         const items = res.data.items.slice(0, 5);
//         setNews(items);
//       } catch (error) {
//         console.error("Error fetching climate news", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-white">

//       {/* 🌱 Action Prompt Banner (Replaces Slideshow) */}
//       <div className="bg-gradient-to-r from-green-100 to-green-300 py-16 px-6 text-center shadow-inner rounded-lg mt-6">
//         <h2 className="text-4xl font-bold text-green-800 mb-4">Take Action Today 🌍</h2>
//         <p className="text-lg text-green-700 mb-6">
//           Small steps create big change. Start tracking your habits and plant the future!
//         </p>
//         <button
//           onClick={() => window.location.href = "/calculator"}
//           className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition"
//         >
//           Start Tracking
//         </button>
//       </div>

//       {/* 💡 Feature Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-8">
//         {[
//           { title: "Track Emissions", icon: "📈", route: "/calculator" },
//           { title: "View Dashboard", icon: "📊", route: "/dashboard" },
//           { title: "Top CO₂ Absorbing Plants", icon: "🌱", route: "/plants" }
//         ].map((feature, i) => (
//           <div
//             key={i}
//             className="bg-white shadow-xl p-6 rounded-lg hover:scale-105 transition-transform text-center cursor-pointer border border-gray-200"
//             onClick={() => window.location.href = feature.route}
//           >
//             <div className="text-5xl mb-3">{feature.icon}</div>
//             <h3 className="text-xl font-bold text-green-700">{feature.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* 📖 About Section */}
//       <div className="my-16 px-10 flex flex-col md:flex-row items-center gap-10">
//         <img
//           src="/images/earth.jpg"
//           className="rounded-lg w-full md:w-1/2 shadow-lg"
//           alt="Earth"
//         />
//         <div className="text-gray-700 text-lg leading-7">
//           <h2 className="text-3xl font-bold text-green-700 mb-4">Why EcoTrack?</h2>
//           <p>
//             EcoTrack helps you take control of your carbon emissions by tracking
//             daily activities like electricity usage, transport, and food habits.
//             Understand your personal impact and get suggestions to reduce it.
//           </p>
//           <p className="mt-4">
//             Together, we can make a significant change for our planet’s future.
//           </p>
//         </div>
//       </div>

//       {/* 🌟 User Testimonials */}
//       <div className="bg-green-50 py-12 px-8">
//         <h2 className="text-3xl font-bold text-center text-green-800 mb-8">User Testimonials</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((t, i) => (
//             <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
//               <p className="text-gray-700 italic">“{t.quote}”</p>
//               <p className="text-green-800 font-semibold mt-4">{t.name} — {t.city}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🧠 Environmental Awareness Quiz (Replaces World Map) */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mt-10 mx-4 md:mx-10">
//         <h3 className="text-2xl font-bold text-green-700 mb-4">🌿 How Eco-Aware Are You?</h3>
//         <p className="text-gray-700 mb-6">Answer a quick quiz and test your climate awareness.</p>
//         <div className="grid gap-4">
//           <div className="p-4 border border-green-200 rounded hover:bg-green-50 cursor-pointer">
//             ❓ What gas is most responsible for global warming?
//             <p className="text-sm text-gray-500 mt-1">A. Oxygen &nbsp; B. CO₂ &nbsp; C. Nitrogen</p>
//           </div>
//           <div className="p-4 border border-green-200 rounded hover:bg-green-50 cursor-pointer">
//             ❓ Which activity emits the most CO₂ per household?
//             <p className="text-sm text-gray-500 mt-1">A. Food &nbsp; B. Electricity &nbsp; C. Transport</p>
//           </div>
//         </div>
//       </div>

//       {/* 📰 Climate News Ticker */}
//       <div className="bg-gray-100 border-t border-b py-4 mt-10">
//         <div className="overflow-hidden whitespace-nowrap">
//           <div className="animate-marquee flex gap-12 text-sm text-blue-700 font-medium px-4">
//             {news.length > 0
//               ? news.map((item, index) => (
//                   <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                     🌍 {item.title}
//                   </a>
//                 ))
//               : <span>Loading climate news...</span>
//             }
//           </div>
//         </div>
//       </div>

//       {/* 📊 Live Global Climate Stats */}
//       <LiveClimateStats />

//       {/* 🏆 User Impact Scorecard */}
//       <ImpactScorecard />

//       {/* 📅 Upcoming Events or Challenges */}
//       <EcoEventsSlider />

//       {/* 🔁 News ticker animation CSS */}
//       <style>{`
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 30s linear infinite;
//         }
//         @keyframes marquee {
//           0% { transform: translateX(100%) }
//           100% { transform: translateX(-100%) }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;



// const slides = [
//   {
//     image: "/images/earthprotect.jpg",
//     //"https://images.unsplash.com/photo-1502784444185-1a42e1d5f5f3?auto=format&fit=crop&w=1500&q=80",
//     //"https://img.freepik.com/premium-photo/planet-earth-green-background-generative-ai_786587-5312.jpg?w=2000",
//     title: "Protect Our Planet",
//     caption: "Join the movement to reduce your carbon footprint."
//   },
//   {
//     image: "/images/home.jpg",
//     title: "Embrace Clean Energy",
//     caption: "Switch to renewables and reduce emissions."
//   },
//   {
//     image: "/images/city1.jpg",
//     title: "Smarter Cities, Greener Future",
//     caption: "Track and improve your environmental impact."
//   }
// ];

// const testimonials = [
//   {
//     name: "Aarav Singh",
//     quote: "EcoTrack helped me cut down my emissions by 35% in 3 months!",
//     city: "Delhi"
//   },
//   {
//     name: "Priya Mehta",
//     quote: "I never realized my daily habits mattered this much. Thank you!",
//     city: "Mumbai"
//   },
//   {
//     name: "Rahul Jain",
//     quote: "Beautiful interface, powerful impact. Love using EcoTrack!",
//     city: "Bangalore"
//   }
// ];

// const HomePage = () => {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await axios.get(
//           "https://api.rss2json.com/v1/api.json?rss_url=https://www.climatechangenews.com/feed/"
//         );
//         const items = res.data.items.slice(0, 5);
//         setNews(items);
//       } catch (error) {
//         console.error("Error fetching climate news", error);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-white">

//       {/* 🌍 Hero Slideshow */}
//       <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
//         {slides.map((slide, index) => (
//           <div key={index} className="relative">
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="object-cover h-[90vh] w-full"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
//               <h2 className="text-4xl font-bold mb-4 drop-shadow-md">
//                 {slide.title}
//               </h2>
//               <p className="text-lg drop-shadow-md">{slide.caption}</p>
//             </div>
//           </div>
//         ))}
//       </Carousel>

//       {/* 💡 Feature Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-8">
//         {[
//           { title: "Track Emissions", icon: "📈", route: "/calculator" },
//           { title: "View Dashboard", icon: "📊", route: "/dashboard" },
//           { title: "Top CO₂ Absorbing Plants", icon: "🌱", route: "/plants" }
//         ].map((feature, i) => (
//           <div
//             key={i}
//             className="bg-white shadow-xl p-6 rounded-lg hover:scale-105 transition-transform text-center cursor-pointer border border-gray-200"
//             onClick={() => window.location.href = feature.route}
//           >
//             <div className="text-5xl mb-3">{feature.icon}</div>
//             <h3 className="text-xl font-bold text-green-700">{feature.title}</h3>
//           </div>
//         ))}
//       </div>

//       {/* 📖 About Section */}
//       <div className="my-16 px-10 flex flex-col md:flex-row items-center gap-10">
//         <img
//           src="/images/earth.jpg"
//           className="rounded-lg w-full md:w-1/2 shadow-lg"
//           alt="Earth"
//         />
//         <div className="text-gray-700 text-lg leading-7">
//           <h2 className="text-3xl font-bold text-green-700 mb-4">Why EcoTrack?</h2>
//           <p>
//             EcoTrack helps you take control of your carbon emissions by tracking
//             daily activities like electricity usage, transport, and food habits.
//             Understand your personal impact and get suggestions to reduce it.
//           </p>
//           <p className="mt-4">
//             Together, we can make a significant change for our planet’s future.
//           </p>
//         </div>
//       </div>

//       {/* 🌟 User Testimonials */}
//       <div className="bg-green-50 py-12 px-8">
//         <h2 className="text-3xl font-bold text-center text-green-800 mb-8">User Testimonials</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((t, i) => (
//             <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
//               <p className="text-gray-700 italic">“{t.quote}”</p>
//               <p className="text-green-800 font-semibold mt-4">{t.name} — {t.city}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 📰 Climate News Ticker */}
//       <div className="bg-gray-100 border-t border-b py-4 mt-10">
//         <div className="overflow-hidden whitespace-nowrap">
//           <div className="animate-marquee flex gap-12 text-sm text-blue-700 font-medium px-4">
//             {news.length > 0
//               ? news.map((item, index) => (
//                   <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
//                     🌍 {item.title}
//                   </a>
//                 ))
//               : <span>Loading climate news...</span>
//             }
//           </div>
//         </div>
//       </div>

//       {/* 🌐 World Emissions Map */}
//       <WorldEmissionsMap />

//       {/* 📊 Live Global Climate Stats */}
//       <LiveClimateStats />

//       {/* 🏆 User Impact Scorecard (Optional) */}
//       <ImpactScorecard />

//       {/* 📅 Upcoming Events or Challenges */}
//       <EcoEventsSlider />

//       {/* 🔁 News ticker animation CSS */}
//       <style>{`
//         .animate-marquee {
//           display: inline-block;
//           animation: marquee 30s linear infinite;
//         }
//         @keyframes marquee {
//           0% { transform: translateX(100%) }
//           100% { transform: translateX(-100%) }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;
