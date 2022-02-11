const StatusCard = () => {
  return (
    <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap gap-6 sm:gap-10 items-stretch w-full mt-8">
      <Cards color="bg-red-300" header="Samples Tested" number={"20000"} />
      <Cards color="bg-purple-300" header="Confirmed Cases" number={"200000"} />
      <Cards color="bg-green-300" header="Active Cases" number={"300000"} />
      <Cards color="bg-blue-300" header="Discharged" number={"4000"} />
      <Cards color="bg-red-300" header="Deaths" number={"30300"} />
    </div>
  );
};

const Cards = ({ color, header, number }) => {
  return (
    <div
      className={`${color} rounded-md w-full sm:w-1/3 md:w-1/4 lg:w-1/5 text-white px-4 py-6`}
    >
      <p className="font-light">{header}</p>
      <p className="text-3xl font-bold pt-2">{number}</p>
    </div>
  );
};

export default StatusCard;
