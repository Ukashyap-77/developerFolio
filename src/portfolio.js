/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nikhil",
  title: "Hi all, I'm Nikhil Vaidyanathan",
  subTitle: emoji(
    "I am a passionate computer science enthusiast 🚀 with a love for technology and programming. As a lifelong learner, I am constantly seeking new challenges and opportunities to expand my knowledge and skills"
  ),
  resumeLink: "https://pdfhost.io/v/StosOch9f_resume2", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com",
  gmail: "nikhil.lalgudi@gmail.com",
  // gitlab: "https://gitlab.com",
  facebook: "https://www.facebook.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jakarta Intercultural School",
      logo: require("./assets/images/JakartaIntercuturalSchoolLogo.png"),
      subHeader: "",
      duration: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      descBullets: ["Class of 2023", "GPA: 4.08 / 4.3"]
    },
    {
      schoolName: "Oberlin College",
      logo: require("./assets/images/OblerinCollegeLogo.png"),
      subHeader: "",
      duration: "",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      descBullets: [
        "GPA: 4.0 (6 college credits)",
        "ACT: 35 Composite (34 E, 36 M, 33 R, 36 S)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Independent Research, Pioneer Academics: Computer Science & Mathematics",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      showCompany: false,
      date: "",
      desc: "With Davidson College’s Tim Chartier, created a 35 page independent research paper titled “Verifying Gambling Odds using Deep Learning and Machine Learning. Covers graduate computer science topics such as Cross Entropy Cost Functions, Multivariable Logistic Regression, and Bernoulli’s Distribution. Paper is undergoing peer review, with results of inflated advertised odds to be reported on the news after peer review from Microsoft/UofT’s Omkar Dige.",
      descBullets: [
        "Participation grade levels: 11",
        "Hours per week: 30. Weeks spent per year: 14"
      ]
    },
    {
      role: "Co-Founder, AQI Solutions Jakarta",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      showCompany: false,
      date: "",
      desc: "Researched algae microbiology & JKT air quality, co-authored a 28 page paper, created economical (<40$) algae air purifier with a corsi/rosenthal box fan filter. Planned distribution to kampungs in 2023, after sufficient funds are raised. Patent pending.",
      descBullets: [
        "Participation grade levels 11, 12",
        "Hours Spent per week: 6, Weeks spent per year: 25"
      ]
    },
    {
      role: "Violin and Piano, Musical Instrument",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Practice daily and work weekly with a teacher, prepared violin using the Suzuki method, prepared for ABRSM piano exams, organized charity concerts.",
      descBullets: [
        "Participation grade levels 9, 10, 11, 12",
        "Hours spent per week 6, Weeks spent per year 50"
      ]
    },
    {
      role: "Data Science Intern, Rekosistem",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Analyzed and visualized patterns in the App's Consumer Interface using Python, SQL, and Google Data Studio. Organized all Rebox transaction data, wrote reports detailing strategies regarding value of RekoPoints.",
      descBullets: [
        "Participation grade levels: 11",
        "Hours Spent per week: 21, Weeks Spent per year: 9"
      ]
    },
    {
      role: "Founder, Protectheros.id (in partnership with Indonesian’s Doctor’s Association)",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Created an initiative during the peak of COVID to fundraise for protective equipment for the frontline Indonesian doctors. From the community, raised nearly $2000 for PPE and N-95 Masks through Indonesia’s largest fundraising platform, Kitabisa.",
      descBullets: [
        "Participating Grade Levels 9",
        "Hours spent per week 7, Weeks spent per year 6"
      ]
    },
    {
      role: "Independent Research, Pioneer Academics: Music Theory",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Worked with Johns Hopkins professor, Mark Janello, to create a 16-page independent research project on qualitative and quantitative analysis on fugue pieces over the Baroque and Bach periods. Received an ‘A’ on the final paper.",
      descBullets: [
        "Participation grade levels: 10",
        "Hours spent per week 15, Weeks spent per year: 12"
      ]
    },
    {
      role: "Partner/Associate Teacher, Save The Children Indonesia",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Collected 90 devices for students to e-learn in rural Java, taught English to 20 orphans in Sumba, helped teachers learn technology for online school during the onset of the pandemic.",
      descBullets: [
        "Participation grade levels: 10, 11, 12",
        "Hours spent per week 4, Weeks spent per year 30"
      ]
    },
    {
      role: "President, Unite for Children’s Foundation",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Partnered JIS & STC, provided hygiene kits/8 water stations, raised sanitization awareness for Java school reopening, created online learning material.",
      descBullets: [
        "Participation grade levels 10, 11",
        "Hours spent per week 2, Weeks spent per year 30"
      ]
    },
    {
      role: "Vice President/President, Rachel House @JIS/Children Bloom’s Club",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Raised ~3000$ and led initiatives supporting terminally ill children/families. Ran fundraisers, and other palliative care initiatives. Spoke at webinars on Indonesia's serious illness epidemic in children.",
      descBullets: [
        "Participation grade levels: 10, 11, 12",
        "Hours spent per week 2, Weeks spent per year 30"
      ]
    },
    {
      role: "Co-founder, Asia Untold",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Began a teen-led Insta account that brings awareness to Asian issues not extensively covered by the mainstream media, 6k followers & 100k+ impressions.",
      descBullets: [
        "Participation grade levels: 10, 11, 12",
        "Hours spent per week 2, Weeks spent per year 20"
      ]
    },
    {
      role: "Co-founder, Tech and Engineering Society",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      showCompany: false,
      date: "",
      desc: "Founded a club that helps peers dive deeper into STEM fields, namely Data Science & Machine Learning. Co-authored ML paper analyzing JKT's pollution.",
      descBullets: [
        "Participation grade levels: 11, 12",
        "Hours spent per week 1.5, Weeks spent per year 30"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Honors, Awards and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Top 10% Pioneer Academics Paper",
      subtitle:
        "Out of nearly one thousand students making the first round of the Pioneer Journal Process",
      image: require("./assets/images/PioneerAcademics.jpeg"),
      imageAlt: "Pioneer Logo",
      footerLink: [{name: "Achievement", url: ""}]
    },
    {
      title: "Top 5% Pioneer Academics Paper",
      subtitle:
        "In bibendum iaculis enim non viverra. Curabitur a sagittis mauris, in semper justo. Quisque condimentum consectetur est, id vehicula sapien. Etiam vitae ultricies erat. Donec vitae porttitor dui. Maecenas luctus a metus id commodo. Sed vel nisi non lacus fringilla vulputate.",
      image: require("./assets/images/PioneerAcademics.jpeg"),
      imageAlt: "Pioneer Logo",
      footerLink: [{name: "Achievement", url: ""}]
    },
    {
      title: "Highest grade level AMC",
      subtitle: "A score of 10, 2020",
      image: require("./assets/images/AMC.png"),
      imageAlt: "AMC Logo",
      footerLink: [{name: "Achievement", url: ""}]
    },
    {
      title: "ABRSM Grade 8 Piano",
      subtitle:
        "Awarded to less than 50 students nationally certifying the highest level of piano examination distinction in the UK, given UCAS points",
      image: require("./assets/images/ABRSM.webp"),
      imageAlt: "ABRSM Logo",
      footerLink: [{name: "Award", url: ""}]
    },
    {
      title: "Indonesian Doctor’s Association Certificate of Recognition",
      subtitle: "Awarded for the efforts to donate PPE to Doctors",
      image: require("./assets/images/IDA.webp"),
      imageAlt: "IDA Logo",
      footerLink: [{name: "Certification", url: ""}]
    },
    {
      title: "Save The Children Certificate of Appreciation",
      subtitle: "The highest volunteer award in the organization",
      image: require("./assets/images/SaveTheChildrenLogo.jpeg"),
      imageAlt: "Save The Children Logo",
      footerLink: [{name: "Certification", url: ""}]
    },
    {
      title: "British Physics Olympiad",
      subtitle: "Awarded the Senior Challenge Gold",
      image: require("./assets/images/BPO.jpeg"),
      imageAlt: "BPO Logo",
      footerLink: [{name: "Award", url: ""}]
    },
    {
      title: "CREST Gold Award",
      subtitle:
        "Awarded to a select few STEM research projects with over 70 hours in a paper",
      image: require("./assets/images/CREST.png"),
      imageAlt: "CREST Logo",
      footerLink: [{name: "Award", url: ""}]
    },
    {
      title: "Math Honors Society",
      subtitle: "Math Honors Society, 2019",
      image: require("./assets/images/MHS.png"),
      imageAlt: "MHS Logo",
      footerLink: [{name: "Honor", url: ""}]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss anything or just want to say hi? My Inbox is open for all.",
  number: "+62-8119933047",
  email_address: "nikhil.lalgudi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
