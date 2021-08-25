import "./homepage.css";
import img from "./tools.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Photo by <a href="https://unsplash.com/@jmolliver?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Julie Molliver</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
       */}
      <img src={img} alt="" />
      <div className="text-section">
        <h1>Welcome to the Tool Store</h1>
      </div>
    </div>
  );
};

export default HomePage;
