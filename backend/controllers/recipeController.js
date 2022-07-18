const asyncHandler = require('express-async-handler')

const Recipe = require('../models/recipeModel')

// @desc Get recipes
// @route GET /api/recipes
// @access Private
const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find()
  res.status(200).json(recipes)
})

// @desc POST recipe
// @route POST /api/recipes
// @access Private
const createRecipe = asyncHandler(async (req, res) => {
  if(!req.body.title){
    res.status(400)
    throw new Error('Please add a text field')
  }

  const recipe = await Recipe.create({
    title: req.body.title, 
    time: req.body.time,
    yields: req.body.yields,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    image: req.body.image,
    company: req.body.company,
    nutrients: req.body.nutrients,
    cusine: req.body.cusine,
    category: req.body.category,
  })

  res.status(200).json(recipe)
})

// @desc PUT recipe
// @route PUT /api/recipes/:id
// @access Private
const updateRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  if(!recipe){
    res.status(400)
    throw new Error('Recipe not found')
  }
  
  const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedRecipe)
})

// @desc DELETE recipe
// @route DELETE /api/recipes/:id
// @access Private
const deleteRecipe = asyncHandler (async (req, res) => {
  const recipe = await Recipe.findById(req.params.id)

  if(!recipe){
    res.status(400)
    throw new Error('Recipe not found')
  }

  await recipe.remove()
  res.status(200).json({ id: req.params.id})
})


module.exports = {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
}