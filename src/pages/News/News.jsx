import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RighSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const {id} = useParams();
    return (
        <div>
            
            <Header></Header>
            <Navbar></Navbar>
            
            
            <div className=" grid grid-cols-1 md:grid-cols-4">

            <div className="col-span-3 border">
                <h2>coming soon</h2>
                <p>{id}</p>
                
            </div>
            <div>
            <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default News;