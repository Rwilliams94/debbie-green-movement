import React from "react";
import "../Styles/Home.css";
import NewsBlock from "../Components/NewsBlock";
import { beyondReach } from "../Images/BreakingForm/breakingFormExport";
import { marchSeems} from "../Images/dancer/dancerExport";
import { musicAndBeing1, theLyric} from "../Images/work/workExport";
import Credits from "../Components/Credits";
import Footer from "../Components/Footer";

const Home = () => {
  const backgroundImage = {
    image: marchSeems,
    position: "0px",
  };
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
  
  const musicBeingContent = (
    <>
        <p>
        Launch of Music and Being Collective, 09.02.23 at LUMA presented by AORA.
        Here as Meditation Leader in About A Place – a guided musical mediation by Alex Mills (composer).
        More information can be found via the {" "}
          <a href="https://issuu.com/royalphotographicsociety/docs/june_2023_we_are_magazine_final_23-_ff483e95440cdb?fr=sMTZjYTU5NTAxNDg">
            Royal Photographic Society
          </a>
        {" "} on page 30
        </p>
    </>
  )

  const breakingFormContent = (
    <>
        <p>
          A photographic project and unique collaboration between three people:
          Breaking Form: Buz and Parkinson’s was developed over two decades by Buz
          Williams, his wife, actor movement specialist Debbie Green, and
          photographer Clare Park.
        </p>
        <p>
        <b>
          Buy now - email: clareparkphoto@hotmail.com - you can pay by cheque or
          bank transfer
        </b>
      </p>
      <p>Price: £18.99 (excluding postage)</p>
    </>
  )

  const theLyricContent = (
    <>
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
                title="The Lyric"
                pictureSrc={theLyric}
                content={theLyricContent}

            />

        </div>
        <div className="page-footer">
          <Footer content={footerContent} />
          <Credits content={creditContent}/>
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
