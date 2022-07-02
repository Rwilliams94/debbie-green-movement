import React from "react";
import Page from "../Components/page";
import { supporting } from "../Images/BreakingForm/breakingFormExport";
import {
  sceneChange,
  proof8200,
  despoliationDecimation,
  kinesphere,
  seems2,
  seriesBlue,
  toeTheLine,
  curtains2020,
  squareFootCover,
  breakingFormCover,
} from "../Images/directorAndCollab/directorExport";

const CreativeDirector = () => {
  const backgroundImage = {
    image: supporting,
    position: "0px",
  };
  const leftContent = (
    <>
      <h4><i>Breaking Form: Re-Formed</i></h4>
      <img
        className="breakingForm-book-image"
        src={breakingFormCover}
        alt="Breaking Form Book Cover"
      />
      <p>
        photography by Clare Park, design by Matilda Williams, was
        self-published in 2019. It encompasses the series <i>‘Breaking Form: Buz
        and Parkinson’s’</i> developed over two decades by Buz, my husband, Clare
        and I, and ends with selected imagery Clare and I made from 2014 after
        Buz’s death that reconnects with our previous work.
      </p>

      <p>
        Buy now - email:{" "}
        <a href="mailto: clarepark@hotmail.com">clarepark@hotmail.com</a>..
        Paperback, 112 pages, 250x170mm, Printed by LD Print Ltd. £18.99
        (excluding postage)
      </p>
      <h4><i>A Square Foot of Sky 2021/2</i></h4>
      <img
        className="squareFoot-book-image"
        src={squareFootCover}
        alt="Square Foot of Sky Book Cover"
      />
      <p>
        self-published in May 2022, is a book of poetry and images, poetry by
        Anne Gruenberg, photography by Clare Park, edited by Kelly Davis,
        designed by Matilda Williams, with me as ‘The Dancer’. The Dancer is an
        expressive conduit to Anne’s poetry of her experience of thirteen years
        of incarceration in psychiatric institutions. Anne sourced the
        ‘theatrical/archetypal’ red dress worn by The Dancer who is seen moving
        in different landscapes with different props. This combination creates
        the heightened reality and mythic quality redolent in each image. The
        poems and images interact, text and photographs speaking to each other
        in a unique way.
      </p>

      <p>
        Buy now - email:{" "}
        <a href="mailto: clarepark@hotmail.com">clarepark@hotmail.com</a>.
        Paperback, 152 pages, 210x210mm, Printed by LD Print Ltd. £14.95
        (excluding postage)
      </p>
    </>
  );

  const rightContent = (
    <>
      <h1>Co-Creative Director & Collaborator</h1>
      <p>
        As a teacher, I have developed work in relation to other
        tutors/practitioners even as I have taught alone. This encompasses
        exploratory performance, dance and movement work I did with Sue Weston{" "}
        <a
          href="https://www.sueweston.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Relaxing the Mind)
        </a>
        , and long term with Vanessa Ewan at Royal Central School of Speech and
        Drama including co-authoring{" "}
        <i>Actor Movement: Expression of the Physical Being</i>, Bloomsbury,
        2015.
      </p>
      <p>
        Outside of teaching, since the early 80’s, has been my unique artistic
        collaboration with friend and photographer{" "}
        <a
          href="https://www.clarepark.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clare Park
        </a>
      </p>
      <h4>Performative photographic collaboration:</h4>
      <p>
        Clare and I have developed our work together over many years - she as
        photographer and me as ‘subject’ - producing images for exhibition and
        publication. We have produced the series: 16 Wonderful Women; Breaking
        Form: Buz and Parkinson’s; Series Yellow; Friendship; Series Blue
        (includes my own photographic landscapes within the montages);
        W(h)arming; Curtains, Seems 2021 and 66/22.
      </p>

      <p>
        Our images are autobiographical and theatrical, using props, recurring
        themes and locations as we create our narratives often in response to
        the zeitgeist. Each picture is the outcome of the high jinks of our
        joint creativity as sole crew, hard graft and commitment to a
        co-conceived objective with either one or both in front of the camera.
      </p>
      <h4>Consultation:</h4>
      <p>
        My work has the potential to take me into a consultative role within the
        creative process of recorded, live and ensemble ‘theatre’ production.{" "}
      </p>
      <p>
        Having worked within a professional capacity both as a dancer and
        choreographer and then spent the last thirty years as teacher of Actor
        Movement at Royal Central School of Speech & Drama, I have an
        experienced and critical eye for movement as well as connection to
        silence, sound and music.
      </p>
    </>
  );
  const footerContent = (
    <>
      <p>
        Performative imagery in collaboration with{" "}
        <b>photographer Clare Park</b>, from our <i>Breaking Form</i> work from 1990s onwards
        and as The Dancer in <i>A Square Foot of Sky</i> project, 2021
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
        title: "SCENE CHANGE from CURTAINS 2020 © Clare Park",
        image: sceneChange,
      },
      {
        title: "DESPOILATION, DECIMATION, DESICCATION. 2015 © Clare Park",
        image: despoliationDecimation,
      },
      {
        title: "From SERIES YELLOW 2015 © Clare Park",
        image: proof8200,
      },
      {
        title: "KINESPHERE from FRIENDSHIP 2016 © Clare Park",
        image: kinesphere,
      },
      {
        title: "JULY: NOURISH from CURTAINS 2020 © Clare Park",
        image: curtains2020,
      },
      {
        title: "TOE THE LINE from A SQUARE FOOT OF SKY © Clare Park",
        image: toeTheLine,
      },
      {
        title: "From SERIES BLUE 2017 © Clare Park",
        image: seriesBlue,
      },
      {
        title: "SEEMS 2021 © Clare Park",
        image: seems2,
      },


    ],
  };

  return (
    <Page
      navbar={true}
      homeColour={"light"}
      pageColour={"light"}
      backgroundImage={backgroundImage}
      leftContent={leftContent}
      rightContent={rightContent}
      photoContent={photoContent}
      photoLinks={null}
      footerContent={footerContent}
      creditContent={creditContent}
    />
  );
};

export default CreativeDirector;

/* <h1>Shared project:</h1>
    <p>
      The Lyric “I”, is a narrative photographic series interpreting our
      friend Anne Gruenberg’s poetry from her experience of incarceration in
      psychiatric institutions. I perform ‘The Dancer’, the central image, who
      for Clare and I is an expressive conduit to Anne’s work; Anne’s
      creativity as a theatre designer was rekindled with our idea of The
      Dancer as protagonist. Anne sourced the ‘theatrical/archetypal’ red
      dress worn by The Dancer who is seen moving in different landscapes with
      different props. This combination creates the heightened reality,
      symbolism and spirituality redolent in each colour image. The poems and
      images interact, text and photographs speaking to each other in a unique
      way, in the book A Square Foot of Sky, edited by Kelly Davis, designed
      by Matilda Williams.
    </p>
    <p>
      <i>A Square Foot of Sky will be</i>
      published in Autumn 2021. See" "}
      <a
        href="https://www.clarepark.com/books-fpxw"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.clarepark.com
      </a>{" "}
      for further information.
    </p> */
