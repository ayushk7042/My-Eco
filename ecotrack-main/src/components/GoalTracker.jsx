
import React, { useEffect, useState } from "react";
import axios from "axios";

const GoalTracker = () => {
  const [targetEmission, setTargetEmission] = useState("");
  const [deadline, setDeadline] = useState("");
  const [goals, setGoals] = useState([]);

  const token = localStorage.getItem("token");

  const fetchGoals = async () => {
    const res = await axios.get("http://localhost:5000/api/goals", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setGoals(res.data);
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://localhost:5000/api/goals",
      { targetEmission, deadline },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchGoals();
    setTargetEmission("");
    setDeadline("");
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Set Your Carbon Saving Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="number"
          value={targetEmission}
          onChange={(e) => setTargetEmission(e.target.value)}
          placeholder="Target Emission (kg)"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Save Goal
        </button>
      </form>

      <div className="mt-6">
        <h3 className="font-semibold text-lg">Your Goals</h3>
        <ul className="mt-2 space-y-2">
          {goals.map((goal) => (
            <li key={goal._id} className="border p-3 rounded-md flex justify-between items-center">
              <div>
                <p><strong>Target:</strong> {goal.targetEmission} kg</p>
                <p><strong>Deadline:</strong> {new Date(goal.deadline).toLocaleDateString()}</p>
              </div>
              <span className={`text-sm px-2 py-1 rounded ${goal.achieved ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                {goal.achieved ? "Achieved" : "Pending"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GoalTracker;
