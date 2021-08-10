import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div class="sidebar__recentItem">
            <span class="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt=""/>
                <Avatar className='sidebar__avatar' src={user.photoUrl}>
                {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h3>{user.email}</h3>
            </div>

            <div className="sidebar__stats">

                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">110</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views of your post</p>
                    <p className="sidebar__statNumber">751</p>
                </div>
            </div>

            <div className="sidebar__button">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('samsaver')}
            </div>
        </div>
    )
}

export default Sidebar
