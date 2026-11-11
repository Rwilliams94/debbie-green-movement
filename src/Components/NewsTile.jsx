import React from 'react';
import './NewsTile.css';

// Compact text-only news item, for updates that have no picture.
// Several tiles sit side by side inside a NewsTileRow.
const NewsTile = ({ title, children }) => (
    <div className="news-tile">
        {title && <div className="news-tile-title">{title}</div>}
        <div className="news-tile-text">{children}</div>
    </div>
);

export const NewsTileRow = ({ children }) => (
    <div className="news-tile-row">{children}</div>
);

export default NewsTile;
