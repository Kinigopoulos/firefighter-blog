import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import ImageFrame from "../components/ImageFrame";


function Home() {
    const [posts, setPosts] = useState([]);
    const [photoToView, setPhotoToView] = useState(undefined);

    useEffect(() => {
        axios.get("/api/landmarks").then(res => {
            console.log(res);
            setPosts(res.data);
        })
    }, []);

    return (
        <>
            <Header/>
            {photoToView !== undefined &&
            <div className="imageFrameContainer">
                <div className="button imageFrameButton" onClick={() => setPhotoToView(undefined)}>
                    X
                </div>
                <img className="imageFramePhoto" src={photoToView.url} alt={photoToView.name}/>
            </div>
            }
            <div>
                {posts.map((post, key) => {
                    return (
                        <div className="postContainer" key={key}>
                            <div className="postImageContainer">
                                <img className="postImage"
                                     onClick={() => {
                                         setPhotoToView(post.photo)
                                     }}
                                     src={post.photo_thumb.url}
                                     alt={post.photo_thumb.name}/>
                            </div>
                            <div>
                                <Link to={`/post/${post.objectId}`}>
                                    <h1 className="postTitle">{post.title}</h1>
                                </Link>

                                <p>{post.short_info}</p>

                                <Link to={`/post/${post.objectId}`}>
                                    <div className="postButton">
                                        Read More
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home;