INSERT INTO  ingredientinrecipe (recipeid, ingredientid) VALUES (1, 1);

INSERT INTO  ingredientinrecipe (recipeid, ingredientid) VALUES (1, 4);

INSERT INTO  ingredientinrecipe (recipeid, ingredientid) 
SELECT a.id, b.id 
FROM recipe a 
JOIN ingredient b 
ON a.recipename = 'Creamy Pumpkin Soup'
AND b.ingredientname = 'Salt and pepper to taste';

SELECT a.recipeName, b.ingredientName FROM recipe a 
INNER JOIN IngredientInRecipe c
ON a.id = c.recipeId
INNER JOIN ingredient b
ON b.id = c.ingredientId;
// переводит численные id в названия рецептов и ингредиентов в sql shell
