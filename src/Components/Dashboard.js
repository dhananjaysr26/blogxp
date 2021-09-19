import React from "react";
import "../index.css";
import { BsFilePost, BsFillPersonFill } from "react-icons/bs";
import { RiPagesFill } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

function Dashboard() {
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
                    <h4>100</h4>
                    <span className="cards-text">Post</span>
                    <BsFilePost className="cards-icon" />
                </div>
                <div className="card-single">
                    <h4>110</h4>
                    <span className="cards-text">Page</span>
                    <RiPagesFill className="cards-icon" />
                </div>
                <div className="card-single">
                    <h4>120</h4>
                    <span className="cards-text">Authors</span>
                    <BsFillPersonFill className="cards-icon" />
                </div>
                <div className="card-single">
                    <h4>200</h4>
                    <span className="cards-text">Tags</span>
                    <FaTags className="cards-icon" />
                </div>
            </div>

            <div className="post-container">
                <h1>Last 5 Posts</h1>
                <div className="post-card">
                    <h1>Post Name</h1>
                    <h2>Post Title</h2>
                    <div className="post-hint">
                        <h3>#tech #React #git #coding</h3>
                        <h4>Author :Dhananjay Singh</h4>
                    </div>
                </div>
                <div className="post-card">
                    <h1>Post Name</h1>
                    <h2>Post Title</h2>
                    <div className="post-hint">
                        <h3>#tech #React #git #coding</h3>
                        <h4>Author :Dhananjay Singh</h4>
                    </div>
                </div>

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
