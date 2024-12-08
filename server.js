const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send("Hello backend");
});

const PORT = 5000;
app.listen(PORT,() => {
    console.log(`🔥 Server Running in port ${PORT} 😍`);
});

