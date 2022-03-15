// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fetch = require("node-fetch");

module.exports = function(api) {
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.loadSource(async (actions) => {
    const response = await fetch("http://localhost:1337/api/events");
    const jsonData = await response.json();
    const data = jsonData.data;
    const collection = actions.addCollection({
      typeName: "Event",
      path: "/events/:id",
    });
    for (const event of data) {
      collection.addNode({
        id: event.id,
        path: "/events/" + event.id,
        title: event.attributes.Name,
        description: event.attributes.Description,
        date: event.attributes.Date,
        duration: event.attributes.Time,
        category: event.attributes.Category,
      });
    }
  });
};
