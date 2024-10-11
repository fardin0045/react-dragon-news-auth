import { MdOutlinePublishedWithChanges } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [news , setNews] = useState([]);
    
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    useEffect(() =>{
        fetch('news.json')
        .then(res => res.json())
        .then(data => setNews(data))
    },[])
    return (
        <div className='space-y-6'>
            <h2 className="text-2xl font-semibold">All Categories</h2>
            {
                categories.map(category => <Link
                className='block ml-8 text-xl font-medium'
                
                key={category.id}
                to={`/category/${category.id}`}
                >{category.name}</Link>)
            }
            { 
               news.slice(0,4).map(newNews =>
    
                <div  key={newNews._id} 
                className='rounded-lg font-semibold space-y-2'>
                <img className='rounded-xl mb-2' src={newNews.image_url} alt="" />
                {newNews.title}
                <div className='my-4 flex mt-5 gap-4 font-light'>
                <p>{newNews.author.name} </p>
                <p className="flex gap-3"><MdOutlinePublishedWithChanges />{newNews.author.published_date}</p>
                <hr />
                </div>
                
                </div>
                )
            }
        </div>
    );
};

export default LeftSideNav;