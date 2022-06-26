# Peckish

- [Hackathon Site](https://www.freyhacks.tech/)
- [Figma Prototype](https://www.figma.com/proto/QPVJhFRFOe6qEbGdn7UMuV/Peckish-Prototype?page-id=32%3A2722&node-id=42%3A3322&viewport=704%2C668%2C0.22&scaling=scale-down&starting-point-node-id=42%3A3322&show-proto-sidebar=1)
- [Deployed Demo]() (View it in IPhone X size screen)
## Project Background ☀️

Summertime is all about coming together with friends and family and enjoying everything the summer sun has to offer us. What better than delicious foods to bring together people of all different backgrounds and connect them to the cultures of the world. With the warmer weather and people itching to pack their picnic blankets or just hitting the streets for a relaxing stroll, food cart vendors are all just as excited to be providing quick bites and casual eats for customers to munch on while they enjoy the outside scenery. 

While visiting street vendors is a popular and convenient activity for both locals and visitors alike, problems that arise for both customers and business owners are the lack of structure and organization causing great opportunities to be passed over. This led to the idea and creation of our web application Peckish, a platform for those to receive all the information they need in order to try out that food truck that’s been ever so evasive from their plans!

## Design Research 🔎

We designed keeping our users in mind; our main priority was to address the issues we discovered during our user interviews. Our findings were as follows: good customer service, user reviews, and images of the food were all deemed important by our users. The biggest pain point our users had was an overall lack of information; users had trouble finding menus, pricing, location and hours of operations. These issues were addressed in the design in the form of a vendor profile page that includes a short business bio, their menu, rating, hours of operation, and location. We also included an option to find a vendor through a map in the landing page of our web-app. 

In the discovery phase we sketched out a SWOT analysis which helped us identify our core competencies as well as some elements that we focused on to differentiate us from our small pool of competitors; like strong branding, well established UI, etc. Other UX tools we used included a customer journey map, affinity mapping, sitemap, user flow, competitive & comparative analysis, plus/delta analysis, etc. 

## What it does 🚚

Our minimal viable product is a mobile web-app that brings exposure to street food vendors/food trucks in the city. It would help support the small businesses and also help create a good experience for the customer with features such as: 
Mapping & Locations of the vendors 
Vendor Profile System & Filtering system for the vendors 
Customer Profiles with a gallery and reviews and a collection of vendors by the customers to keep track of what places to go to

## Built With 🎢

- Figma 
- React
- React-router
- JavaScript
- MaterialUI 
- Pigeon-Maps
- Git and GitHub (GitHub Actions)

## How we built it 🍉

After conducting user research, the UX/UI designers created a low-fidelity to high-fidelity prototype that the developers could use as a reference and created the mobile web-app with React, JavaScript, MaterialUI, and Pigeon-Maps 

The final design is a Single Page Application built with React.js and React-router. We also used Material-UI to help us in easily create and style components with having to spend much time on the CSS. It allowed us to easily set the layout of the project, and only use CSS to add personal styles. One of the core requirements of our project is to be able to see and choose vendors in your area from a map, to help us achieve that we used Pigeon Maps api to display the map and allow the user to interact with it.

The file structure is designed to make it clear different sections of project. The component contains all the components that takes in props and display data, the data are out model which contains all the data we researched, and the pages contains all the different pages of the website. The developers also opened up new branches for different features and communicated effectively on time with each other to make sure we do not ran into any conflicts.

For best user experience, the flow of the app was carefully designed to make flow the system clear and easy to understand. Best practices for styling and layout of the page are carried out according to visual design principles such as Balance, Emphasis and Unity.

Finally, we used GitHub Actions to build CI/CD pipeline for our project and deployment.

## Challenges we ran into ⛱

• The team originally consisted of UXUI Researchers and Designers and we had a difficult time finding developers to join the team and started to consider using the no-code resources that were provided by the hackathon before we found our current developers in our team 💕
• This is everyone's first hackathons and the first time collaborating with each other.
• Collaborating with our developers to hone in on key features in this fast paced 48-hours.

## Accomplishments that we're proud of 🏖

Logo
Original Branding; logo, style guide, brand theme, name, catchline, etc. 
Creating a huge SPA project with multiple layouts and funcitonalities

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## What's next for Peckish 🗽

Refining the UI.
Adding in a “Food Crawl” feature
Adding more options to the filtering system.
Adding a backend server with database to populate all the data.
Adding Framer motion for animation of components.
Advertising and Marketing our product!

