import React from 'react';

const ScoreSummary = (props) => {
    return (
        <div className="score-summary">
            <h1>Your Typing Score:-</h1>
            <h2>Words Per Minute: {props.wpm}</h2>
            <h2>Accuracy: {props.accuracy}%</h2>
            <br/>
            <h2>High score: {props.wpm}</h2>
        </div>
    );
};

export default ScoreSummary;