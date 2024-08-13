import logo from './logo.svg';
import './App.css';
import bird from "./images/bird.jpg"
import birdvideo from "./images/kanuma vedio.mp4"
import koyalaudio from "./images/koyal-8087.mp3"

function App() {
  return (
    <div className="App">
      <h1 id="home">Media</h1>
      <pre>         <a href="#src">Click here if you want to go SRC </a></pre>
      <pre>         <a href="#public">Click here if you want to go PUBLIC</a></pre>
      <h2>INTERNET</h2>
      <div className='media'>
      <p id="p1">The oldest classical British and Latin writings had little or no space between words and could be written in boustrophedon (alternating directions). Over time, text direction (left to right) became standardized. Word dividers and terminal punctuation became common. The first way to divide sentences into groups was the original paragraphos, similar to an underscore at the beginning of the new group.[1] The Greek parágraphos evolved into the pilcrow (¶), which in English manuscripts in the Middle Ages can be seen inserted inline between sentences.</p>
      <img src="https://th.bing.com/th/id/OIP.a73DR4E1zVrbv5HyJxVO3wHaFC?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="30%" height="300px"></img>
      < video id="internetVideo" src="https://services.brninfotech.com/tws/media2\/trailers\/GeorgeReddy.mp4"  controls></video>
      <audio src="https://services.brninfotech.com/tws/media2\/songs\/AgentSaiSrinivasAthreya\/Sherlock Holmes-Naasongs.me.mp3"controls autoplay muted></audio>
      </div>
      <h2 id="public">PUBLIC</h2>
      <a href="#home">click to go HOME</a>
      <div className="media">
        <p id="p2">A paragraph (from Ancient Greek παράγραφος (parágraphos) 'to write beside') is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing</p>
      <img src="./images/bird1.jpg"></img>
      <video src="./images/devara video.mp4" controls></video>
      < audio src="./images/devara song.mp3" controls></audio>
      </div>
      <h2 id="src">SRC</h2>
      <a href="#home" >click to go HOME</a>
      <div className='media'>
        <p>A paragraph (from Ancient Greek παράγραφος (parágraphos) 'to write beside') is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing</p>
      <img src={bird}></img>
      <video src={birdvideo} controls></video>
      <audio src={koyalaudio} controls></audio>
      </div>

    </div>
  );
}

export default App;
