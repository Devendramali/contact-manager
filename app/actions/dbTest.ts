"use server";

import { connectDB } from "../_lib/mongodb";

export const testDatabase = async () => {
  try {
    await connectDB();

    return {
      success: true,
      message: "MongoDB Connected Successfully!",
    };
  } catch (error) {
    console.log("MongoDB Error:", error);

    return {
      success: false,
      message: "MongoDB Connection Failed",
    };
  }
};