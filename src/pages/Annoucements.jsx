import { useEffect, useState } from "react";

const Annoucements = () => {
const [announcements, setAnnouncements] = useState([]);
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
    setAnnouncements(data);
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
      {announcements.map((announcement)=> (
       <div key={announcement._id} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        title: {announcement.title}
        message: {announcement.message}
       </div> 
      ))}
    </div>
  );
}

export default Annoucements;