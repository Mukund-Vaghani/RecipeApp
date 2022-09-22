import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

// const menu = () => {
//   <>
//    <p><a href="#home">Home</a></p>
//           <p><a href="#home">What is SWADIST?</a></p>
//           <p><a href="#home">My Feed</a></p>
//           <p><a href="#home">Meal Planning</a></p>
//           <p><a href="#home">Browse</a></p>
//     <p><a href="#home">Our Special</a></p>
//   </>
// }

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="swadist__navbar">
      <div className="swadist__navbar-links">
        <div className="swadist__navbar-links_logo">
          {/* <img src={logo} alt="logo"/> */}
          <h3>SWADIST</h3>
        </div>
        <div className="swadist__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whswadist">What is SWADIST?</a></p>
          <p><a href="#features">Meal Planning</a></p>
          <p><a href="#possibility">My Feed</a></p>
          <p><a href="#blog">Browse</a></p>
          <p><a href="#home">Our Special</a></p>
        </div>
      </div>
      <div className="swadist__navbar-sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className="swadist__navbar-menu">
         {toggleMenu 
          ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} /> 
         }
         {
          toggleMenu && (
            <div className="swadist__navbar-menu_container scale-up-center">
              <div className="swadist__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#whswadist">What is SWADIST?</a></p>
                <p><a href="#home">My Feed</a></p>
                <p><a href="#home">Meal Planning</a></p>
                <p><a href="#home">Browse</a></p>
                <p><a href="#home">Our Special</a></p>
                <div className="swadist__navbar-menu_container-links-sign">
                  <p>Sign In</p>
                  <button>Sign Up</button>
                </div>
              </div>
          </div>
          )
         }
      </div>
    </div>
  )
}

export default Navbar