import React from 'react';
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


class App extends React.Component {

  state = {
    title: 'William VanHook',
    headerLinks: [
      { title: 'Home', path: '/' },
      { title: 'Initial Collection', path: '/bootcamp' },
      { title: 'Contact', path: '/contact' },
    ],
    home: {
      title: 'Working Purposefully, Living Creatively',
      subTitle: 'My Bio:',
      subText: `I am a Front End Web Developer with a background in accounting and education, with a certificate in Full Stack Development from the University of North Carolina-Chapel Hill. 
        I am proficient in React, Node/Express, MongoDB, JavaScript and responsive web design.
        I am a methodical problem solver passionate about developing apps, with a focus on mobile-first design and development. 
        My degrees in accounting and history have prepared me to approach problems with focus and a team-first attitude.
         With each project, I aim to understand how to best engage users for an impactful user experience.`,
      email: 'wmvanhook@gmail.com'

    },
    bootcamp: {
      title: 'My Collection',
      subTitle: 'Check out my collection below'
    },
    contact: {
      title: "Let's Connect",
      subText: 'If you like what you see on my site or have any questions, please feel free to reach out to me below. Thanks!'
    }
  }


  render() {
    return (
      <HashRouter basename='/'>
        <Container fluid={true}>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} subText={this.state.home.subText} />} />
            <Route exact path="/bootcamp" render={() => <Projects title={this.state.bootcamp.title} subTitle={this.state.bootcamp.subTitle} />} />
            <Route exact path="/contact" render={() => <Contact title={this.state.contact.title} subText={this.state.contact.subText} />} />
          </Switch>
          <Footer />
        </Container>
      </HashRouter>
    );
  }
}

export default App;
