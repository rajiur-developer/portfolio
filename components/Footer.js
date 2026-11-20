export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <a className="logo" href="#home"><span>R</span>ajiur Rahman</a>
        <p>Thoughtful interfaces, built with care.</p>
        <span>© {new Date().getFullYear()} Rajiur Rahman</span>
      </div>
    </footer>
  );
}
