import imgs from "../.././assets/livedemo1.jpg";
import html5 from "../.././assets/html5.png";

const Sectionfirst = () => {
  return (
    <section className="many-img">
      <h2>
        The #1 Best Selling IT Solution And <br />
        Multi-Purpose HTML5 Template
      </h2>
      <p>
        A high-performant Multi-Purpose WordPress theme <br />
        suitable for any king of WordPress project
      </p>
    </section>
  );
};
const Programlanguages = () => {
  return (
    <div className="proglang">
      <figure className="wrapper-lang">
        <img src={html5} alt="" />
        <img src={html5} alt="" />
        <img src={html5} alt="" />
        <img src={html5} alt="" />
      </figure>
    </div>
  );
};
const Packagesection = () => {
  return (
    <section className="package">
      <div className="single-price">
        <h2>
          All In One HTML5 Package <br />
          For a Single Price
        </h2>
      </div>
      <div className="ready-home">
        <h2>
          40+ <br />
          <span> Ready Home Page</span>
        </h2>
      </div>
      <div className="ready-inner">
        <h2>
          170+ <br />
          <span>Ready Inner Page</span>
        </h2>
      </div>
    </section>
  );
};

const Secondnavigation = () => {
  return (
    <section className="second-nav">
      <div className="second-navh">
        <h2>
          50+ Stunning and <br />
          Unique Demos
        </h2>
      </div>
      <div className="second-navdiv">
        <nav>
          <ul>
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">ITS SOLUTION</a>
            </li>
            <li>
              <a href="#">BUISNES</a>
            </li>
            <li>
              <a href="#">AGENCY</a>
            </li>
            <li>
              <a href="#">NEW DEMO</a>
            </li>
            <li>
              <a href="#">STARTUP</a>
            </li>
            <li>
              <a href="#">CONSULTING</a>
            </li>
            <li>
              <a href="#">FINANCE</a>
            </li>
            <li>
              <a href="#">DATA SCIENCE</a>
            </li>
            <li>
              <a href="#">SEO</a>
            </li>
            <li>
              <a href="#">MARKETING</a>
            </li>
            <li>
              <a href="#">ODDO</a>
            </li>
            <li>
              <a href="#">INSURANCE</a>
            </li>
            <li>
              <a href="#">DARK</a>
            </li>
            <li>
              <a href="#">LANDING</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
const Threeimages = () => {
  return (
    <section className="threeimg">
      <div className="livedemo1">
        <figure className="figuredemo1">
          <a href="./index.html">
            <img src={imgs} alt="" />
          </a>
          <h2>
            Main Home <br />
            <span> Main Home, IT Solution, Business</span>
          </h2>
        </figure>
      </div>
      <figure className="livedemo2">
        <div className="figuredemo2">
          <a href="./index.html">
            <img src={imgs} alt="" />
          </a>
          <h2>
            New IT Solution 01 <br />
            <span> New IT Solution, Digital IT, Software IT</span>
          </h2>
        </div>
      </figure>
      <figure className="livedemo3">
        <div className="figuredemo3">
          <a href="./index.html">
            <img src={imgs} alt="" />
          </a>
          <h2>
            New SEO Marketing <br />
            <span> Digital Marketing, Digital Agency, SEO Marketing</span>
          </h2>
        </div>
      </figure>
    </section>
  );
};
const Secondthreeimages = () => {
  return (
    <section className="second-threeimg">
      <div className="livedemo4">
        <figure>
          <a href="#">
            <img src={imgs} alt="" />
          </a>
          <h2>
            New Insurance <br />
            <span> Insurance, Insureance Agency, Insurance Marketing</span>
          </h2>
        </figure>
      </div>
      <div className="livedemo5">
        <figure>
          <a href="#">
            <img src={imgs} alt="" />
          </a>
          <h2>
            New Startup <br />
            <span> Technology Startup, Marketing Startup, SEO Startup</span>
          </h2>
        </figure>
      </div>
      <div>
        <figure className="livedemo6">
          <a href="#">
            <img src={imgs} />
          </a>
          <h2>
            Oddo ERP <br />
            <span> ODDO ERP, ERP Template, Oddo Website</span>
          </h2>
        </figure>
      </div>
    </section>
  );
};
const Threeimagesends = () => {
  return (
    <section className="the-end">
      <div>
        <figure>
          <a href="#">
            <img src={imgs} alt="" />
          </a>
          <h2>
            Landing 03 <br />
            <span> Landing Page 03, IT Solution Landing</span>
          </h2>
        </figure>
      </div>
      <div>
        <figure>
          <a href="#">
            <img src={imgs} alt="" />
          </a>
          <h2>
            Coming Soon <br />
            <span> Digital Agency, Creative Agency</span>
          </h2>
        </figure>
      </div>
      <div>
        <figure>
          <a href="#">
            <img src={imgs} alt="" />
          </a>
          <h2>
            Coming Soon <br />
            <span> Cyber Security, Data Security</span>
          </h2>
        </figure>
      </div>
    </section>
  );
};

export {
  Sectionfirst,
  Programlanguages,
  Packagesection,
  Secondnavigation,
  Threeimages,
  Secondthreeimages,
  Threeimagesends,
};
