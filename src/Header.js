import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { logout } from './features/userSlice';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function Header() {

    const dispatch = useDispatch()

    const logOutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

    return (
        <div className='header'>

            <div className="header__left">

                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__search">

                    <SearchIcon />
                    <input placeholder='Search' type="text" />

                </div>

            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notification'/>
                <HeaderOption onClick={logOutOfApp} avatar="https://media-exp3.licdn.com/dms/image/D5635AQFeBoU9e18JVA/profile-framedphoto-shrink_400_400/0/1626192370241?e=1626282000&v=beta&t=c0wqAs9G4g7yuL2-VgusozGrBOyEUYE5iP5nBN-FdeY" title='Me'/>
            </div>

        </div>
    )
}

export default Header
