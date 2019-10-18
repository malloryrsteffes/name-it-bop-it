# Name-It!
Need help getting your creative naming juices flowing? Name-It! is here to help.
Built with MySQL, Node, Express, Handlebars and a Sequelize ORM.

## Live Project

The app can be found [here](https://shielded-plains-11002.herokuapp.com/).

## About the App


![Screen Shot 2019-10-18 at 11 56 20 AM](https://user-images.githubusercontent.com/52713263/67109385-64378e00-f19e-11e9-94ac-a614b384e8ad.png)


Name-It! is a full-stack app. Its front-end utilizes HTML, CSS, and the MD Bootstrap framework, and uses Handlebars for HTML templating. Its back-end is built with Node.js and Express.

Users can select help in naming their baby, pet, car, or rubber ducky by following the app's simple button design. Each name is grabbed randomly from a mySQL database and displayed on the page for the user to see. The user can choose to favorite the name, or continue to the next random name.

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
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL,
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
 </ul>

 ### Code Quality

 This program uses ESLint to encourage more consistent and readable