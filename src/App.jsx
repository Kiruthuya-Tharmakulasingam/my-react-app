import "./App.css";

function Header() {
  return (
    <>
      <h2 className="header">Header section edited</h2>
    </>
  );
}

function Welcome() {
  return (
    <>
      <div className="welcome">
        <h2>Body section</h2>
        <h2>Welcome To Uki</h2>
      </div>
    </>
  );
}

function Footer() {
  return (
    <>
      <h2 className="footer">Footer section</h2>
    </>
  );
}

function App() {
  return (
    <>
      <div>
        <Header />
        <Welcome />
        <Footer />
      </div>
    </>
  );
}

export default App;
