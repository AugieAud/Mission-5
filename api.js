const express = require("express");
const connectDB = require("./db/connectDB");
const auctionItem = require("./models/auctionItem");

const app = express();
const PORT = 3000;

app.use(express.json());

// Test route to verify server is working
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Route to get all items
app.get("/api/auction-items", async (req, res) => {
  try {
    console.log("Attempting to connect to database...");
    await connectDB();
    console.log("Connected to database, fetching items...");
    const items = await auctionItem.find({});
    console.log("Items found:", items);
    res.json(items);
  } catch (error) {
    console.error("Error fetching all items:", error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/auction-items/search", async (req, res) => {
  try {
    await connectDB();
    const { keyword } = req.query;
    
    if (!keyword) {
      const allItems = await auctionItem.find({});
      console.log("No keyword provided. All items:", allItems);
      return res.json(allItems);
    }

    console.log("Searching for keyword:", keyword);
    const items = await auctionItem.find({
      title: { $regex: keyword, $options: "i" },
    });
    console.log("Search results:", items);
    res.json(items);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ message: error.message });
  }
});

// Catch-all route for undefined routes
app.use((req, res) => {
  console.log("404 hit for URL:", req.url);
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Available routes:");
  console.log("  GET /");
  console.log("  GET /api/auction-items");
  console.log("  GET /api/auction-items/search");
});
