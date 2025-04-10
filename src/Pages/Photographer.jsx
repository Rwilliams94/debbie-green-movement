import React from "react";
import {
  yr3w108,
  yr2w64h,
  yr3w67j,
  yr3w70e,
  yr3w80b,
  yr4w50g,
  yr4w58i,
  yr5w26,
  yr5w45,
  yr5w70a,
  yr5w158b,
  yr6w79,
  yr7w123a,
  yr7w111e,
  yr7w61b,
  yr8w116c,
  yr8w54e,
  yr9w60a,
  yr9w68c,
  yr5w54m,
  yr5w28,
  yr5w36,
  yr5w34d
} from "../Images/Photographer/photographyExport";
import Page from "../Components/page";

const Photographer = () => {
  const backgroundImage = {
    image: yr3w108,
    position: "0px",
  };
  const rightContent = (
    <>
      <h1>(Avocational) Photographer</h1>
      <p>
        I have photographed with an Olympus OM1 & OM2 film camera for over 40
        years. My 9-year project of taking photographs of each and every dog
        walk I went on until my dog died in 2015, remains the inspiration for my
        following years of Walks without a Dog.
      </p>
      <p>
        I now photograph with my Olympus OM2 and long lens on both walks and cycle rides. My
        landscapes reflect how I see the world that day with my eye for form and movement.
      </p>
      <p>
        Over the years, my work has been published by London Independent
        Photography’s fLIP magazine including for their 50th edition, Winter
        2021, and exhibited at their annual print exhibitions, as well as for
        recent Shutterhub print exhibitions.
      </p>
      <p>
        See{" "}
        <a
          href="https://www.londonphotography.org.uk/magazine/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          London Independent Photography
        </a>{" "}
        and{" "}
        <a
          href=" https://shutterhub.org.uk/ "
          target="_blank"
          rel="noopener noreferrer"
        >
          Shutterhub
        </a>
      </p>
    </>
  );
  const creditContent = (
    <>
      <p> Website by Rowan Williams </p>
    </>
  );
  const photoContent = {
    links: false,
    titles: false,
    images: [
      {
        image: yr3w80b,
      },
      {
        image: yr4w58i,
      },
      {
        image: yr5w70a,
      },
      {
        image: yr2w64h,
      },
      {
        image: yr4w50g,
      },
      {
        image: yr3w70e,
      },
      {
        image: yr5w45,
      },
      {
        image: yr5w26,
      },
      {
        image: yr3w67j,
      },
      {
        image: yr6w79,
      },
      {
        image: yr7w123a,
      },
      {
        image: yr7w111e,
      },
      {
        image: yr7w61b,
      },
      {
        image: yr8w116c,
      },
      {
        image: yr8w54e,
      },
      {
        image: yr9w60a,
      },
      {
        image: yr9w68c,
      },
      {
        image: yr5w158b,
      },
      {
        image: yr5w54m,
      },
      {
        image: yr5w28,
      },
      {
        image: yr5w36,
      },
      {
        image: yr5w34d,
      },
    ],
  };
  return (
    <Page
      navbar={true}
      homeColour="light"
      pageColour="light"
      backgroundImage={backgroundImage}
      rightContent={rightContent}
      leftContent={null}
      photoContent={photoContent}
      photoLinks={null}
      footerContent={null}
      creditContent={creditContent}
    />
  );
};

export default Photographer;
