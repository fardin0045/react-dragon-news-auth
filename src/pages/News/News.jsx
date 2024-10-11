import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RighSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiBookmark ,CiShare1,CiStar} from "react-icons/ci";
import { FaEye } from "react-icons/fa";


const News = () => {
    const {id} = useParams();
    const [news, setNews ] = useState(null);

    useEffect(() =>{
        const fetchNews = async () => {
            const response = await fetch('/news.json');  // Just fetch the JSON file directly
            const data = await response.json();
        
            // Find the specific news item based on the `id`
            const specificNews = data.find((newsItem) => newsItem._id === id);
            setNews(specificNews);
        };
        
        fetchNews();
    },[id])
    if (!news){
        return <p>Loading..</p>
    }

    return (
        <div>
            
            <Header></Header>
            <Navbar></Navbar>
            <div className=" grid grid-cols-1 md:grid-cols-4">

            <div className="col-span-3 border">
                <h2 className="text-2xl font-bold mt-3  mb-8">Dragon News</h2>
                <div className="mx-6 space-y-3">
                    <img className="rounded-xl" src={news.image_url} alt="" />
                    <h2 className="text-2xl font-bold " >{news.title}</h2>
                    <p>{news.details} </p>
                    <button className=" w-fit flex bg-red-600 text-white p-2 text-xl"> <Link className="flex gap-2 items-center p-2" to='/'> <FaArrowLeft />All News In This category</Link>   </button>
                </div>
                <div className="bg-red-200 p-4 mt-5 mx-5  mb-4 items-center flex justify-between ">
                <div className="flex gap-2">
                <img className="rounded-full h-12 w-12 mt-1" src={news.author.img} alt="" />
                 <div>
                 <p className="text-xl font-semibold">{news.author.name}</p>
                 <p className="text-xl block ">{news.author.published_date}</p>
                 </div>
                </div>
                <div className="flex text-3xl gap-2">
                    <p><CiBookmark /></p>
                    <p><CiShare1 /></p>
                </div>

            </div>
                
            </div>
            <div>
            <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default News;