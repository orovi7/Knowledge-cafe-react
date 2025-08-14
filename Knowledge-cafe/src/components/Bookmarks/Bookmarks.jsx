import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-[#1111110D] mt-8 ml-7">
            <h4 className="text-2xl mt-8 ml-2 pl-5 ">Bookmarked blocks: {bookmarks.length}</h4>
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;