import React, { Component } from 'react';
import logo from './makentnu logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username:'',
      appId:'2318298614912047',
      clientSecret:'9c2ba0a8337812e64b994f210d3d8722',
      shortToken:'EAAg8evVs1C8BADqu97gZAjejYmmAljOO15HB2k0ZCARtIZADhCbwWo2j9Fp6RPlV1fVlYYZCMjOE8OqwK5Rc6jib9uhkwU67R7zozgMhefeSrFXZArdx7AsWDLYhzgFlAQZAZCE8FLqOR0BOerDB3L5af7Wl9FDromTIcEeCiWDI2pHIdYM74djcAetCuLZCoDlU7UHdFHaxZBQZDZD',
      longToken:'EAAg8evVs1C8BAPZCsTX2rMkEekg0pCZAuAJbYGzCsQqbWwBaeoR2EfSvtEXXG6INALZAvFHcFdi3kZAIApyvvbFLzfFKlugDsOioDJrigPGiKnpL05piKfJavFZCLccicg4lVR4XIxRlGtqvMj7PC3R7kzXtbsx8HrC6wWpf0NgZDZD'
    }

    this.getLongToken = this.getLongToken.bind(this);
  }

  getLongToken() {
    axios.get(`https://graph.facebook.com/oauth/access_token?client_id=${this.state.appId}&client_secret=${this.state.clientSecret}&grant_type=fb_exchange_token&fb_exchange_token=${this.state.shortToken}`)
    .then(response => { //The arrow function makes this whole expression into an actual function, feeding the response into the
      console.log(response);
      this.setState({longToken: response.data.access_token});
    })
  }

  getPermToken() {
    axios.get(`https://graph.facebook.com/me/accounts?access_token=${this.state.longToken}`)
    .then(response =>{
      console.log(response)
      })
  }

  handleClick() {
    axios.get('https://api.github.com/users/stonedude')
      .then(response => this.setState({username: response.data.name}));
  }


  render() {
    return (
      <div className="App">
        <header className="grid-item" id="appHeader">
          <h1>Lik oss på facebook/MAKE NTNU :D</h1>
        </header>
        <div className="grid-item" id="space"></div>
        <body className="grid-item" id="appLogo">

          <img src={logo} alt="logo"/>
          <div>Så mange likes har vi dah</div>
        </body>
        <footer className="grid-item" id="who">
          <button className="button" onClick={this.getLongToken}>I like turtles</button>
        </footer>

      </div>
    );
  }
}

export default App;
