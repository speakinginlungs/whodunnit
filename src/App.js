import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Character from './components/page_components/Characters/Character/Character';
import Characters from './components/page_components/Characters/Characters';
import Crime from './components/page_components/Crime/Crime';
import Footer from './components/page_components/Footer/Footer';
import Homepage from './components/page_components/Homepage/Homepage';
import Interview from './components/page_components/Characters/Character/Interview/Interview';
import IntroContainer from './components/page_components/Intro/IntroContainer';
import Locations from './components/page_components/Locations/Locations';
import LocationContainer from './components/page_components/Locations/Location/LocationContainer';
import Navbar from './components/page_components/Navbar/Navbar';
import './App.scss';

function App() {

  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path='/crime' component={Crime} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/characters/:name" component={Character}/>
        <Route exact path="/characters/:name/interview" component={Interview} />
        <Route exact path="/intro" component={IntroContainer} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/locations/:location" component={LocationContainer}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
