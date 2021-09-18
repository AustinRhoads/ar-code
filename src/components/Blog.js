import React, { Component } from 'react' 
import BlogCard from './BlogCard';
import collision_detection_img from "../images/mario_polygon_aabb.png"
import old_map_1 from '../images/old_map_venice.jpg'
import color_lockers from '../images/colorful_lockers.jpg'


const Blogs = [
    {title: "2D Collision Detection", img: collision_detection_img, url: "https://levelup.gitconnected.com/2d-collision-detection-8e50b6b8b5c0"},
    {title: "How to use google-maps-react: Part One", img: old_map_1, url: "https://levelup.gitconnected.com/how-to-use-google-maps-react-57ba97ca897b"},
    {title: "Session Store With React/Rails API", img: color_lockers, url: "https://medium.com/@austinrhoads/session-store-with-react-rails-api-116a9efe3c30"},
]

class Blog extends Component {
    render(){
        return(
            <section id="blog-div">

                <div id="blog-header">BLOG</div>

                <div id="blog-list">
                    <BlogCard blog={Blogs[0]} />
                    <BlogCard blog={Blogs[1]} />
                    <BlogCard blog={Blogs[2]} />

                </div>

            </section>
        )
    }
}

export default Blog;