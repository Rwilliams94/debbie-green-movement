import React from "react";
import Page from "../Components/page";
import { usePopup } from '../PopupContext';
import { web04, web01, poster, crickmayLogo } from "../Images/iTurnedAndLooked/iTurnedAndLookedExport";
import { iTurnedAndLooked as iTurnedAndLookedHome } from "../Images/work/workExport";

const ITurnedAndLooked = () => {
  const { openPopup } = usePopup();

  const leftContent = (
    <>
      <h1>I TURNED AND LOOKED</h1>
      <img
        src={poster}
        alt="I Turned and Looked poster"
        style={{ width: '100%', cursor: 'pointer', marginBottom: '16px' }}
        onClick={() => openPopup(poster)}
      />
      <div>
        <h5>A Music &amp; Being installation</h5>
        <h5>Severn Studio at Brantwood, Coniston</h5>
        <h5>July 11th – August 31st</h5>
      </div>
      <br />
      <p>
        <a href="https://www.jessdandycontralto.com/" target="_blank" rel="noopener noreferrer">
          Jess Dandy, contralto
        </a>
      </p>
      <p>
        <a href="https://www.debbiegreenmovement.com/" target="_blank" rel="noopener noreferrer">
          Debbie Green, movement
        </a>
      </p>
      <p>
        <a href="https://www.alexmills.info/" target="_blank" rel="noopener noreferrer">
          Alex Mills, composer
        </a>
      </p>
      <p>
        <a href="https://www.clarepark.com/" target="_blank" rel="noopener noreferrer">
          Clare Park, photographer
        </a>
      </p>
      <p>
        <a href="https://askonasholt.com/artist/dylan-perez" target="_blank" rel="noopener noreferrer">
          Dylan Perez, piano
        </a>
      </p>
      <p>
        <a href="https://bobbywilliams.co.uk/" target="_blank" rel="noopener noreferrer">
          Bobby Williams, sound
        </a>
      </p>
    </>
  );

  const rightContent = (
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
        practitioners in their fields. They first came to stay in the Lake District at
        Brantwood House, Coniston in February 2024, to create a body of work in which music
        and photography converse.
      </p>
      <p>
        The project's source was <i>Vier Ernste Gesänge</i> (Four Serious Songs) by Johannes
        Brahms, with his setting of Martin Luther's 16th century translation of Biblical texts
        and Apocrypha.
      </p>
      <p>
        <i>
          "To choreographically respond to the text of Brahms 'Four Serious Songs' was my
          first layer of discovery…"
        </i>{" "}
        Debbie
      </p>
      <p>
        United in their belief that the arts can heal both psychologically and spiritually,
        during five residencies over two years, the artists have interrogated how such a
        monumental work by Brahms - which beautifully and brutally confronts the paradox of
        human life, birth to death - can syncretise landscape, memory and personal histories
        to inspire new work.
      </p>
      <p>
        Ruskin's <i>Nature of the Gothic</i> was an invitation to the group to 're-wild' and
        to have personal relationships with the earth, their repertoire, their bodies, and
        minds. Along with his reference to savageness, these formed further layers or seams
        for freedom and individuality within the collaborative devising process. The group
        wanted to weave a web of mutually illuminating personal threads, open to constant
        change and evolution, in which each of them would be given the space and support to
        creatively individuate within an artistic whole – thus their love of variety,
        generosity, changefulness and enchantment. The work does not shy away from opening
        eyes to the web of natural, industrial and cultural interconnections, and to stories
        that did not make the postcards.
      </p>
      <p>
        <i>
          "What initially held my eye were the enormous heaps of spoil in the Coniston Copper
          Mines valley, and the stones called out for the introduction of a person into my
          frame. The collaborative process with movement artist Debbie Green developed from
          this place, informed by the music and our fellow artists. Human condition and land
          interconnect within the photographs under Ruskin's 'supervision' and by the re-using
          of elements from our previous shoots made over 30 years, in combination with the
          ingrained aesthetics of our dance training. I TURNED AND LOOKED speaks for all
          places even though it has emerged from one."
        </i>{" "}
        Clare
      </p>
      <p>
        <i>
          "Ruskin's writings on Truth as Impression influence both the photographic and musical
          use of montage, showing reality to be greater than the mere chronicling of 'fact'.
          It is not without thought however that the protagonist of this piece is a mature
          female body and a mature female voice. Running through this forest of symbols is the
          figure of Hengerdd — from Old Cumbric, carrying the sense of Old Song. It is her
          world that we encounter in the Severn Studio. Hengerdd is not simply a character,
          but the ensouled Earth itself, an animating force, a visionary into the imaginal
          realm. Masked and unmasked, it is this multiform Hengerdd, we glimpse – like a wild
          animal – in the photographs. We hear her voice in the music and spoken word,
          oracular, chthonic, invocatory. The music she leaves with her footsteps becomes a
          glistening trail, her spoor, a matrix of Old Song."
        </i>{" "}
        Jess
      </p>
      <p>
        The stylised mask finds expression through Debbie's movement, demands nuanced
        physicality and supplies provocation with its gaze, emphasising the need to both see
        and listen. The figure free of the mask offers a sensual connection to the landscape
        from inner attention as opposed to the directed outer focus of the mask.
      </p>
      <p>
        <i>
          "As photographic subject, my movement artist expressivity burgeons in front of the
          camera yet in total integration with Clare. We find rich symbolism through our
          language of props and clothing. Even so, great was my surprise emerging as Hengerdd
          - protagonist, narrator and visionary of I TURNED AND LOOKED."
        </i>{" "}
        Debbie
      </p>
    </>
  );

  const creditContent = (
    <>
      <p> Photography © Clare Park </p>
      <p> Digital Artwork by Matthew Tugwell </p>
      <p> None of the images are AI generated </p>
      <p> In memory of photographer Anthony Crickmay </p>
      <img
        src={crickmayLogo}
        alt="Anthony Crickmay Charitable Settlement"
        style={{ height: '40px', marginTop: '8px' }}
      />
      <p> Website by Rowan Williams </p>
    </>
  );

  return (
    <Page
      navbar={true}
      homeColour={"dark"}
      pageColour={"dark"}
      backgroundImage={null}
      rightContent={rightContent}
      leftContent={leftContent}
      photoContent={{
        links: false,
        titles: false,
        images: [
          { image: iTurnedAndLookedHome },
          { image: web01 },
          { image: web04 },
        ],
      }}
      footerContent={null}
      creditContent={creditContent}
    />
  );
};

export default ITurnedAndLooked;
