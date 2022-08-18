import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import {useState, Fragment} from 'react';

function App() {
  const [menu, setMenu] = useState(false);
  const handleMenu = (e) => {
    if (!menu) {
      let broNext = e.target.nextElementSibling;
      e.target.style.display = "none";
      broNext.style.display = "block";
      setMenu(true);
    } else {
      let broBack = e.target.previousElementSibling;
      e.target.style.display = "none";
      broBack.style.display = "block";
      setMenu(false);
    }
  };
  return (
    <>
      <div className="image-for-nav"></div>
      <Nav menu={menu} handleMenu={handleMenu}/>
      {!menu && <Fragment>
        <Main />
        <Footer />
      </Fragment>}
    </>
  );
}

export default App;
