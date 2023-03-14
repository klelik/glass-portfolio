const projectsData = [
  {
    id: 1,
    title: "Weather Widget",
    description: "Shows weather and forecast in current or selected location",
    img: "weather2.png",
    git: "https://github.com/klelik/weather-app",
    deploy: "https://klelik.github.io/weather-app/",
  },
  {
    id: 2,
    title: "Quote Machine",
    description: "Fetching and generating quotes from API, built in React",
    img: "quote.png",
    git: "https://github.com/klelik/quotte-machine",

    deploy: "https://klelik.github.io/quotte-machine/",
  },
  {
    id: 3,
    title: "Birthday Reminder",
    description: "Birthday reminder tool, send wishes automatically ",
    img: "birthday.png",
    git: "https://github.com/klelik/birthday-reminder",

    deploy: "https://klelik.github.io/birthday-reminder/",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "Current Personal Portfolio",
    img: "portfolio.png",
    git: "https://github.com/klelik/portfolio-main",

    deploy: "https://lika.dev/",
  },
  {
    id: 5,
    title: "Airbnb Clone",
    description: "Clone of Airbnb main front page ",
    img: "airbnb.png",
    git: "https://github.com/klelik/airbnb-clone",

    deploy: "https://klelik.github.io/airbnb-clone/",
  },
  {
    id: 6,
    title: "Calculator",
    description: "Calculator in Vanilla Javascript",
    img: "calculator.png",
    git: "https://github.com/klelik/calculator",

    deploy: "https://klelik.github.io/calculator/",
  },
  {
    id: 7,
    title: "Pomodoro Timer",
    description: "A timer to manage your time, while studying",
    img: "pomodoro.png",
    git: "https://github.com/klelik/pomodoro-clock",

    deploy: "https://klelik.github.io/pomodoro-clock/",
  },
];
var exp = document.querySelector(".exp");
var changeBox = document.querySelector(".inside-card");
// console.log(exp);
var box = document.querySelector("box");
mainShow();

function mainShow() {
  changeBox.style.opacity = "1";
  changeBox.style.flexDirection = "column";

  changeBox.innerHTML = `
    <h1>Hello World &#x1F44B !</h1>
    <br>

    <p>I'm <strong>Klement Lika</strong>, a Web Developer</p>
    <br>

    <p>Hello, This Is Me. I Am Passionate On Coding, Have A Good Learning Attitude, Love Exploring New Things And Accepting New Challenges.

    I Started My Bachelor Degree In 2017 At The Department Of Computer Science And Biomedical Informatics At The University Of Thessaly In Greece.
    
    My First Contact With Coding Was In Uni, Learned C And Java. After That I Tried To Learn Some Front End Myself, Ive Done A Couple Of Courses Online Developing Skills And Learning Html Css And Javascript, Recently Got Into React As Well.
    
    I Have Joined The Community A Few Days Ago, I Also Came For A Visit To Your Office (Sarah Was Very Kind And Helpful Btw) Although It Is Just A Short Period Of Time, The First Impression And The Experience Is Impressive.
    
    As A Member Of The Community, It Would Be A Great Pleasure If I Could Be Involved In The Coming Cohort And I Hope My Abilities And Passion Would Make Contribution To The Groupmates And Achieve Collective Learning.</p>
    <br>
    <a href="My CV" target="_blank">

      <div class="glassbutton">
        <p>View my CV</p>
      </div>
    </a>
  `;
}

function eduShow() {
  changeBox.style.opacity = "0";
  changeBox.style.opacity = "1";
  changeBox.innerHTML = `
    <h1>My Education 👨🏼‍🎓</h1> <br>

    <h2> I Started My Bachelor Degree In 2017 At The Department Of Computer Science And Biomedical Informatics At The University Of Thessaly In Greece. </h2>
  `;
}

function skillsShow() {
  this.link;
  changeBox.style.opacity = "1";
  changeBox.innerHTML = `

    <div class="contentContainer">

    <div class="skillBar">
      <h4>HTML</h4>
      <div class="skillBarContainer">
        <div class="skillBarValue value-90"></div>
      </div>
    </div>
  
    <div class="skillBar">
      <h4>CSS3</h4>
      <div class="skillBarContainer">
        <div class="skillBarValue value-80"></div>
      </div>
    </div>

    <div class="skillBar">
    <h4>JavaScript</h4>
    <div class="skillBarContainer">
      <div class="skillBarValue value-70"></div>
    </div>
  </div>
  
  <div class="skillBar">
      <h4>React.js</h4>
      <div class="skillBarContainer">
        <div class="skillBarValue value-60"></div>
      </div>
    </div>
  
    <div class="skillBar">
    <h4>C</h4>
    <div class="skillBarContainer">
      <div class="skillBarValue value-40"></div>
    </div>
  </div>

    <div class="skillBar">
      <h4>Java</h4>
      <div class="skillBarContainer">
        <div class="skillBarValue value-30"></div>
      </div>
    </div>

  
  </div>
  
  `;
}
// console.log("skills");

function expShow() {
  changeBox.style.opacity = "1";

  changeBox.innerHTML = "<p>Experience</p>";
}

const showData = projectsData.map((project, index) => {
  return `
  <div class="slide-up">
  <div class="box">
  <img src="assets/${project.img}" >  
    <span class="original" >
      <h1 class= "project-title">${project.title}</h1>
    </span>
    <div class="overlay">
     <a href = "${project.git}" target="_blank"> <i class="fa-brands fa-github"></i> </a> 
     <a href = "${project.deploy}" target="_blank"> <i class="fa-solid fa-satellite-dish"></i></a>
  
    </div>
  </div>
</div>
  `;
});

function projShow() {
  changeBox.classList.add("show");
  changeBox.style.flexDirection = "row";
  changeBox.innerHTML = showData.join("");
}
