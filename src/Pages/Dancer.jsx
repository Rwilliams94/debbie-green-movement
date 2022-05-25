import React from "react";
import Page from "../Components/page";
import {
  backDrop,
  celebrating,
  inSuspense,
  lion,
  marchSeems,
  outTake,
  synchronicity,
  lyric14,
  lyric1,
  pinFactory,
} from "../Images/dancer/dancerExport";

const Dancer = () => {
  const backgroundImage = {
    image: pinFactory,
    position: "0px",
  };
  const rightContent = (
    <>
      <h1>Dancer</h1>
      <p>
        Dance has been an inspiration in my life. Ultimately, I am proud to call
        myself a dancer and understand that my movement work, powered by dance,
        has been my guide for my whole career. Trained in classical ballet,
        although my body - my physical, mental and emotional capacity - were
        perhaps more suited to contemporary dance, I have been in the privileged
        position to experience other dance and movement forms. I felt as though
        I was coming home into my body when I learnt Odissi with Sanjeevini
        Dutta {" "}
        <a
          href="ttp://www.pulseconnects.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Pulse Connects, London)
        </a>{" "}
        and at the Odissi Research Centre in Bhubaneswar, Orissa, after many
        years of working ‘en pointe’. I began to choreograph for theatre and
        commercials. I continued with my explorations of dance and movement with
        Sue Weston {" "}
        <a
          href="https://www.sueweston.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Relaxing the Mind)
        </a>{" "}
        and I gained my MA in Movement Studies at Laban.
      </p>
      <p>
        By acknowledging that I possess a spirit of dance, I do so in
        recognition that also technique and self-awareness are pre-requisite.
        The latter, I need to maintain appropriately as my body ages. I can look
        to the younger generation of dance artists, and continue that love for
        dance, as well as offer my own experience and inner connection to it.
      </p>
    </>
  );
  const footerContent = (
    <>
      <p>
        Performative imagery in collaboration with{" "}
        <b>photographer Clare Park</b>, from our <i>Breaking Form</i> work from
        1990s onwards and as The Dancer in <i>A Square Foot of Sky</i> project,
        2021
      </p>
    </>
  );
  const creditContent = (
    <>
      <p> Photography © Clare Park </p>
      <p> Website by Rowan Williams </p>
    </>
  );

  const photoContent = {
    links: false,
    titles: true,
    images: [
      {
        title: "BACK DROP from CURTAINS 2020 © Clare Park",
        image: backDrop,
      },
      {
        title: "IN SUSPENSE 3, FEBRUARY, from CURTAINS 2020 © Clare Park",
        image: inSuspense,
      },
      {
        title: "MARCH from SEEMS 2021 © Clare Park",
        image: marchSeems,
      },
      {
        title: "SYNCHRONICITY from FRIENDSHIP 2016 © Clare Park",
        image: synchronicity,
      },
      {
        title: "From A SQUARE FOOT OF SKY 2022 © Clare Park",
        image: lyric14,
      },
      {
        title: "From A SQUARE FOOT OF SKY 2022 © Clare Park",
        image: lyric1,
      },
      {
        title: "From 16 WONDERFUL WOMEN 1991 © Clare Park",
        image: lion,
      },
      {
        title: "Outtake from MAY I HAVE THE NEXT DANCE 1996 © Clare Park",
        image: outTake,
      },
      {
        title: "CELEBRATING from SERIES BLUE 2017 © Clare Park",
        image: celebrating,
      },
    ],
  };

  return (
    <Page
      navbar={true}
      homeColour="light"
      pageColour="light"
      backgroundImage={backgroundImage}
      leftContent={null}
      rightContent={rightContent}
      photoContent={photoContent}
      photoLinks={null}
      footerContent={footerContent}
      creditContent={creditContent}
    />
  );
};

export default Dancer;