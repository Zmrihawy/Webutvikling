# Project 4

## Overview
The main aim of this project was to create a mobile application for our online catalog created in  [project 3](http://it2810-30.idi.ntnu.no:5000). The idea was to implement the same functionality and behaviour from project 3 in a moblie application. To achieve this we used the same database and built our project with React Native. 

## Project structure
Our project build is based on two parts, a client part and a server part. The server part is basically the same as the previouse project which contains all the necessary REST API implementations needed for fetching data from the backend and the client part contains the frontend "user-based" actions like searching for an item, showing items, filtering and sorting of items.


## Design

### React Native and React Native paper - components (Third Party library)
We have both used react native basic components and as a third party librabry, we have choosen to use `react-native_paper`.  Most of our project components are built using react native paper elements . This made it 
simple and easy to implement our application  and give it the same feel as our website.


## Content and Functionality 
### Searching, filtering and dynamic loading of data
Catalog components can be searched  by navigating to the search page via clicking the "Filter by" button on the home screen. The search screeen contains a search bar and other filtering and sorting alternatives that a user that  decide to select or choose while searching. On submitting this returns a list of the desired components on the homescreen. 
Components on the homepage are loaded using pagination . The user can change between pages if the seacrh result returned a lot of components. 

### Detailed view
Searched components are dispalyed on the home screen as expandable lists that contain details about each component. Tap on the list to expand it to see the deatils and theres a possiblity of adding the component to your shopping cart. 

### User generated data
A user has possibility to add items to their shooping cart. The item is automatically added to the shopping cart and the user can decide to buy the items in their cart. Just to metion, ounce an item is added to the users shopping cart, it can not deleted from it.  

### React Native 
React native is a javascript library which enable us to create apps for Android and iOS using React.React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
