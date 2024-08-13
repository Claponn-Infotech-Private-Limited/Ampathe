import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-8 text-center text-13xl text-heading font-lato mq825:gap-4 ${className}`}
    >
      <div className="self-stretch relative font-semibold mq450:text-lgi mq825:text-7xl">
        Best Therapists for YOU!
      </div>
      <div className="self-stretch flex flex-row items-start justify-center gap-6 text-left text-5xl mq1425:flex-wrap">
        <div className="h-[390px] flex-1 relative rounded-lg bg-lightblue-200 min-w-[278px] max-w-[302px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightblue-200 w-full h-full hidden" />
          <div className="absolute top-[20px] left-[20px] font-medium z-[1] mq450:text-lgi">
            <p className="m-0">Dr. Mathew</p>
            <p className="m-0">Anxiety Specialist</p>
          </div>
          <img
            className="absolute top-[73px] left-[39px] w-56 h-[317px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-225@2x.png"
          />
        </div>
        <div className="h-[390px] flex-1 relative rounded-lg bg-lightsteelblue min-w-[278px] max-w-[302px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-lightsteelblue w-full h-full hidden" />
          <div className="absolute top-[20px] left-[20px] font-medium z-[1] mq450:text-lgi">
            <p className="m-0">Dr. Sofia</p>
            <p className="m-0">Stress Coach</p>
          </div>
          <img
            className="absolute bottom-[0px] left-[44px] w-[214px] h-[321px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-222@2x.png"
          />
        </div>
        <div className="flex-[0.8675] rounded-lg bg-darkseagreen flex flex-col items-start justify-start pt-5 px-5 pb-0 box-border min-w-[278px] max-w-[302px] mq450:flex-1">
          <div className="w-[302px] h-[390px] relative rounded-lg bg-darkseagreen hidden" />
          <div className="relative font-medium z-[1] mq450:text-lgi">
            <p className="m-0">Dr. Connor</p>
            <p className="m-0">Meditation Guide</p>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[27px]">
            <img
              className="h-[312px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image-224@2x.png"
            />
          </div>
        </div>
        <div className="h-[390px] flex-1 relative rounded-lg bg-silver min-w-[278px] max-w-[302px]">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-silver w-full h-full hidden" />
          <div className="absolute top-[20px] left-[20px] font-medium z-[1] mq450:text-lgi">
            <p className="m-0">Dr. Yuki</p>
            <p className="m-0">Recovery Counsellor</p>
          </div>
          <img
            className="absolute bottom-[0px] left-[26px] w-[250px] h-[326px] object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/image-223@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
