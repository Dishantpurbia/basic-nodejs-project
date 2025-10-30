const express = require("express");

const { serveronfig } = require("./config");
const apiroutes = require("./routes");
const { Logger } = require("winston");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(`/api`, apiroutes);

app.listen(serveronfig.PORT, () => {
    console.log(`successfully started the server on port : ${serveronfig.PORT}`);
});
