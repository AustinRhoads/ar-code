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
                
                    <div id="link-home" className="nav-link"onClick={() => this.props.scroll_to("home")} onMouseEnter={(el) => this.litUp(el)} onMouseLeave={(el) => this.litUp(el)}>HOME</div>
                    <div id="link-about-all" className="nav-link"onClick={() => this.props.scroll_to("about-all")}  onMouseEnter={(el) => this.litUp(el)} onMouseLeave={(el) => this.litUp(el)} >ABOUT</div>
                    <div id="link-portfolio-div" className="nav-link"onClick={() => this.props.scroll_to("portfolio-div")}  onMouseEnter={(el) => this.litUp(el)} onMouseLeave={(el) => this.litUp(el)} >PROJECTS</div>
                    <div id="link-blog-div" className="nav-link"onClick={() => this.props.scroll_to("blog-div")}  onMouseEnter={(el) => this.litUp(el)} onMouseLeave={(el) => this.litUp(el)} >BLOG</div>
                    <div id="link-contact-div" className="nav-link"onClick={() => this.props.scroll_to("contact-div")}  onMouseEnter={(el) => this.litUp(el)} onMouseLeave={(el) => this.litUp(el)} >CONTACT</div>
                
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