export const Instruction = () => {
  return (
    <div className="flex-col border rounded-lg border-blue-900 w-[375px] h-[220px] ml-32 p-5">
      <h3 className="text-blue-900 font-bold text-lg">
        Calculate how much Stamp Duty you will pay:
      </h3>
      <ol className="mt-5">
        <li className="text-blue-900">
          <span className="font-bold text-lg">1. </span>
          <span className="text-[17px]">
            Select type of property you are buying
          </span>
        </li>
        <li className="text-blue-900">
          <span className="font-bold text-lg">2. </span>
          <span className="text-[17px]"> Enter purchase price</span>
        </li>
        <li className="text-blue-900">
          <span className="font-bold text-lg">3. </span>
          <span className="text-[17px]">
            Click &quot;Calculate&quot; button
          </span>
        </li>
      </ol>
    </div>
  );
};
