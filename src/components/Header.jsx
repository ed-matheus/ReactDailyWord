// Icons
import { FaBookBible } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";

const Header = () => {
  return (
    <div className='bg-white text-xl font-bold p-4 flex justify-between shadow-md'>
      <div className="flex items-center gap-1.5">
        <FaBookBible className="text-indigo-500" />
        <h2 className="text-black">
          Daily
          <span className='text-indigo-500'>Bible</span>
        </h2>
      </div>

      <button className='border border-gray-200 rounded-md p-2'>
        <FiMoon className="text-black" />
      </button>
    </div>
  )
}

export default Header