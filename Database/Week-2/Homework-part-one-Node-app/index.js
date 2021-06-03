let mysql = require('mysql');


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysqldatabase',
    database: 'new_world'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
  });


  // 1. What is the capital of country X ? (Accept X from user)
  // example user enters 'Sweden'
$query1 = 'SELECT ci.Name FROM city ci INNER JOIN country co ON ci.ID = co.Capital where co.Name=?'
  connection.query($query1,['Sweden'], function (error, results, fields) {
    if (error) throw error;
     console.log('1. The capital of the country you choose is:', results[0].Name + '.');
  });

    // 2. List all the languages spoken in the region Y (Accept Y from user)
// example user enters 'Easten Europa'
     $query2 = 'SELECT cl.Language FROM countrylanguage cl INNER JOIN country co ON cl.CountryCode = co.Code where co.Region=?'
   connection.query($query2,['Eastern Europe'], function (error, results, fields) {
     if (error) throw error;
     const languages = results.map(el => el.Language).toString();
     console.log('2. Languages spoken in this region are ' + languages);
    
   });

   // 3. Find the number of cities in which language Z is spoken (Accept Z from user)
   // example user enters 'Chinese'

   $query3 = 'SELECT COUNT(ci.Name) AS numOfCities FROM new_world.city ci INNER JOIN new_world.countrylanguage cl ON ci.CountryCode = cl.CountryCode where cl.Language=?'
   connection.query($query3,['Chinese'], function (error, results, fields) {
     if (error) throw error;
      console.log('3. Numbers of cities where Chinese language is spoken is ' + results[0].numOfCities);
   });

    // 4. List all the continents with the number of languages spoken in each continent
    $query4 = 'SELECT co.Continent, COUNT(cl.Language) AS numOfLanguages FROM new_world.country co INNER JOIN  new_world.countrylanguage cl ON co.Code = cl.CountryCode GROUP BY co.Continent'
    connection.query($query4, function (error, results, fields) {
      const res = results.map(el => el.Continent + '-' + el.numOfLanguages).toString();
      if (error) throw error;
       console.log('4. Continents with the number of languages spoken in each continent ' + res);
    });
