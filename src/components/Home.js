function Home() {
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#333",
          padding: "15px",
          textAlign: "center",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <a
          href="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontWeight: "bold",
          }}
        >
          Dashboard
        </a>

        <a
          href="/login"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontWeight: "bold",
          }}
        >
          Login
        </a>

        <a
          href="/signup"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontWeight: "bold",
          }}
        >
          Signup
        </a>

        <a
          href="/gallary"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontWeight: "bold",
          }}
        >
          Gallary
        </a>

        <a
          href="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            margin: "0 15px",
            fontWeight: "bold",
          }}
        >
          Contact Us
        </a>
      </nav>

      {/* Add padding-top to prevent content from hiding behind navbar */}
      <div style={{ paddingTop: "70px" }}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
}

export default Home;
