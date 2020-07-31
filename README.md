# project-2

Idea
- FILMSNOB.COM - Social media movie rating app. Add films to your watchlist and watched list and rate them based on the unique and utmost critical of awards systems developed by the most discenrning of FILMSNOBS. See other users rated lists and comment on their ratings. Enjoy the muck raking, you snobs.


Packages to use
- Moment
- Chalk - allow users to write in the moment.js syntax
- LoDash - helps with javascript



Features
- Have users login and store credentials along with profile of their interactions with app: storing films, their ratings, and comments from user on rated film. User names cannot be duplicated and not case sensitive
- securing login credentials
- Ability to search OMDB for films to add to watchlist and rated list
- Database is maintained and tracks between two tables: one for the watchlist and one for rated movies - when movie on watchlist is rated, is moved automatically to rated table
- Able to comment on other user ratings - can make posts of ratings either public or private. Mostly likely public for shaming
- Able to see films that have already been rated in search highlighted a specific color
- Homepage is a random selection of films displayed with their movie posters, when you click a movie, the poster pops and a "add to watchlist" or "rate" determination appears
- 

Future features
- Advanced search

API
- http://www.omdbapi.com/

Responsibilities
- Eddie Front end
- Rey - Front/back end floater
- Mauricio - Back end
- Michael - Front/back end floater

DB
Have a PW model - a user has many passwords
Use an implicit join for the tables
are we goint to use sequelize or write our own sql with ORM, may be better to build with 
use
validate with sequelize; like email
ADD DISCLAIMER