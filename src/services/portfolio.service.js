const person = {
  name: "Estefanía Lamas",
  emailAddress: "esteflamas@gmail.com",
  linkedinUser: "estefania-lamas",
  githubUser: "stephlamas",
  photoUrl: "images/EstefaniaL_square.jpg",
  photoUrl2: "images/estefania_sm.jpeg",
  photoAboutMe: "images/lofi_girl.jpg",
  aboutMe:
    "Currently starting a new path as a Software Engineer, which is changing my life for the best as it's allowing me to enjoy everyday learning and having fun coding!",
  profession: "Software developer & translator",
  skills: [
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
      description:
        "Homie is an app focused on the search of living places for rent globally, similar to AirBnb. You can find the possibility of filtering these places by city, condition, category or bedrooms.",
      technologies:
        "React, MongoDB, Express, NodeJS, Postman, Cloudinary, HTML, CSS",
      projectPhoto: "images/homie-screenshot.jpg",
      githubUrl: "https://github.com/stephlamas/homie-searcher-client",
      demo: "https://homieapp.netlify.app/",
    },
    {
      title: "Tortuga, beach locator",
      description:
        "Spanish beach locator. The second project for Ironhack Web Development Bootcamp. A beach locator of Spanish beaches filtering by name or location and giving information of each beach.",
      technologies:
        "Express, NodeJs, MongoDB, Handlebars, HTML, CSS, Beach Api Rest, GoogleMaps API, Cloudinary",
      projectPhoto: "images/tortuga-screenshot.jpg",
      githubUrl: "https://github.com/emenocal07/project-beachApp",
      demo: "https://tortuga-beach-locator.herokuapp.com/",
    },
    {
      title: "Space Dodger",
      description: "Videogame made with canvas at Ironhack Madrid.",
      technologies: "JavaScript",
      projectPhoto: "images/spacedodgerscreenshot.jpg",
      githubUrl: "https://github.com/stephlamas/videogrameproyect",
      demo: "https://stephlamas.github.io/videogrameproyect/",
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
