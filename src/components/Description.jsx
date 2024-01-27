export const Description = () => {
  return (
    <>
      <div className="flex justify-evenly h-[330px]">
        <div className="flex flex-col justify-evenly w-1/2">
          <h2 className="text-blue-900 text-5xl font-bold">
            Stamp Duty Calculator
          </h2>
          <div>
            <div className="border-l-[7px] border-[#6FD8D8] h-[40px] pl-4  text-[17px] mb-10">
              Calculate the Stamp Duty you will owe if you&apos;re purchasing a
              residential property in England or Scotland.
            </div>
            <p className="text-[17px]">
              Our calculator lets you know the amount of Stamp Duty you&apos;ll
              be liable to pay. It&apos;ll work out how much you&apos;ll owe,
              whether you&apos;re a first-time buyer, moving home, or buying an
              additional property.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};