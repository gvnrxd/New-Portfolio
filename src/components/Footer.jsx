// Import Styles module here:

const Footer = () => {
  return (
    <footer>
      <section>
        <h2>Footer Here</h2>
      </section>
      <section
        style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
      >
        <p>
          © {new Date().getFullYear()} Gvnrxd | Built with React & Vite ⚡|{" "}
          Contact: gvnrxd@email.com |
          <a
            href="https://www.buymeacoffee.com/gvnrxd"
            target="_blank"
            rel="noreferrer noopener"
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            {" "}
            ☕ Buy me a coffee
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/gavin-raymond-433070286/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
          >
            LinkedIn |
          </a>
          <a
            style={{ color: "white", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.textDecoration = "underline")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.textDecoration = "none")
            }
            href="https://github.com/gvnrxd"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub |
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
