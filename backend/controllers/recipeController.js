const asyncHandler = require('express-async-handler')

// @desc Get recipes
// @route GET /api/recipes
// @access Private
const getRecipes = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'Get Recipes'})
})

// @desc POST recipe
// @route POST /api/recipes
// @access Private
const createRecipe = asyncHandler(async (req, res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
  }
  res.status(200).json({message: 'Create Recipe'})
})

// @desc PUT recipe
// @route PUT /api/recipes/:id
// @access Private
const updateRecipe = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update recipe ${req.params.id}`})
})

// @desc DELETE recipe
// @route DELETE /api/recipes/:id
// @access Private
const deleteRecipe = asyncHandler (async (req, res) => {
  res.status(200).json({message: `Delete recipe ${req.params.id}`})
})


module.exports = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
}