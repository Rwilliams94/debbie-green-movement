import React from "react";
import "./Home.css";
import NewsBlock from "../Components/NewsBlock";
import { supporting, beyondReach } from "../Images/BreakingForm/breakingFormExport";
import { marchSeems, outTake } from "../Images/dancer/dancerExport";
import Credits from "../Components/Credits";
import Footer from "../Components/Footer";
// import { film } from "../Images/about/aboutExport";

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
  
  const boxContent = (
    <>
        <p>
            I am a creative who works well with others. I have an experienced and
            critical eye for movement as well as connection with silence, sound and
            music having worked within a professional capacity both as a dancer and
            choreographer. I have spent the last thirty years as teacher of Actor
            Movement at Royal Central School of Speech & Drama, including
            co-authoring <i>Actor Movement: Expression of the Physical Being</i>,
            Bloomsbury, 2015.
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
            <NewsBlock 
                title="Testing Title"
                pictureSrc={outTake}
                content={boxContent}

            />
            <NewsBlock 
                title="Testing Title"
                pictureSrc={supporting}
                content={boxContent}

            />
            <NewsBlock 
                title="Testing Title"
                pictureSrc={marchSeems}
                content={boxContent}

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
