import React from "react";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your Dashboard!</p>

      <div>
        <h2>Profile</h2>
        <p>View your profile details here.</p>
      </div>

      <div>
        <h2>Settings</h2>
        <p>Manage your account settings.</p>
      </div>

      <div>
        <h2>Notifications</h2>
        <p>Check your latest notifications.</p>
      </div>

      <button onClick={() => alert("Logged out successfully!")}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;