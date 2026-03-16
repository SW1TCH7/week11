const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
    try {
    const recipequery = 'SELECT id,recipeName, imageURL, instructions FROM recipe ORDER BY RANDOM() LIMIT 1;';
    const recipeResult = await db.query(recipequery);
    const selectedRecipe = recipeResult.rows[0];
    const ingredientQuery = 'SELECT b.ingredientName FROM ingredient b INNER JOIN IngredientInRecipe c ON b.id = c.ingredientId WHERE c.recipeId = $1;';
    const ingredientResult = await db.query(ingredientQuery, [selectedRecipe.id]);
    const ingredients = ingredientResult.rows.map(element => element.ingredientname);

    const randomrecipe = {
        recipe: selectedRecipe,
        ingredients: ingredients
    };
    //console.log(randomrecipe);
    res.json(randomrecipe);

    } 
    catch (error) {
        console.log(error);
        res.status(500).json({errorMessage: 'internal server error'}); 
    }
});

module.exports = router;
