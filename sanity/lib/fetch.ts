import { createClient } from "next-sanity";

// Initialize the Sanity client
const client = createClient({
  projectId: "8farmdm8",  // Your project ID
  dataset: "production",   // Your dataset
  useCdn: true,            // Use CDN for faster reads (can be false for fresh data)
  apiVersion: "2023-10-10" // Set the API version
});

// Fetch data from Sanity using a query and optional parameters
export async function sanityfetch({ query, params = {} }: { query: string, params?: any }) {
  try {
    // Perform the fetch operation
    const result = await client.fetch(query, params);
    return result;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw new Error("Failed to fetch data from Sanity.");
  }
}
