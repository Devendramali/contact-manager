
import "server-only";
import mongoose from "mongoose";
import dns from "node:dns";

// Fix MongoDB SRV DNS lookup
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Please add MONGODB_URI in .env.local");
}

declare global {
    var mongooseCache: {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
    } | undefined;
}

const cached = global.mongooseCache ?? {
    conn: null,
    promise: null,
};

global.mongooseCache = cached;

export const connectDB = async () => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 10000,
            connectTimeoutMS: 10000,
        });
    }

    try {
        cached.conn = await cached.promise;
        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        cached.promise = null;
        console.error("MongoDB Connection Error:", error);
        throw error;
    }

    return cached.conn;
};
