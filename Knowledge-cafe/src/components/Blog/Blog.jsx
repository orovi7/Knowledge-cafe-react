
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog, handleBookMark, handleMarkRead}) => {

    const {title, cover_image, author_img, date_of_publish, author_name, read_time, hashtags} = blog;
    return (
        <div className="mb-10 border-b-2">
            <img className="w-full" src={cover_image} alt="" />
            <div className="flex justify-between items-center my-6">
                <div className="flex items-center gap-5">
                    <div><img className="w-20 rounded-xl" src={author_img} alt="" /></div>
                    <div>
                        <h4 className="text-xl font-bold">{author_name}</h4>
                        <p className="text-sm text-[#11111199]">{date_of_publish}</p>
                    </div>
                </div>
                <div className="text-[#11111199] space-x-3">
                    <span>{read_time} min read</span>
                    <button onClick={() => handleBookMark(blog)} className="text-blue-500"><FaRegBookmark /></button>
                    </div>
            </div>
            <h2 className="text-3xl font-bold"> {title}</h2>
            <p className="space-x-3 text-[#11111199]">
               {
                hashtags.map(hash => <span><a href="">{hash}</a></span>)
               }
                </p>
                <button className="my-4 text-blue-500 border-2 p-2 px-3 border-blue-500 rounded-2xl"
                 onClick={() => handleMarkRead(read_time)}>Mark Read</button>
                <br />
            
        </div>
    );
};

export default Blog;