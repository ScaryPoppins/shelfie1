<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

This project is designed to give you an opportunity to build something from scratch and to teach you how to connect all the pieces of an application together. All of the instructions give you an idea of what order to do things in, but there won't be any guidance or solutions on how to write the code itself. This project is broken into three parts. The setup instructions are more detailed and are designed to get you started. Parts 1-3 get progressively less detailed to give you a chance to practice your skills on your own. Your mentors have also been asked to provide only minimal guidance. They can point you in the right direction, but cannot help you code. This project is a chance for you to combine and showcase the skills you've learned so far.

Good luck and work hard!

# Setup

This section will help you create the files you need and install the packages you need.

## React
1) Run `create-react-app shelfie` and cd into the folder to get started.
2) Run `npm i axios --save`. This is the only package you need to add for our front end.
3) Create a component folder inside of src
4) Inside your component folder create a folder for each component you will be using (Dashboard, Product, Form, and Header)
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
5) Setup a basic Express server (you will add endpoints later, just get the server ready to run).
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
Congratulations! If you finished all the setup, you've already completed some demo competencies!

"Student can use class based components in react and it's features (render, JSX, nested components)" </br>
"Student can apply ES6 constructs in React for better code (import, export, destructuring)" </br>
"Student can create Node servers using the Express package (Server running)" </br>
"Student can create tables in a database" </br>
"Student can connect to their database" </br>

# Part 1

Live example here

For the first part of the project you will be adding two main features, viewing products and adding additional products.

Functionality of the form:
* A user should be able to add a name, price for the product.
* A user should be able to add an image URL for the product.
* There should be an image preview that displays the image added by the user.
    * If there is no image URL, a default image should appear in the preview.
    * The image container should remain the same size.
* A user should be able to click the 'Cancel' button to clear all three input boxes.
* A user should be able to click the 'Add to Inventory' button.
    * This should save the product in the database.
    * This should clear the input boxes

Functionality of the dashboard:
* All products that have been added to the database should display.
    * Each product should display the name and price.
    * If there is no image URL, a default image should appear for the product.

## Step 1
You are going to start with the basic layout of the form and setting up the input boxes. You need to store the value of all three inputs in state.

* Start by creating three input elements in the JSX.
* Then create the 'Cancel' and 'Add to Inventory' buttons.
* Set up state with initial values for the inputs.
* Now you need to update state whenever those inputs change. Write a method for each input and and hook them up to the corresponding input box using an event handler.
* Next you need to reset the input values when the user clicks 'Cancel'. Write a method to reset state and hook it up to the cancel button using an event handler.

## Step 2
In this step you will set up the dashboard to display the products. 

* Store the list of products in the App state. This will make it easier to update with new products later. 
    * Fill the list with some dummy products so you have something to display. 
    * Each one should have a name, price, and image.
    * You can get rid of your dummy data once you are pulling the data from the backend.
* Pass the list of products down to the Dashboard component through props.
* Inside Dashboard you should map over the list of products and render the Product component for each one. At this point you should see the word 'Product' repeated the same number of times as you have products in your dummy data.
* Now you should update the Product component to display a name, price, and image based on props.
* Go back to Dashboard and update where you're mapping over the products to pass the current product information to the Product component through props.

## Step 3
It's time to write your GET endpoint so you get the list of products from the database. 

* Open server.js and create the entry point for the endpoint. The url should be '/api/allproducts'.
* Create the function for this endpoint in controller.js. Set up your endpoint to just send a string (I recommend 'It worked!!! Woohoo!!!') so you can make sure the endpoint works before worrying about the database. Remember to set a status code as well.
* Make sure `nodemon` is running and open up Postman to test your endpoint. Once you get your test string back you're ready to move on.
* Open SQLTabs and write a query to get all the products from the table. Make sure to test it.
* Create a sql file in your db folder named 'get_all_products'. Copy the query you wrote in SQLTabs into the file and save it. 
* Go back to the function you wrote in your controller and remove the test response. Replace it with the database function get_all_products. Now set up the resonse to send the products that come out of the database (with a status code of course).
* Go back to Postman and test your endpoint again. This time you should get a list of products.

## Step 4 
Now that your endpoint is working, you'll hit it with axios from your front-end.

* Remove the dummy products you created in the App state; we don't need them anymore. (Note: we still need to keep the list on state, we are just removing the fake products from the list)
* Write a method in App that makes a get request to the endpoint you just wrote. 
    * Once the response comes back from the server, update state with the list of products you got from the database.
* You want this method to fire as soon as the user opens your page, so invoke it in the lifecycle method that fires as soon as the component loads.

## Step 5
Next you need to write your POST endpoint so you can add new products to your database.

* Open server.js and create the entry point for the endpoint. The url should be '/api/product'.
* Create the funciton for this endpoint in controller.js. This endpoint should pull the name, price, and image URL off of the body. For now all you should do is console.log these values to make sure they're getting to the endpoint correctly.
* Just like before, we should send a test string in the response so we can test our endpoint.
* Make sure `nodemon` is running and open Postman again. When testing your endpoint, make sure to send a fake name, price, and image URL on the body. Once you get the test string back, and you can see the console.log in your endpoint showing the same fake values you sent in Postman you're ready to move on.
* Open SQLTabs and write a query to add a new product in the table. Make sure to test it.
    * Remember that parameters ($1, $2, etc) only work in your project. Test your sql statement with actual data here.
* Create a sql file in your db folder named 'create_product'. Copy the query you wrote in SQLTabs into the file, change the dummy data to parameters, and save it. 
* Go back to the function you wrote in your controller and remove the test response. Replace it with the database function create_product. Now set up the response to send the 'all good' status code. 
* Go back to Postman and test your endpoint again. This time you shouldn't get any data in the response, but the status code should be green and say 'OK'. Query your database and you should see the new product in your products table.

## Step 6
Lastly, you are going hit the POST endpoint with an axios request

* Before you write your post request, open App and pass the method that makes the get request down to Form through props. We need to call this method after we create a new product to get the updated list. 
    * Remember to set the value of 'this' for the method in App.
* Write a method in Form that makes a post request to the endpoint you just wrote. 
    * You should take the name, price, and image URL from state and send them on the body of the request.
    * Once the response comes back from the server, invoke the method you passed through props.
    * Also invoke the method that clears the inputs.

## Competencies
You just covered a lot of competencies! Here is the breakdown:

Step 1 </br>
"Student can use class based components in react and it's features (state, setState, constructors)" </br>
"Student can use class based components in react and it's features (events)" </br>
"Student can apply ES6 constructs in React for better code (arrow functions)" </br>
Step 2 </br>
"Student can use class based components in react and it's features (props)" </br>
"Student can create functional components that receive and render props" </br>
Step 3 </br>
"Student can create a RESTful API (GET endpoint)" </br>
"Student can create a RESTful API (Status codes)" </br>
"Student can create SQL statements to manipulate data in their databases (Select)" </br>
"Student can run SQL commands in their NodeJS servers using Massive" </br>
Step 4 </br>
"Student can interact with the web via axios and REST" </br>
"Student can use componentDidMount in their code" </br>
Step 5 </br>
"Student can create a RESTful API (POST endpoint)" </br>
"Student can create a RESTful API (body parser)" </br>
"Student can create SQL statements to manipulate data in their databases (Insert)" </br>
Step 6 </br>
"Student can use class based components in react and it's features (.bind)" </br>














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
