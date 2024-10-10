import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex pt-5">
            <button className="btn btn-secondary bg-red-600 rounded-none"> Breaking News</button>
            <Marquee pauseOnHover={true} speed={100} className="bg-gray-200">
               <Link className="mr-12" to='/'> I can be a React component, multiple React components, or just some text.</Link>
               <Link className="mr-12" to='/'> Haha loved this this is amazing i am enjoying .</Link>
               <Link className="mr-12" to='/'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;