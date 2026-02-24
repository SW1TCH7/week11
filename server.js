const express = require('express'); 
const app = express();
const recipesRouter = require('./routes/recipes.routes');
const ingredientsRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullrecipes.router');


app.use('/recipes', recipesRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/fullrecipes', fullRecipesRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




