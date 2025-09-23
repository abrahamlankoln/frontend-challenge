import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


 

function App() {
   
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <header>
        <div className='name'>
          <span>----------İbrahim ŞİMŞEK</span>
        </div>
        <div className='darkmode'>
          <div className='darkmodebutton'>
                <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className='aboutme'></div>
        </div>
      </header>

      <section className="main">

        <h1>Create thinker Minimalism lover</h1>
        <p>
          Hi, I'm İbrahim. I'm a full-stack developer. If you are looking for a Developer who
          can craft solid and scalable frontend products with great user experiences. Let's
          shake hands with me.
        </p>
        <div className="buttons">
          <button>Hire me</button>
          <button>Github</button>
          <button>Linkedin</button>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="item">
          <div className="item-content">
            <h2>JavaScript</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="item-content">
            <h2>React.Js</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="item-content">
            <h2>Node.Js</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>

      <section className="Profile">
        <h2>Profile</h2>
        <div className="item">
          <div className='item-content'>
            <h3>Profile</h3>
            <span>Doğum tarihi 07.06.1996</span>
            <span>İkamet Şehri  Balıkesir</span>
            <span>Eğitim Durumu  Uludağ Ünv. EEM</span>
            <span>Tercih Ettiği Rol fullstack developer</span>
          </div>
          <div className='item-content'>
            <h3>About Me</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </section>

      <section className="Projects"> 
        <h2>Projects</h2>
        <div className="item">
          <div className="item-content"></div>
          <div className="item-content"></div>
          <div className="item-content"></div>
        </div>
      </section>

      <footer></footer>
    </>
  );
}

export default App;
