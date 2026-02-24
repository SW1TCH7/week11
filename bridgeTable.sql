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
// PGPASSWORD=eaase7q2Q0zSV0kfUpb8CUvZaRzjoT5B psql -h dpg-d6etee4r85hc73folm40-a.oregon-postgres.render.com -U myrecipes_owz2_user myrecipes_owz2


INSERT INTO ingredient (ingredientNAME) 
VALUES ('pumpkin puree'), ('sugar'), ('cinnamon'), ('nutmeg'), ('cloves'), ('Pastry dough'), ('Egg wash (1 egg beaten with a splash of milk)'), ('brown sugar'), ('ginger'), ('Mini tart shells'), ('Whipped cream for garnish'), ('onion, chopped'), ('garlic, minced'), ('vegetable broth'), ('heavy cream'), ('Salt and pepper to taste');

 
 	
INSERT INTO ingredientinrecipe (recipeid, ingredientid)
VALUES (2, 10);