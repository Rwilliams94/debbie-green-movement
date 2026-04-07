import React from "react";
import Page from "../Components/page";
import { usePopup } from '../PopupContext';
import { beyondReach, holdOnToYourHat, supporting, bookWeb } from "../Images/BreakingForm/breakingFormExport";
import { theWhiteRabbit } from "../Images/directorAndCollab/directorExport";


const BreakingForm = () => {
  const { openPopup } = usePopup();
  const backgroundImage = {
    image: beyondReach,
    position: "0px",
  };
  const imageSource = bookWeb;
  const rightContent = (
    <>
      <img
        className="breakingForm-book-image"
        src={imageSource}
        alt="Breaking Form Book Cover"
        style={{ cursor: 'pointer' }}
        onClick={() => openPopup(imageSource)}
      />
      <h4>Performative photographic collaboration</h4>
      <h4>Photography © Clare Park</h4>
      <h4>Designed by Matilda Williams</h4>
      <h4>2019</h4>
    </>
  );
  const leftContent = (
    <>
      <h1>Breaking Form: Re-Formed</h1>
      <p>
        A photographic project and unique collaboration between three people:
        Breaking Form: Buz and Parkinson’s was developed over two decades by Buz
        Williams, his wife, actor movement specialist Debbie Green, and
        photographer Clare Park.
      </p>
      <p>
        The narrative imagery derives from Debbie and Clare’s friendship, the
        three collaborators’ backgrounds in theatre, dance and movement, and
        Buz’s illness. The pictures and words provided a context in which Buz
        could communicate in his inimitable style when control was diminishing
        in his everyday life.
      </p>
      <p>
        Buz was diagnosed at 29 and lived with Parkinson’s for more than thirty
        years until his death in 2014. Since then Clare and Debbie have
        continued making photographs, inspired by their relationship as artistic
        collaborators.
      </p>
      <p>
        Breaking Form: Re-Formed emerged as an evocation of their realities -
        losses and frailties, curiosity and optimism - and as a salute to the
        spirit of Buz.
      </p>
      <p>
        <b>
          Buy now - email: clareparkphoto@hotmail.com - you can pay by cheque or
          bank transfer
        </b>
      </p>
      <p>Price: £18.99 (excluding postage)</p>
      <br />
      <p>
        <b>
          Clare Park, photographer, and I have developed our work in Breaking
          Form over many years producing images for exhibition, competition and
          publication. Our images are autobiographical and theatrical, using
          props, recurring themes and locations as we create our narratives
          often in response to the zeitgeist. Each picture is the outcome of the
          high jinks of our joint creativity as sole crew and hard graft and
          commitment to a co-conceived objective with either one or both in
          front of the camera.
        </b>
      </p>
      <p>Debbie Green</p>
    </>
  );

  const photoContent = {
    links: false,
    titles: true,
    images: [
      {
        title: "Hold On To Your Hat © Clare Park",
        image: holdOnToYourHat,
      },
      {
        title: "The White Rabbit © Clare Park",
        image: theWhiteRabbit,
      },
      {
        title: "Beyond Reach from series Yellow © Clare Park",
        image: beyondReach,
      },
      {
        title: "Supporting from series Blue 2021 © Clare Park",
        image: supporting,
      },
    ]
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

export default BreakingForm;
