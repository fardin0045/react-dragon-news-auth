import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RighSideNav/RightSideNav";


const News = () => {
    return (
        <div>
            <Header></Header>
            <div className=" grid grid-cols-1 md:grid-cols-4">

            <div className="col-span-3 border">
                <h2>coming soon</h2>
            </div>
            <div>
            <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default News;