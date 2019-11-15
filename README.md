# Project 4

## Overview
The main aim of this project was to create a mobile application for our online catalog created in  [project 3](http://it2810-30.idi.ntnu.no:5000). The idea was to implement the same functionality and behaviour from project 3 in a moblie application. To achieve this we used the same database from project 3 and built our project with React Native. 

## Project structure
Our project build is based on two parts, a client part and a server part. The server part is basically the same as the previouse project which contains all the necessary REST API implementations needed for fetching data from the backend and the client part contains the frontend "user-based" actions like searching for an item, showing items, filtering and sorting of items.

## Techonology
### React Native 
React Native is an open-source mobile application framework  used to develop applications for Android, iOS, Web and UWP by enabling developers to use React along with native platform capabilities. 
We initaiated our project with `npm install -g expo-cli` followed by `expo init prosjekt4`.  Expo is a set of tools built around React Native and, while it has many features, the most relevant feature is that it can get you writing a React Native app within minutes.  React native comes basic elements like `<View>` and `<Text>` which we used in addition to a third party library called `react-native-papaer`.

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


## Reusing code
We reused a lot of the concepts from the rect web app. By using using react-native-paper we used material-ui similar components, and a lot of the logic flow was similar to the webapp. Several places we had to map our components to JSX elements in many ways, in these situations, we could almost copy paste code from our webapp. Another occurence is when we are building the string query, this logic was of course extremely similar to the webapp since we are using the same backend. Otherwise we could use our skills we learned from delevoping in react in many ways when developing react native in general.

## Testing
Our application has been ran on both an iphone 6 plus and an STA android phone and it works great.   We also tested that our application fullfils a complete end to end test. 

Shopping cart testing: 
1.  Open start screen and click on a component to check that the deatil view works
2.   Click on "ADD TO SHOPPING CART"
3 .  Navigate to shopping cart tab and see that the item it added to the cart.
4.  Detail view in the shopping cart list can be accesed by clicking on the item.
5 . Buy item, check that price id changed and component is removed from shopping cart and price is zero.

FIltering test:
1.  Open start screen and click on a component to check that the deatil view works
2. Open filter side bar 
3  . Seerch by Category for example "Laptop"
4. Click submit, see that components are filtered and the list contains only laptops.

