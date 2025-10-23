// Auth.ts
export const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  return user;
};

// Optional helper for logout
export const logoutUser = () => {
  localStorage.removeItem("user");
  // 🧹 We don’t clear bookmarks globally here anymore
};
