import React, { useState, useEffect } from 'react'
import './PostPage.css'
import axios from "axios";
import { GoLinkExternal } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
function PostPage() {
    const [post, setPost] = useState([]);
    useEffect(async () => {
        await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d')
            .then(res => {
                setPost(res.data.posts)
            });
    }, [])

    return (

        <div className="post-main-container">
            <div className="postsub-container">
                <h1>Without Meta Discription</h1>
                <ul className="chart">
                    {
                        post.map((postData) => {
                            if (postData.meta_description == null) {
                                return (
                                    <li className="chart-list">{postData.title}
                                        <a href={postData.url} target="_blank"><GoLinkExternal className="elink-icons" /></a>
                                        <BiEdit className="edit-icons" />
                                        <span>mark as Valid</span></li>
                                )
                            }
                        }
                        )
                    }
                </ul>
            </div>
            <div className="postsub-container">
                <h1>Without Featured Image</h1>
                <ul className="chart">
                    <p >Everything is Good Here!</p>
                    {
                        post.map((postData) => {
                            if (postData.feature_image == null) {

                                return (
                                    <li className="chart-list">{postData.title}
                                        <a href={postData.url} target="_blank"><GoLinkExternal className="elink-icons" /></a>
                                        <BiEdit className="edit-icons" />
                                        <span>mark as Valid</span></li>
                                )
                            }
                        })}


                </ul>
            </div>
            <div className="postsub-container">
                <h1>Too Short Post(Below 250words)</h1>
                <ul className="chart">
                    {
                        post.map((postData) => {
                            if (postData.reading_time < 3) {

                                return (
                                    <li className="chart-list">{postData.title}
                                        <a href={postData.url} target="_blank"><GoLinkExternal className="elink-icons" /></a>
                                        <BiEdit className="edit-icons" />
                                        <span>Read Time:{postData.reading_time}</span></li>
                                )
                            }
                        })}

                </ul>
            </div>
            <div className="postsub-container">
                <h1>Too Long Meta Discription</h1>
                <ul className="chart">
                    {
                        post.map((postData) => {
                            if (postData.meta_description != null) {
                                return (
                                    <li className="chart-list">{postData.title}
                                        <a href={postData.url} target="_blank"><GoLinkExternal className="elink-icons" /></a>
                                        <BiEdit className="edit-icons" />
                                        <span>Meta Description:{postData.meta_description}</span></li>
                                )
                            }
                        })}
                </ul>
            </div>
            <div className="postsub-container">
                <h1>Too Long Url (more than 100 char)</h1>
                <ul className="chart">
                    {
                        post.map((postData) => {
                            if ((postData.url).length > 80) {
                                return (
                                    <li className="chart-list">{postData.title}
                                        <a href={postData.url} target="_blank"><GoLinkExternal className="elink-icons" /></a>
                                        <BiEdit className="edit-icons" />
                                    </li>
                                )
                            }
                        })}
                </ul>
            </div>
            <div className="postsub-container">
                <h1>Wrong Slug</h1>
                <ul className="chart">
                    <p >Awesome Everything is Good Here!</p>
                </ul>
            </div>

        </div>
    )
}

export default PostPage
