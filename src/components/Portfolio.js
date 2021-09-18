import React, { Component } from 'react' 
import ProjectCard from './ProjectCard'
import arcade_studio_img from '../images/AS_1_demo_image.png'
import speckled_trouts from '../images/spec1.jpg'
import ufo_img from '../images/pentagon_ufo.png'
//import as_video from '../images/AS-QSDefault.mp4'


const Projects = [
    {name: "Arcade Studios", img: arcade_studio_img, languages: "Javascript/Rails", gitHub_url: "https://github.com/AustinRhoads/arcade-studios", /*video: as_video*/},
    {name: "Fish In Sight", img: speckled_trouts, languages: "React/Rails", gitHub_url: "https://github.com/AustinRhoads/fish-in-sight-frontend",},
    {name: "UFO Tracker", img: ufo_img, languages: "Ruby on Rails", gitHub_url: "https://github.com/AustinRhoads/UFO-Tracker",},
]





class Portfolio extends Component{
    render(){
        return(
            <section id="portfolio-div">
                <div id="portfolio-header">PROJECTS</div>
                <div id="portfolio-projects-list">
                   {/*<div id="portfolio-proj-as" className="portfolio-projects-list-item" >
                       
                    </div> */} 
                    <ProjectCard project={Projects[0]} />
                    <ProjectCard project={Projects[1]} />
                    <ProjectCard project={Projects[2]} />

                    {/*
                           <div className="portfolio-projects-list-item" >
                        <video className="portfolio-card-video" autoplay="" muted loop id="vidya">
                                <source src={as_video} type="video/mp4" />
                        </video>
                    </div>
                    */}
             
                   

                </div>


            </section>
        )
    }
}

export default Portfolio;