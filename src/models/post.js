const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
  title: String,
  body: String,
  tags: [String],
  // default는 publishedDate의 입력값이 없으면 적용
  publishedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Post', Post);
