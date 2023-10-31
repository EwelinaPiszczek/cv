import React from "react";

// Skills component
const Skills = () => {
    return (
        <div>
            <h2 className="section-name" id="skills">Skills</h2>
            <div className="skills-section">
                <div className="section-divider">
                    <h3>Technical Skills</h3>
                        <ul>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>VS Code</li>
                            <li>MongoDB</li>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Bootstrap</li>
                            <li>WordPress</li>
                            <li>Adobe CC</li>
                            <li>Responsive Design</li>
                            <li>SEO</li>
                            <li>SiteGround</li>
                            <li>Elementor</li>
                        </ul>
                </div>
                <div className="section-divider">
                    <h3>Soft Skills</h3>
                        <ul>
                            <li>Teamwork and Collaboration</li>
                            <li>Communication</li>
                            <li>Problem Solving</li>
                            <li>Adaptability</li>
                            <li>Time Management</li>
                            <li>Attention to Detail</li>
                            <li>Self Motivation</li>
                            <li>Leadership</li>
                            <li>Creativity</li>
                            <li>Organization</li>
                        </ul>
                </div>
                <div className="section-divider">
                    <div className="languages">
                        <h3>Programming Languages</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                        <h3>Languages</h3>
                        <ul>
                            <li>English (Fluent)</li>
                            <li>Polish (Native)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;