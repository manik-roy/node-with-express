const express = require('express');
const userRoute = require('./routes/userRoute');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/users', userRoute);
app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}`));
