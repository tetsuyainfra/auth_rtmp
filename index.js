const express = require('express')
const bodyParser = require('body-parser')

const _ = require('lodash')
const fs = require('fs')
const yaml = require('js-yaml')

const config = yaml.safeLoad(fs.readFileSync('auth_rtmp.yml', 'utf8'))
const { host = "127.0.0.1", port = 3010 } = config

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', (req, res) => {
	if (_.find(config.authenticates, (auth_info) => {
		return req.body.app === auth_info.app &&
			req.body.name === auth_info.name
	})) {
		console.log(`access allow: `, req.body.app)
		return res.status(200).send()
	}

	res.status(404).send()
})

app.listen(port, host, () => {
	console.log(`app listening at http://${host}:${port}`)
})

