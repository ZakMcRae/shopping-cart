import "./homepage.css";
import coverImage from "./cover.webp";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Photo by <a href="https://unsplash.com/@jmolliver?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julie Molliver</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
       */}
      <img src={coverImage} alt="" />
      <div className="overlay">
        <h1 className="store-name">The Tool Store</h1>
        <div className="text-section">
          <h2>We have right the tools for the job</h2>
          <Link to="/products" className="browse-button">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
