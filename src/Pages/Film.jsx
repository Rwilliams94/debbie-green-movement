import React from "react";
import "../Components/Page.css";

const Film = () => {
    // Cloudinary video URL
    const videoUrl = "https://res.cloudinary.com/dahzswwzk/video/upload/v1776419629/Debbie%20Site/about/Debbie_Green-Movement_Genevieve_Stevenson-compressed_h32mmb.mp4";

    return (
        <div className="page-main" style={{
            minHeight: "100vh",
            minWidth: "1000px",
        }}>
            <div style={{
                width: "100%",
                maxWidth: 1000,
                minHeight: "100vh",
                margin: "0 auto",
                backgroundColor: "#000",
                color: "whitesmoke",
                boxSizing: "border-box",
                padding: "100px",
            }}>
                <div style={{ width: "100%", maxWidth: 960, margin: "50px auto" }}>
                    <div style={{
                        position: "relative",
                        width: "100%",
                        paddingTop: "56.25%", // 16:9
                        backgroundColor: "#000",
                        borderRadius: 4,
                        overflow: "hidden",
                    }}>
                        <video
                            controls
                            autoPlay
                            muted
                            loop
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Film;


