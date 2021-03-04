In a nutshell
=============

Write a basic Twitter clone in React application with Redux, using JSON Server as the backend.

Before you start
================

Start JSON Server with included bs-react-redux-test-db.json - (npm install -g json-server) <https://github.com/typicode/json-server>

Requirements
============

-   Deliver responsive design
-   Use SCSS or Styled Components
-   Do not use any existing component library
-   Use version control

How the assessment process works
================================

See the level breakdown below. It should give you a good idea of which features are more important than others so you can use your time appropriately.

Once we received your attempt and are invited for another interview, we will continue where you left off and complete your current level and/or refactor.

Level 1 (init)
==============

Task 1.1: Create the app with Typescript and Redux
Task 1.2: Add API url to .env

Level 2 (listing with service, action and ui + tests)
=====================================================

Task 2.1: Implement services and actions for listing API endpoint [GET] **/tweets**
Task 2.2: Implement UI components for listing â€žtweets"
Task 2.3: Write unit tests

Level 3 (post with hardcoded userID)
====================================

Task 3.1: Implement services and actions for API endpoint [POST] /**tweets**
Task 3.2: Implement UI components for sending â€žtweet" with hardcoded userID:1
Task 3.3: Write unit tests

Level 4 (pagination, put, delete)
=================================

Task 4.1: Improve listing with pagination
Task 4.2: Implement services and actions for API endpoints [PUT, DELETE] **/tweets**
Task 4.3: Implement UI components for deleting the users own â€žtweets"
Task 4.4: For each "tweet" implement a button what increase a counter when clicked (like the Medium article "clap" functionality)
Task 4.5: Write unit tests

Level 5 (user details)
======================

Task 5.1: Implement services and actions for API endpoint [GET] /users
Task 5.2: Implement UI for user details page, listing the users own â€žtweets"
Task 5.3: Implement statistics, tweets/day of the last 10 days
Task 5.4: write unit tests
