import './App.css';
import Header from './components/header';
import About from './components/about';
import Links from './components/links';
import Experience from './components/experience';
import Education from './components/education';
import Certtifications from './components/certifications';
import Skills from './components/skills';
import Responsive from './components/responsive';

// Main App component
function App() {
  return (
    <div className="cv">
      <Header />
      <div className="content">
        <div className="main">
          <About />
          <Experience />
          <Education />
          <Certtifications />
          <Skills />
        </div>
        <div className="sidebar">
          <div className="sidebar-content">
            <Links />
          </div>
        </div>
      </div>
      <div className='responsive-links'>
        <Responsive />
      </div>
      <div className="footer">
        <p>© 2023 Ewelina Piszczek All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;

