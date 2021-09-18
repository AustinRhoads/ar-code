import React from 'react'


class BlogCard extends React.Component {
    render(){
        return(
            <div className="blog-list-item" >
                <img className="blog-card-image" alt="card" src={this.props.blog.img} style={{minHeight: "100%", minWidth: "100%", maxHeight: "110%", maxWidth: "110%",}} />

                <h3 className="blog-card-title">{this.props.blog.title}</h3>
                <a href={this.props.blog.url}><h3 className="blog-card-url">Read</h3></a>

            </div>
        )
    }
}

export default BlogCard;