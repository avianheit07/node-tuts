import * as Mongoose from 'mongoose';

const thumbsSchema = Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  folder: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: Number,
    required: true,
  },
  siteId: {
    type: Schema.Types.ObjectId,
    ref: 'Site',
    required: true,
  },
  live: {
    type: Number,
    required: true,
    default: 0 // 0 - hidden, 1 - live
  }
})

module.exports = Mongoose.model('Thumb', thumbsSchema);