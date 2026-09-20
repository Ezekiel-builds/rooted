import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Header />

      <div className="dashboard-container">
        <h1>Liam Carter</h1>
        <p className="dashboard-subtitle">
          Grace Community Church • Youth Ministry
        </p>

        <div className="dashboard-card">
          <p className="card-label">WEEKLY MEMORY VERSE</p>
          <h2>This week's verse: John 3:16</h2>
          <p className="verse-text">
            "For God so loved the world, that he gave his only Son, that whoever
            believes in him should not perish but have eternal life."
          </p>
          <label className="checkbox-row">
            <input type="checkbox" />I recited this week's verse
          </label>
        </div>

        <div className="dashboard-card">
          <p className="card-label">DAILY BIBLE READING</p>
          <h2>Today's reading: Genesis 3</h2>
          <p className="reading-description">
            The Fall of Man: Temptation enters the garden, human trust falters,
            and God speaks the foundational promise of redemption amid broken
            fellowship.
          </p>
          <label className="checkbox-row">
            <input type="checkbox" />I read today
          </label>

          <p className="reflection-label">Your reflection</p>
          <textarea
            className="reflection-box"
            placeholder="Type a short note, prayer, or takeaway from today's reading..."
          />

          <button className="submit-btn">Submit</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
