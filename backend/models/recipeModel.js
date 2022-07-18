const mongoose = require('mongoose')

const recipeSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: [true, 'Please add a text value!']
    },
    time: {
      type: Number,
      required: [true, 'Please add expected time!']
    },
    yields: {
      type: String,
      required: [true, 'Please add Yields value!']
    },
    ingredients: {
      type: Array,
      required: [true, 'Please add ingredients array']
    },
    instructions: {
      type: String,
      required: [true, 'Please add recipe instructions!']
    },
    image: {
      type: String,
      required: [true, 'Please add a img URL source!']
    },
    company: {
      type: String,
      required: [true, 'Please add a company!']
    },
    nutrients: {
      type: Object,
      required: [true, 'Please add nutrients object.']
    },
    cusine: {
      type: String,
      required: [true, 'Please add a cusine!']
    },
    category: {
      type: String,
      required: [true, 'Please add a category!']
    },
  },  
  {
      timestamps: true,
      collection: 'Hello_Fresh',
  }
)


module.exports = mongoose.model('Recipe', recipeSchema)