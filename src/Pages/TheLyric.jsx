import React from "react";
import Page from "../Components/page";
import { lyricNumberOne, lyricNumberFourteen, lyricAnnesPoems } from "../Images/lyric/lyricExport";
import { toeTheLine } from "../Images/directorAndCollab/directorExport";

const Lyric = () => {
  const backgroundImage = {
    image: lyricNumberOne,
    position: "0px",
  };
  const rightContent = (
    <>
      <div>
        <h5>Performative photographic collaboration</h5>
        <h5>Photography © Clare Park</h5>
        <h5>2021</h5>
      </div>
    </>
  );
  const leftContent = (
    <>
      <h1>The Lyric</h1>
      <p>
        The Lyric “I”, 2021, is a narrative photographic series by Clare and
        I, that interprets/re-images Anne Gruenberg’s poetry. I perform ‘The
        Dancer’ who portrays the desolation and reawakening from Anne’s mental
        breakdown over a 12year period in secure institutions. For Clare and I
        The Dancer is the expressive conduit to Anne’s work; Anne’s creativity
        as a theatre designer was rekindled with the idea of The Dancer as
        protagonist. The Dancer wears the ‘theatrical/archetypal’ red dress
        Anne sourced; she moves in different landscapes with different props.
        It is this combination that creates the heightened reality, symbolism
        and spirituality redolent in each colour image.
      </p>
    </>
  );
  const photoContent = {
    links: false,
    titles: true,
    images: [
      {
        title: "THE LYRIC I number nine P2 2021 © Clare Park",
        image: lyricNumberFourteen,
      },
      {
        title: "THE LYRIC I number fourteen P2 2021 © Clare Park",
        image: toeTheLine,
      },
      {
        title: "THE LYRIC I Air 2021 © Clare Park",
        image: lyricNumberOne,
      },
      {
        title: "THE LYRIC I From The Series Anne's Poems 2021 © Clare Park",
        image: lyricAnnesPoems,
      },
    ],
  };
  return (
    <Page
      navbar={true}
      homeColour={"dark"}
      pageColour={"dark"}
      backgroundImage={backgroundImage}
      rightContent={rightContent}
      leftContent={leftContent}
      photoContent={photoContent}
      footerContent={null}
    />
  );
};

export default Lyric;
