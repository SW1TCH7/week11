const express = require('express');
const router = express.Router();
const db = require('../db');




router.get('/', async (req, res) => {
    const recipes = await db.query('SELECT a.recipeName, a.instructions, b.ingredientName FROM recipe a INNER JOIN IngredientInRecipe c ON a.id = c.recipeId INNER JOIN ingredient b ON b.id = c.ingredientId;');
    const recipeMap = {};
    for(const item of recipes.rows) {
        const { recipename, instructions, ingredientname } = item;
        if(!recipeMap[recipename]) {
            recipeMap[recipename] = {
                recipeName: recipename,
                instructions: instructions,
                ingredients: []
            };
        }
        recipeMap[recipename].ingredients.push(ingredientname);
    }
    const resultarray = Object.values(recipeMap)
    res.json(resultarray);
});




router.get('/recipeingredients', async (req, res) => {
    const recipes = await db.query('SELECT a.recipeName, b.ingredientName FROM recipe a INNER JOIN IngredientInRecipe c ON a.id = c.recipeId INNER JOIN ingredient b ON b.id = c.ingredientId;');
    const recipeMap = {};
    for(const item of recipes.rows) {
        const { recipename, ingredientname } = item;
        if(!recipeMap[recipename]) {
            recipeMap[recipename] = [];
        }
        recipeMap[recipename].push(ingredientname);  //tut sohranajetsa 1 raz nazvanije recepta i vse ego ingredienty v vide massiva
    }
    //const resultarray = Object.values(recipeMap);
    res.json(recipeMap);
    //console.log(recipeMap);
});

router.get('/search', async (req, res) => {
    const searchstring = req.query.recipeName;
    console.log(searchstring);

    const recipe = await db.query('SELECT a.recipeName, a.instructions, b.ingredientName FROM recipe a INNER JOIN IngredientInRecipe c ON a.id = c.recipeId INNER JOIN ingredient b ON b.id = c.ingredientId WHERE a.recipeName = $1;', [searchstring]);
    const recipeMap = {};
    for(const item of recipe.rows) {
        const { recipename, instructions, ingredientname } = item;
        if(!recipeMap[recipename]) {
            recipeMap[recipename] = {
                recipeName: recipename,
                instructions: instructions,
                ingredients: []
            };
        }
        recipeMap[recipename].ingredients.push(ingredientname);
    }
    const resultarray = Object.values(recipeMap)
    res.json(resultarray);
});

module.exports = router;