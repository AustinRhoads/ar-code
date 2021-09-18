import React from 'react' 

class ProjectCard extends React.Component {
    render(){
        return(
            <div className="portfolio-projects-list-item">
                <img className="project-card-image" alt="card" src={this.props.project.img} style={{minHeight: "100%", minWidth: "100%", maxHeight: "110%", maxWidth: "110%",}} />

                <h3 className="project-card-name">{this.props.project.name}</h3>
                <h3 className="project-card-languages">{this.props.project.languages}</h3>
                <a className="project-card-github-link" href={this.props.project.gitHub_url}><h3>on GitHub</h3></a>
            </div>
        )
    }
};

export default ProjectCard;