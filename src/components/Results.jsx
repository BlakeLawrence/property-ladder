import { wordChoice } from "../helpers/helpers";

export const Results = ({ setStampDuty, stampDuty, buyerStatus }) => {
  return (
    <div className="p-3 md:p-7 bg-[#44eaea] w-[300px] md:w-[800px] md:h-[350px] rounded-lg border border-blue-900">
      <button
        className="text-[#ffff] text-[10px] md:text-lg font-extrabold bg-blue-500 px-1 py-0.5 rounded-sm"
        onClick={() => {
          setStampDuty(0);
        }}
      >
        X
      </button>
      <div className="flex flex-col md:flex-row mt-2 md:mt-10 items-baseline">
        <h3 className="text-blue-900 font-bold text-sm md:text-2xl">
          Stamp duty payable
        </h3>
        <h3 className="text-blue-900 font-bold text-sm md:text-lg md:ml-2 mb-3 md:mb-0">
          ({wordChoice(buyerStatus)})
        </h3>
      </div>

      <p className="text-blue-900 font-bold text-2xl md:text-5xl mt-1 md:mt-5">
        {stampDuty}
      </p>
    </div>
  );
};
