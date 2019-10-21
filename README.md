# Name-It!
Need help getting your creative naming juices flowing? Name-It! is here to help.
Built with MySQL, Node, Express, Handlebars and a Sequelize ORM.

## Live Project

The app can be found [here](https://polar-plateau-40591.herokuapp.com/).

## About the App


![Screen Shot 2019-10-19 at 4 43 23 PM](https://user-images.githubusercontent.com/52713263/67151169-9ecd2380-f28f-11e9-9dad-87d5c498331f.png)


Name-It! is a full-stack app. Its front-end utilizes HTML, CSS, and the MD Bootstrap framework, and uses Handlebars for HTML templating. Its back-end is built with Node.js and Express.

Users can select help in naming their baby, pet, car, or rubber ducky by following the app's simple button design. Each name is grabbed randomly from a mySQL database and displayed on the page for the user to see. The user can choose to favorite the name, or continue to the next random name.

## The App in Action

### GET
This app uses the GET method to pull a randomly selected name from whichever table the user selects. 

![Name-It!](https://user-images.githubusercontent.com/52713263/67145842-f6996980-f252-11e9-8360-d5e22b03713c.gif)

Our API route is similar for each call - for example, if the user chooses that they want to name their pet, we find all pets in our pet database, then randomize which pet name is picked using the ```Randomizes()``` function. 

![Randomizes Function](https://user-images.githubusercontent.com/52713263/67145433-af5da980-f24f-11e9-97d2-0aa45ca9786d.png)

The API call is executed each time the specific pet randomizer button is clicked, and the random name is appended to the page.

![Randomizer Button](https://user-images.githubusercontent.com/52713263/67145452-cbf9e180-f24f-11e9-8ef7-04062894bff9.png)

We also offer a few more options as far as customization for baby names. Users can select whether they are naming a boy or girl, and even select the letter they want their random name suggestions to start with.

![Screen Shot 2019-10-19 at 5 53 15 PM](https://user-images.githubusercontent.com/52713263/67151827-63375700-f299-11e9-9237-b54df087c696.png)



### POST
The app also uses the POST method to allow users to enter new names into the database. 

![Name-It! (1)](https://user-images.githubusercontent.com/52713263/67145959-28f79680-f254-11e9-898a-458fad1131cb.gif)

We grab the user input from the modal, and send the new data to our database.

![Screen Shot 2019-10-19 at 9 40 02 AM](https://user-images.githubusercontent.com/52713263/67145997-7aa02100-f254-11e9-9400-c724b5ae5d68.png)

![Screen Shot 2019-10-19 at 9 20 58 AM](https://user-images.githubusercontent.com/52713263/67145732-d0bf9500-f251-11e9-9b47-9afd6c2b971b.png)


## Message Board

Our newest feature allows users to submit feedback into our message board. This board utilizes both a POST method to send the user's comment, and a GET method to display the chat board.

![Screen Shot 2019-10-19 at 6 02 00 PM](https://user-images.githubusercontent.com/52713263/67151885-9201fd00-f29a-11e9-91e1-e32d4f427515.png)

## MVC Design Pattern
Name-It! is an MVC app, which means it assigns objects in the application to one of the three listed roles (model, view, or controller), then defines the ways that the different parts of the application interact with each another. 
- <b>The View:</b>
The View Object defines what the user sees. It displays data on the front-end from the app's Model, and updates that data via any news from the Controller. User input into the View is sent via the Controller to the Model.

- <b>The Controller:</b>
The Controller Object transfers data between the View and the Model. Any user inputs that cause data changes are communicated from the View to the Model by the Controller, and any data changes in the Model are communicated back to the View for display by the Controller. 

- <b>The Model:</b>
The Model Object is what manages the data. Data can be created or changed in the Model, and those changes are communicated to the View by the intermediary Controller. User input is sent to the Model from the View via the Controller.

## Installing the App


### Local Database 
To run this app locally, you will need to initialize a local database. Using an SQL client like dBeaver, run the following statement:

<pre>
  CREATE DATABASE bopit_db;
  USE bopit_db;
  </pre>

Then create tables called "Babies", "Pets", "Boats", and "Duckies".

<pre>
CREATE TABLE Babies
  (
    id INT NOT NULL AUTO_INCREMENT,
    birthYear VARCHAR(225) NOT NULL,
    gender VARCHAR(225) NOT NULL,
    origin VARCHAR(225) NOT NULL,
    name VARCHAR(225) NOT NULL,
    popularity INT(128),
    value INT(128) NOT NULL,
    PRIMARY KEY (id)
  );

CREATE TABLE Pets
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Duckies
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE Boats
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(225) NOT NULL,
    PRIMARY KEY (id)
);
  </pre>


  You can populate each table with some starter data similar to the following code. We used .csv files from data.gov to populate our tables - we would suggest doing the same, in order to have a data set large enough to randomize.

  <pre>
INSERT INTO baby (birthYear, gender, origin, name, popularity)
VALUES (2016, "female", "white", "Olivia", 1);
INSERT INTO baby (birthYear, gender, origin, name, popularity)
VALUES (2016, "male", "white", "Michael", 1);
INSERT INTO baby (birthYear, gender, origin, name, popularity)
VALUES (2016, "female", "hispanic", "Isabella", 1);
INSERT INTO baby (birthYear, gender, origin, name, popularity)
VALUES (2016, "male", "hispanic", "Liam", 1);
INSERT INTO baby (birthYear, gender, origin, name, popularity)
VALUES (2016, "female", "black", "Ava", 1);
</pre>


To run this app locally on your computer:

- Clone this repository
- Populate your local database
- Install the dependencies using    
```npm install```
- Run the node server locally using    
```node server.js```
- Your app should be listening on your local host.

### Dependencies
 
 This app is dependent on 
 <ul>
    <li> <b>express</b> - a Node.js web application framework</li> (https://www.npmjs.com/package/express).</li>
    <li><b>dotenv</b> - retrieves mySQL password from a .env file</li> (https://www.npmjs.com/package/express).</li>
    <li><b>mySQL</b> - connects you to your database via the command line</li> (https://www.npmjs.com/package/express).</li>
    <li><b>express-handlebars</b> - lets you use handlebars to create HTML templates</li> (https://www.npmjs.com/package/express-handlebars)</li>
    <li><b>moment.js</b> - Parse, validate, manipulate, and display dates and times in JavaScript.</li> (https://www.npmjs.com/package/moment)</li>
    <li><b>Swearjar</b> - Profanity detection and filtering library.</li> (https://www.npmjs.com/package/swearjar</li>
 </ul>

 ### User Input Validation
 This program uses the Swearjar to avoid vulgar names or messages being added to the site.
 
 ### Code Quality

 This program uses ESLint to encourage more consistent and readable code, and Travis CI for continuous integration.

 ### Authors
 * **Aaron Jackson - Back-End Design** - [Github](https://github.com/aarontjackson)/[LinkedIn](https://www.linkedin.com/in/aaron-jackson-481a2052/)
 * **Allie Juarez - Front-End Design** - [Github](https://github.com/Aj518480)/[LinkedIn](https://www.linkedin.com/in/allison-juarez-6712a518b/)
 * **Mallory Steffes - Project Manager** - [Github](https://github.com/malloryrsteffes)/[LinkedIn](https://www.linkedin.com/in/mallorysteffes/)
 * **Sid Hicks - Back-End Design** - [Github](https://github.com/SidH80)/[LinkedIn](https://www.linkedin.com/in/senien-hicks-55415a1b/)

