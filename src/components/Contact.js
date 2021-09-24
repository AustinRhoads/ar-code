import React, { Component } from 'react' 
import white_git from '../images/git64white.png' 
import linkedin_blue from '../images/LinkedIn-Blue-14@2x.png'

class Contact extends Component {
    render(){
        return(
            <section id="contact-div">
                <div id="contact-header">CONTACT ME</div>
                <div id="contacts_list">
                    <div className="contact-element" id="contact-email-div">Email: Austin.rhoads.code@gmail.com</div>
                    <div className="contact-element" id="contact-linkedin-div icon-element"><a href="https://www.linkedin.com/in/austinrhoads-code/"><img alt ="" src={linkedin_blue} /></a></div>
                    <div className="contact-element" id="contact-github-div icon-element"><a href ="https://github.com/AustinRhoads" ><img alt="" src={white_git} /></a></div>
                </div>
            </section>
        )
    }
}

export default Contact;