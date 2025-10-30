
const router = require("express").Router();

router.get('/', (req, res) => {
    res.send('Hello World Right Now!!');
});

router.use('/contacts', require('./contacts'));

module.exports = router;

// const  mongodb = require(`../data/database`);
// const app = express();

// const port = process.env.PORT || 3000;
