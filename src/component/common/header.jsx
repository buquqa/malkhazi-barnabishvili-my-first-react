import logo from "../.././assets/techno.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <figure>
          <a href="./index.html">
            <img className="icon" src={logo} alt="" />
          </a>
        </figure>
        <div className="wrapper-nav">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Demo</a>
              </li>
              <li>
                <a href="#">Inner Pages</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <button>
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export { Header };
