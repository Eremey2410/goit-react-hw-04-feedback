import { useState } from 'react';
import { FeedbackOptions } from './Control/Control';
import { Statistics } from './Value/Value';
import { Notification } from './NotificationMessage/NotificationMessage';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = key => {
    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  return (
    <div>
      <FeedbackOptions
        options={Object.keys({ good, neutral, bad })}
        onLeaveFeedback={leaveFeedback}
      />
      {countTotalFeedback() > 0 ? (
        <Statistics
          valueGood={good}
          valueNeutral={neutral}
          valueBad={bad}
          valueTotal={countTotalFeedback()}
          valuePositivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
};

export default Feedback;
