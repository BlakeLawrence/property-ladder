export const Navbar = () => {
  return (
    <>
      <div className="flex justify-around bg-[#0F19A0]  h-[125px] items-center">
        <img
          className="w-[40px] h-[40px] md:w-[125px] md:h-[100px] rounded-md"
          src="./stamp-fav.png"
          alt="stamp duty logo"
        />
        <h1 className="text-[#ffffff] text-lg md:text-6xl font-bold">
          Stamp Duty Calculator
        </h1>
        <img
          className="w-[40px] h-[40px] md:w-[125px] md:h-[100px] rounded-md"
          src="./stamp-fav.png"
          alt="stamp duty logo"
        />
      </div>
      <div className="flex justify-evenly bg-[#b8b8c2] h-[3px] items-center"></div>
    </>
  );
};
