
// ===== WEBSITE DESIGN =====

const style = document.createElement("style");

style.textContent = `
  body {
    margin: 0;
    background: #f0edff;
    font-family: Arial, sans-serif;
    text-align: center;
    color: #242038;
  }

  .screen {
    padding: 40px 20px;
    max-width: 800px;
    margin: auto;
  }

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 12px;
  }

  button {
    padding: 12px 25px;
    background: #7554d8;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
  }

  button:hover {
    background: #5335af;
  }

  img {
    width: 400px;
    max-width: 100%;
    border-radius: 15px;
  }
`;

document.head.appendChild(style);


// ===== WEBSITE CONTENT =====

const app = document.getElementById("app");


// ===== SCREEN 1: HOME =====

function showHome() {
  app.innerHTML = `
    <div class="screen">
      <h1>Welcome to My Personal Website</h1>

      <p>This is my Personal Website</p>

      <button id="Portfolio">
        View Portfoilio
      </button>
      <button id="CV">
        View CV
      </button>
    </div>
  `;

  document.getElementById("Portfolio")
    .addEventListener("click", showPortfolio);

  document.getElementById("CV")
    .addEventListener("click", showCV);

  document.getElementById("About")
    .addEventListener("click", showAbout);
}



// ===== SCREEN 2: Portfolio ===== <img src="picture.jpg" alt="My Picture">

function showPortfolio() {
  app.innerHTML = `
    <div class="screen">
      <h1>Portfolio</h1>

      <h2>Projects & Experience <h2>
      <p> 
      <h3> Data Analysis & Machine Learning <h3> 
      <p> •	Currently helping on the analysis of a large brokers Motor Fleet business to provide pricing and analytical Insights. Expolring the nature and limitations of data which has not been looked at previously.<p>
      <p> •	Assisted the pricing of Non-standard motor data for a Broker seeking their own capacity. Noticing the poor relative fit of GBMs over classic models.<p>
      <p> •	Insurance Data preparation and cleaning using R and Python readying data for pricing models,
      <p> •	Assisted and tested a training course on Insurance Price modelling for new graduate Data Scientists for a small insurer illustrating data cleansing, preparation and model fitting, testing and pruning (GLMs, Generalised Additive Models (GAM) and Gradient Boosting Machines (LightGBM).<p>
      <p> <p>
      <h3>	Internship at Flock Insurance (Insuretech)<h3>
      <p> •	Analysed Flock motor courier experience looking at the predictiveness of public domain census data, identifying issues and limitation with deprivation deciles before the publication of an official report.<p>
      <p> •	Applied a GAM to Flock data, producing a report explaining the model and how it could be adapted for future use. <p>
      <p> •	Built databases and dashboards of an Insurer’s competitiveness using DB Browser SQLite and Google Looker for an Insurance Client <p>
      <p> •	Automated the production of Actuarial Results Spreadsheets passing data and creating Excel formulae from R.<p>
      <p> <p>
      <h3> Academic & Programming Projects <h3> 
      <p> •	Wrote a university paper exploring the Four Colour Theorem aimed at lay audience <p>
      <p> •	Completed a Python university assessment on graph connectivity using Jupyter Notebook.<p>
      <p> •	Developed a Pac-Man game for A-Level Computer Science, implementing different search algorithms in Javascript<p>
      <p> <p>
      <h3> AI & Technology <h3> 
      <p> •	Regularly use Claude and ChatGPT to assist with coding and report writing.<p>
      <p> •	Strong interest in AI and its practical applications. <p>
      <p> •	Built my own PC with dual boot for Windows 11 and Linux <p>
      <p><p>
      <h3> Personal Interests & Achievements <h3> 
      <p> •	Interested in auctions for Gemstones, watches and cars, researching and identifying undervalued items.<p>
      <p> •	Explored cryptocurrency markets, finding and exploiting successful trading opportunities with small stakes<p>
      <p> •	Competed in (Xbox) Destiny 2 tournaments, challenges and competitive events individually and in teams with players in other countries <p>

      <div>
        <button id="backButton">
          Go Back
        </button>
      </div>
    </div>
  `;

  document.getElementById("backButton")
    .addEventListener("click", showHome);
}

