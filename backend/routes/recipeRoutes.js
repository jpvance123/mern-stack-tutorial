const express = require('express')
const router = express.Router()
const {
  getRecipes, 
  createRecipe, 
  updateRecipe, 
  deleteRecipe
} = require('../controllers/recipeController')


router.route('/').get(getRecipes).post(createRecipe)
router.route('/:id').put(updateRecipe).delete(deleteRecipe)

module.exports = router