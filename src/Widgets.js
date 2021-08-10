import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">

                <h2>Linkedin News</h2>
                <InfoIcon />

            </div>

            {newsArticle('Sam is Back!', 'Top News - 3000 readers')}
            {newsArticle('Covid19: India Updates', 'Top News - 1999 readers')}
            {newsArticle('Intense Rainfall over north India', 'Top News - 1239 readers')}
            {newsArticle('Over 41 crore vaccines provided to states - Centre', 'Top News - 888 readers')}
            {newsArticle('Priyanka Gandhi Hits back at BJP', 'Top News - 200 readers')}
            {newsArticle('Virat Kohli Spotted on Miami Beach', 'Top News - 90 readers')}
        </div>
    )
}

export default Widgets
