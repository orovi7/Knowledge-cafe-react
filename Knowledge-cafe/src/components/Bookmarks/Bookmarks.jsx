import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    return (
           
        <div className="md:w-1/3 bg-[#1111110D]  ml-7">
            <div className="border-2 border-[#6047EC] bg-[#6047EC1A] rounded-lg p-4 m-5 text-center">
                <h3 className="text-xl text-[#6047EC] font-bold">Spent time on read : {readingTime} min</h3>
            </div>
            <h4 className="text-2xl mt-8 ml-2 pl-5 ">Bookmarked blocks: {bookmarks.length}</h4>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;