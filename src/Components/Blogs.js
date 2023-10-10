import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard'
import './Blogs.css'

function Blogs() {
  


    return (
        <div id='blogs'>
        <p className='blogs-title'>Blogs</p>
        <div className='blogs-container'>
            {blogs.map((blog) =>
            <Link to={`blogs/${blog.id}`} style={{textDecoration:'none',color:'black'}}>
                <BlogCard
                    category="Category"
                    title="titile"
                    descriptionpart="discription"
                />
            </Link>
            )}
        </div>
        </div>
    )
}

export default Blogs
