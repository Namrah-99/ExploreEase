
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

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Feedback

If you have any feedback, please reach out to me at namrahsaeed2@gmail.com


