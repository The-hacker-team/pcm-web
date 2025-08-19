import { useEffect } from "react";

const Annoucements = () => {

const fetchAnnouncements = async () => {
  try {
    const response = await fetch('https://pcm-backend.vercel.app/api/announcements', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Don't include 'Access-Control-Allow-Methods'
      },
    });

    const data = await response.json();
    console.log("response", data);
  } catch (error) {
    console.error("Error fetching announcements:", error);
  }
}

  useEffect(() => {
    fetchAnnouncements();
  }
    , []);  

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Announcements</h1>
      <p className="text-lg">This page is under construction.</p>
    </div>
  );
}

export default Annoucements;