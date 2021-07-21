var faker = require('faker');

function generateData () {
  var messages = [];
  for (var id = 0; id < 10; id++) {
  
    
    let color = faker.commerce.color();
    let ticketId = faker.random.number({min: 1000, max: 9999});
    let Date = faker.date.future();
    let weekday = faker.date.weekday();

    
    messages.push({
      "id": id,
      "ticketId": ticketId,
      "Date": Date,
      "weekday": weekday,
      "color": color
    });
  }

  return {messages};
}

module.exports = generateData;
