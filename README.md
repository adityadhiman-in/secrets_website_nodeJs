Import the required modules
The first step is to import the required modules. In this case, we are importing the express module, the dirname module from the path module, the fileURLToPath module from the url module, and the bodyParser module.

import express from 'express';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
Create an Express app
Once the required modules have been imported, we can create an Express app.

const app = express();
Set the port number
Next, we need to set the port number that the app will listen on. In this case, we are setting the port number to 3000.

const port = 3000;
Set the directory name
We also need to set the directory name. In this case, we are setting the directory name to the directory that contains the index.html file.

const \_\_dirname = dirname(fileURLToPath(import.meta.url));
Use the body-parser middleware
The body-parser middleware is used to parse the request body. In this case, we are using the urlencoded parser.

app.use(bodyParser.urlencoded({ extended: true }));
Set up the GET route
The GET route is used to handle GET requests. In this case, we are sending the index.html file when a GET request is made to the root URL (/).

app.get('/', (req, res) => {
res.sendFile(\_\_dirname + '/public/index.html');
});
Set up the POST route
The POST route is used to handle POST requests. In this case, we are sending the secrets.html file when a POST request is made to the /submit URL and the password entered by the user matches the password stored in the server. Otherwise, we are sending the tryAgain.html file.

app.post('/submit', (req, res) => {
var userEnteredPassword = 'iLoveProgramming';
if (userEnteredPassword === req.body['password']) {
res.sendFile(**dirname + '/public/secrets.html');
} else {
res.sendFile(**dirname + '/public/tryAgain.html');
}
});
Start the app
Finally, we can start the app by calling the listen() method.

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});
