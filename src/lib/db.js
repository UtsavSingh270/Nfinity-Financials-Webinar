import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
const globalWithMongoose = global;
const cache = globalWithMongoose.mongooseCache ?? { conn: null, promise: null };
globalWithMongoose.mongooseCache = cache;
function getMongoErrorMessage(error) {
    const message = error instanceof Error ? error.message : String(error);
    if (/querySrv/i.test(message) || /ECONNREFUSED/i.test(message))
        return `${message} - Atlas SRV DNS lookup failed. Check network/DNS, Atlas IP access, and the cluster host name.`;
    if (/authentication failed|bad auth|invalid credentials/i.test(message))
        return `${message} - MongoDB authentication failed. Check the username/password in MONGODB_URI.`;
    if (/ENOTFOUND/i.test(message))
        return `${message} - MongoDB host could not be resolved. Check the cluster hostname and DNS access.`;
    return message;
}
export async function connectDb() {
    if (!MONGODB_URI)
        return null;
    if (cache.conn)
        return cache.conn;
    try {
        cache.promise ?? (cache.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }));
        cache.conn = await cache.promise;
        return cache.conn;
    }
    catch (error) {
        cache.promise = null;
        cache.conn = null;
        throw new Error(`MongoDB connection failed: ${getMongoErrorMessage(error)}`);
    }
}
