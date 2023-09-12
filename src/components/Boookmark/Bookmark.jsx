

const Bookmark = ({bokmarks}) => {
    const {title}=bokmarks;
    return (
        <div className="bg-gray-100 ml-5 py-3 px-4 m-4">
            <h3 className="">{title}</h3>
            
        </div>
    );
};

export default Bookmark;