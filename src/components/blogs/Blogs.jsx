import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setblogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setblogs(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            <h3>Blogs:{blogs.length}</h3>
            
        </div>
    );
};

export default Blogs;