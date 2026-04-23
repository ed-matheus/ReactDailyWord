// Icons
import { IoCalendarOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const InfoCard = ({ data, dia, antigo, novo, salmos, proverbios }) => {
  return (
    <div className="bg-indigo-50 p-3 rounded-md border border-indigo-100">
      <div className="flex items-center justify-between">
        {/* <IoCalendarOutline className="text-indigo-500" /> */}

        {/* Date */}
        <div className="flex flex-col">
          <span className="text-black font-semibold text-xs">{ data }</span>
          <span className="text-gray-400 font-medium text-xs">{ dia }</span>
        </div>

        {/* Latest Reading */}
        <div className="flex flex-col">
          <div className="flex">
            <GoDotFill className="text-indigo-500" />
            <span className="text-black font-semibold text-xs">{ antigo }</span>
          </div>

          <div className="flex">
            <GoDotFill className="text-blue-500" />
            <span className="text-black font-semibold text-xs">{ novo }</span>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex">
            <GoDotFill className="text-green-500" />
            <span className="text-black font-semibold text-xs">{ salmos }</span>
          </div>

          <div className="flex">
            <GoDotFill className="text-yellow-500" />
            <span className="text-black font-semibold text-xs">{ proverbios }</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoCard