import { wordChoice } from "../helpers/helpers";

export const Results = ({ setStampDuty, stampDuty, buyerStatus, setPrice }) => {
  return (
    <div className="p-7 bg-[#6FD8D8] w-[600px] h-[300px] rounded-lg border border-blue-900">
      <button
        className="text-[#ffff] font-extrabold bg-blue-500 px-1 py-0.5 rounded-sm"
        onClick={() => {
          setStampDuty(0);
        }}
      >
        X
      </button>
      <div className="flex mt-10 items-baseline">
        <h3 className="text-blue-900 font-bold text-2xl">Stamp duty payable</h3>
        <h3 className="text-blue-900 font-bold text-lg ml-2">
          ({wordChoice(buyerStatus)})
        </h3>
      </div>

      <p className="text-blue-900 font-bold text-5xl mt-1">{stampDuty}</p>
    </div>
  );
};
