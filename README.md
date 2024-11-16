# Gadget Heaven

Welcome to Gadget Heaven, your one-stop shop for the latest and greatest gadgets!

## Live Website : https://candid-sherbet-f42ed4.netlify.app/


## React Fundamental Concepts Used

This project utilizes several fundamental concepts of React, including:

1. **Components**: Reusable UI elements such as [`Header`](src/components/Header.jsx), [`Footer`](src/components/Footer.jsx), and [`DashboardChart`](src/components/DashboardChart.jsx).
2. **Hooks**: Custom hooks like [`useGlobalState`](src/hooks/useGlobalState.js) for managing global state.
3. **Context API**: Used for state management across the application.
4. **JSX**: Syntax extension for JavaScript used to describe UI elements.
5. **Routing**: Implemented using `react-router-dom` for navigation between pages.

## Data Handling and Management

We use the Context API for handling and managing data across the application. The global state is managed using a combination of context and reducers, as seen in the [`RootLayout`](src/pages/RootLayout.jsx) component.

## Features

1. **Interactive Dashboard**: Visualize data with charts using the [`DashboardChart`](src/components/DashboardChart.jsx) component.
2. **Responsive Design**: The website is fully responsive and works on all devices.
3. **Product Listings**: Browse through a variety of products with detailed information.
4. **Contact Form**: Get in touch with us using the [`ContactForm`](src/components/ContactForm.jsx).
5. **Real-time Notifications**: Receive real-time updates and notifications using `react-hot-toast`.

## Project Structure

gitignore .prettierrc eslint.config.js index.html package.json postcss.config.js public/ \_redirects 200.html assets/ CNAME products.json README.md src/ App.jsx components/ Banner.jsx Button.jsx Cart.jsx CartHeader.jsx ContactForm.jsx DashboardChart.jsx FloatSection.jsx Footer.jsx GetInTouch.jsx Header.jsx Hero.jsx MapLocation.jsx Modal.jsx Navbar.jsx ... context/ ... data/ hooks/ index.css main.jsx pages/ utils/ tailwind.config.js vite.config.js

    FloatSection.jsx
    Footer.jsx
    GetInTouch.jsx
    Header.jsx
    Hero.jsx
    MapLocation.jsx
    Modal.jsx
    Navbar.jsx
    ...

context/
...
data/
hooks/
index.css
main.jsx
pages/
utils/


