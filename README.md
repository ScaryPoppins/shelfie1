<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

This project is designed to give you an opportunity to build something from scratch and to teach you how to connect all the pieces of an application together. All of the instructions give you an idea of what order to do things in, but there won't be any guidance or solutions on how to write the code itself. This project is broken into three parts. The setup instructions are more detailed and are designed to get you started. Parts 1-3 get progressively less detailed to give you a chance to practice your skills on your own. Your mentors have also been asked to provide only minimal guidance. They can point you in the right direction, but cannot help you code. This project is a chance for you to combine and showcase the skills you've learned so far.

Good luck and work hard!

# Setup

This section will help you create the files you need and install the packages you need.

## React
1) Run `create-react-app shelfie` and cd into the folder to get started.
2) Run `npm i axios --save`. This is the only package we need to add for our front end.
3) Create a component folder inside of src
4) Inside your component folder create a folder for each component we will be using (Dashboard, Product, Form, and Header)
5) Inside each of these folders create a Javascript file named the same thing. Make sure to capitalize the first letter!
6) Create a simple class component in the Dashboard and Form files. For now just return a div containing the component's name from the render method.
7) Create a functional component (created with the function keyword) in the Header and Product files. For now just return a div containing the component's name.
8) Now render the Dashboard, Form, and Header components in App.
9) Render the Product component inside Dashboard.
10) Run `npm start` to make sure everything is working. You should see the names of all the components displayed.

## Server
1) Run `npm i express body-parser --save`
2) Create a folder called server at the root of the project.
3) Create a server.js file and a controller.js file inside of that folder.
4) Open server.js and require your packages and the controller file.
5) Setup a basic Express server (we will add endpoints later, just get the server ready to run).
6) Open your package.json. Add your main property (so nodemon will work) and your proxy (so our axios requests will work).
  * Your main should look like `"main": "server/server.js"`
  * Your proxy should look like `"proxy": "http://localhost:4000"` using whatever port your server is setup to run on.
7) Run `nodemon` and make sure your server runs.

## Database
1) Run `npm i massive dotenv --save`
2) Create an .env file at the root of the project.
3) Open your .gitignore and add the .env file to it.
4) Open server.js and require masssive and dotenv (make sure to invoke config on dotenv).
5) Go to [Heroku](https://heroku.com) and create a database (you can also use a database you already have created, but just be careful not to name your table for Shelfie the same thing as any of the tables that already exist in your database)
6) Copy the connection URI for your new or existing database and save it in your .env file (make sure you put `?ssl=true` on the end of the string).
7) Create a folder called db at the root of the project.
8) Set up massive in your server using the connection string you saved in your .env file.
9) Make sure to run `nodemon` again and make sure your database is connecting.
10) Copy the connection string from your .env file into SQLTabs and create the products table.
11) It's helpful to insert some dummy data into your database at this point to help you test as you go along. 

## Competencies
Congradulations! If you finished all the setup, you've already completed some demo competencies! </br>
"Student can use class based components in react and it's features (render, JSX,nested components)" </br>
"Student can apply ES6 constructs in React for better code (import, export, destructuring)" </br>
"Student can create Node servers using the Express package (Server running)" </br>
"Student can create tables in a database" </br>
"Student can connect to their database" </br>


# Color Palette & Font

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/colors.png" />

<b><a href="https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans">Google Font - Open Sans</a></b>

# Application Design

## Homepage

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/home.png" />

## Shelf - Bin List

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/shelf.png" />

## Bin - Inventory Details / Edit Bin

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/bin.png" />

<br />

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/edit.png" />

## Add to Bin

<img src="https://github.com/DevMountain/simulation-1/blob/master/assets/views/create.png" />