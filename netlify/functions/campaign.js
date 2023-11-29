// netlify/functions/campaigns.js
const { MongoClient } = require("mongodb");

exports.handler = async function (event, context) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const db = client.db(process.env.MONGODB_DATABASE);
    const collection = db.collection("campaigns");

    if (event.httpMethod === "GET") {
      // Retrieve campaigns
      const campaigns = await collection.find({}).toArray();

      return {
        statusCode: 200,
        body: JSON.stringify(campaigns),
      };
    } else if (event.httpMethod === "POST") {
      // Save campaigns
      const newCampaigns = JSON.parse(event.body);

      // Clear existing campaigns and insert new ones
      await collection.deleteMany({});
      await collection.insertMany(newCampaigns);

      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Campaigns saved successfully" }),
      };
    }
  } catch (error) {
    console.error("Error in Netlify function:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  } finally {
    // Close the MongoDB connection
    if (client) {
      await client.close();
    }
  }

  return {
    statusCode: 400,
    body: JSON.stringify({ message: "Invalid request" }),
  };
};
