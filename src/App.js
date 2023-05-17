import "./App.css";
import { Header } from "./component/common/header";
import {
  Sectionfirst,
  Programlanguages,
  Packagesection,
  Secondnavigation,
  Threeimages,
  Secondthreeimages,
  Threeimagesends,
} from "./component/common/middlesection";
import {
  Laptop,
  Awesome,
  Otherthree,
  Supporterstitle,
  Supporters,
  Coretitle,
  Coretitleone,
  Corelinetwo,
  Manyimgtwo,
} from "./component/common/beforefooter";
import { Footer } from "./component/common/footer";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Sectionfirst />
      <Programlanguages />
      <Packagesection />
      <Secondnavigation />
      <Threeimages />
      <Secondthreeimages />
      <Threeimagesends />
      <Laptop />
      <Awesome />
      <Otherthree />
      <Supporterstitle />
      <Supporters />
      <Coretitle />
      <Coretitleone />
      <Corelinetwo />
      <Manyimgtwo />
      <Footer />
    </div>
  );
};

export default App;
