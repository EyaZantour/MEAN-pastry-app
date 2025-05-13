module.exports = mongoose => {
    const Schema = mongoose.Schema;

    let ArticleSchema = new Schema({
        nomArt: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        prix: { type: Number, required: true },
        slug: { type: String, required: true },
        published: { type: Boolean, enum: [true, false], default: true }
    }, {
        timestamps: true
    });

    ArticleSchema.method('toJSON', function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Article = mongoose.model('Article', ArticleSchema);
    return Article;
}
