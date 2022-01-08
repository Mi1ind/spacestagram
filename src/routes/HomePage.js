import React, { useState, useEffect } from "react";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider, Frame } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import CardList from "./CardList";
import SkeletonCardList from "./SkeletonCardList";

const nasaApiKey = process.env.REACT_APP_NASA_API_KEY;
const apiCallCount = 10;
const dayPhoto = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&count=${apiCallCount}`;
// const startDate = "2021-12-25";
// const endDate = "2022-01-07";
// const datePhoto = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}&start_date=${startDate}&end_date=${endDate}`;

// Fetch date from NASA's Astronomy Picture of the Day API.
export default function Photo() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        dayPhoto
        // datePhoto
      );
      const data = await res.json();
      setPhotoData(data.reverse());
    }
  }, []);

  // Swipe to refresh page.
  window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight <= clientHeight) {
      window.location.reload();
    }
  });

  // Display Skeleton page while data is fetched from NASA's API.
  if (!photoData) return <SkeletonCardList />;

  // Render CardList.js which display's API data.
  return (
    <div className="nasa-photo">
      <AppProvider i18n={enTranslations}>
        <Frame>
          <CardList photoData={photoData} />
        </Frame>
      </AppProvider>
    </div>
  );
}
