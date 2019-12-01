const mongoose = require('mongoose');

const { model, Schema } = mongoose;
const ninjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name in required']
  },
  rank: String,
  available: {
    type: Boolean,
    default: true
  }
  //   add in geolocation
});

module.exports = model('ninja', ninjaSchema);
