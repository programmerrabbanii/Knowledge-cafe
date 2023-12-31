import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";

const Blogs = ({handleBook,handlerMarker}) => {
    const [blogs, setblogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setblogs(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            <h3>Blogs:{blogs.length}</h3>
            {
                blogs.map(blog=>  <Blog handlerMarker={handlerMarker} handleBook={()=>handleBook(blog)} key={blog.id} blog={blog}></Blog>)
            }
            
        </div>
    );
};

export default Blogs;