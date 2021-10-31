
<a href="https://doi.org/10.5281/zenodo.5534986"><img src="https://zenodo.org/badge/DOI/10.5281/zenodo.5534986.svg" alt="DOI"></a>
<img src="https://img.shields.io/github/license/gokul-koganti/Recipe_Recommender">
[![Made with](https://img.shields.io/badge/made%20with-javascript-gree)](https://www.javascript.com/)
[![GitHub issues open](https://img.shields.io/github/issues/gokul-koganti/Recipe_Recommender)](https://github.com/gokul-koganti/Recipe_Recommender/issues)
[![GitHub stars](https://badgen.net/github/stars/gokul-koganti/Recipe_Recommender)](https://badgen.net/github/stars/gokul-koganti/Recipe_Recommender)


  
  <h2> Motivation </h2>
  
 <img width="704" alt="Screen Shot 2021-09-30 at 10 00 44 PM" src="https://user-images.githubusercontent.com/22192754/135554303-f1436345-9b19-4509-abd7-f0d1c1adc24c.png">

  <h3> An excerpt from " Diary of a hungry kid 😭"</h3>
  
  <p> One day my roommate and I went grocery shopping. My roommate has bought potatoes and frosting to make a weird dish for the next day's lunch. The next day, I woke up early at 2:07 pm to help my roommate with this dish, that I know nothing about, only to find him nowhere. He had gone to the library to work on his Software Engineering project. HOW SELFISH OF HIM? I AM LITERALLY STARVING HERE AND HE GOES OFF SOMEWHERE TO DO HIS PROJECT THAT IS SOON DUE ? 🤬🤬
</p>
<p>
  After 1 hr of angry rants, I have realized that I should eat something to have a good siesta. But I didn't know what to cook. People always told me that cooking is a basic survival skill and I should learn to cook. I always took it for granted. Now I cannot order food from outside because I was broke after purchasing that super cool, absolutely unnecessary, formula 1 merchandize. That is when I thought, if only there is an app that could help me find recipes based on the ingredients I have in my pantry.
</p>
 <br/> 
<h3> On a serious note</h3>
  <p> 
    Cooking is a basic survival skill and it is more than standing infront of the stove and following instructions. Figuring out what to cook with what we have is equally. If we start cooking something that comes on top off our head, we might end up messing it when we find that an ingredient is missing. So we have decided to come up with an application that would help us breeze past the cooking process in this time-crunch world.
</p>
<p>
  
## Documentation
  
  Recipe Recommender is a website that suggests user simple food recipes based on ingredients provided. 
  Currently, 
  - Only one ingredients is considered
  - For each recipe, ingredients and instructions are shown

Source documentation can be found at: [Recipe Recommender Docs] https://github.com/gokul-koganti/Recipe_Recommender/blob/master/docs/Recipe%20Recommender%20Source%20Documentation.pdf
  
## Technology Stack
  
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)![JEST](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  
## Software Requirements

-   [Node.js v14.7.6](https://nodejs.org/en/download/)
-   [NPM v6.14.15](https://nodejs.org/en/download/)

## Project Setup Steps

- clone repository using `git clone https://github.com/gokul-koganti/Recipe_Recommender.git`
- setup for frontend
    open terminal and navigate to the **frontend** folder and execute `npm install`
- setup for backend
    open terminal and navigate to the **backend** folder and execute `npm install`
  
### IDE and Code Formatter

-   [Visual Studio Code](https://code.visualstudio.com/) IDE
-   [Prettier Formatter for Visual Studio Code](https://github.com/prettier/prettier-vscode/blob/main/README.md)
  
  
  
## Execution Steps

 1. start backend server using `npx nodemon`
 2. start frontend server using `npm start`
 3. automatically a browser window is opened
 4. run`npm test` for running the tests [Dependencies: Jest, Chai, Supertest]
  
## Work Flow
![Screenshot 2021-09-30 at 11 34 49 PM](https://user-images.githubusercontent.com/17452184/135561662-d0099841-a358-4ead-94bb-6b360380921c.jpg)
![Screenshot 2021-09-30 at 11 35 17 PM](https://user-images.githubusercontent.com/17452184/135561671-7975b434-413f-4088-bd22-89c0219f5d74.jpg)
![Screenshot 2021-09-30 at 11 35 50 PM](https://user-images.githubusercontent.com/17452184/135561674-6914bf8c-90f1-4f28-a146-f8cdae514654.jpg)
![Screenshot 2021-09-30 at 11 36 37 PM](https://user-images.githubusercontent.com/17452184/135561676-ac4e9381-4988-49f0-b189-7202ac83d801.jpg)
![Screenshot 2021-09-30 at 11 36 59 PM](https://user-images.githubusercontent.com/17452184/135561683-67dc56c5-011f-4d6c-b89c-b9fdde076795.jpg)

 

## Roadmap
  <h3> Completed tasks</h3>
  <ol>
  <li> Designed a User Interface using React JS library.</li>
  <li> Hosted the dataset on Mongo Database System. </li>
  <li> Performed querying and busniess logic implementation as part of backend module using Express JS library.</li>
  <li> Integration of backend and frontedn is done with the assistance of Axios library.</li>
  </ol>
  
  <h3> Future tasks</h3>
  <ol>
  <li> Add filtering system based on cusine, Number of ingredients and calorie intake.</li>
  <li> Integrate the current dataset with review dataset(https://www.kaggle.com/sarthak71/food-recipes) and provide users with recipe ratings and reviews.</li>
  <li> Suggest nearby restaurants based on recipes generated.</li>
  <li> Provide recipe reccomendations based on multiple ingredients.</li>
  <li> Classify recipes into vegan / vegetarian / non-vegetarian categorizations.</li>
  </ol>
  

Contributors
---
<table>
  <tr>
    <td align="center"><a href="https://github.com/ineelshah"><img src="https://avatars.githubusercontent.com/u/40118578?v=4" width="75px;" alt=""/><br /><sub><b>Neel Shah</b></sub></a></td>
    <td align="center"><a href="https://github.com/PvPatel-1001"><img src="https://avatars.githubusercontent.com/u/69849039?v=4" width="75px;" alt=""/><br /><sub><b>Parth Patel</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/ameyatathavadkar"><img src="https://avatars.githubusercontent.com/u/25223347?v=4" width="75px;" alt=""/><br /><sub><b>Ameya Tathavadkar</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/jayrshah98"><img src="https://avatars.githubusercontent.com/u/41386638?s=400&u=b323434b42507c474829a804556d69da82d48c3f&v=4" width="75px;" alt=""/><br /><sub><b>Jay Shah</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Harshil-Shah99"><img src="https://avatars.githubusercontent.com/u/38115399?v=4" width="75px;" alt=""/><br /><sub><b>Harshil Shah</b></sub></a><br /></td>
  </tr>
</table>
