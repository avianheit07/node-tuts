import * as Mongoose from "mongoose";

const siteSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  acronym: {
    type: String,
    required: true,
  },
  site_order: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  natssiteid: {
    type: Number,
    required: true,
  },
  live: {
    type: Number,
    required: true,
    default: 0 // 0 - hidden, 1 - live
  },
  thumbs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thumbs'
    }
  ]
});
module.exports = Mongoose.model('Site', siteSchema);