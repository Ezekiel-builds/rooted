import { useAuth } from "../components/AuthContext";
import { useState, useEffect } from 'react';
import { supabase } from "../supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Dashboard.css";

function Dashboard() {
  const { profile } = useAuth();
  const [verse, setVerse] = useState(null);
  const [reading, setReading] = useState(null);

  useEffect(() => {
    async function fetchVerse() {
       const { data, error } = await supabase
        .from('weekly_verses')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if(error) {
        console.log(`Error fetching weekly verse: ${error.message}`)
      } else {
        setVerse(data);
      }
    }

    async function fetchReading() {
      const { data, error } = await supabase 
      .from("daily_readings")
      .select("*")
      .order("created_at", {ascending: false})
      .limit(1)
      .single();

      if(error) {
        console.log(`Fetch reading error: ${error.message}`)
      }else {
        setReading(data)
      }
    }

    fetchVerse();
    fetchReading();
  }, [])

  return (
    <>
      <Header />

      <div className="dashboard-container">
        <h1>{profile?.full_name}</h1>
        <p className="dashboard-subtitle">
          {profile?.church_name}
        </p>

        <div className="dashboard-card">
          <p className="card-label">WEEKLY MEMORY VERSE</p>
          <h2>
            This week's verse: {verse?.verse_reference ?? "Loading..."}
          </h2>
          <p className="verse-text">
            {verse?.verse_text ?? "Loading this week's verse..."}
          </p>
          <label className="checkbox-row">
            <input type="checkbox" />I recited this week's verse
          </label>
        </div>

        <div className="dashboard-card">
          <p className="card-label">DAILY BIBLE READING</p>
          <h2>
            Today's reading: {reading?.reading_reference ?? "Loading..."}
          </h2>
          <p className="reading-description">
            {reading?.description ?? "Loading today's reading..."}
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
