const slugify = require('slugify');
const db = require('../../database/db.config');
const Article = db.articles; 

// Create a new article
exports.create = (req, res) => {
    const { nomArt, description, image, prix } = req.body;

    if (!nomArt || !description || !image || prix == null) {
        return res.status(400).send({
            message: 'nomArt, description, image, and prix are required'
        });
    }

    const slugy = slugify(nomArt, '-');

    const newArticle = new Article({
        nomArt,
        description,
        image,
        prix,
        slug: slugy
    });

    newArticle.save()
        .then(() => {
            res.status(200).send({ message: 'Successfully created article' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: 'Error creating article' });
        });
};



// Get all articles
exports.findAll = (req, res) => {
    Article.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ message: 'Error retrieving articles' });
        });
};

exports.delete = (req, res) => { 
    const id = req.params.id; 
    if(!id) { 
    res.status(400).send({ message: "content is required "}); 
    } 
    Article.findByIdAndDelete(id).then((data) => { 
    if(!data){ 
    res.status(404).send({ message: "Article not found "});   
    } 
    res.status(200).send({ message: "Article was successfull deleted "}); 
    }) 
    };

exports.findOne =  (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(400).send({ message: "content is required "});
    }
    Article.findById(id).then((data) => {
        res.send(data);
    }).catch((err) =>{
        console.log(err);
    })
};

exports.update = (req, res) => {
    const id = req.params.id;
    const { nomArt, description, image, prix } = req.body;

    if (!id || !nomArt || !description || !image || prix == null) {
        return res.status(400).send({ message: "nomArt, description, image, and prix are required" });
    }

    const slugy = require('slugify')(nomArt, '-');

    Article.findByIdAndUpdate(
        id,
        { nomArt, description, image, prix, slug: slugy },
        { useFindAndModify: false, new: true }
    )
    .then((data) => {
        if (!data) {
            return res.status(404).send({ message: `Cannot update Article with id=${id}` });
        }
        res.status(200).send({ message: "Article was successfully updated", updatedArticle: data });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "Error updating Article" });
    });
};
