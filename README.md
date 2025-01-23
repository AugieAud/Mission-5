# CLI Tool for MongoDB Data Seeding and Deletion

This project provides a command-line interface (CLI) tool to seed data into a local MongoDB database or delete data from it. It is designed to help teams easily manage auction item data with four key fields: title, description, start price, and reserve price.

## Features

- **Seed Data**: Add sample data for auction items to a MongoDB database.
- **Delete Data**: Remove all auction items from the database.
- **Search Auction Items**: Retrieve auction items that match specified criteria using a search API.

## Technologies Used

- **Node.js**: Backend runtime for the CLI tool.
- **MongoDB**: Database for storing auction items.
- **JavaScript**: Programming language for implementing the CLI tool.
- **Mongoose**: MongoDB object modeling library for Node.js.

## Setup Instructions

### Clone the repository:

```bash
git clone https://github.com/AugieAud/cli-tool-mongodb.git
cd cli-tool-mongodb
npm install
npm run seed
npm run delete
