function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>❤️❤️❤️ Welcome to the Dashboard ❤️❤️❤️</h1>

      {/* User Info Section */}
      <div
        style={{
          margin: "30px auto",
          padding: "20px",
          maxWidth: "600px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "10px", color: "#444" }}>User Info</h2>
        <p><strong>Name:</strong> Harshit Kumar</p>
        <p><strong>Email:</strong> harshitkumar.s@prodapt.com</p>
        <p><strong>Role:</strong> Trainee Developer</p>
      </div>

      {/* Dashboard Cards Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "#cce5ff",
            padding: "20px",
            width: "200px",
            borderRadius: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Projects</h3>
          <p>3 Active</p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "#d4edda",
            padding: "20px",
            width: "200px",
            borderRadius: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Messages</h3>
          <p>12 New</p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "#fff3cd",
            padding: "20px",
            width: "200px",
            borderRadius: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Settings</h3>
          <p>Update Profile</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
