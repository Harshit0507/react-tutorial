function Contactus() {
  return (
    <div
      style={{
        minHeight: "100vh", // full screen height
        display: "flex",           // enable flexbox
        justifyContent: "center", // center horizontally
        alignItems: "center",     // center vertically
        flexDirection: "column",  // keep items vertical
        backgroundColor: "#e1d2ffd8",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Contact Us</h1>

      <div
        style={{
          textAlign: "left",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          backgroundColor: "#fbc6c6d8",
          lineHeight: "1.8",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p><strong>Name:</strong> Harshit Kumar</p>
        <p><strong>Email:</strong> harshitkumar.s@prodapt.com</p>
        <p><strong>Contact No:</strong> +91-8235619206</p>
        <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
      </div>
    </div>
  );
}

export default Contactus;
