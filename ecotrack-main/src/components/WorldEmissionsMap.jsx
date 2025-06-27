// // // src/components/WorldEmissionsMap.jsx
// // import React, { useEffect, useState } from "react";
// // import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// // import axios from "axios";
// // import { Tooltip as ReactTooltip } from "react-tooltip";
// // import "react-tooltip/dist/react-tooltip.css";

// // const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// // const WorldEmissionsMap = () => {
// //   const [emissionsData, setEmissionsData] = useState({});
// //   const [tooltipContent, setTooltipContent] = useState("");

// //   useEffect(() => {
// //     const fetchEmissions = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?interval=day&averaging_period=day&limit=300"
// //         );
// //         const mappedData = {};
// //         response.data.forEach((item) => {
// //           const country = item.area.name;
// //           if (country && !mappedData[country]) {
// //             mappedData[country] = item.value;
// //           }
// //         });
// //         setEmissionsData(mappedData);
// //       } catch (err) {
// //         console.error("Failed to load emission data:", err);
// //       }
// //     };

// //     fetchEmissions();
// //   }, []);

// //   const getColor = (value) => {
// //     if (!value) return "#EEE";
// //     if (value < 0.03) return "#a3e635";
// //     if (value < 0.05) return "#facc15";
// //     if (value < 0.07) return "#fb923c";
// //     return "#f87171";
// //   };

// //   return (
// //     <div className="bg-white p-6 rounded-lg shadow-md">
// //       <h2 className="text-2xl font-bold text-center mb-4 text-green-800">🌍 World Emissions Map</h2>
// //       <ReactTooltip id="map-tooltip" />
// //       <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
// //         <Geographies geography={geoUrl}>
// //           {({ geographies }) =>
// //             geographies.map((geo) => {
// //               const countryName = geo.properties.NAME;
// //               const value = emissionsData[countryName];
// //               return (
// //                 <Geography
// //                   key={geo.rsmKey}
// //                   geography={geo}
// //                   fill={getColor(value)}
// //                   onMouseEnter={() => {
// //                     setTooltipContent(`${countryName}: ${value ? value.toFixed(3) : "N/A"} ppm`);
// //                     ReactTooltip.show();
// //                   }}
// //                   onMouseLeave={() => {
// //                     setTooltipContent("");
// //                     ReactTooltip.hide();
// //                   }}
// //                   data-tooltip-id="map-tooltip"
// //                   data-tooltip-content={tooltipContent}
// //                   style={{
// //                     default: { outline: "none" },
// //                     hover: { outline: "none", fill: "#10b981" },
// //                     pressed: { outline: "none" },
// //                   }}
// //                 />
// //               );
// //             })
// //           }
// //         </Geographies>
// //       </ComposableMap>
// //     </div>
// //   );
// // };

// // export default WorldEmissionsMap;
// // src/components/WorldEmissionsMap.jsx
// import React, { useEffect, useState } from "react";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// //import ReactTooltip from "react-tooltip";

// import { Tooltip } from 'react-tooltip'; // ✅ CORRECT

// const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// const WorldEmissionsMap = () => {
//   const [tooltipContent, setTooltipContent] = useState("");
//   const [countryData, setCountryData] = useState({});

//   useEffect(() => {
//     // Sample/mock data - you can replace with real API
//     const mockData = {
//       USA: 5000,
//       CHN: 10000,
//       IND: 3000,
//       BRA: 2000,
//       RUS: 2500,
//     };
//     setCountryData(mockData);
//   }, []);

//   const getColor = (iso) => {
//     const value = countryData[iso] || 0;
//     if (value > 8000) return "#d73027";
//     if (value > 4000) return "#fc8d59";
//     if (value > 2000) return "#fee08b";
//     if (value > 1000) return "#d9ef8b";
//     if (value > 0) return "#91cf60";
//     return "#e0e0e0";
//   };

//   return (
//     <div className="my-12">
//       <h2 className="text-2xl font-bold text-center mb-4 text-green-700">🌍 World CO₂ Emissions Map</h2>
//       <ReactTooltip>{tooltipContent}</ReactTooltip>
//       <ComposableMap projectionConfig={{ scale: 140 }}>
//         <Geographies geography={geoUrl}>
//           {({ geographies }) =>
//             geographies.map((geo) => {
//               const iso = geo.properties.ISO_A3;
//               const countryName = geo.properties.NAME;
//               return (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   fill={getColor(iso)}
//                   onMouseEnter={() => {
//                     setTooltipContent(`${countryName}: ${countryData[iso] || "No Data"} Mt CO₂`);
//                   }}
//                   onMouseLeave={() => {
//                     setTooltipContent("");
//                   }}
//                   style={{
//                     default: { outline: "none" },
//                     hover: { fill: "#2b6cb0", outline: "none" },
//                     pressed: { outline: "none" },
//                   }}
//                 />
//               );
//             })
//           }
//         </Geographies>
//       </ComposableMap>
//     </div>
//   );
// };

// export default WorldEmissionsMap;
import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import axios from "axios";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

// Example:
//import countries from "/data/world-countries.json";
//import co2data from "/data/co2-data.json";

// World map TopoJSON source
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const WorldEmissionsMap = () => {
  const [emissionsData, setEmissionsData] = useState({});
  const [tooltipContent, setTooltipContent] = useState("");

  useEffect(() => {
    // Example API or static data fetch
    const fetchData = async () => {
      try {
        // Replace this with real API or static data file
        const res = await axios.get("https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.json");

        const countryEmissions = {};
        for (const countryCode in res.data) {
          const record = res.data[countryCode];
          const latest = record.data[record.data.length - 1];
          if (latest?.co2 && record.iso_code.length === 3) {
            countryEmissions[record.iso_code] = {
              name: record.country,
              value: latest.co2
            };
          }
        }

        setEmissionsData(countryEmissions);
      } catch (err) {
        console.error("Error loading emissions data", err);
      }
    };

    fetchData();
  }, []);

  // Function to get fill color based on emissions
  const getFillColor = (isoCode) => {
    const emission = emissionsData[isoCode]?.value || 0;
    if (emission > 1000) return "#7f1d1d"; // deep red
    if (emission > 500) return "#b91c1c";
    if (emission > 100) return "#ef4444";
    if (emission > 50) return "#f87171";
    if (emission > 10) return "#fca5a5";
    return "#d1fae5"; // greenish for low
  };

  return (
    <div className="mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        🌍 Global CO₂ Emissions Map
      </h2>

      <ComposableMap
        projectionConfig={{ scale: 140 }}
        width={900}
        height={450}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const isoCode = geo.properties.ISO_A3;
              const data = emissionsData[isoCode];
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  data-tooltip-id="country-tooltip"
                  data-tooltip-html={
                    data
                      ? `<strong>${data.name}</strong><br />Emissions: ${data.value.toFixed(2)} MtCO₂`
                      : `${geo.properties.NAME}: No data`
                  }
                  style={{
                    default: {
                      fill: getFillColor(isoCode),
                      stroke: "#fff",
                      outline: "none"
                    },
                    hover: {
                      fill: "#34d399",
                      stroke: "#111827",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#34d399",
                      outline: "none"
                    }
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <Tooltip id="country-tooltip" />
    </div>
  );
};

export default WorldEmissionsMap;
