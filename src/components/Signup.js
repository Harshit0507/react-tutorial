function Signup() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>SignUp Page</h1>

      <form style={{ 
          display: "inline-block", 
          padding: "20px", 
          border: "1px solid #ccc", 
          borderRadius: "8px", 
          backgroundColor: "#f9f9f9"
        }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Username:</label><br />
          <input 
            type="text" 
            name="username" 
            placeholder="Enter your username"
            style={{ padding: "8px", width: "200px", borderRadius: "4px", border: "1px solid #ccc" }} 
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input 
            type="text" 
            name="Email" 
            placeholder="Enter your Email"
            style={{ padding: "8px", width: "200px", borderRadius: "4px", border: "1px solid #ccc" }} 
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label><br />
          <input 
            type="password" 
            name="password" 
            placeholder="Enter your password"
            style={{ padding: "8px", width: "200px", borderRadius: "4px", border: "1px solid #ccc" }} 
          />
        </div>

        <div>
          <input 
            type="submit" 
            value="Sign Up" 
            style={{ padding: "10px 20px", borderRadius: "4px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }} 
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
