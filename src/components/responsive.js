import React from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

const Responsive = () => {

    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Ewelina-Piszczek-CV.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Ewelina-Piszczek-CV.pdf';
                alink.click();
            })
        })
    }
    // Return the links
    return (
        <div className="responsive">
            <div id="social-links-footer">
                <h4>Find me on:</h4>
                <a href="https://github.com/EwelinaPiszczek" target="_blank">
                    <FaGithubSquare className="git-hub" size={35} color="#3A3A3A"/>
                </a>
                <a href="https://www.linkedin.com/in/ewelinapiszczek/" target="_blank">
                    <FaLinkedin className="linked-in" size={35} color="#3A3A3A"/>
                </a>
            </div>
            <div className="pdf-version-footer">
                <h4>Download PDF version:</h4>
                    <AiOutlineDownload className="pdf" size={35} color="#3A3A3A" onClick={onButtonClick} />
            </div>
        </div>
    );
};

export default Responsive;