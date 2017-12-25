# Project-Hasura-Task1

This is a demo application which allows the implementation of a few of the most basic functionalities available on Express-Nodejs. This application handles various requests made by clients and performs various functions, including providing the client with appropriate responses.

## Requirements

	1) Nodejs
	2) Web Browser

## Install

	$ git clone https://github.com/george-martin/Project-Hasura-Task1.git
 
Now you must enter the project directory

	$ cd Project-Hasura-Task1
	
	$ npm install

**NOTE:** the above command facilitates the inclusion of all the dependencies metioned in package.json


To get the server to start listening for requests

	$ node index.js

## Instructions

		On visiting 
	
			http://localhost:8080/ 

			a simple string "Hello World -George" is displayed.

			http://localhost:8080/authors

			displays a list of the names of authors along with the count of their posts.

			http://localhost:8080/setcookie

			sets a simple cookie.

			http://localhost:8080/getcookies

			fetches the set cookie and displays the stored key-value pairs.   

			http://localhost:8080/html

			renders a simple html page

			http://localhost:8080/image
	
			renders an image

			http://localhost:8080/robots.txt

			denies requests and redirects you to http://httpbin.org/deny

			http://localhost:8080/input

			provides you the functionality of sending data to the server
