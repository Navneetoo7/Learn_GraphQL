const express = require('express')
const expressGraphQL = require('express-graphql')

const app = express()

app.listen(5100, () => console.log('Server Running'))