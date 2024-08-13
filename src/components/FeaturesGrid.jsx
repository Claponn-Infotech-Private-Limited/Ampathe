import CompletedProjects from "./CompletedProjects";
import PropTypes from "prop-types";

const FeaturesGrid = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-9 max-w-full text-center text-13xl text-heading font-lato mq825:gap-[18px] ${className}`}
    >
      <div className="self-stretch relative font-semibold mq450:text-lgi mq825:text-7xl">
        Features
      </div>
      <div className="self-stretch flex flex-row items-center justify-between max-w-full gap-5 text-5xl lg:flex-wrap lg:justify-center mq450:flex-wrap mq450:justify-center mq1425:flex-wrap mq1425:justify-center mq825:flex-wrap mq825:justify-center">
        <CompletedProjects
          chatting5="/chatting5.svg"
          aIChat="AI Chat"
          quickMentalHealthCheck="Quick Mental Health Check"
          answerFewQuestionsToGetAQ="Answer few questions to get a quick assessment of your mental health."
        />
        <CompletedProjects
          chatting5="/doctor140-1.svg"
          aIChat="Booking Therapist"
          quickMentalHealthCheck=" Personalized Doctor Suggestions"
          answerFewQuestionsToGetAQ="Get personalized therapist recommendations based on your results."
        />
        <CompletedProjects
          chatting5="/diversity90.svg"
          aIChat="Community"
          quickMentalHealthCheck="Explore and Connect"
          answerFewQuestionsToGetAQ="Join our community to explore topics like meditation and exercise."
        />
      </div>
    </div>
  );
};

FeaturesGrid.propTypes = {
  className: PropTypes.string,
};

export default FeaturesGrid;
