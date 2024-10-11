import { CiBookmark ,CiShare1,CiStar} from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


const NewsCard = ({news}) => {
    const {_id,title,image_url,author,details,rating,total_view} = news;
    return (
        <div className="mb-5 border rounded-lg pb-8">
            <div className="bg-[#F3F3F3] p-4 mx-auto mb-4 items-center flex justify-between ">
                <div className="flex gap-2">
                <img className="rounded-full h-12 w-12 mt-1" src={author.img} alt="" />
                 <div>
                 <p className="text-xl font-semibold">{author.name}</p>
                 <p className="text-xl block ">{author.published_date}</p>
                 </div>
                </div>
                <div className="flex text-3xl gap-2">
                    <p><CiBookmark /></p>
                    <p><CiShare1 /></p>
                </div>

            </div>
            
           <div className="mx-4 space-y-3">
           <h4 className="text-2xl font-bold">{title}</h4>
           <img className="rounded-xl" src={image_url} alt="" />

           {
            details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className='text-red-500 font-medium'>Read More...</Link>  </p>:
            <p>{details}</p>
           }
           </div>
           <hr />
           <div className="mx-4 my-5 flex justify-between">
            <p className="flex items-center text-xl gap-2" ><CiStar className="text-2xl" /> {rating.number}</p>
            <p className="flex items-center gap-2 text-xl"><FaEye /> {total_view}</p>
           </div>
        </div>
    );
};

export default NewsCard;