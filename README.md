# Netflix Clone

A Netflix clone web application built using Vite and React, featuring login/signup, listing movies and series using the TMDB API, Firebase for database and authentication, and playing video details using react-youtube.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **User Authentication:**
   - Users can sign up and log in to the application.
   - Firebase Authentication is used for secure user authentication.

2. **Movie and Series Listing:**
   - Users can browse and view a collection of movies and series.
   - Data is fetched from the TMDB API to display movie and series details.

3. **Video Playback:**
   - When a movie or series is clicked, its respective video detail is played using the react-youtube component.

4. **Responsive Design:**
   - The application is designed to work seamlessly on various screen sizes.

## Technologies Used

- **Frontend:**
  - Vite: Fast build tool that leverages ES modules for modern web development.
  - React: JavaScript library for building user interfaces.
  - CSS: Styling the application.

- **Database and Authentication:**
  - Firebase: Cloud-based platform for authentication and database management.

- **API Services:**
  - TMDB API: Fetching movie and series data.

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/hensaldeon/netflix-clone.git
   cd netflix-clone
   npm install

## Configuration

  1. **Firebase Setup**
     - Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
     - Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.).
     - Replace the placeholders in the project's configuration files with your Firebase configuration.

  2. **TMDB API Setup**
     - Sign up for an API key from [https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api).
     - Replace 'YOUR_TMDB_API_KEY' with your actual TMDB API key.
## Usage
  1. Run the development server
      ```sh
        npm run dev


## Contributing
  - Contributions are welcome! If you find any issues or want to enhance the application, feel free to submit a pull request.

## License
- This project is licensed under the <a href="https://opensource.org/license/mit/">MIT License</a>.