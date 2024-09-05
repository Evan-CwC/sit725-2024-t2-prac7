const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://evancwc:wbGoIEYjz9OaG0c1@cluster0.hpt4m5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

client.connect();

module.exports = client;
