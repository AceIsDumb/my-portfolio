const pages = {
    aboutme: `
        <div class="about">
        <h2>ABOUT ME</h2>
            <p>
                Hello 👋 I'm Chace, a secondary 4 student from the School of Science and Technology, and a frontend web and native developer.
                <br/>
                I've worked on numerous projects alongside my peers and have even taught my juniors @ SST Inc. I enjoy going for hackathons and competitions to sharpen my skills.
                <br/>
                I enjoy networking with passionate fellow developers and am very interested in Artificial Intelligence. Between my studies, developing and classes, you can find me playing guitar or working on side projects
                <br/>
                
            </p>
    </div>
    `,
    participations: `
        <div class="participation">
        <h2>PARTICIPATION</h2>
        <p>
            2022
            <br/>
            - SST Inc. 2022-present
            <br/>
            - Spark AR Bootcamp 2022
            <br/>
            - SenseTime AI Bootcamp 2022
            <br/>
            2024
            <br/>
            - Perse Coding Team Challenge 2024 Participation
            <br/>
            - Hackomania 2024 Participation
            <br/>
            - Building with Flutter workshop
            <br/>
            - BlahajCTF 2024 Participation
            <br/>
            - AWS Deepracer workshop @ Republic Polytechnic 2024
            <br/>
            2025
            <br/>
            - Perse Coding Team Challenge 2025 Distinction
        </p>
    </div>
    `,
    projects: `
        <div class="content">
        
        <div class="projects">
            <h2>MAJOR PROJECTS</h2>
            <div class="project-list">
                <div class="project-item">
                    <img src="./resources/Open house.png" alt="SST Open House app 2024 logo">
                    <p>SST Open House App 2024/2025</p>
                    <p class="project-description">App for guests during SST's 2024 Open House</p>
                    <a href="https://github.com/sst-inc/openhouseapp2024">Repository</a>
                </div>
                <div class="project-item">
                    <img src="./resources/Virtual tour.png" alt="SST virtual tour logo">
                    <p>SST Virtual Tour</p>
                    <p class="project-description">A web-based virtual tour of SST</p>
                    <a href="https://github.com/tedydevmac/virtualtour">Repository</a>
                </div>
                <div class="project-item">
                    <img src="./resources/Sokudo.png" alt="Sokudo! logo">
                    <p>Sokudo!</p>
                    <p class="project-description">A mental health chatbot built on Gemini 2.0</p>
                    <a href="https://github.com/AceIsDumb/sokudo">Repository</a>
                </div>
            </div>
        </div>
        <div class="projects">
            <h2>Side Projects</h2>
            <div class="project-list">
                <div class="project-item">
                    <p>Adaptable-Agriculture-Assistant</p>
                    <p class="project-description">A project to revolutionize agriculture! Made for SST-SIT Applied Learning Camp</p>
                    <a href="https://github.com/AceIsDumb/Adaptable-Agriculture-Assistant">Repository</a>
                </div>
                <div class="project-item">
                    <p>KittyClub</p>
                    <p class="project-description">Frontend shopping site & Backend fraud detection algorithm using Confluent Kafka! Made for Hackomania 2024</p>
                    <a href="https://github.com/AceIsDumb/KittyClubHackomania2024/tree/main">Repository</a>
                </div>
                <div class="project-item">
                    <p>ILikeMoney</p>
                    <p class="project-description">A page to track balance, transactions, setting spending goals, stores locally! Made for personal use</p>
                    <a href="https://github.com/AceIsDumb/ilikemoney">Repository</a>
                </div>
            </div>
        </div>
    `
};

function loadPage(page) {
    document.getElementById("content").innerHTML = pages[page];
}


window.onload = () => loadPage('aboutme');
