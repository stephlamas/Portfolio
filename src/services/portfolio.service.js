import axios from "axios";

const person = {
  name: "Estefanía Lamas",
  emailAddress: "esteflamas@gmail.com",
  linkedinUser: "estefania-lamas",
  githubUser: "stephlamas",
  photoUrl: "images/EstefaniaL_square.jpg",
  aboutMe: "Ironhack graduate web developer ⭐️ English-Spanish translator ⭐️ Part-time photograher",
  profession: "WEB DEVELOPER & TRANSLATOR"
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
