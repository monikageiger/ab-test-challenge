# A/B Testing React Application

## Description

This project is a React application that implements A/B testing to evaluate the effectiveness of different text versions on user engagement. It tracks page views and sign up button clicks, and sends this data to a currently imaginary analytics API, it is a console.log at the moment.

The text content for the variations is stored in a JSON file `./src/data/text.json`, allowing non-technical colleagues to easily change the content.

The application uses localStorage to store the user ID, the variation (currently named `test` or `control`), the page view count, and the sign up button click count.

The main goal of this project is to determine which version of the text converts more users to sign up, fot that reason, we are currently sending data on each event (page view, sign up button click). You can find the functions for these events in the `src/index.js` file.

The `pageViewHandler` function sends the following data as an object:
- event_name: 'page_view'
- user_id: specific user id
- url: current path the user is on when viewing page
- variation: text version that is shown to user
- page_view_count: how many time there was a reload on page

The `signupClickHandler` function sends the following data as an object:
- event_name: 'sign_up_click'
- user_id: specific user id
- url: current path the user is on when viewing page
- variation: text version that is shown to user
- page_view_count: how many time there was a reload on page
- conversion: in the first ever click on this button this boolean is true
- sign_up_click_count: the amount of times this button has already been clicked on

The data I am currently logging contains some numeric values, that are not that important on a live analytics site, because every event can be counted and filtered as needed. For the current setup the only must-have metric is the `sign_up_click_count` that determines the conversion made on the first event.
I am also noting here, that because of the React Strict mode -in development- set inside the `src/main.jsx` file, the events that are called in a useEffect (in the `src/components/Blog.jsx` file for example) are called 2 times.

## Improvement suggestions

In the future, it would be beneficiary to add a tool that evenly distributes possible variations to ensure a fair test. Currently a `Math.random()` method is called, so we cannot be sure that 50% of the users are getting one of the variations.

A more responsive design could/should be implemented to support even more devices.

Database support would be a great improvement to make sure that our data is more protected, and properties are easy to change.

Tests are currently missing. On a production application I would add at least unit tests.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. To start the app, run the following commands:

```bash
npm install
npm run dev
```
