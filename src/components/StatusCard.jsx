import { useSelector } from "react-redux";

const StatusCard = () => {
  const data = useSelector((state) => state.data);
  const _data = data?.data?.data;

  return (
    <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap gap-6 md:gap-6 items-stretch w-full mt-8">
      <Cards
        color="bg-red-300"
        header="Samples Tested"
        number={_data?.totalSamplesTested}
      />
      <Cards
        color="bg-purple-400"
        header="Confirmed Cases"
        number={_data?.totalConfirmedCases}
      />
      <Cards
        color="bg-green-300"
        header="Active Cases"
        number={_data?.totalActiveCases}
      />
      <Cards
        color="bg-blue-300"
        header="Discharged"
        number={_data?.discharged}
      />
      <Cards color="bg-red-300" header="Deaths" number={_data?.death} />
    </div>
  );
};

const Cards = ({ color, header, number }) => {
  return (
    <div
      className={`${color} rounded-md w-full sm:w-1/3 md:w-1/4 lg:w-1/5 text-white px-4 py-6 ease-in duration-200 cursor-pointer hover:scale-105`}
    >
      {header && <p className="font-light">{header}</p>}
      {number && (
        <p className="text-3xl font-bold pt-2">
          {number.toString().replace(/,/g, "")}
        </p>
      )}
    </div>
  );
};

export default StatusCard;
