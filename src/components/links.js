import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";


const Links = () => {
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
        <div className="links">
            <h2 className="link-name"><a href="#about">About</a></h2>
            <h2 className="link-name"><a href="#experience">Experience</a></h2>
            <h2 className="link-name"><a href="#education">Education</a></h2>
            <h2 className="link-name"><a href="#certifications">Certificates</a></h2>
            <h2 className="link-name"><a href="#skills">Skills</a></h2>
            <div id="social-links">
                <h4>Find me on:</h4>
                {/* Links to my GitHub and LinkedIn profiles */}
                <a href="https://github.com/EwelinaPiszczek" target="_blank">
                    <FaGithubSquare className="git-hub" size={50} color="#3A3A3A"/>
                </a>
                <a href="https://www.linkedin.com/in/ewelinapiszczek/" target="_blank">
                    <FaLinkedin className="linked-in" size={50} color="#3A3A3A"/>
                </a>
            </div>
            {/* Button to download PDF version of CV */}
            <div className="pdf-version">
                <h4>Download PDF version:</h4>
                    <AiOutlineDownload className="pdf" size={50} color="#3A3A3A" onClick={onButtonClick}/>
            </div>
        </div>
    );
};

export default Links;