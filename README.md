# Express App with Basic Authentication

## Introduction
This README provides a guide on setting up an Express web server with basic authentication. The server serves different HTML files based on GET and POST requests.

## Setup
1. **Import Required Modules:**  
   The first step is to import the required modules. In this case, we are importing the `express` module, the `dirname` module from the `path` module, the `fileURLToPath` module from the `url` module, and the `bodyParser` module.

    ```javascript
    import express from 'express';
    import { dirname } from 'path';
    import { fileURLToPath } from 'url';
    import bodyParser from 'body-parser';
    ```

2. **Create an Express App:**  
   Once the required modules have been imported, we can create an Express app.

    ```javascript
    const app = express();
    ```

3. **Set the Port Number:**  
   Next, we need to set the port number that the app will listen on. In this case, we are setting the port number to 3000.

    ```javascript
    const port = 3000;
    ```

4. **Set the Directory Name:**  
   We also need to set the directory name. In this case, we are setting the directory name to the directory that contains the `index.html` file.

    ```javascript
    const __dirname = dirname(fileURLToPath(import.meta.url));
    ```

5. **Use the `body-parser` Middleware:**  
   The `body-parser` middleware is used to parse the request body. In this case, we are using the `urlencoded` parser.

    ```javascript
    app.use(bodyParser.urlencoded({ extended: true }));
    ```

6. **Set up the GET Route:**  
   The GET route is used to handle GET requests. In this case, we are sending the `index.html` file when a GET request is made to the root URL (`/`).

    ```javascript
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
    ```

7. **Set up the POST Route:**  
   The POST route is used to handle POST requests. In this case, we are sending the `secrets.html` file when a POST request is made to the `/submit` URL and the password entered by the user matches the password stored on the server. Otherwise, we are sending the `tryAgain.html` file.

    ```javascript
    app.post('/submit', (req, res) => {
      var userEnteredPassword = 'iLoveProgramming';
      if (userEnteredPassword === req.body['password']) {
        res.sendFile(**dirname + '/public/secrets.html');
      } else {
        res.sendFile(**dirname + '/public/tryAgain.html');
      }
    });
    ```

8. **Start the App:**  
   Finally, we can start the app by calling the `listen()` method.

    ```javascript
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    ```

This README provides a comprehensive guide on setting up and running the Express app with basic authentication. Make sure to adjust paths and configurations according to your project's structure and requirements.
