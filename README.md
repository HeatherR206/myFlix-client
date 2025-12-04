# **myFlix Client (using React)**

This is a full-stack movie application designed to showcase a comprehensive **RESTful API** architecture alongside a modern client-side experience. The server is built using **Node.js** with **Express** and interacts with a **MongoDB Atlas** database to handle user authentication, movie data storage, and retrieval. 

The client-side is a **Single Page Application (SPA)** currently under development, built with **React** and managed using **Yarn**. **Parcel** is utilized as the blazing-fast, zero-configuration web application bundler for development and production builds. This project emphasizes a clear separation between a robust API and a dynamic, component-based frontend.

<br>   

## **Tech Stack**
### **Server & Database (Completed)**

- **Server Language/Runtime:** Node.js
- **Server Framework:** Express
- **Database:** MongoDB Atlas
- **API Host:** Heroku
- **Authentication/Data Security:** bcrypt, passport, JSON Web Tokens (JWT), CORS, express-validator, environment variables

### **Client (Under Development)**
- **Frontend Library:** React (component-based UI)
- **Language:** JavaScript (ES6+)
- **Build Tool/Bundler:** Parcel (zero-config build tool)
- **Package Manager:** Yarn (installs dependencies consistently)

<br>

## **Getting Started**
### **Prerequisites**
You will need to globally install the following software on your machine:

- **Node.js** (LTS recommended)
- **Yarn** (or preferred package manager)
- **MongoDB Community Server** (or preferred database software) 

<br>

### **Installation**
1. **Clone the repository**
    
    ```md
    git clone at https://github.com/HeatherR206/myFlix-client.git
    cd myFlix
    ```

<br>

2. **Install Server Dependencies**
    
    ```md
    cd server
    yarn install
    ```

<br>

3. **Install Client Dependencies**
    
    ```md
    cd ../client
    yarn install
    ```

<br>

### **Configuration**

1. **Server Setup**
    - Create a file named ".env" inside the /server directory
    - Add your environment variables (e.g. database connection string, JWT secret key)

    **Code snippet example**

    ```md
    MONGODB_URI=mongodb://localhost:27017/myFlixDB
    jwtSecret=your_jwt_secret
    port=8080
    ```

<br>
 
### **Deployment**
These steps will set you up to run the project locally.   

1. **Start the Database**
    - Make sure your **database** server (e.g. MongoDB Atlas) is running 

<br>

1. **Start your Server/API**
    
    ```md
    // In the /server directory
    yarn start
    // The server will run on http://localhost:8080 (or your configured port)
    ```

<br>

3. **Start the Client/Frontend**
    
    ```md
    // In the /client directory
    yarn start
    // The app will open your browser, likely at http://localhost:1234
    ```

<br>

## **Contact**
**Author:** Heather Ricarte    
**Email:** ricarte.heather@gmail.com 
