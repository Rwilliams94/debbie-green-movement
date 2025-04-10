import React from "react";
import { NavLink } from "react-router-dom";
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
  const leftContent = (
    <>
      <h1>Dancer</h1>
      <p>
        I am an ex-professional dancer. Dance has been an inspiration in my
        life. Trained in classical ballet (Rambert School of Ballet) and having
        danced professionally, I went on to explore other dance and movement
        forms throughout my career. In the 1980s, I became a choreographer for
        theatre, film, TV commercials and video promos. I gained my MA in
        Movement Studies at Laban Centre for Movement and Dance prior to my work
        in teaching movement for actors.
      </p>
      <p>
        As the dancer progresses through the years and experiences her body
        differently technique and self-awareness are pre-requisite. I can look
        to the younger generation of dance artists, and continue that love for
        dance, as well as offer my own experience and inner connection to it.
      </p>
      <p>
        I am interested in participating in new dance projects. For dancer work
        enquiries please{" "}
        <NavLink exact to="/Contact">
          contact me
        </NavLink>
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
      rightContent={null}
      leftContent={leftContent}
      photoContent={photoContent}
      photoLinks={null}
      footerContent={footerContent}
      creditContent={creditContent}
    />
  );
};

export default Dancer;
