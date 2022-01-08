import React from "react";
import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  MediaCard,
  SkeletonPage,
  SkeletonBodyText,
  SkeletonDisplayText,
  TextContainer,
  Frame,
} from "@shopify/polaris";

// Single Skeleton Card render.
const skeletonCard = (
  <MediaCard
    title={
      <TextContainer>
        <SkeletonDisplayText></SkeletonDisplayText>
      </TextContainer>
    }
    primaryAction={{ content: "" }}
    description={
      <TextContainer>
        <SkeletonBodyText lines={10} />
      </TextContainer>
    }
    popoverActions={[{}]}
  >
    <img
      src={require("../assets/gray.png")}
      alt=""
      width="100%"
      height="100%"
    />
  </MediaCard>
);

// Skeleton page render.
const SkeletonCardList = () => {
  return (
    <div className="skeleton-photo">
      <AppProvider i18n={enTranslations}>
        <Frame>
          <SkeletonPage title="Spacestagram">
            {skeletonCard}
            {skeletonCard}
          </SkeletonPage>
        </Frame>
      </AppProvider>
    </div>
  );
};

export default SkeletonCardList;
