// Page Header
class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="navigation">
                <a href="index.html">
                    <div id="navigation-left">
                            <img src="Images/Logo.png" alt="Logo for Kat Minor Site" id="logo">
                            <h1 class="logo-text">Kat Minor</h1>
                    </div>
                </a>
                <div id="navigation-right">
                    <p class="navigation-text"><a href="grapevine.html">Grapevine</a></p>
                    <p class="navigation-text"><a href="drift.html">Drift</a></p>
                    <p class="navigation-text"><a href="mlb.html">MLB</a></p>
                    <p class="navigation-text"><a href="about.html">About</a></p>
                </div>
            </nav>`;
    }
}

customElements.define('page-header', header);

// Page Footer
class footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="footer">
                <div id="footer-left">
                    <a href="index.html">
                        <div id="footer-left">
                            <img src="Images/Logo.png" alt="Logo for Kat Minor Site" id="footer-logo">
                            <h1 class="logo-text">Kat Minor</h1>
                        </div>
                    </a>
                </div>
                <div id="footer-right">
                    <p class="navigation-text"><a href="about.html">About</a></p>
                    <p class="navigation-text"><a href="https://www.linkedin.com/in/kathryn-minor-design/">Linkedin</a></p>
                </div>
            </nav>`;
    }
}

customElements.define('page-footer', footer);

// Grapevine Island
class grapevineIsland extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="grapevine.html">
            <div class="project" id="grapevine">
                <div class="project-content">
                    <div class="project-description">
                        <h2 class="project-heading">Grapevine</h2>
                        <h3 class="project-subheading">Level 1</h3>
                        <p class="project-paragraph">Grapevine is an app for divorced, 
                            widowed, and single people aged 55 and older. Instead of the typical online dating experience, 
                            Grapevine caters to its audience by bringing a digital flair to what dating used to be. 
                            Focusing on interests and locations, Grapevine users can host events, send personalized love letters, 
                            and call each other whenever they wish.</p>
                    </div>
                    <div class="project-image">
                        <img src="Images/Home/Grapevine.svg" alt="Image of the Grapevine Dating Project" class="project-image" alt="An image representing the
                        Grapevine Project.">
                    </div>
                </div>
                <div class="number-container" id="grapevine-number">
                    <img src="Images/Home/1.svg" class="number" alt="The number one">
                </div>
            </div>
        </a>`;
    }
}

customElements.define('grapevine-island', grapevineIsland);

// Drift Island
class driftIsland extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="drift.html">
            <div class="project" id="drift">
                <div class="number-container" id="drift-number">
                    <img src="Images/Home/2.svg" class="number" alt="The number 2">
                </div>
                <div class="project-content">
                <div class="project-image">
                    <img src="Images/Home/Drift.svg" alt="Image representative of my work at Drift" class="project-image">
                </div>
                <div class="project-description">
                    <h2 class="project-heading">Drift</h2>
                    <h3 class="project-subheading">Level 2</h3>
                    <p class="project-paragraph">Drift is a product which helps businesses better sell to other
                        businesses through decreasing selling friction. Drift makes it easy to book meetings, 
                        send customized emails, and increase relations with large target accounts. 
                        Repersentatives who sell Drift have the option of using the Drift App or Drift Desktop. 
                        I had the pleasure of working on both during my time at Drift, although during my time 
                        I completely overhauled the mobile app design, making it more accessible and easier to 
                        use. </p>
                    </div>
                </div>
            </div>
        </a>`;
    }
}

customElements.define('drift-island', driftIsland);

// MLB Island
class mlbIsland extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="mlb.html">
            <div class="project" id="mlb">
                <div class="project-content">
                    <div class="project-description">
                        <h2 class="project-heading">MLB The Show</h2>
                        <h3 class="project-subheading">Level 3</h3>
                        <p class="project-paragraph">MLB The Show is a Major League Baseball video game which focuses 
                            on running your own baseball team with famous and historic players. As they play the game, 
                            players get the opportunity to level up their own baseball characters and customize their 
                            team.</p>
                    </div>
                    <div class="project-image">
                        <img src="Images/Home/MLB.svg" alt="Image representative of my work on MLB The Show" class="project-image">
                    </div>
                </div>
                <div class="number-container" id="mlb-number">
                    <img src="Images/Home/3.svg" class="number">
                </div>
            </div>
        </a>`;
    }
}

customElements.define('mlb-island', mlbIsland);

