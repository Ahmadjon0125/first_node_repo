import  express from "express";
import bodyParser from "body-parser";
import ServerlessHttp from "serverless-http";
const app = express();
const port = 7077;
app.use(bodyParser.json());

const data = [
    {name: "User1", surname: "John"},
    {name: "User2", surname: "Doe"}
]

app.get("/getAllUsers", (req, res) => {
    res.json(data);
})

app.post("/addNewUser", (req, res) => {
    data.push(req.body)
    res.send("Success")
})

app.listen(port,()=>console.log(`listening on port ${port}`))

export const handler = ServerlessHttp(app)