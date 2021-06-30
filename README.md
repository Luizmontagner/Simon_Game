# Simon Game !
![Mokeup image]()

## Goal for this project

Welcome to Simon Game! this is a game well known to people of all ages and now you can play it online. 
In the game you can select the strict mode that will make the game more challenging and you can also record your name in the ranking

Thank you for visiting my project! If you have any feedback or questions, head over to my GitHub contact details and feel free to reach out to me.

---
<a></a>
## Table of contents 
* [UX](#ux)
    * [User Goals](#user-goals)
    * [User Stories](#user-stories)
    * [Site Owners Goals](#site-owners-goals)
    * [User Requirements and Expectations](#user-requirements-and-expectations)
        * [Requirements](#requirements)
        * [Expectations](#expectations)
    * [Design Choices](#design-choices)
        * [Fonts](#fonts)
        * [Icons](#icons)
        * [Colors](#colors)
        * [Structure](#structure)
* [Wireframes](#wireframes)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Features to be implemented](#features-to-be-implemented)
* [Technologies used](#technologies-used)
    * [Languages](#languages)
    * [Tools and Libraries](#tools-and-libraries)
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)


<a name="ux"></a>
 ## UX 
 ###  **User Goals**

- A website filled with valuable content.
- The game should be easy to use on desktop, tablet & mobile.
- The game should be self intuitive.
- The game should be fun.

[Back to Top](#table-of-contents)

### **User Stories**

- As a user, I want to be able to easily paly the game.
- As a user, I want to play the game without open other pages.
- As a user, I want to see my score.
- As a user, I want to be able to see the game raking.
- As a user, it is important to me that the website is easy and simple to use.
- As a user, I want the website to work well on mobile and tablets.

 **Site Owners Goals**

- Bring visitors to the page.
- Create a community.

[Back to Top](#table-of-contents)
 
### **User Requirements and Expectations**

#### **Requirements**

- Easy to navigate by using the navigation menu.
- The game should be funny.
- The game should be challenging.
- Appealing visual elements.

#### **Expectations**

- When clicking on links, I expect the page to open in a seperate browser.
- I expect that the navigation links work properly so that is takes me wherever I want to go.
- The game should run clean.
- The game should keep player score.

[Back to Top](#table-of-contents)

### **Design Choices**

As soon as I decided to create a Simon game, I googled about it to have a better understanding about rules and how the game worked
then I came across with a tutorial from [Free Code Camp](https://www.freecodecamp.org/ "Free Code Camp")
and didn't want to change the game original colors so I kept it.
I have used [Color Hex](https://www.color-hex.com/ "Color Hex") to find appropriate color for background and nav-bar.

#### Fonts
 
I visited [Google Fonts](https://fonts.google.com/ "Google Fonts") and found a font called "Big Shoulders Stencil Display" that was similar with the original physical game font so I decided to use for the entire page. 


#### Colors

I based my color scheme on the original game colors. 
For he background I've used a dark color to give a personal touch.

![Color scheme](https://i.imgur.com/UCnk8SF.jpg)


#### Structure

I have chosen to use [Bootstrap](https://getbootstrap.com/) to create the navbar of my website. 
For the game I've based myself on [Free Code Camp](https://www.freecodecamp.org/ "Free Code Camp") code.

[Back to Top](#table-of-contents)

---

## Wireframes

I have decided to use Balsamic to create wireframes for my website.
For my website I have decided to go for a 1 page website which suits more with the current trends. 
The website will be easy to navigate by using the navigation bar or by scrolling down the page.

You can find my wireframes below:


### [Desktop Wireframe]()
### [Tablet Wireframe]()
### [Mobile Wireframe]()

[Back to Top](#table-of-contents)

---

## Features

### **Existing Features**

#### Navigation

For the navbar I have used Boostrap to create a responsive navbar. 
I have implemented as well the hamburger icon for mobile devices to be more user-friendly. 
In order to navigate more easilty through the site, I have implemented to scroll spy option from bootstrap
to let the user exactly know where they are located on the site. For this to work properly I have fixed the navbar on the top of the page.


## Features to be implemented

- Automatic socore register on the ranking section.
- Terms and Conditions.
- Different themes.

[Back to Top](#table-of-contents)


## Technologies used

---

**Languages**

* [HTML](https://en.wikipedia.org/wiki/HTML)
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### **Libraries & Frameworks**
* [Bootstrap](https://getbootstrap.com/)
* [Google Fonts](https://fonts.google.com/)


### **Tools**
* [Git](https://git-scm.com/)
* [GitPod](https://www.gitpod.io/)
* [Balsamic](https://balsamiq.com/wireframes/)
* [W3C HTML Validation Service](https://validator.w3.org/)
* [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
* [Color Hex](https://www.color-hex.com/)
* [Am I Responsive](http://ami.responsivedesign.is/)
* [Imgur](https://imgur.com/)
* [JSHint](https://jshint.com/)

[Back to Top](#table-of-contents)

## **Testing**

---

### Navigation bar

* **Plan**    

    I want a navigation bar which will have only the logo and two menus to make it clear and easy to the user. Whenever clicked on one of the navigation links, it should take you where you want to go.


* **Implementation**   
I implemented the navigation bar using Bootstrap. This helps to give an overall structure and lay out to the navbar. 
I have used CSS to overwrite the default settings and making the navbar in line with the overall webite. 
I have also used Bootstrap to implement the hamburger sign for mobile devices.

* **Test**    
To test the navigation bar, I have click all the links to make sure it works properly. 
I have also opened the website in various browers (safari, google chrome, mozilla firefox) to make sure it works on all browsers and devices. 

* **Result**    
The navigation bar shows nicely like expected on all browsers and devices. 
It did notice that the contact link was too close to the right side of the screen which I solved by increasing the margin. 
All the links work properly and the scrollspy gives a clear view on where you are located on the page. 

* **Verdict**    
The test has passed all the criteria and works like planned.



[Back to Top](#table-of-contents)

## Bugs

#### On and Strict Buttons

* **Bug**    

    The game should make a 'beep' when the button On and the button Stric is clicked.

* **Verdict**   
    

#### Icons


* **Bug**  
    The social media icons didn't show nicely on mobile. One appeared below the other 2 instead of all 3 next to each other.

* **Fix**  
    Reduced the font-size and padding which resolved the issue immediately.

* **Verdict**

    Icons now show nicely next to each other on all devices and browsers.

#### Hamburger Button

* **Bug**   

    When you click the hamburger icon, the menu appears nicely. 
    Whenever you click on one of the links the dropdown menu doesn't dissapear but stays open. 
    This is not a good user experience.

* **Verdict** 

    As I don't have the knowledge to fix it, I'll add to the features to be implement list.



[Back to Top](#table-of-contents)
<a></a>

## **Deployment**

This project was deployed via GitHub by executing the following steps.
After writing the code, committing and pushing it to GitHub:
1. Navigate to the repository on github and click **Settings**.
1. From there, go to the **GitHub Pages** within the Github Pages section.
1. Select **master branch** on the dropdown menu, and click save.
1. Now the website is live on **https://luizmontagner.github.io/**
1. Any time commits and pushes are sent to Github, the Github Pages site should update shortly after.

To run the project locally:
1. Click the **green Clone or Download button** on the Github Repository
1. Using the **Clone with HTTPS option**, copy the link displayed.
1. Open your IDE, and ensure the Git Terminal is open.
1. Change the working directory to the location where the cloned directory is to go.
1. Use the **"git clone" command** and paste the url copied in the second step.

[Back to Top](#table-of-contents)


## **Credits**

### Content - Media - Inspiration

I have used the following websites to gather ideas and information for the overall content of my website: 

* [Free Code Camp](https://www.freecodecamp.org/ "Free Code Camp")

From [Canva](https://canva.com/) I have used all the images for my website. For the logo image I also built it on [Canva](https://canva.com/).

### Acknowledgements



[Back to Top](#table-of-contents)