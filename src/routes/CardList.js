import React, { useState, useCallback } from "react";
import { Page, MediaCard } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

const CardListItem = (props) => {
  // Change states for Like button.
  const [activeLike, setActiveLike] = useState(false);
  const handleToggleLike = useCallback(
    () => setActiveLike((activeLike) => !activeLike),
    []
  );
  const contentStatus = activeLike ? "♥ Dislike" : "♥ Like";

  // Single Media Card render.
  return (
    <MediaCard
      title={props.photoData.title}
      primaryAction={{
        content: contentStatus,
        destructive: activeLike,
        onAction: handleToggleLike,
      }}
      description={props.photoData.explanation}
      // Share button. Copies url of image to clipboard.
      popoverActions={[
        {
          image:
            "https://media.istockphoto.com/vectors/cartoon-rocket-space-ship-simple-spaceship-icon-stock-vector-vector-id1128766183?k=20&m=1128766183&s=170667a&w=0&h=pjFPc4PmaA21UazHXlJuxk87omk1SfrjyFOwMn8str4=",
          content: "Copy '" + props.photoData.title + "' to the clipboard.",
          onAction: () => {
            navigator.clipboard.writeText(props.photoData.url);
          },
        },
      ]}
    >
      <img
        src={props.photoData.url}
        alt={props.photoData.title}
        width="100%"
        height="100%"
        className="photo"
      />
    </MediaCard>
  );
};

// Display as many cards as required.
const CardList = (props) => (
  <Page title="Spacestagram">
    {props.photoData.map((photoData) => {
      return <CardListItem photoData={photoData} />;
    })}
  </Page>
);

export default CardList;
