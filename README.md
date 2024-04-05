<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express App Documentation</title>
</head>
<body>
    <h1>Express App Documentation</h1>
    <h2>Import the required modules</h2>
    <p>The first step is to import the required modules. In this case, we are importing the express module, the dirname module from the path module, the fileURLToPath module from the url module, and the bodyParser module.</p>
    <pre><code>import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';</code></pre>

    <h2>Create an Express app</h2>
    <p>Once the required modules have been imported, we can create an Express app.</p>
    <pre><code>const app = express();</code></pre>

    <h2>Set the port number</h2>
    <p>Next, we need to set the port number that the app will listen on. In this case, we are setting the port number to 3000.</p>
    <pre><code>const port = 3000;</code></pre>

    <h2>Set the directory name</h2>
    <p>We also need to set the directory name. In this case, we are setting the directory name to the directory that contains the index.html file.</p>
    <pre><code>const __dirname = dirname(fileURLToPath(import.meta.url));</code></pre>

    <h2>Use the body-parser middleware</h2>
    <p>The body-parser middleware is used to parse the request body. In this case, we are using the urlencoded parser.</p>
    <pre><code>app.use(bodyParser.urlencoded({ extended: true }));</code></pre>

    <h2>Set up the GET route</h2>
    <p>The GET route is used to handle GET requests. In this case, we are sending the index.html file when a GET request is made to the root URL (/).</p>
    <pre><code>app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});</code></pre>

    <h2>Set up the POST route</h2>
    <p>The POST route is used to handle POST requests. In this case, we are sending the secrets.html file when a POST request is made to the /submit URL and the password entered by the user matches the password stored in the server. Otherwise, we are sending the tryAgain.html file.</p>
    <pre><code>app.post('/submit', (req, res) => {
  var userEnteredPassword = 'iLoveProgramming';
  if (userEnteredPassword === req.body['password']) {
    res.sendFile(__dirname + '/public/secrets.html');
  } else {
    res.sendFile(__dirname + '/public/tryAgain.html');
  }
});</code></pre>

    <h2>Start the app</h2>
    <p>Finally, we can start the app by calling the listen() method.</p>
    <pre><code>app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});</code></pre>
</body>
</html>
