const CustomAPIError = require("../errors/custom-error");

const login = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 404)
    }
    res.send('Fake Login/Rsgister')
}
const dashboard = (req, res) => {

    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `hello joe`, secret: `Here is yor data authorised number lucky number is ${luckyNumber}` })
}
module.exports = { login, dashboard }; 