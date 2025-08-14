

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-white p-4 my-4 mx-3 rounded-xl">
            <h3 className="text-lg font-semibold">{title}</h3>
        </div>
    );
};

export default Bookmark;