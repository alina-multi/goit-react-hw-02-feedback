import React from "react";

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        <button type="button" value={options[0]} onClick={onLeaveFeedback}>Good</button>
        <button type="button"  value={options[1]} onClick={onLeaveFeedback}>Neutral</button>
        <button type="button"  value={options[2]} onClick={onLeaveFeedback}>Bad</button> 
    </div>
      
)

export default FeedbackOptions;