import { useAuth } from "../components/AuthContext";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Dashboard.css";

function Dashboard() {
  const { profile, user } = useAuth();
  const [verse, setVerse] = useState(null);
  const [reading, setReading] = useState(null);
  const [reflection, setReflection] = useState("");
  const [hasCheckedInVerse, setHasCheckedInVerse] = useState(false);
  const [hasSubmittedReading, setHasSubmittedReading] = useState(false);

  useEffect(() => {
    async function fetchVerse() {
      const { data, error } = await supabase
        .from("weekly_verses")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.log(`Error fetching weekly verse: ${error.message}`);
      } else {
        setVerse(data);
      }

      const { data: checkinData } = await supabase
        .from("weekly_verse_checkins")
        .select("*")
        .eq("user_id", user.id)
        .eq("verse_id", data.id)
        .maybeSingle()

        if(checkinData) {
          setHasCheckedInVerse(true);
        }
    }

    async function fetchReading() {
      const { data, error } = await supabase
        .from("daily_readings")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (error) {
        console.log(`Fetch reading error: ${error.message}`);
      } else {
        setReading(data);
      }

     const { data: logData } = await supabase
      .from("daily_reading_logs")
      .select("*")
      .eq("user_id", user.id)
      .eq("reading_id", data.id)
      .maybeSingle()

      if(logData) {
        setHasSubmittedReading(true);
        setReflection(logData.reflection);
      }
    }

    fetchVerse();
    fetchReading();
  }, []);

  async function handleVerseCheckIn() {
    const { error } = await supabase
    .from("weekly_verse_checkins")
    .insert({
      user_id: user.id,
      verse_id: verse.id,
    });

    if (error) {
      console.error("Check-in error:", error);
    } else {
      setHasCheckedInVerse(true);
      console.log("Verse check-in saved!");
    }
  }

  async function handleReadingSubmit() {
    const { error } = await supabase
    .from("daily_reading_logs")
    .insert({
      user_id: user.id,
      reading_id: reading.id,
      reflection: reflection,
    });

    if (error) {
      console.error("Reading submission error:", error);
    } else {
      setHasSubmittedReading(true);
      console.log("Reading reflection saved!");
    }
  }

  return (
    <>
      <Header />

      <div className="dashboard-container">
        <h1>{profile?.full_name}</h1>
        <p className="dashboard-subtitle">{profile?.church_name}</p>

        <div className="dashboard-card">
          <p className="card-label">WEEKLY MEMORY VERSE</p>
          <h2>This week's verse: {verse?.verse_reference ?? "Loading..."}</h2>
          <p className="verse-text">
            {verse?.verse_text ?? "Loading this week's verse..."}
          </p>
          <label className="checkbox-row">
            <input 
            type="checkbox"
            checked={hasCheckedInVerse}  
            onChange={handleVerseCheckIn} 
            disabled={hasCheckedInVerse}
            
            />I recited
            this week's verse
          </label>
        </div>

        <div className="dashboard-card">
          <p className="card-label">DAILY BIBLE READING</p>
          <h2>Today's reading: {reading?.reading_reference ?? "Loading..."}</h2>
          <p className="reading-description">
            {reading?.description ?? "Loading today's reading..."}
          </p>
          <label className="checkbox-row">
            <input type="checkbox" checked={hasSubmittedReading} readOnly/>I read today
          </label>

          <p className="reflection-label">Your reflection</p>
          <textarea
            className="reflection-box"
            placeholder="Type a short note, prayer, or takeaway from today's reading..."
            checked={hasSubmittedReading}
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            disabled={hasSubmittedReading}
          />

          <button 
          className="submit-btn" 
          onClick={handleReadingSubmit}
          disabled={hasSubmittedReading}
          >
            {handleReadingSubmit ? "Submitted": "Submit"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
