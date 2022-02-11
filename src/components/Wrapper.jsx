import StatusCard from "./StatusCard";
import StateTable from "./StateTable";
import BarChart from "./Chart";

const Wrapper = () => {
  return (
    <div className="md:p-16 px-8 py-12 w-full ">
      <p className="font-bold text-purple-700 text-2xl">Current Status</p>
      <p className="text-sm font-light text-gray-400 pt-1">
        Covid-19 Update, Nigeria
      </p>
      <StatusCard />
      <BarChart />
      <StateTable />
    </div>
  );
};

export default Wrapper;