// ===== Screen 3: CV =====
function showCV() {
  app.innerHTML = `
    <div class="screen">
      <h1>My CV </h1>

      <style>
CV {
    width: 90%;
    margin: 0 auto;
    text-align: left;
}
</style>
      
<p>Marcus Kelsey|         Colchester, Essex|          <a href="mailto:Marcus.kelsey@tiscali.co.uk">Marcus.kelsey@tiscali.co.uk</a></p>

<p></p>


<h2>Personal Summary</h2>

<p>Graduate BSc in Mathematics with Statistics from Birkbeck with a 2:1. Now seeking employment. I am a detail-oriented person with strong research skills, demonstrated by my work in developing statistical models on insurance data, which I have translated into clear, effective presentations.</p>

<p>Multifaceted individual with hobbies including Golf (Handicap 8), competitive team and individual gaming in Destiny 2 (tournaments and Day 1 events), and horology, where I have recently joined the Antiquarian Horological Society (AHS).</p>

<p>Eager to contribute my analytical mindset and organisational skills to meaningful projects.</p>


<h2>Education</h2>

<p>BSc Mathematics with Statistics | Birkbeck, University of London|  2026 </p>
<p></p>
<p><strong>Relevant Modules:</strong> Data Science, Calculus 3, Probability, Cryptography</p>


<h2>Employment History</h2>

<h3>Data Analytics Intern | Flock Insurance</h3>
<p>March - April 2025</p>

<p>• Led a project to improve postcode rating using public-domain deprivation indices.</p>
<p>• Analysed data in Python and Looker, identifying indices that enhanced rating accuracy.</p>
<p>• Initiated analysis using Generalised Additive Models (GAMs) and documented methodology.</p>


<h3>Junior Analyst | RTP Analytical Services Limited</h3>
<p>May 2023 - Present</p>

<p>• Developed, tested, and delivered insurance pricing training for a new data science team.</p>
<p>• Built models using boosting algorithms (LightGBM) and additive/linear approaches.</p>
<p>• Wrote 1,000+ lines of R to clean, transform, and analyse data, and fit models.</p>
<p>• Used AI to speed the development of code with libraries I was less familiar with.</p>
<p>• Produced clear data descriptions and supported model interpretation for training purposes.</p>
<p>• Worked for a company providing actuarial and statistical consultancy to insurance companies.</p>
<p>• Manipulated and prepared pricing data using R.</p>
<p>• Performed household insurance pricing comparison analysis.</p>
<p>• Used SQL and Looker to merge, clean, and transform raw data into actionable insights.</p>


<h3>Work Experience | LPTA</h3>
<p>May - August 2023</p>

<p>• Automated data entry processes, improving productivity and reducing manual effort.</p>
<p>• Organised and archived physical files to support transition to digital storage.</p>


<h2>Core Competencies</h2>

<h3>Technical Skills</h3>
<p>Experienced in Excel, R, Python, JavaScript, MS Office Suite, GAM, GBM and GLM models (coded in R and Python), Looker, AI and presenting.</p>

<h3>Analytical Skills</h3>
<p>Modelling insurance claims in R with LightGBM for insurance pricing, and basic SQL.</p>

<h3>Communication Skills</h3>
<p>Created a presentation on statistical modelling for insurance.</p>


<h2>Certifications</h2>

<p>• Excel Training</p>



      <div>
        <button id="backButton">
          Go Back
        </button>
      </div>
    </div>
  `;

  document.getElementById("backButton")
    .addEventListener("click", showHome);
}

// ===== Screen 4: About Section ====

function showAbout() {
  app.innerHTML = `
    <div class="screen">
      <h1>Personal Section</h1>

      <p></p>

      <div>
        <button id="backButton">
          Go Back
        </button>
      </div>
    </div>
  `;

  document.getElementById("backButton")
    .addEventListener("click", showHome);
}


// ===== HomePage =====

showHome();
