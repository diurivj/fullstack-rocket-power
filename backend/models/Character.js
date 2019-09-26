const { model, Schema } = require('mongoose');

const characterSchema = new Schema(
  {
    name: String,
    gender: String,
    ethnicity: String,
    physique: String,
    hair: String,
    image: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Character', characterSchema);
