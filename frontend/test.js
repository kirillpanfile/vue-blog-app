const fetch = require("node-fetch");

(async function() {
  const response = await fetch("http://localhost:1337/api/events");
  const jsonData = await response.json();
  const data = jsonData.data;
  for (const event of data) {
    console.log({
      id: event.id,
      path: "/events/" + event.id,
      title: event.attributes.Name,
      description: event.attributes.Description,
      date: event.attributes.Date,
      duration: event.attributes.Time,
      category: event.attributes.Category,
    });
    console.log(event.attributes);
  }
})();
