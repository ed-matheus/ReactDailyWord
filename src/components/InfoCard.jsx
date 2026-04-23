import { GoDotFill } from "react-icons/go";
import { FaTrashCan } from "react-icons/fa6"; // Importe o ícone de lixo

const InfoCard = ({ data, dia, antigo, novo, salmos, proverbios, onDelete }) => {
  return (
    <div className="bg-indigo-50 p-3 rounded-md border border-indigo-100 relative group">
      {/* Delete button */}
      <button 
        onClick={onDelete}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors"
      >
        <FaTrashCan size={14} />
      </button>

      <div className="flex items-center justify-between pr-6">
        <div className="flex flex-col min-w-20">
          <span className="text-black font-semibold text-xs">{ data }</span>
          <span className="text-gray-400 font-medium text-[10px] capitalize">{ dia }</span>
        </div>

        <div className="flex flex-col gap-1">
          {antigo && (
            <div className="flex items-center">
              <GoDotFill className="text-indigo-500" size={10} />
              <span className="text-black font-medium text-[11px] ml-1">{ antigo }</span>
            </div>
          )}
          {novo && (
            <div className="flex items-center">
              <GoDotFill className="text-blue-500" size={10} />
              <span className="text-black font-medium text-[11px] ml-1">{ novo }</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          {salmos && (
            <div className="flex items-center">
              <GoDotFill className="text-green-500" size={10} />
              <span className="text-black font-medium text-[11px] ml-1">{ salmos }</span>
            </div>
          )}
          {proverbios && (
            <div className="flex items-center">
              <GoDotFill className="text-yellow-500" size={10} />
              <span className="text-black font-medium text-[11px] ml-1">{ proverbios }</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default InfoCard
