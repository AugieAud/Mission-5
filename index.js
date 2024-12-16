#! /usr/bin/env node
//this line is called a shebang, tells node.js to execute this script, ensures you can run the script from the command line without typing node before the file name

//create command line interface (CLI tool)

// import yarg library, connect to db file to connect to database, import mongoose model to interact w a collection in a mongodb database.
const yargs = require("yargs");
const connectDB = require("./db/connectDB");
const auctionItem = require("./models/auctionItem");

//create asynchronous function that inserts data into the data base
const seedData = async () => {
  try {
    await connectDB();
    const items = [
      {
        title: "Antique Vase",
        description: "A beautiful antique vase",
        start_price: 50,
        reserve_price: 100,
      },
      {
        title: "Vintage T-shirt",
        description: "Single stitch 1980's vintage band tee",
        start_price: 20,
        reserve_price: 30,
      },
      {
        title: "Painting",
        description: "An original oil painting",
        start_price: 300,
        reserve_price: 350,
      },
    ];
    
    const result = await auctionItem.insertMany(items);
    console.log(`Data seeded successfully! ${result.length} items inserted`);
    
    // Verify the data was inserted
    const count = await auctionItem.countDocuments();
    console.log(`Total documents in collection: ${count}`);
    
    // Give MongoDB a moment to finish writing
    setTimeout(() => {
      process.exit(0);
    }, 1000);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

//create asynchronous function that deletes all auction data from the data base
const deleteData = async () => {
  await connectDB();
  await auctionItem.deleteMany();
  console.log("Data deleted successfully!");
  process.exit();
};

//define yargs commands to use in the command line, seed will call the seedData function, delete will call the deleteData function, help will display available commands
yargs
  .command("seed", "Seed data into the database", {}, seedData)
  .command("delete", "Delete all data from the database", {}, deleteData)
  .help().argv;
