Company test application 

1-npm install or yarn

to start npm start

It will run on http://localhost:3000/

##############################################
2-My package.json has

"dependencies": {
    "@material-ui/core": "^4.9.5",
    "@material-ui/icons": "^4.9.1",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "chromedriver": "^80.0.1",
    "nightwatch": "^1.3.4",
    "react": "^16.13.0",
    "react-dom": "^16.13.0",
    "react-scripts": "3.4.0"
############################################

3- Test with Nightwatch
"test": "nightwatch"

Run npm test

###########################################

4-Testing Browser please use chrome

###########################################

5-Folder structure 

Pages folder has the main pages (Overview, Repositories, Error)
##########################################

6-Hooks useState,useEffect are setting on (Overview,Repositories)(pages only)####  useReff hooks is sitting on the searchForm

From page to component like below structure

Overview (page)=> OverRepositoriesList(component)

Repositories (page) => RepositoriesList(component) => Repository(component)

Error page is setting on the main App file for the routing error

loading it is a component I used it for both OverviewRepositoriesList and RepositoriesList

#########################################

7-Searching functionality on the SearchForm

########################################

8-Most of the work functionalities are sitting on Overview and Repositories like Date, Dynamic color, sort the array, playing with the object value like to lowerCase

#######################################

9- The array name is repositories, I used it for my data , I used two types of passing the props 

A- From Overview to OverviewrepositoriesList (Fast, simple way)

B- From Repositories to RepositoriesList to Repository (More organized way)

######################################

10-CSS  I used material UI , Normal CSS, Inline styling

For each component you can find the CSS setting on the same component and for the Grind system it is Inline styling like xs or md etc.

For Normal CSS I used it for the Navbar and the SearchForm 

The main CSS for the Navbar is setting on the Index.css

The main CSS for the formsearch is setting on the Form.css

#####################################

Links 

1- https://nightwatchjs.org/
2- https://material-ui.com/
