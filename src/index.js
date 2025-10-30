const express = require("express");

const { serveronfig } = require("./config");
const apiroutes = require("./routes");
const { Logger } = require("winston");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(`/api`, apiroutes);

app.listen(serveronfig.PORT, async () => {
    console.log(`successfully started the server on port : ${serveronfig.PORT}`);
    const {City ,Airport } = require(`./models`);
    const pune = await City.findByPk(1);
    console.log(pune);
    //const airport = await Airport.create({name: `kempegowds`, code: `kpd`,cityId: 1});
    //const rana = await pune.createAirport({ name: `surendra`, code: `ddr`,cityId: 4});
    //console.log(rana);
    //const airportinp = await pune.getAirports();
    //console.log(airportinp);
    await City.destroy({
        where:{
            id: 1
        }
    })
});
