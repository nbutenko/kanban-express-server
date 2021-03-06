const Card = require("./Model");
const {cloudinary} = require("../../utils/cloudinary")

function cardCreate(req, res) {
    cloudinary.uploader.upload(req.body.file);
    const newCard = new Card({
        name: req.body.name,
        description: req.body.description,
        file: req.body.file,
        status: req.body.status,
        priority: req.body.priority,
        trash: false
    });
    newCard
        .save()
        .then(() => {
            res.status(200).json("Card created");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Card not created");
        })
        .finally(() => {
            console.log("END");
        });
}

module.exports = cardCreate;