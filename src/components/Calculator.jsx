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
      <div className="flex flex-col w-[300px]">
        <p>
          You&apos;ll need to select and fill both elements of this form to get
          a result.
        </p>
        <label className="mt-5" htmlFor="home-type">
          I am buying:
        </label>
        <select
          value={buyerStatus}
          onChange={(e) => {
            setBuyerStatus(e.target.value);
          }}
          className="border-blue-900 border mb-5 mt-1 rounded-md px-1 py-1"
          name="home"
          id="home-type"
        >
          <option>-- Please choose an option --</option>
          <option value="first">First home</option>
          <option value="next">Next home</option>
          <option value="additional">Additional home</option>
        </select>
        <p className="mt-5">Property price:</p>
        <input
          className="border border-blue-900 w-[300px] rounded-md py-1 px-1 mt-1"
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button
          className="bg-[#C82A87] text-[#ffff] font-bold w-[100px] p-1.5 rounded-md mt-3 shadow-md"
          onClick={whichRate}
        >
          Calculate
        </button>
      </div>
    </>
  );
};
