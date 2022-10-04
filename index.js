const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

app.listen(process.env.PORT, () => {
    console.info(`Server started in port: ${process.env.PORT}`)
});