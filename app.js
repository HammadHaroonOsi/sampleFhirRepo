const express = require ('express')
const app = express()
const fhirClient = require("fhirclient");
const port = 3000

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get("/launch", (req, res) => {
    fhirClient(req, res).authorize({
        "client_id": "m5f40d868-9444-4a1c-83ca-0ae4f93d8ce2",
        "scope": "patient/*.read"
    });
});

app.get("/", (req, res) => {
    fhirClient(req, res).ready()
        .then(client => client.request("Patient"))
        .then(res.json)
        .catch(res.json);
});