import React, { Component } from 'react' 
//import stormy_ocean from '../images/stormyOceanFiltered.mp4'

//position: absolute;
//z-index: 0;
//min-height: 100vh;
//filter: contrast(0.8);
//freedome

class Home extends Component{
    render(){
        return(
            <section id="home">
                {/*     <video id="vidya2"  className="portfolio-card-video" autoplay="" muted loop >
                                <source src={stormy_ocean} type="video/mp4" />
                        </video>
                        
                        */}
                    
          
                      

                <div id="home-text">
                Hello, I'm <span id="name-span">Austin Rhoads</span>.
                <br />
                I'm a full-stack web developer.
                </div>

                <div className="page-link" dest="portfolio-div" >
                <div className="page-link-div" onClick={() => this.props.scroll_to("portfolio-div")}>
                    View my work
                </div>
                </div>
                
            </section>
        )
    }
}

export default Home;