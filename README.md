
# Project Overview
ExploreEase is an innovative project that aims to revolutionize the way people experience and navigate the world. It combines cutting-edge technologies and features to provide users with a seamless and enjoyable exploration experience. Whether you're an avid traveler, an outdoor enthusiast, or simply looking for new places to discover, ExploreEase has something to offer for everyone.

My project's primary goal is to make exploration easier, more interactive, and more informative. I believe that technology can greatly enhance the way we explore our surroundings, and I've incorporated a range of features to achieve this vision.



## Features

ExploreEase boasts a diverse set of features to cater to a wide range of users:

- **Interactive Maps:** I've integrated the powerful Leaflet library to provide interactive maps that allow users to explore places with ease. Users can choose from various map styles and overlay options to customize their experience.

- **User Authentication:** I've implemented a robust login system that ensures user data security. Users can create accounts, log in, and access personalized features.

- **Image Upload and Processing:** ExploreEase enables users to upload images, which are efficiently processed to ensure fast loading times and optimal viewing.

- **Email Notifications:** Users receive email notifications for various events, including account creation, password resets, and booking confirmations, improving overall user engagement.

- **Payment Processing:** Integration with Stripe enables secure and convenient credit card payments for booking tours and other services.

- **User Profile:** Users can update their profiles, including personal information, photos, and password changes, all within the app.

- **Tour Bookings:** ExploreEase provides users with the ability to book tours. Bookings are securely processed, and users can view their booked tours in their profile.

- **Email Templates:** I've created responsive email templates using Pug and SendGrid to deliver professional and visually appealing email notifications.

- **Advanced Map Features:** ExploreEase offers advanced map features like custom tile layers, tile layer providers, and geosystems for GeoJSON files.

- **Security Best Practices:** My project prioritizes security, employing password encryption, protection against brute force attacks, and thorough validation to prevent common web vulnerabilities.


## Tech Stack

**Main Technologies:** Node.js, Express, MongoDB

**Web Server and Routing:** Express

**Database:** MongoDB

**Middleware and Security:** Helmet, HPP (HTTP Parameter Pollution), XSS-Clean, Express Mongo Sanitize

**Authentication and Authorization:** bcrypt, jsonwebtoken

**Client:** Parcel Bundler, Pug, HTML-to-Text, Sharp

**Third-Party Services:** Stripe

**HTTP Requests and API:** Axios

**File Uploads:** Multer

**Error Logging and Debugging:** NDB (Node.js Debugger), Morgan

**Development and Build Tools:** @babel/polyfill, Cross-env, Prettier, ESLint, eslint-config-airbnb, eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-node, eslint-plugin-prettier, eslint-plugin-react




## Documentation

[Postman API Documentation](https://documenter.getpostman.com/view/16341961/2s9Y5bPgJG)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`

`USERNAME`

`PASSWORD`

`DATABASE`

`DATABASE_PASSWORD`

`JWT_SECRET`

`JWT_EXPIRES_IN`

`JWT_COOKIE_EXPIRES_IN`

`EMAIL_USERNAME`

`EMAIL_PASSWORD`

`EMAIL_HOST`

`EMAIL_PORT`

`EMAIL_FROM`

`STRIPE_PUBLISHABLE_KEY`

`STRIPE_SECRET_KEY`

## Dependencies Installed:

- **express:** A fast, unopinionated, minimalist web framework for Node.js, providing a robust set of features for web and mobile applications.
- **axios:** A promise-based HTTP client for the browser and Node.js, making it easy to send asynchronous HTTP requests.
- **bcrypt:** A library for hashing passwords, providing a secure way to store passwords in your database.
- **compression:** Middleware for Express to compress HTTP responses, reducing the size of data sent over the network.
- **cookie-parser:** Middleware for Express to parse cookies in incoming HTTP requests.
- **validator:** A library for validating and sanitizing strings, useful for validating user input.
- **dotenv:** Loads environment variables from a .env file into process.env, making it easy to manage configuration in your development environment.
- **express-mongo-sanitize:** Middleware for Express to sanitize user-supplied data to prevent MongoDB Operator Injection.
- **express-rate-limit:** Middleware for Express to limit repeated requests to public APIs and/or endpoints.
- **helmet:** Middleware for Express to set various HTTP headers to secure your application against common security vulnerabilities.
- **hpp:** Middleware for Express to protect against HTTP Parameter Pollution attacks by whitelisting parameters.
- **xss-clean:** Middleware for Express to sanitize user input to prevent cross-site scripting (XSS) attacks.
- **html-to-text:** Converts HTML content to plain text, useful for extracting text from HTML emails or web pages.
- **jsonwebtoken:** Implements JSON Web Tokens (JWT) for authentication, providing a secure way to transmit information between parties.
- **mongoose:** A MongoDB object modeling tool designed to work in an asynchronous environment, providing a straight-forward, schema-based solution to model your application data.
- **morgan:** HTTP request logger middleware for Express, logging requests to the console.
- **multer:** Middleware for Express to handle multipart/form-data, used for uploading files.
- **ndb:** An improved debugging experience for Node.js, providing an advanced interface for debugging Node.js applications.
- **nodemailer:** A module for Node.js applications to send emails, allowing you to easily integrate email functionality into your application.
- **parcel-bundler:** A fast, zero configuration web application bundler, used to bundle JavaScript files in your project.
- **pug:** A template engine for Node.js and browsers, used to generate HTML from templates.
- **sharp:** A high-performance image processing library for Node.js, used for resizing and manipulating images.
- **slugify:** A library to convert strings into URL-friendly slugs, useful for creating SEO-friendly URLs.
- **stripe:** A library for interacting with the Stripe API, enabling you to process payments in your application.
- **@babel/polyfill:** Provides polyfills for a full ES2015+ environment, allowing you to use features like async/await.

## Dev Dependencies:

- **cross-env:** Allows you to set environment variables across different platforms, making it easier to configure your application for development and production.
- **eslint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, providing a consistent code style across your project.
- **eslint-config-airbnb:** Airbnb's ESLint configuration, providing a set of rules for writing clean and consistent JavaScript code.
- **eslint-config-prettier:** Disables ESLint rules that might conflict with Prettier, ensuring consistent code formatting.
- **eslint-plugin-import:** Provides ESLint rules for import/export syntax, ensuring consistent module usage in your project.
- **eslint-plugin-jsx-a11y:** Provides ESLint rules for JSX accessibility, ensuring that your JSX code is accessible to all users.
- **eslint-plugin-node:** Provides ESLint rules specific to Node.js, ensuring best practices in Node.js development.
- **eslint-plugin-prettier:** Runs Prettier as an ESLint rule, ensuring that your code is formatted according to your Prettier configuration.
- **eslint-plugin-react:** Provides ESLint rules for React, ensuring best practices in React development.
- **prettier:** A code formatter that ensures consistent code style across your project, helping to maintain code readability and maintainability.

## Installation and Run Locally

Clone the project

```bash
  git clone https://github.com/Namrah-99/ExploreEase.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run watch:js
  npm run watch:server
```
or 

```bash
  npm run start
```

## Screenshots

![App All Tours page image](/public/img/readmefileImages/a.png)
![Tour Details page image](/public/img/readmefileImages/b.png)
![User Settings page image](/public/img/readmefileImages/c.png)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Feedback

If you have any feedback, please reach out to me at namrahsaeed2@gmail.com


