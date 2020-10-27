import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
	apiKey: '3f8f5288071d43f5bec1c50718472b82'
});

const particlesOption = {
	particles: {
		number: {
			value: 110,
			density: {
				enable: true,
				value_area: 850
			}
		}
	}
}

class App extends Component { 
constructor() {
	super();
	this.state = {
		input: '',
    imageUrl: '',
    box: {},
    route: 'Signin',
    isSignedIn: false,
	}
}

calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }
displayFaceBox = (box) => {
  this.setState({box: box})
}

onInputChange = (event) => {
	this.setState({input: event.target.value});
}

onButtonSubmit = () => {
	this.setState({imageUrl: this.state.input})
	app.models
.predict(
Clarifai.COLOR_MODEL,
    // URL
 this.state.input)
.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
.catch(err => console.log(err));   
}

onRouteChange = (route) => {
  if (route === 'Signin') {
    this.setState({isSignedIn: false})
  } else if (route === 'home') {
    this.setState({isSignedIn: true})
  }
 this.setState({route: route});
}

render () {
const {isSignedIn, imageUrl, route, box } = this.state;
	return (
    <div className="App">
    <Particles className="particles"
    params={particlesOption} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      { route === 'home' 
      ?  <div> 
      <Logo />
        <Rank />
        <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition box={box} imageUrl = {imageUrl} />
    </div>
    : (
     route === 'Signin'
    ? <Signin onRouteChange={this.onRouteChange}/>
    : <Register onRouteChange={this.onRouteChange} />
      )
  }
  </div>
  );
}
}

export default App;
