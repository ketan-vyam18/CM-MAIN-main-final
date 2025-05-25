import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState("");
  const [filterUnread, setFilterUnread] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001"; 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  
    try {
      const res = await axios.post(`${API_URL}/admin`, { password });
      setEntries(res.data);
      setError("");
      setIsLoggedIn(true);  
    } catch (err) {
      console.log(err.message);
      setError("Invalid password or server error");
    } finally {
      setIsLoading(false);  
    }
  };


  const fetchMessages = useCallback(async () => {
    const endpoint = filterUnread
      ? `${API_URL}/admin/messages?newOnly=true`
      : `${API_URL}/admin/messages`;
    try {
      const res = await axios.get(endpoint);
      setEntries(res.data);
    } catch (err) {
      console.log(err);
    }
  }, [filterUnread, API_URL]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchMessages();
    }
  }, [isLoggedIn, fetchMessages]);


  const markAsRead = async (id) => {
    try {
      await axios.patch(`${API_URL}/admin/message/${id}/read`);
      fetchMessages();
    } catch (err) {
      console.error(err.message);
    }
  };


  const toggleReadStatus = async (id) => {
    try {
      await axios.patch(`${API_URL}/admin/message/${id}/toggle`);
      fetchMessages();
    } catch (err) {
      console.error(err.message);
    }
  };


  const deleteMessage = async (id) => {
    try {
      await axios.delete(`${API_URL}/admin/message/${id}`);
      setEntries((prev) => prev.filter((e) => e._id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {!isLoggedIn ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Admin Login
          </h2>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={isLoading}  
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-red-600 mt-3 text-sm text-center">{error}</p>}
        </form>
      ) : (
        <div className="max-w-6xl w-full mx-auto mt-10">
          <div className="flex justify-between mb-4">
            <h2 className="text-3xl font-bold text-white bg-gray-800 p-4">Form Submissions</h2>
            <label className="flex items-center space-x-2 text-gray-800">
              <input
                type="checkbox"
                checked={filterUnread}
                onChange={(e) => setFilterUnread(e.target.checked)}
              />
              <span className="text-sm font-bold text-white bg-gray-800 p-4">Show unread only</span>
            </label>
          </div>

      
          {entries.length === 0 ? (
            <div className="text-sm font-bold text-white bg-gray-800 p-4 mt-20">
              No messages yet. Please check back later!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entries.map((entry) => (
                <div
                  key={entry._id}
                  className={`bg-white shadow-md rounded-2xl p-5 transition duration-300 space-y-2 ${
                    entry.isnew ? "border-2 border-blue-500" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 font-semibold">
                      {entry.isnew ? "⭐️ New" : "✅ Read"}
                    </span>
                  </div>
                  <p className="text-gray-700"><strong>Name:</strong> {entry.name}</p>
                  <p className="text-gray-700"><strong>Email:</strong> {entry.email}</p>
                  <p className="text-gray-700"><strong>Subject:</strong> {entry.subject}</p>
                  <p className="text-gray-700"><strong>Message:</strong> {entry.message}</p>
                  <span className="text-xs text-gray-400">
                    {new Date(entry.createdAt).toLocaleString()}
                  </span>
                  <div className="flex space-x-2 pt-3">
                    {!entry.isnew && (
                      <button
                        onClick={() => toggleReadStatus(entry._id)}
                        className="text-yellow-600 text-sm hover:underline"
                      >
                        Mark as Unread
                      </button>
                    )}
                    {entry.isnew && (
                      <button
                        onClick={() => markAsRead(entry._id)}
                        className="text-green-600 text-sm hover:underline"
                      >
                        Mark as Read
                      </button>
                    )}
                    <button
                      onClick={() => deleteMessage(entry._id)}
                      className="text-red-600 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
