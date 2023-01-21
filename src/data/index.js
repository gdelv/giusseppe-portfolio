const lorenzoWebsite = require("../data/images/lorenzoWebsite.gif");
const jackWebsite = require("../data/images/jackwebsite.gif");
const franoWebsite = require("../data/images/franoWebsite.gif");
const survivorWebsite = require("../data/images/SurvivorPool.gif");
export const projects = [
  {
    name: "Jack Portfolio",
    url: "https://www.jacksimonmakes.com/",
    img: jackWebsite,
    description:
      "The website is a platform built using React for the front-end and Firebase for the back-end, it displays all the videos of director Jack Simon. The website allows the director to have control over the website's content by adding more information to the database and selecting which videos are displayed on the homepage.",
  },
  {
    name: "Frano Portfolio",
    url: "https://frano.netlify.app/",
    img: franoWebsite,
    description: "The website is a platform developed using React, it is designed for Phone Fix It repair stores. The website provides contact information and details about the services offered by the store. The website has a modern design and user interface. It aim to provide a seamless experience for the user to find the information they need about the store's services and location.",
  },
  {
    name: "Lorenzo Portfolio",
    url: "https://1stcallhvacsolutions.com",
    img: lorenzoWebsite,
    description: "The website is a platform built using React for the front-end, it is designed for the HVAC business 1stCallHVACSolutions. The website provides contact information and details about the services offered by the company. Additionally, the website features a web-to-email form that allows users to request service or ask for further information. The website has a modern design and user interface, it aims to provide a seamless and easy experience for the users to find information about the company's services and get in touch with the business.",
  },
  {
    name: "NFL Survivor",
    url: "https://survival-pool.netlify.app",
    img: survivorWebsite,
    description: "The website is a platform built using React for the front-end and Firebase for the back-end, it is focused on the NFL schedule and team records. The website displays the NFL weekly schedule color-coded by the current team records. Users can also post their weekly picks and at the end of the week, a batch process is used to determine which users made the correct picks. The website aims to provide an easy way for users to stay informed about the NFL schedule and make predictions about the outcome of the games.",
  },
];
