const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function fetchAPI<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

    if (!BASE_URL) {
      return [] as T;
    }

    const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers ?? {}),
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return [] as T;
    }

    return (await res.json()) as T;
  } catch {
    return [] as T;
  }
}

// export async function fetchAPI(endpoint: string, options: RequestInit = {}) {
//   const res = await fetch(`${BASE_URL}${endpoint}`, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       ...options.headers,
//     },
//     next: { revalidate: 60 }, // ISR (optional)
//   });

//   if (!res.ok) {
//     console.error(`❌ API Error: ${res.status} ${res.statusText}`);
//     throw new Error(`Failed to fetch ${endpoint}`);
//   }

//   return res.json();
// }

export async function sendContactForm(data: any) {
  console.log(data);
  
  return fetchAPI("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function submitTool(data: any) {
  return fetchAPI("/submit-tool", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function searchAll(query: string) {
  return fetchAPI(`/search?q=${encodeURIComponent(query)}`);
}
