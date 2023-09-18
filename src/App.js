import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './App.css';
import Moon from './images/Moon.jpg'
import Moon1 from './images/Moon1.jpg'
import BlackMoon from './images/BlackMoon.jpg'
import Kailu from './images/Kailu.png'
import Man from './images/man_on_mountain.png'

function App() {
  return (
    <div className="App">
      <Parallax pages={1.9} style={{ top: '0', left: '0' }} class="animation">
        {/* <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0} speed={-0.1}>
          <div class="animation_layer parallax" id="logoland"><center><h1 id='name'>Kailash G</h1></center></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle2"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
          <div class="animation_layer parallax" id="jungle3"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.45}>
          <div class="animation_layer parallax" id="jungle4"></div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={0} speed={0.40}>
          <div class="animation_layer parallax" id="manonmountain"></div>
        </ParallaxLayer> */}
        <ParallaxLayer offset={0} speed={0.35}>
          <div class="animation_layer parallax" id="jungle5"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={0.25}>
          <TextBlock />
        </ParallaxLayer>
      </Parallax>





      {/* <Parallax pages ={2} ref={ref}>
          <ParallaxLayer 
            offset={0} 
            speed={0.35} 
            style = {{
            backgroundImage: `url(${Moon1})`,
            backgroundSize: 'cover',
          }}
          >
            <div class="animation_layer parallax"></div>
            <center>
            <h1 style={{
              color:'white'}}>Hi, I am Kailash</h1>
            </center>
          </ParallaxLayer>
              
          <ParallaxLayer offset={1} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3}>
          <div class="animation_layer parallax" id="jungle1"></div>
        </ParallaxLayer>    
          <ParallaxLayer 
            offset={1} 
            speed={0.15} 
            factor={1} 
            sticky= {{start: 0.9, end: 2.5}} 
            onClick = {() => ref.current.scrollTo(1)}
            style= {{
            backgroundImage:`url(${Man})`,
            backgroundSize: 'cover',
            }}>  
            <div class="animation_layer parallax"></div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed= {0.35}
          >
            <div class="animation_layer parallax"></div>
            <img src={Kailu}></img>
          </ParallaxLayer>
      </Parallax> */}
    </div>
  );
}

export default App;