export const Results = ({ setStampDuty, stampDuty }) => {
  return (
    <div className="pl-20 bg-[#d1cece] w-[350px] h-[350px] border">
      <button onClick={() => setStampDuty(0)}>X</button>
      <h3>Stamp duty payable</h3>
      <p>{stampDuty}</p>
    </div>
  );
};
