Fullstack web-application using the MERN-stack, built with Vite. It also utilizes styled components, nodemon

Functionality:
* User registration, with users stored in the DB (passwords are hashed).
* Signed in user can add recipes, also stored in the DB. Users can also edit or delete their own recipes. 
* Search for recipes.
* Filter recipes based on recipe type dropdown or/and adding ingredients.
* Admin-panel (for admin-user only) showing real-time data for number of users and recipes.

Work in progress.

NOTE: The application is currently hosted on render's free tier, meaning it will usually take up to a minute to get it started when the site hasn't been visited in a couple of hours. It can also slightly impact performance when using the site. 

View website hosted on render here:
https://what-should-we-eat.onrender.com/

TODO:
- [ ] Adding images only works when running on localhost. Fix.
- [ ] Let user edit recipe steps
- [ ] Let user upload image when adding recipe
- [X] File size restrictions when editing recipe image
- [X] Pressing 'enter' while adding steps or ingredients when adding/editing recipe should not submit full recipe.
- [ ] Get redirect when adding/editing recipe working again.
- [X] Steps/ingredients should not be allowed to be empty when adding recipes
- [ ] Undo capitalizing units
- [ ] Ingredients should not require both amount and unit
- [X] 'What to cook?' page based on available ingredients (implemented in 'find recipe' instead')
- [ ] Fix 'newest' showing oldest first when searching recipes and vice versa
