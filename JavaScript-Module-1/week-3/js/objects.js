fetch('https://www.breakingbadapi.com/api/characters')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    /*
      before you start, make sure to change the script src  in index.html
      to this file src = "objects.js"
      Do you code here
      put yourself some challenges and try to acheive them
      use console logs to see your results
       */
    const seriesName = [];
    const seriesOccupations = [];
    const birthdays = [];
    console.log(seriesName);
    console.log(seriesOccupations);
    for (let i = 0; i < data.length; i++) {
      if (data[i].nickname === 'Mike') {
        data[i].nickname = 'Sam';
        data[i].name = 'Sam Sammy';
        console.log('Nickname Mike is changed to Sam with the index of', i);
      }
      seriesName.push(data[i].name);
      seriesOccupations.push(data[i].occupation);

      if (data[i].birthday === 'Unknown') {
        data[i].birthday = new Date().toLocaleDateString();
      }
      birthdays.push(data[i].birthday);
    }
    console.log(seriesName);
    console.log(seriesOccupations);
    console.log(birthdays);
  });
