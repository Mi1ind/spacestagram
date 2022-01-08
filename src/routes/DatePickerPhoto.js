// TODO: WIP Date picker to display NASA APOD images.

// import React, { useState, useEffect, useCallback } from "react";
// import enTranslations from "@shopify/polaris/locales/en.json";
// import { AppProvider, Card, Frame, DatePicker } from "@shopify/polaris";
// import "@shopify/polaris/build/esm/styles.css";
// import CardList from "./CardList";
// import SkeletonCardList from "./SkeletonCardList";

// const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
// var startDate = null;
// var endDate = null;

// const datePhoto = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&start_date=${startDate}&end_date=${endDate}`;

// export default function DatePickerPhoto() {
//   const [{ month, year }, setDate] = useState({ month: 1, year: 2022 });
//   const [selectedDates, setSelectedDates] = useState({
//     start: new Date("Jan 07 2022 00:00:00 GMT-0500 (EST)"),
//     end: new Date("Jan 07 2022 00:00:00 GMT-0500 (EST)"),
//   });
//   const handleMonthChange = useCallback(
//     (month, year) => setDate({ month, year }),
//     []
//   );

//   const [photoData, setPhotoData] = useState(null);
//   useEffect(() => {
//     fetchPhoto();

//     async function fetchPhoto() {
//       const res = await fetch(
//         // dayPhoto
//         datePhoto
//       );
//       const data = await res.json();
//       setPhotoData(data.reverse());
//     }
//   }, []);

//   // !! Skeleton animation while photodata is being fetched from nasa's api.
//   if (!photoData) return <SkeletonCardList />;

//   return (
//     <div className="nasa-photo">
//       <AppProvider i18n={enTranslations}>
//         <Frame>
//           <Card>
//             <DatePicker
//               month={month}
//               year={year}
//               onChange={setSelectedDates}
//               onMonthChange={handleMonthChange}
//               selected={selectedDates}
//               allowRange={true}
//             />
//           </Card>
//           {/* <CardList photoData={photoData} /> */}
//         </Frame>
//       </AppProvider>
//     </div>
//   );
// }
