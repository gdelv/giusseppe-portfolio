const lorenzoWebsite = require("../data/images/lorenzoWebsite.gif");
const jackWebsite = require("../data/images/jackwebsite.gif");
const franoWebsite = require("../data/images/franoWebsite.gif");
const survivorWebsite = require("../data/images/SurvivorPool.gif");
export const projects = [
  {
    name: "Director Jack Simon",
    url: "https://www.jacksimonmakes.com/",
    img: jackWebsite,
    description:
      "The website is a platform built using React for the front-end and Firebase for the back-end, it displays all the videos of director Jack Simon. The website allows the director to have control over the website's content by adding more information to the database and selecting which videos are displayed on the homepage.",
  },
  {
    name: "PhoneFixIt Repair Stores",
    url: "https://frano.netlify.app/",
    img: franoWebsite,
    description: "The website is a platform developed using React, it is designed for Phone Fix It repair stores. The website provides contact information and details about the services offered by the store. The website has a modern design and user interface.",
  },
  {
    name: "1st Call HVAC Solutions",
    url: "https://1stcallhvacsolutions.com",
    img: lorenzoWebsite,
    description: "The website is a platform built using React for the front-end, it is designed for the HVAC business 1stCallHVACSolutions. The website provides contact information and details about the services offered by the company. Additionally, the website features a web-to-email form that allows users to request service or ask for further information.",
  },
  {
    name: "NFL Survivor",
    url: "https://survival-pool.netlify.app",
    img: survivorWebsite,
    description: "The website is a platform built using React for the front-end and Firebase for the back-end, it is focused on the NFL schedule and team records. The website displays the NFL weekly schedule color-coded by the current team records. Users can also post their weekly picks and at the end of the week, a batch process is used to determine which users made the correct picks.",
  },
];
