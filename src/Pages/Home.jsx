import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Home.css";
import NewsBlock from "../Components/NewsBlock";
import { beyondReach } from "../Images/BreakingForm/breakingFormExport";
import { marchSeems } from "../Images/dancer/dancerExport";
import { headshot } from "../Images/directorAndCollab/directorExport";
import { musicAndBeing1, theLyric } from "../Images/work/workExport";
import { poster as iTurnedAndLookedPoster } from "../Images/iTurnedAndLooked/iTurnedAndLookedExport";
import Credits from "../Components/Credits";
import Footer from "../Components/Footer";

const Home = () => {
  const backgroundImage = {
    image: marchSeems,
    position: "0px",
  };
  const footerContent = (
    <>
    </>
  );
  const creditContent = (
    <>
      <p> Photography © Clare Park </p>
      <p> Website by Rowan Williams </p>
    </>
  );

  const pushingBoundariesContent = (
    <>
      <p>
        Debbie is one of fifteen 50+yrs dancers accepted for ‘Pushing Boundaries’,
        an Encore East ACE funded dance research residency with choreographer Galit Liss
        at University of Chichester Campus, 20th - 24th May 2026. The dancers will present
        a performative work process developed during the residency at the
        ‘What Dance Can Do’ Galit Liss symposium at the University of Chichester, 24th May 2026.
      </p>
      <p> Photograph © Clare Park </p>
    </>
  )

  const brantwoodContent = (
    <>
      <p>
        I TURNED AND LOOKED is a music and photography installation by Music &amp; Being
        from July 11th to August 31st in the Severn Studio at Brantwood, Coniston – the
        home of 19th century polymath, John Ruskin.
      </p>
      <p>
        <i>
          "Part listening room, part secular chapel, I TURNED AND LOOKED invites visitors
          into an ecological matrix in which sound, image, history, and the more-than-human
          world are woven together in one charged and living space."
        </i>{" "}
        Jess
      </p>
      <p>
        A like-minded, intergenerational group of six collaborators brought together by
        Cumbrian contralto &amp; Brantwood artist-in-residence, Jess Dandy, Music &amp; Being
        comprises Jess Dandy, movement artist Debbie Green, composer Alex Mills, photographer
        Clare Park, pianist Dylan Perez and recording engineer Bobby Williams, each leading
        practitioners in their fields...{" "}
        <NavLink to="/iturnedandlooked" style={{ color: "#555", fontStyle: "italic" }}>
          read more
        </NavLink>
      </p>
      <p> Photograph © Clare Park </p>
    </>
  )

  const musicBeingContent = (
    <>
      <p>
        Launch of Music and Being Collective, 09.02.23 at LUMA presented by AORA.
        I am Meditation Leader in ‘About A Place’ – a guided musical mediation by composer Alex Mills.
      </p>
      <p> Photograph © Clare Park </p>
    </>
  )

  const breakingFormContent = (
    <>
      <p>
      A self-published book of personal writings and photographs. 
      ‘Breaking Form: Buz and Parkinson’s’ was developed over two decades 
      by my husband Buz Williams and myself and photographer Clare Park, and 
      ‘Breaking Form’, Clare’s and my work, from 2015. Designed by Matilda Cicely, 
      Buz’s and my daughter.
      </p>
      <p>
        <b>
          Buy now - email: clareparkphoto@hotmail.com. Paperback, 112 pages, 
          250x170mm, Printed by LD Print Ltd. £18.99 (excluding postage) by 
          cheque or bank transfer.
        </b>
      </p>
      <p> Photograph © Clare Park </p>
    </>
  )

  const theLyricContent = (
    <>
      <p>
        The Lyric “I”, 2021, is a narrative photographic series by Clare and I 
        that interprets/visually imagines Anne Gruenberg’s poetry and is included 
        in our self-published book A Square Foot of Sky. I perform ‘The Dancer’ 
        who portrays the desolation and reawakening from Anne’s mental breakdown 
        over a 12-year period in secure institutions. For Clare and I, The Dancer 
        is the expressive conduit to Anne’s work; Anne’s creativity as a theatre 
        designer was rekindled with the idea of The Dancer as protagonist. 
        The Dancer wears the theatrical/archetypal red dress Anne sourced; she 
        moves in different landscapes with different props. It is this combination 
        that creates the heightened reality, symbolism, and spirituality redolent 
        in each colour image.
      </p>
      <p>
        <b>
          Buy now - email: clareparkphoto@hotmail.com. Paperback, 152 pages, 210x210mm, 
        Printed by LD Print Ltd. £14.95 (excluding postage) by cheque or bank transfer
        </b>
      </p>
      <p> Photograph © Clare Park </p>
    </>
  )



  return (
    <div className="home-main">
      <div
        className="home-background"
        style={{
          backgroundImage: "url(" + backgroundImage.image + ")",
          backgroundPosition: "center " + backgroundImage.position,
          backgroundSize: "1000px",
        }}
      />
      <div className="home-content">
        <div className="home-written">
          <h2>Latest Projects</h2>
          <NewsBlock
            title={`"I turned and looked" - a Music and Being project:`}
            pictureSrc={iTurnedAndLookedPoster}
            content={brantwoodContent}
            link="/iturnedandlooked"
          />
          <NewsBlock
            title="Pushing Boundaries"
            pictureSrc={headshot}
            content={pushingBoundariesContent}
          />
          <NewsBlock
            title="Music and Being Collective"
            pictureSrc={musicAndBeing1}
            content={musicBeingContent}
          />
          <NewsBlock
            title="Breaking Form: Re-Formed"
            pictureSrc={beyondReach}
            content={breakingFormContent}
          />
          <NewsBlock
            title={`The Lyric "I"`}
            pictureSrc={theLyric}
            content={theLyricContent}
          />

        </div>
        <div className="page-footer">
          <Footer content={footerContent} />
          <Credits content={creditContent} />
        </div>
      </div>
    </div>
  );
};

export default Home;


// {/* <div className="home-main">
//     <video loop autoPlay={true} muted controls className="home-video">
//         <source
//         src={film}
//         type="video/mp4"
//         />
//         Your browser does not support the video tag
//     </video>
// </div> */}
