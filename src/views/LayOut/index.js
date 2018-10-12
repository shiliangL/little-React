import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import AudioPlayer from '@/components/AudioPlayer' 

import Home from "@/views/Home";
import Stuff from "@/views/Stuff";
import Contact from "@/views/Contact";
import PageDetail from "@/views/PageDetail";



class LayOut extends Component {

  render() {
    return (
      <HashRouter>
        <div className="LayOut">
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/pageDetail/:id" component={PageDetail} />
            <Route path="/contact" component={Contact} />
          </div>

          <AudioPlayer/>
        </div>
      </HashRouter>
    );
  }
}

export default LayOut;
