import React from "react";
import Page from "../Components/page";
import { usePopup } from '../PopupContext';


const BreakingForm = () => {
  const { openPopup } = usePopup();
  const backgroundImage = {
    image:
      'https://res.cloudinary.com/dahzswwzk/image/upload/v1637102555/BEYOND_REACH_FROM_SERIES_YELLOW_2015_xwpknh.jpg',
    position: "0px",
  };
  const imageSource = "https://res.cloudinary.com/dahzswwzk/image/upload/v1637102555/BOOK_web_m2uquz.jpg"
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
        image:
          "https://res.cloudinary.com/dahzswwzk/image/upload/v1637102555/HOLD_ON_TO_YOUR_HAT_out-take_1_lmhyax.jpg",
      },
      {
        title: "The White Rabbit © Clare Park",
        image:
          "https://res.cloudinary.com/dahzswwzk/image/upload/v1637093496/THE_WHITE_RABBIT_from_Breaking_Form__Buz_and_Parkinson_s_cxk1db.jpg",
      },
      {
        title: "Beyond Reach from series Yellow © Clare Park",
        image:
          "https://res.cloudinary.com/dahzswwzk/image/upload/v1637102555/BEYOND_REACH_FROM_SERIES_YELLOW_2015_xwpknh.jpg",
      },
      {
        title: "Supporting from series Blue 2021 © Clare Park",
        image:
          "https://res.cloudinary.com/dahzswwzk/image/upload/v1637102555/SUPPORTING_FROM_SERIES_BLUE_2017_vp4jwc.jpg",
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
