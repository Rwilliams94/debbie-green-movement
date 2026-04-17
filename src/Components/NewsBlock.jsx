import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import './NewsBlock.css';
import { usePopup } from '../PopupContext';
import LazyImage from './LazyImage';


const NewsBlock = memo(({ title, pictureSrc, content, direction = "line", link }) => {
    const { openPopup } = usePopup();

    const contentBlock = (
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
    );

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
                <LazyImage
                    src={pictureSrc}
                    alt={title}
                    style={{ cursor: 'pointer' }}
                    onClick={() => openPopup(pictureSrc)}
                />
            </div>
            {link ? (
                <NavLink to={link} style={{ textDecoration: 'none', color: 'inherit' }}>
                    {contentBlock}
                </NavLink>
            ) : (
                contentBlock
            )}
        </div>
    );
});
export default NewsBlock;
