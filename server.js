const express = require('express'); 
const app = express();
const recipesRouter = require('./routes/recipes.routes');
const ingredientsRouter = require('./routes/ingredients.routes');
const fullRecipesRouter = require('./routes/fullrecipes.router');
const randomRouter = require('./routes/randomRecipe.routes');
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.use('/recipes', recipesRouter);
app.use('/ingredients', ingredientsRouter);
app.use('/fullrecipes', fullRecipesRouter);
app.use('/random', randomRouter);
//app.use();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




