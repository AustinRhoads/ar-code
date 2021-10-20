import React, { Component } from 'react' 

class Navbar extends Component {

    state = {
        up: true,
    }

    toggle_responsive = () => {

        var navbar = document.getElementById('nav-bar');

        if(navbar.className === "nav-bar"){
            navbar.className = "nav-bar responsive";
        } else if(navbar.className === "nav-bar fixed"){
            navbar.className = "nav-bar fixed responsive";
        } else if(navbar.className === "nav-bar fixed responsive") {
            navbar.className = "nav-bar fixed"
        } else {
            navbar.className = "nav-bar"
        }

       


    }

    litUp = (el) => {
        el.target.classList.contains('litUp') ? el.target.classList.remove('litUp'):el.target.classList.add('litUp')
    }







    render(){
        return(
            <div id="nav-bar" className="nav-bar">
                
                    <div id="link-home" className="nav-link"onClick={() => this.props.scroll_to("home")}>HOME<div className="line"></div></div>
                    <div id="link-about-all" className="nav-link"onClick={() => this.props.scroll_to("about-all")} >ABOUT<div className="line"></div></div>
                    <div id="link-portfolio-div" className="nav-link"onClick={() => this.props.scroll_to("portfolio-div")}>PROJECTS<div className="line"></div></div>
                    <div id="link-blog-div" className="nav-link"onClick={() => this.props.scroll_to("blog-div")} >BLOG<div className="line"></div></div>
                    <div id="link-contact-div" className="nav-link"onClick={() => this.props.scroll_to("contact-div")}  >CONTACT<div className="line"></div></div>
                
                <i id="nav-icon" onClick={() => this.toggle_responsive()}>
                    <div id="nav-icon-line-1"></div>
                    <div id="nav-icon-line-2"></div>
                    <div id="nav-icon-line-3"></div>
                    <div id="nav-icon-line-4"></div>
                </i>

            </div>

        )
    }
}
export default Navbar;