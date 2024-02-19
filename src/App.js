// Import React and useState hook from React library
import React, { useState } from 'react';

// Import Carousel component and its CSS from react-responsive-carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Import App.css for additional styling
import './App.css';

// Define the App component
function App() {
  // Define state for menu open/close
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to scroll to a section by its ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false); // Close menu after clicking on a section link
  };

  // Render the component
  return (
    <div className='whole-container'>
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={require('./assets/Union.svg').default} alt='mySvgImage' className='nav-bar-logo' />
          <div className="logo">LOGO</div>
          <button className="hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </div>
        {/* Menu items */}
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <div className="menu-item" onClick={() => scrollToSection('home')}>Home</div>
          <div className="menu-item" onClick={() => scrollToSection('page1')}>Page 1</div>
          <div className="menu-item" onClick={() => scrollToSection('page2')}>Page 2</div>
        </div>
      </nav>

      {/* Carousel section */}
      <section id="home" className="section">
        {/* Carousel component */}
        <Carousel autoPlay interval={5000} infiniteLoop showStatus={false} showThumbs={false} showArrows={false} showIndicators={false}>
          {/* Individual slides */}
          <div className="slider-image-wrapper">
            <img src={require('./assets/ic_hero_1.png')} alt='image1' className='slider-image' />
          </div>
          <div className="slider-image-wrapper">
            <img src={require('./assets/ic_hero_2.png')} alt='image2' className='slider-image' />
          </div>
          <div className="slider-image-wrapper">
            <img src={require('./assets/ic_hero_3.png')} alt='image3' className='slider-image' />
          </div>
        </Carousel>
        {/* Overlapping content */}
        <div className='overlapping-container'>
          <div className='logo-container-1'>
            <img src={require("./assets/Union.svg").default} alt="logo" className='overlapping-logo-image' />
            <div className='Logo-overlapping'>LOGO</div>
          </div>
          <div className='horizontal-strip'>Lorem ipsum dolor sit amet</div>
          <div className='overlapping-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</div>
          <div className='scroll'>scroll</div>
          <div className='scroll-indicator'></div>
        </div>
      </section>

      {/* Page 1 section */}
      <section id="page1" className="section-one">
        <div className="lorem-subtitle"></div>
        <div className='subtitle-container'>
          <div className='subtitle-heading-container'>
            <div className='lorem-text'>Lorem</div>
            <div className='subtitle-text'>subtitle</div>
          </div>
          <div className='subtitle-image-container'>
            <img src={require('./assets/ic_subtitle_1.png')} alt='subtitle1' className='subtitles-image' />
            <img src={require('./assets/ic_subtitle_2.png')} alt='subtitle2' className='subtitles-image' />
            <img src={require('./assets/ic_subtitle_3.png')} alt='subtitle3' className='subtitles-image' />
          </div>
        </div>
      </section>

      {/* Page 2 section */}
      <section id="page2" className="section-two">
        <div className="strip-container"></div>
        <div className='section-two-container'>
          <div className='heading-two'>
            <div className='section-3-heading'>Lorem ipsum</div>
            <div className='strip-devider'></div>
          </div>
          <img src={require('./assets/ic_section_3.png')} alt='image_section_3' className='section-3-image' />
          <div className='info-conatiner'>
            <div className='heading-one'>
              <div className='section-3-heading'>Lorem ipsum</div>
              <div className='strip-devider'></div>
            </div>
            <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div className='lorem-button-container'>
              <div className='lorem-button-label'>Lorem ipsum</div>
              <img onClick={() => { }} src={require('./assets/ic_right_arrow.png')} alt='right_arrow' className='arrow' />
            </div>
          </div>
        </div>
      </section>

      {/* Other elements */}
      <div className='container-4'>
        <div className="box">
          <div className="triangle-top-left"></div>
          <div className="triangle-top-right"></div>
          <div className="triangle-bottom-left"></div>
          <div className="triangle-bottom-right"></div>
        </div>
      </div>
      
      {/* Footer */}
      <div className='footer-container'>
        <div className='pages-container'>
          <text className='pages-selector' onClick={() => scrollToSection('home')}>Home</text>
          <text className='pages-selector' onClick={() => scrollToSection('page1')}>Page 1</text>
          <text className='pages-selector' onClick={() => scrollToSection('page2')}>Page 2</text>
        </div>
        <div className='footer-devider'></div>
        <div className='links-container'>
          <a href='https://www.facebook.com'><img src={require('./assets/ic_facebook.png')} alt="ic_facebook" /></a>
          <a href='https://www.twitter.com'><img src={require('./assets/ic_twitter.png')} alt="ic_twitter" /></a>
          <a href='https://www.instagram.com'><img src={require('./assets/ic_instagram.png')} alt="ic_instagram" /></a>
          <a href='https://www.tiktok.com'><img src={require('./assets/ic_tiktok.png')} alt="ic_tiktok" /></a>
        </div>
        <div className='footer-logo'>© Logo, Inc.</div>
      </div>
    </div>
  );
}

// Export the App component
export default App;
