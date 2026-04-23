import './App.css'

// Components
import Header from './components/Header'
import Form from './components/Form';

// Icons
import { FaRegCalendar } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import InfoCard from './components/InfoCard';

function App() {
  return (
    <>
      <Header />

      {/* Form */}
      <section className='bg-white mx-5 my-4 shadow-md rounded-md'>
        <div className='flex items-center justify-start gap-3 p-4 border-b-2 border-gray-200'>
          <div className='bg-indigo-50 w-8 h-8 p-2 rounded-lg flex justify-center items-center'>
            <FaRegCalendar className='text-indigo-500' />
          </div>

          <div className='flex flex-col'>
            <h3 className='text-black text-md font-semibold'>Registrar leitura de hoje</h3>
            <p className='text-xs'>Registre os capítulos que você leu hoje em cada categoria.</p>
          </div>
        </div>

        <Form />
      </section>

      <section className='bg-white mx-5 my-4 shadow-md rounded-md'>
        <div className='flex items-center justify-start gap-3 p-4'>
          <div className='bg-indigo-50 w-8 h-8 p-2 rounded-lg flex justify-center items-center'>
            <FiClock className='text-indigo-500' />
          </div>

          <div className='flex flex-col'>
            <h3 className='text-black text-md font-semibold'>Histórico de leituras</h3>
            <p className='text-xs'>Acompanhe suas leituras já registradas.</p>
          </div>
        </div>

        <div className='flex flex-col p-4'>
          <InfoCard />
        </div>
      </section>
    </>
  )
}

export default App
