import React from 'react';
import './NewsBlock.css';

const NewsBlock = ({ title, pictureSrc, content }) => {
    return (
        <div className="main-news-block">
            <div className="title-news-block">{title}</div>
            <div className="content-news-block">
                <div className="picture-news-block">
                    <img src={pictureSrc} alt={title} />
                </div>
                <div className="text-news-block">{content}</div>
            </div>
        </div>
        );
    };
export default NewsBlock;