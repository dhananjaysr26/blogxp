import React from 'react'
import './PostPage.css'

import { GoLinkExternal } from "react-icons/go";
import { BiEdit } from "react-icons/bi";
function PostPage() {
    return (
        <div className="post-main-container">
            <div className="postsub-container">
                <h1>Without Meta Discription</h1>
                <ul className="chart">
                    <li className="chart-list">My 10 Best Post in English
                        <GoLinkExternal className="elink-icons" />
                        <BiEdit className="edit-icons" />
                        <span>mark as Valid</span></li>
                    <li className="chart-list">My 10 Best Post in English <span>mark as Valid</span></li>
                    <li className="chart-list">My 10 Best Post in English <span>mark as Valid</span></li>
                    <li className="chart-list">My 10 Best Post in English <span>mark as Valid</span></li>

                </ul>
            </div>
            <div className="postsub-container">
                <h1>Without Featured Image</h1>
                <ul className="chart">
                    <li className="chart-list">My 10 Best Post in English
                        <GoLinkExternal className="elink-icons" />
                        <BiEdit className="edit-icons" />
                        <span>mark as Valid</span></li>

                    <li className="chart-list">My 10 Best Post in English <span>mark as Valid</span></li>

                </ul>
            </div>
            <div className="postsub-container">
                <h1>Too Short Post(Below 250words)</h1>
                <ul className="chart">
                    <li className="chart-list">My 10 Best Post in English
                        <GoLinkExternal className="elink-icons" />
                        <BiEdit className="edit-icons" />
                        <span>mark as Valid</span></li>
                    <li className="chart-list">My 10 Best Post in English <span>mark as Valid</span></li>
                    <li className="chart-list">My 10 Best Post in English <span>mark as Valid</span></li>


                </ul>
            </div>
            <div className="postsub-container">
                <h1>Too Long Meta Discription</h1>
                <ul className="chart">
                    <li className="chart-list">My 10 Best Post in English
                        <GoLinkExternal className="elink-icons" />
                        <BiEdit className="edit-icons" />
                        <span>mark as Valid</span></li>
                    <li className="chart-list">My 10 Best Post in English <span>mark as Valid</span></li>
                </ul>
            </div>
            <div className="postsub-container">
                <h1>Too Long Url (more than 100 char)</h1>
                <ul className="chart">
                    <li className="chart-list">My 10 Best Post in English
                        <GoLinkExternal className="elink-icons" />
                        <BiEdit className="edit-icons" />
                        <span>mark as Valid</span></li>

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
