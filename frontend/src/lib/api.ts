export const API_BASE_URL = "https://cyber-bandhu.onrender.com";

export const apiUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  // Backend routes are defined without a top-level `/api` prefix
  // but many frontend calls use `/api/...`. Normalize by stripping
  // a leading `/api` so both styles work against the deployed server.
  const cleanedPath = normalizedPath.replace(/^\/api/, "");
  return `${API_BASE_URL}${cleanedPath}`;
};
