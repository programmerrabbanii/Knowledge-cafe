
import Bookmark from "../Boookmark/Bookmark";
const Boksmarks = ({bookmr}) => {
    return (
        <div className="md: w-1/3 bg-gray-500 ml-5 md:h-[1155px]">
            <h2 className="py-4 text-center uppercase text-2xl">bookmark:{bookmr.length} </h2>
            {
                bookmr.map(bokmr=> <Bookmark bokmarks={bokmr}></Bookmark>)
            }

            
        </div>
    );
};

export default Boksmarks;