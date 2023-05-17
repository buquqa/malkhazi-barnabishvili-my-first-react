import laptop from "../.././assets/laptop.jpg";
import awesome from "../.././assets/awesome.gif";
import live from "../.././assets/livedemo40.jpg";
import suppor from "../.././assets/supporter2.jpg";
import jquare from "../.././assets/jquary.png";
import tomany from "../.././assets/many-img-two.jpg";

const Laptop = () => {
  return (
    <section className="title-laptop">
      <div className="wraptext-laptop">
        <div>
          <h5>BEST UI/UX</h5>
          <h2>
            No <br />
            Compromising <br />
            With Quality
          </h2>
        </div>
        <div>
          <h3>Effective UX Design</h3>
          <p>
            All Demos are made with clear,
            <br />
            concise, useful,
            <br />
            minimal and modern design pattern
          </p>
        </div>
        <div className="linehr"></div>
        <div>
          <h3>Effective UX Design</h3>
          <p>
            All Demos are made with clear,
            <br />
            concise, useful,
            <br />
            minimal and modern design pattern
          </p>
        </div>
      </div>
      <div className="laptop">
        <figure>
          <img src={laptop} alt="" />
        </figure>
      </div>
    </section>
  );
};
const Awesome = () => {
  return (
    <section className="awesome">
      <div className="awesome-one">
        <h2>Awesome Coding Style</h2>
        <figure>
          <img src={awesome} alt="" />
        </figure>
      </div>
    </section>
  );
};
const Otherthree = () => {
  return (
    <section className="another-three">
      <div>
        <figure>
          <a href="#">
            <img src={live} alt="" />
          </a>
        </figure>
      </div>
      <div>
        <figure>
          <a href="#">
            <img src={live} alt="" />
          </a>
        </figure>
      </div>
      <div>
        <figure>
          <a href="#">
            <img src={live} alt="" />
          </a>
        </figure>
      </div>
    </section>
  );
};

const Supporterstitle = () => {
  return (
    <section className="suporter-title">
      <div>
        <h5>Support Team</h5>
        <h2>Our Dedicated Support Team</h2>
        <h2>For Help You All Time</h2>
      </div>
    </section>
  );
};
const Supporters = () => {
  return (
    <section className="suporters">
      <div>
        <figure>
          <img src={suppor} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={suppor} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={suppor} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={suppor} alt="" />
        </figure>
      </div>
    </section>
  );
};
const Coretitle = () => {
  return (
    <section className="core-title">
      <div>
        <h5>CORE FEATURES</h5>
        <h2>Constantly update with</h2>
        <h2>New Features.</h2>
      </div>
    </section>
  );
};
const Coretitleone = () => {
  return (
    <section className="core-lineone">
      <div>
        <figure>
          <img src={jquare} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={jquare} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={jquare} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={jquare} alt="" />
        </figure>
      </div>
    </section>
  );
};
const Corelinetwo = () => {
  return (
    <section className="core-lineone">
      <div>
        <figure>
          <img src={jquare} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={jquare} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={jquare} alt="" />
        </figure>
      </div>
      <div>
        <figure>
          <img src={jquare} alt="" />
        </figure>
      </div>
    </section>
  );
};
const Manyimgtwo = () => {
  return (
    <section className="many_img_two">
      <div>
        <figure>
          <img src={tomany} alt="" />
        </figure>
      </div>
    </section>
  );
};

export {
  Laptop,
  Awesome,
  Otherthree,
  Supporterstitle,
  Supporters,
  Coretitle,
  Coretitleone,
  Corelinetwo,
  Manyimgtwo,
};
