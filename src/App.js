import React, { Component } from 'react'
import './App.css';

import Home from './components/Home.js';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

class App extends Component{





  componentDidMount(){


    var sections = document.querySelectorAll('section');
   
   
    this.set_current_section(sections)
 

    window.addEventListener('scroll', ()=> {

      const navbar = document.getElementById('nav-bar');

      if(window.pageYOffset > (window.innerHeight + (window.innerHeight * 0.2)) && !navbar.classList.contains('fixed')){
      
         navbar.classList.add('fixed')
      
      } else if (window.pageYOffset < window.innerHeight && navbar.classList.contains('fixed')){

          navbar.classList.remove('fixed')
      
      }


      this.set_current_section(sections)

      


    })


  }

  set_current_section = (sections) => {

    let old_pos = document.querySelector('.lit') ? document.querySelector('.lit').id: null

    for(let x = 0; x < sections.length; x++){
      if(window.pageYOffset > sections[x].offsetTop - 30  && window.pageYOffset < sections[x].offsetTop + (sections[x].offsetHeight/2)){
        let pos = `link-${sections[x].id}`
       
        if(old_pos !== pos){
          console.log(old_pos)
          let old_link = document.querySelector('.lit')
          
          if(old_link){old_link.classList.remove('lit')}
          let current_link = document.getElementById(pos);
          current_link.classList.add('lit')
         
          
        }

      }
    }
  }


  scroll_to = (dest) => {

    let topOfDestinationElement = document.getElementById(dest).offsetTop

    window.scrollTo(0, topOfDestinationElement)
    this.hide_responsive()

  }

  hide_responsive = () => {
    var navbar = document.getElementById('nav-bar');
    if(navbar.classList.contains('responsive')){
        navbar.classList.remove('responsive')
    }
}



  render (){
    return(
      <div className="App">
        <Home scroll_to={this.scroll_to} />
        <Navbar scroll_to={this.scroll_to}  />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    )
 
  };
}

export default App;