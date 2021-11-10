import logo from './Michelle_banner.svg'
import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <div>
        <div className="Container">
          {/* Title */}
          <div className="title-bar">
            <h1 className="title">Michelle Moyer</h1>  
            <h2 className="subtitle">Music</h2> 
          </div>

          {/* Image */}
          <div className="image">
            <img src={logo} className="App-logo" alt="Michelle playing guitar" />  
          </div>

          {/* Socials */}
          <div className="social-box">
            <SocialIcon className="social" bgColor="white" url="https://www.youtube.com/user/MichelleKMoyer"/>
            <SocialIcon className="social" bgColor="white" url="https://instagram.com/michellemoyermusic?utm_medium=copy_link"/>
            <SocialIcon className="social" bgColor="white" url="https://open.spotify.com/artist/4Y8GKCTKBhbwcl0nrSizwq?si=nAqW8Q0uTZ-ilQDgcadYTg"/>
            <SocialIcon className="social" bgColor="white" network="itunes" url="https://music.apple.com/us/artist/michelle-moyer/389392280"/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
