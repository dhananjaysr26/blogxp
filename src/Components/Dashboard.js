import React, { useState, useEffect } from "react";
import "../index.css";
import axios from "axios";
import { BsFilePost, BsFillPersonFill } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import { GoLinkExternal } from "react-icons/go";


function Dashboard() {

    const [post, setPost] = useState([]);
    const [page, setPage] = useState([]);
    const [author, setAuthor] = useState([]);
    const [tag, setTag] = useState([]);

    useEffect(async () => {
        await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d')
            .then(res => {
                setPost(res.data.posts)
            });
        await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d')
            .then(resp => {
                setPage(resp.data.pages)
            });
        await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d')
            .then(resa => {
                setAuthor(resa.data.authors)
            });
        await axios.get('https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d')
            .then(rest => {
                setTag(rest.data.tags)
            });
    }, [])
    const data = [
        {
            monthName: "Jan",
            postNumber: 1500
        },
        {
            monthName: "Feb",
            postNumber: 1700
        },
        {
            monthName: "Mar",
            postNumber: 1000
        },
        {
            monthName: "Apr",
            postNumber: 2500
        },
        {
            monthName: "May",
            postNumber: 9900
        },
    ]
    return (
        <div className="main-content">
            <div className="cards">
                <div className="card-single">
                    <h4>{post.length}</h4>
                    <span className="cards-text">Post</span>
                    <BsFilePost className="cards-icon" />
                </div>
                <div className="card-single">
                    <h4>{page.length}</h4>
                    <span className="cards-text">Page</span>
                    <RiPagesFill className="cards-icon" />
                </div>
                <div className="card-single">
                    <h4>{author.length}</h4>
                    <span className="cards-text">Authors</span>
                    <BsFillPersonFill className="cards-icon" />
                </div>
                <div className="card-single">
                    <h4>{tag.length}</h4>
                    <span className="cards-text">Tags</span>
                    <FaTags className="cards-icon" />
                </div>
            </div>

            <div className="post-container">
                <h1>Last 5 Posts</h1>
                {
                    post.map((postData) => {
                        return (
                            <div className="post-card">
                                <h1>{postData.title} <a href={postData.url}><GoLinkExternal className="view-post" /></a></h1>
                                <h4>{postData.excerpt}</h4>
                                <div className="post-hint">
                                    <h3>#tech #React #git #coding</h3>
                                    <h4>Author: Dhananjay Singh</h4>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div className="chart-container">
                <h1>Monthly Chart</h1>
                <small>Post Per Month</small>
                <div className="chart">
                    <ResponsiveContainer width="100%" aspect={3}>
                        <LineChart data={data}>
                            <XAxis dataKey="monthName" interval={'preserveStartEnd'} />
                            <YAxis /> <Tooltip />
                            <Line dataKey="postNumber" />

                        </LineChart>

                    </ResponsiveContainer>
                </div>

            </div>
        </div>

    );
}

export default Dashboard;
