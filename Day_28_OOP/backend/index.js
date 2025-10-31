const express = require("express");
const app = express();
const port = 8000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard get response: Welcome ${user}`);
});
app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`Standard post response: ${user}, ${password}`);
});

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});