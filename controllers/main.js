const CustomAPIError = require("../errors/custom-error");
const jwt = require('jsonwebtoken')
const login = (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 404)
    }
    const id = new Date().getDate();
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: 'user Created', token })
}
const dashboard = (req, res) => {
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({ msg: `hello ${req.user.username}`, secret: `Here is yor data authorised number lucky number is ${luckyNumber}` })


}
module.exports = { login, dashboard }; 