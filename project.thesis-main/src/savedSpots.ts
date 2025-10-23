// savedSpots.ts
import { getCurrentUser } from "./Auth";

export const getSavedSpots = () => {
  const user = getCurrentUser();
  if (!user) return [];
  const key = `savedSpots_${user.id}`;
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const saveSpot = (spot: any) => {
  const user = getCurrentUser();
  if (!user) return false; // prevent saving if not logged in

  const key = `savedSpots_${user.id}`;
  const saved = getSavedSpots();

  const exists = saved.some((s: any) => s.id === spot.id);
  let updated;

  if (exists) {
    // Remove existing
    updated = saved.filter((s: any) => s.id !== spot.id);
  } else {
    // FIFO — newest first
    updated = [spot, ...saved];
  }

  localStorage.setItem(key, JSON.stringify(updated));
  return !exists; // return true if saved, false if unsaved
};

export const isSpotSaved = (id: string) => {
  const user = getCurrentUser();
  if (!user) return false;
  const key = `savedSpots_${user.id}`;
  const saved = JSON.parse(localStorage.getItem(key) || "[]");
  return saved.some((s: any) => s.id === id);
};

export const clearSavedSpots = () => {
  const user = getCurrentUser();
  if (!user) return;
  const key = `savedSpots_${user.id}`;
  localStorage.removeItem(key);
};
