import mongoose from "mongoose";

function assertValue<T>(
  v: T | undefined,
  errorMessage?: string
): NonNullable<T> {
  if (v === undefined || v === null) {
    throw new Error(errorMessage ?? "Missing property");
  }
  return v;
}

// =======> Global is used here to maintain a cached connection across hot reloads in development
// =======> This prevents connections growing exponentially during API Route usage
declare global {
  var mongooseCache: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

let cashed = global.mongooseCache;
if (!cashed) {
  cashed = global.mongooseCache = { conn: null, promise: null };
}

// This function will make sure our app always connects to mongodb efficiently
// and prevents creating too many connections in development
// because Next.js hot reloads the server on every change
// and that would create a new connection every time
// which could lead to performance issues and even crashing the server
export const connectToDatabase = async () => {
  const MONGODB_URI = assertValue(
    process.env.MONGODB_URI,
    "Missing environment variable: MONGODB_URI"
  );

  // =======> If the connection is already established, return it
  if (cashed.conn) {
    return cashed.conn;
  }

  // =======> If there is no connection, create a new one
  if (!cashed.promise) {
    cashed.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }

  try {
    // =======> Wait for the connection to be established
    cashed.conn = await cashed.promise;
  } catch (error) {
    // =======> If there is an error, reset the promise and throw the error
    cashed.promise = null;
    throw error;
  }

  console.log(`Connected to database ${process.env.NODE_ENV} - ${MONGODB_URI}`);
};
