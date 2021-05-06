import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

import "./Video.css";



const dashboard = React.memo(() => {
    
    const [videoList, setVideoList] = useState([]);
    useEffect(() => {
       
            axios
                .get("http://localhost:3000/videoList", {
                    headers: {
                        "Content-Type": "application/json"
                        
                    },
                })
                .then((res) => {
                    setVideoList(res.data);
                });
        
    }, []);
    
    const videos = videoList.map((video) => {

        return (
            <div
                className="video "//col-xs-12 col-sm-12 col-md-3 col-lg-4
                key={video._id}
            >
                
                <span className="username">
                    <Link to={"/video/" + video.uploadTitle}>
                        {video.uploaderName}
                    </Link>
                </span>
                <span className="video-title">
                    {video.uploadTitle}
                </span>
                <Link to={"/video/" + video.uploadTitle}>
                    <div className="video-thumbnail">
                        <img src={video.thumbnailPath}  />
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <React.Fragment>
            
            <div className="container mt-5">
                <h1>Videos</h1>
                <hr className="my-4" /> <hr className="my-4" />

                <div className="stream rows">{videos}<hr className="my-4" /></div>
            </div>
        </React.Fragment>
    );
});

export default dashboard;