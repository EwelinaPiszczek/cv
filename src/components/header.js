import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


// Header component
const Header = () => {
    return (
        <div className='header'>
            <div className='details-container'>
                <div className='name'>
                    <h2 className='first-name'>Ewelina</h2>
                    <h1 className='surname'>Piszczek</h1>
                </div>
                <div className='contact-info'>
                    <h3 id='info'>Contact Info</h3>
                    <p className='details-list'>
                        <a href='mailto: ewelinapiszczek96@gmail.com'>ewelinapiszczek96@gmail.com</a>
                    </p>
                    <p className='details-list'>
                        <a href='tel: +447841764982'>+44 7841 764 982</a>
                    </p>
                    <p className='details-list'>
                        <a href='https://ewelina.co/' target="_blank">www.ewelina.co</a>   
                    </p>

                </div>
            </div>
            <div id='job-title'>
                <hr id='line' />
                <h2 id="title">Junior Web Developer</h2>
                <div id='location'>
                    <FontAwesomeIcon icon={faLocationDot} id="location-icon"/>
                    <h3 id="location-text">Hertfordshire</h3>
                </div>
                <hr id='line2' />
            </div>
            
        </div>
    )
}

export default Header;
