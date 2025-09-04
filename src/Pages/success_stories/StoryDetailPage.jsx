import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import clientCards from "../../data/SucessStories/clientCardsData";
import "../../CSS/success_stories/StoryDetailpage.css";


const StoryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const story = clientCards.find((c) => c.id === id);
  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div className="story-detail-page">
      <div className="story-hero">
        <img src={story.grandImage || story.image} alt={story.title} />
        <h1>{story.title}</h1>
      </div>

      <div className="story-content">
        <h3>{story.fullDesc || story.desc}</h3>
      </div>

            <div className="story-content">
        <p>{story.fullDesc || story.content}</p>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default StoryDetailPage;
