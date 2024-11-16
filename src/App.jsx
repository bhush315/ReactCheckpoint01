import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import "./App.css"; // Import the CSS file

const firstName = "John"; // Change this to your name, or leave it empty for a fallback

const App = () => {
  return (
    <div className="app-container">
      <div className="product-card">
        <Name />
        <Price />
        <Description />
        <Image />
      </div>
      <div className="greeting">
        <h3>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h3>
        {firstName && (
          <img src="src/img/12.png" alt="profile" className="profile-image" />
        )}
      </div>
    </div>
  );
};

export default App;
