const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes/index")

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})  