import React from "react";
import Page from "../Components/page";
import {
  books,
  actorMovementCover,
} from "../Images/actorMovement/actorMovementExport";
import { usePopup } from '../PopupContext';

const ActorMovement = () => {
  const { openPopup } = usePopup();
  const backgroundImage = {
    image: books,
    position: "-0px",
  };
  const rightContent = (
    <>
      <img
        className="actorMovement-book-image"
        src={actorMovementCover}
        alt="Actor Movement Book Cover"
        style={{ cursor: 'pointer' }}
        onClick={() => openPopup(actorMovementCover)}
      />
    </>
  );

  const leftContent = (
    <>
      <h1>Actor Movement Specialist</h1>
      <p>
        I worked for three decades as Tutor/Senior Lecturer at Royal Central
        School of Speech & Drama on BA Acting, my subject: Movement Fundamentals
        for the actor.
      </p>
      <div>
        My Specialisms:
        <p></p>
        <ul>
          <li>
            - Intro to Fundamentals: free flow/support; release through and of
            movement; technical experience;
          </li>
          <ul>
            <li>
              • see Debbie Green and Ita O'Brien{" "}
              <a href="https://doi.org/10.1080/19443927.2011.651536">
                `'From grounded foot to leaping foot'`
              </a>
              , <i>Theatre, Dance and Performance Training</i>, Vol 3, 2012 -
              Issue 1
            </li>
            <li>
              • see Boston. J., Cook. R. (eds) <i>Breath in Action</i>{" "}
              <a href="https://uk.jkp.com/products/breath-in-action?_pos=1&_sid=41a844888&_ss=r">
                Integrated Movement Practices and the Breath
              </a>
            </li>
          </ul>
          <li>- Movement qualities through rhythm;</li>
          <li>- Contact Improvisation for actors;</li>
          <li>- Presence and posture in the space;</li>
          <li>- Sensual and energetic body.</li>
        </ul>
      </div>
      <p>
        I worked in tandem with my colleague Vanessa Ewan with whom I
        co-authored{" "}
        <a href="https://www.bloomsbury.com/uk/actor-movement-9781408134412/">
          Actor Movement; Expression of the Physical Being
        </a>
        , Bloomsbury 2015.
      </p>
    </>
  );

  const creditContent = (
    <>
      <p> Website by Rowan Williams </p>
    </>
  );

  return (
    <Page
      navbar={true}
      homeColour={"light"}
      pageColour={"light"}
      backgroundImage={backgroundImage}
      rightContent={rightContent}
      leftContent={leftContent}
      photoContent={null}
      footerContent={null}
      creditContent={creditContent}
    />
  );
};

export default ActorMovement;
