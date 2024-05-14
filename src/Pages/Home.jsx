import React from "react";
import NewsBlock from "../Components/NewsBlock";
import { supporting } from "../Images/BreakingForm/breakingFormExport";
import Credits from "../Components/Credits";
import Footer from "../Components/Footer";
import { film } from "../Images/about/aboutExport";

const Home = () => {
  const backgroundImage = {
    image: supporting,
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
    <div className="page-main">
      <div
        className="page-background"
        style={{
          backgroundImage: "url(" + backgroundImage.image + ")",
          backgroundPosition: "center " + backgroundImage.position,
          backgroundSize: "1000px",
        }}
      />
      <div className="page-content">
        <div className="home-main">
            <video loop autoPlay={true} muted controls className="home-video">
                <source
                src={film}
                type="video/mp4"
                />
                Your browser does not support the video tag
            </video>
        </div>
        <div className="page-written">
            <NewsBlock 
                title="Testing Title"
                pictureSrc={backgroundImage}
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
