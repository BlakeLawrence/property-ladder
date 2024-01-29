export const Calculator = ({
  setPrice,
  setBuyerStatus,
  buyerStatus,
  calculateFirst,
  calculateNext,
  calculateAdditional,
}) => {
  const whichRate = () => {
    if (buyerStatus === "first") {
      return calculateFirst();
    } else if (buyerStatus === "next") {
      return calculateNext();
    } else {
      return calculateAdditional();
    }
  };

  return (
    <>
      <div className="flex flex-col md:w-[300px]">
        <p className="text-[12px] sm:text-[12px] md:text-[15px]">
          You&apos;ll need to select and fill both elements of this form to get
          a result.
        </p>
        <label className="mt-5 text-[13px] md:text-[15px]" htmlFor="home-type">
          I am buying:
        </label>
        <select
          value={buyerStatus}
          onChange={(e) => {
            setBuyerStatus(e.target.value);
          }}
          className="border-blue-900 border mb-5 mt-1 rounded-md px-1 py-1 text-[13px] md:text-lg"
          name="home"
          id="home-type"
        >
          <option>-- Please choose an option --</option>
          <option value="first">First home</option>
          <option value="next">Next home</option>
          <option value="additional">Additional home</option>
        </select>
        <p className="lg:mt-5 text-[13px] md:text-[15px]">Property price:</p>
        <input
          className="border border-blue-900 w-[270px] lg:w-[300px] rounded-md py-0.5 lg:py-1 px-1 mt-1"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="bg-[#C82A87] text-[#ffff] font-bold w-[75px] md:w-[90px] lg:w-[100px] p-1 md:p-1.5 rounded-md mt-1 lg:mt-3 mb-5 lg:mb-0 shadow-md text-[12px] md:text-[15px] lg:text-[17px]"
          onClick={whichRate}
        >
          Calculate
        </button>
      </div>
    </>
  );
};
