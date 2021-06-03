-- 1. What is the capital of country X ? (Accept X from user)
SELECT ci.Name, co.Name FROM new_world.city ci INNER JOIN new_world.country co ON ci.ID = co.Capital where co.Name= 'Sweden';
-- 2. List all the languages spoken in the region Y (Accept Y from user)
SELECT cl.Language FROM new_world.countrylanguage cl INNER JOIN new_world.country co ON cl.CountryCode = co.Code where co.Region= 'Eastern Europe';
-- 3. Find the number of cities in which language Z is spoken (Accept Z from user)
SELECT COUNT(ci.Name) AS numOfCities FROM new_world.city ci INNER JOIN new_world.countrylanguage cl ON ci.CountryCode = cl.CountryCode where cl.Language='Chinese';
-- 4. List all the continents with the number of languages spoken in each continent
SELECT co.Continent, COUNT(cl.Language) AS numOfLanguages FROM new_world.country co INNER JOIN  new_world.countrylanguage cl ON co.Code = cl.CountryCode GROUP BY co.Continent;

