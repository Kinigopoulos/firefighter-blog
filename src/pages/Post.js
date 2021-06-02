import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import {useCookies} from "react-cookie";
import MessagePopup from "../components/MessagePopup";

function Post() {
    const [post, setPost] = useState(undefined);
    const [cookies] = useCookies(['user-token']);
    const [isLogged, setIsLogged] = useState(false);
    const [message, setMessage] = useState({message: '', color: ''});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://firefighter-2376.instashop.ae/api/landmarks/${id}`).then(res => {
            setPost(res.data);
        }).catch(err => {
            if (err.response.status === 400) {
                console.log("Error trying to fetch this landmark");
                window.alert("Error trying to fetch this landmark (400)");
            } else if (err.response.status === 404) {
                console.log("Object not found");
                window.alert("Object not found (404)");
            }
        });
        setIsLogged(cookies.hasOwnProperty('user-token'));
    }, [id, cookies]);

    function postChange(e) {
        e.preventDefault();
        setPost({...post, [e.currentTarget.id]: e.currentTarget.innerText});
    }

    function submitChanges(e) {
        e.preventDefault();
        axios.put(`https://firefighter-2376.instashop.ae/api/landmarks/${id}`, {
            title: post.title,
            "short_info": post['short_info'],
            description: post.description
        }, {headers: {"x-sessionToken": cookies['user-token'].sessionToken}})
            .then(res => {
                setMessage({message: res.data.message, color: "success"});
            }).catch(err => {
                if(err.response.status === 400){
                    console.log("Bad Request");
                    setMessage({message: "Bad Request", color: "fail"});
                } else if(err.response.status === 401){
                    console.log("Missing or invalid session token");
                    setMessage({message: "Missing or invalid session token", color: "fail"});
                } else if(err.response.status === 404){
                    console.log("Object not found");
                    setMessage({message: "Object not found", color: "fail"});
                }
        })
    }

    return (
        <>
            <Header/>
            <MessagePopup message={message.message} color={message.color}/>
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
                        <div contentEditable={isLogged} suppressContentEditableWarning={true} onBlur={postChange}
                             className={`primaryText postTitle ${!isLogged && "disabled"}`} id="title">
                            {post.title}
                        </div>

                        <a className="post_url" href={post.url}>{post.url}</a>
                        <hr/>
                        <div contentEditable={isLogged} suppressContentEditableWarning={true} onBlur={postChange}
                             className={`primaryText postParagraph ${!isLogged && "disabled"}`} id="short_info">
                            {post.short_info}
                        </div>

                        <h3 className="primaryText">Description</h3>
                        <div contentEditable={isLogged} suppressContentEditableWarning={true} onBlur={postChange}
                             className={`primaryText postParagraph ${!isLogged && "disabled"}`} id="description">
                            {post.description}
                        </div>

                        <div className="postActionsContainer">
                            <Link to="/firefighter-blog">
                                <div className="button mr-1">
                                    Go Back
                                </div>
                            </Link>
                            {isLogged &&
                            <div className="button" onClick={submitChanges}>
                                Submit Changes
                            </div>
                            }

                        </div>

                    </div>
                </div>

                }
            </div>
        </>
    )
}

export default Post;