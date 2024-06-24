const HouseSchema = new Schema({
    price: Number,
    location: String,
    status: Boolean,
    user: {
        type: Schema.Typers.ObjectId,
        ref: 'User'
    }
})