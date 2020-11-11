var express = require('express');

const app = express()
//const port = 3000
const port = 4010

app.get('/', (req, res) => {
	console.log(req)
	
	//res.status(404).send()
	res.status(200).send()
})

app.listen(port,"127.0.0.1", () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})



