const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Server lytter på port ${port}`);
});

app.get('/', function(request, response){
	response.send("Velkommen til express-workshop");
});

app.get('/meg', function(request, response){
	response.send("Hei jeg heter Henrik og jeg er 17 år gammel");
});