# User Details Card React Component

## Overview

The **User Details Card** React component displays user information in a styled card format. It showcases various details about the user including name, date of birth, age, profession, phone number, and email.

## Features

- Displays user information in a clean, card-style layout.
- Responsive and adaptable to different screen sizes.
- Simple to integrate into any React application.

## Installation

To use the User Card component in your React project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone 
    ```

2. **Navigate to the project directory:**

    ```bash
    cd user-card
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Import the `UserCard` component into your React file:**

    ```javascript
    import { UserCard } from './UserCard';
    import './user.css';  // Ensure you import the CSS file for styling
    ```

2. **Use the `UserCard` component in your application:**

    ```javascript
    import React from 'react';
    import { UserCard } from './UserCard';
    import './user.css';  // Ensure you import the CSS file for styling

    function App() {
      return (
        <div>
          <UserCard
            name="Mannat Gupta"
            dob="14-11-2004"
            age="20"
            profession="Student"
            phoneNumber="9541343049"
            email="mannatgupta146@gmail.com"
          />
        </div>
      );
    }

    export default App;
    ```

## CSS Styling

Ensure you include the CSS file (`user.css`) to style the `UserCard` component:

```css
/* user.css */
.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin: 20px;
    max-width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    font-family: Arial, sans-serif;
    overflow: hidden;
    word-wrap: break-word;
    min-height: 200px;
}

.name {
    font-size: 1.5em;
    margin-bottom: 15px;
    color: #333;
}

.body {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 8px 16px;
}

.label {
    font-weight: bold;
    color: #555;
}

.body div {
    font-size: 1em;
    color: #666;
    white-space: normal;
    overflow: visible;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;
}
