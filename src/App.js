import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';


const particlesOptions ={
  particles: {
      number: {
        value: 30,
        density:{
          enable: true,
          value_area:800
        }
      },
  }, 
}

function App() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="App">
    <Particles className="particles" options={particlesOptions} init={particlesInit} />
      <Navigation />
      <Logo/>
      <Rank />
      <ImageLinkForm />
      {/*
      cd /c/Users/Antonio/second-web/ReactFaceDetection
      */}
    </div>
  );
}

export default App;