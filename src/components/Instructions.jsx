export const Instruction = ({ stampDuty }) => {
  return (
    <div
      className={
        stampDuty <= 0
          ? "flex-col border rounded-lg border-blue-900 lg:w-[375px] h-[150px] lg:h-[220px] lg:ml-32 p-3 lg:p-5 relative z-30"
          : "flex-col border rounded-lg border-blue-900 lg:w-[375px] h-[150px] lg:h-[220px] lg:ml-32 p-3 lg:p-5 blur-sm hidden"
      }
    >
      <h3 className="text-blue-900 font-bold text-[12px] lg:text-lg">
        Calculate how much Stamp Duty you will pay:
      </h3>
      <ol className="mt-5">
        <li className="text-blue-900">
          <span className="font-bold text-[md] lg:text-lg">1. </span>
          <span className="text-[10px] md:text-[14px] lg:text-[17px]">
            Select type of property you are buying using the drop down menu
          </span>
        </li>
        <li className="text-blue-900">
          <span className="font-bold text-[md] lg:text-lg">2. </span>
          <span className="text-[10px] md:text-[14px] lg:text-[17px]">
            {" "}
            Enter purchase price
          </span>
        </li>
        <li className="text-blue-900">
          <span className="font-bold text-[md] lg:text-lg">3. </span>
          <span className="text-[10px] md:text-[14px] lg:text-[17px]">
            Click &quot;Calculate&quot; button
          </span>
        </li>
      </ol>
    </div>
  );
};
