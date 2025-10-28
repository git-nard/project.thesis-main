import React, { useEffect, useState } from "react";

const PersonalInfo = () => {
  const [preferences, setPreferences] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const preferencesList = [
    "Adventure",
    "Culture",
    "Nature",
    "Food",
    "Festivals",
    "History",
    "Beaches",
    "Hiking",
    "Relaxation",
    "Sightseeing",
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.id) return;

    fetch(`http://localhost:5000/api/users/${user.id}/preferences`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
      .then((res) => res.json())
      .then((data) => setPreferences(data.preferences || []))
      .finally(() => setLoading(false));
  }, []);

  const handleTogglePref = (pref: string) => {
    setPreferences((prev) =>
      prev.includes(pref)
        ? prev.filter((p) => p !== pref)
        : [...prev, pref]
    );
  };

  const handleSave = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    await fetch(`http://localhost:5000/api/users/${user.id}/preferences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ preferences }),
    });

    alert("✅ Preferences updated!");
  };

  if (loading)
    return <div className="flex justify-center items-center h-40">Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 text-gray-800">
        Personal Information
      </h1>

      <p className="text-sm text-gray-500 mb-5">
        Select your travel interests to personalize your experience.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {preferencesList.map((pref) => {
          const selected = preferences.includes(pref);
          return (
            <button
              key={pref}
              onClick={() => handleTogglePref(pref)}
              className={`px-4 py-2 rounded-full border transition ${
                selected
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-300 text-gray-700 hover:border-blue-400"
              }`}
            >
              {selected ? "✓ " : "+"} {pref}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition"
      >
        Save Preferences
      </button>
    </div>
  );
};

export default PersonalInfo;
