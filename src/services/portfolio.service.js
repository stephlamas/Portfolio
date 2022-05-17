import axios from "axios";

const person = {
  name: "Estefanía Lamas",
  emailAddress: "esteflamas@gmail.com",
  linkedinUser: "estefania-lamas",
  githubUser: "stephlamas",
  photoUrl: "images/EstefaniaL_square.jpg",
  aboutMe:
    "Ironhack graduate web developer | English-Spanish translator | Part-time photograher",
  profession: "WEB DEVELOPER & TRANSLATOR",
  skills : [
    "../../../images/javascript.png",
    "../../../images/react.png",
    "../../../images/mongodb.png",
    "../../../images/nodejs.png",
    "../../../images/express.png",
    "../../../images/html.png",
    "../../../images/css.png",
    "../../../images/bootstrap.png",
  ],
  showcaseTheme: "My Ironhack projects",
  showcaseProjects: [
    {
      title: "Homie",
      description: "Homie is an app focused on the search of living places for rent globally, similar to AirBnb. You can find the possibility of filtering these places by city, condition, category or bedrooms.",
      technologies: "React, MongoDB, Express, NodeJS, Postman, Cloudinary, HTML, CSS",
      projectPhoto: "images/homie-screenshot.jpg",
    },
    {
      title: "Tortuga, beach locator",
      description: "Spanish beach locator. The second project for Ironhack Web Development Bootcamp. A beach locator of Spanish beaches filtering by name or location and giving information of each beach.",
      technologies: "Express, NodeJs, MongoDB, Handlebars, HTML, CSS, Beach Api Rest, GoogleMaps API, Cloudinary",
      projectPhoto: "images/tortuga-screenshot.jpg",
    },
    {
      title: "Space Dodger",
      description: "Videogame made with canvas at Ironhack Madrid.",
      technologies: "JavaScript",
      projectPhoto: "images/spacedodgerscreenshot.jpg",
    },
  ],
};

class PortfolioService {
  
    findProfileByName = (name) => {
      return new Promise((resolve, reject) => {
        resolve(person);
      });
  };
}

const portfolioService = new PortfolioService();

export default portfolioService;
