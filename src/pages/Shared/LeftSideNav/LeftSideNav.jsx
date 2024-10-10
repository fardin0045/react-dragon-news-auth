
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
                news.map(newNews => <p key={newNews._id} className='text-2xl font-semibold'>{newNews.title}</p>
                )
            }
        </div>
    );
};

export default LeftSideNav;