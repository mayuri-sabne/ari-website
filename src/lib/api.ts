const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    next: { revalidate: 60 }, // ISR (optional)
  });

  if (!res.ok) {
    console.error(`❌ API Error: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}
