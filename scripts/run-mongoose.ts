import { connectToDatabase } from "../database/mongoose";

async function main() {
  await connectToDatabase();
  console.log("Successfully connected to MongoDB.");
}

main().catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
  process.exit(1);
});
