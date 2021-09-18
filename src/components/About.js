import React, { Component } from 'react' 
import me_neo from '../me_neo.jpg'




class About extends Component {



    render(){
        return(
            <section id="about-all">
                <div id="about-div">
                    <div id="about-header" >ABOUT</div>
                <div id="about-values-wrapper">
                    <div className="about-values-row">
                        <div className="about-values-item">
                            <div className="value-header">Fortitude</div>
                            <div>Fast and scalable code that grows with your needs.</div>
                        </div>
                        <div className="about-values-item">
                            <div className="value-header">Pixel Perfect Layout</div>
                            <div>Clearly thought out implementation of your design.</div> 
                        </div>
                    </div>
                    <div className="about-values-row">
                        <div className="about-values-item">
                            <div className="value-header">Dynamic</div>
                            <div>Intuitive and responsive UI/UX that allows your ideas come to life on any device.</div> 
                        </div>
                        <div className="about-values-item">
                            <div className="value-header">Inventive</div>
                            <div>Have some new ideas? Let's make them work.</div>
                        </div>
                    </div>
                </div>
                <div id="about-skills-wrapper">
                    <div id="about-skill-wrapper-img-div"> 
                        <img  alt="me_neo" src={me_neo} />
                    </div>
                    <div id="about-skills-list">
                        <div className="about-skills-item" >Javascript</div>
                        <div className="about-skills-item" >React/Redux</div>
                        <div className="about-skills-item" >HTML</div>
                        <div className="about-skills-item" >CSS</div>
                        <div className="about-skills-item" >Ruby/Rails</div>
                        <div className="about-skills-item" >PostgreSQL/SQL</div>
                        <div className="about-skills-item" >Node.js</div>

                    </div>
                   
                </div>
            
                </div>
            </section>
        )
    }
}

export default About;


