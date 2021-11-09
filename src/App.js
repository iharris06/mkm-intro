import './App.css';
import { SocialIcon } from 'react-social-icons';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <div class="Container">
        <h1 className="title">Michelle Moyer</h1>  
        <h2 className="title-2">Music</h2>  
        <div className="social">
          <SocialIcon className="social" bgColor="white" url="https://www.youtube.com/user/MichelleKMoyer"/>
          <SocialIcon className="social" bgColor="white" url="https://instagram.com/michellemoyermusic?utm_medium=copy_link"/>
          <SocialIcon className="social" bgColor="white" url="https://open.spotify.com/artist/4Y8GKCTKBhbwcl0nrSizwq?si=nAqW8Q0uTZ-ilQDgcadYTg"/>
          <SocialIcon className="social" bgColor="white" network="itunes" url="https://music.apple.com/us/artist/michelle-moyer/389392280"/>
          {/* <SocialIcon className="social" bgColor="#f94c57" network="itunes" url="https://music.apple.com/us/artist/michelle-moyer/389392280"/> */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
