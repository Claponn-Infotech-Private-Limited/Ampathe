import PropTypes from "prop-types";

const CompletedProjects = ({
  className = "",
  chatting5,
  aIChat,
  quickMentalHealthCheck,
  answerFewQuestionsToGetAQ,
}) => {
  return (
    <div
      className={`w-[411px] flex flex-col items-center justify-center gap-4 max-w-full text-center text-5xl text-heading font-lato ${className}`}
    >
      <img
        className="w-[120px] h-[120px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={chatting5}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-2">
        <div className="self-stretch relative font-semibold mq450:text-lgi">
          {aIChat}
        </div>
        <div className="self-stretch relative mq450:text-lgi">
          {quickMentalHealthCheck}
        </div>
      </div>
      <div className="self-stretch relative text-xl text-body mq450:text-base">
        {answerFewQuestionsToGetAQ}
      </div>
    </div>
  );
};

CompletedProjects.propTypes = {
  className: PropTypes.string,
  chatting5: PropTypes.string,
  aIChat: PropTypes.string,
  quickMentalHealthCheck: PropTypes.string,
  answerFewQuestionsToGetAQ: PropTypes.string,
};

export default CompletedProjects;
