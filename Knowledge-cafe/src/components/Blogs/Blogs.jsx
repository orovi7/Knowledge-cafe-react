import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookMark, handleMarkedRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h3 className="text-3xl">Blogs : {blogs.length}</h3>
            {
                blogs.map(blog => <Blog handleMarkedRead={handleMarkedRead} handleBookMark={handleBookMark} key={blog.id} blog={blog}></Blog>)
            }

            
            
        </div>
    );
};

export default Blogs;