import React, { useEffect, useState } from "react";

const AccountSettings = () => {
  const [user, setUser] = useState<any>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setFirstName(parsed.firstName || "");
      setLastName(parsed.lastName || "");
      setUsername(parsed.username || "");
      setEmail(parsed.email || "");
      setPhone(parsed.phone || "");
    }
    setLoading(false);
  }, []);

  const handleSave = async () => {
    if (!user) return;

    try {
      await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          email,
          phone,
          password,
        }),
      });

      const updatedUser = {
        ...user,
        firstName,
        lastName,
        username,
        email,
        phone,
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("✅ Account updated successfully!");
    } catch (err) {
      console.error("Error updating user:", err);
      alert("❌ Failed to update account info.");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">Loading...</div>
    );

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8 text-gray-800">
        Account Settings
      </h1>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 transition"
        >
          Save
        </button>
        <button
          onClick={() => window.location.reload()}
          className="text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
