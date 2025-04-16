import React from 'react';
import './NewsBlock.css';
import { usePopup } from '../PopupContext';


const NewsBlock = ({ title, pictureSrc, content, direction = "line" }) => {
    const { openPopup } = usePopup();
    return (
        <div className={
            `main-news-block 
            ${direction === "line" ?
            "normal-news-block" : "reverse-news-block"}`
        }>
            <div className={
                `picture-news-block
                ${direction === "line" ? 
                "normal-picture-block" : "reverse-picture-block"}`
            }>
                <img 
                    src={pictureSrc} 
                    alt={title} 
                    style={{ cursor: 'pointer' }}
                    onClick={() => openPopup(pictureSrc)}
                />
            </div>
            <div className="content-news-block">
                <div className={
                    `title-news-block
                    ${direction === "line" ? 
                    "normal-title-block" : "reverse-title-block"}`
                }>{title}</div>
                <div className={
                    `text-news-block
                    ${direction === "line" ? 
                    "normal-text-block" : "reverse-text-block"}`
                }>{content}</div>
            </div>
        </div>
    );
};
export default NewsBlock;
