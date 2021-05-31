import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

function Post() {
    const [post, setPost] = useState(undefined);
    const {id} = useParams();

    useEffect(() => {
        axios.get("https://firefighter-2376.instashop.ae/api/landmarks/" + id).then(res => {
            console.log(res);
            setPost(res.data);
        })
    }, [id]);

    return (
        <>
            <Header/>
            <div>
                {post !== undefined &&
                <div className="post_PostContainer">
                    <div className="post_ImageContainer">
                        <img className="post_Image"
                             onClick={() => window.open(post.photo.url, "_blank")}
                             src={post.photo.url}
                             alt={post.photo.name}/>
                    </div>

                    <div>
                        <h1 className="primaryText">{post.title}</h1>

                        <a className="post_url" href={post.url}>{post.url}</a>
                        <hr/>
                        <h3 className="primaryText">Short Info</h3>
                        <p>{post.short_info}</p>
                        <h3 className="primaryText">Description</h3>
                        <p>{post.description}</p>

                        <Link to="/firefighter-blog">
                            <div className="button">
                                Go Back
                            </div>
                        </Link>
                    </div>
                </div>

                }
            </div>
        </>
    )
}

export default Post;