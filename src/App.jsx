import './App.css'
import Header from './components/Header'
import Form from './components/Form';
import InfoCard from './components/InfoCard';
import { FaRegCalendar } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { useEffect, useState } from 'react';

function App() {
  const [historico, setHistorico] = useState(() => {
    const data = localStorage.getItem('historico_leitura')
    try {
      return data ? JSON.parse(data) : [];
    } catch (error) { return []; }
  })

  const addNewReading = (leitura) => {
    // Bloqueio de leitura no mesmo dia
    const jaRegistrado = historico.some(item => item.data === leitura.data);
    
    if (jaRegistrado) {
      alert("Você já registrou a leitura de hoje!");
      return;
    }

    // Adiciona ID único usando o timestamp
    const novaLeitura = { ...leitura, id: Date.now() };
    setHistorico((prev) => [novaLeitura, ...prev]);
  }

  const deleteReading = (id) => {
    if (window.confirm("Deseja realmente excluir este registro?")) {
      setHistorico(prev => prev.filter(item => item.id !== id));
    }
  }

  useEffect(() => {
    localStorage.setItem('historico_leitura', JSON.stringify(historico))
  }, [historico])

  return (
    <>
      <Header />
      <section className='bg-white mx-5 my-4 shadow-md rounded-md'>
        <div className='flex items-center justify-start gap-3 p-4 border-b-2 border-gray-200'>
          <div className='bg-indigo-50 w-8 h-8 p-2 rounded-lg flex justify-center items-center'>
            <FaRegCalendar className='text-indigo-500' />
          </div>

          <div className='flex flex-col'>
            <h3 className='text-black text-md font-semibold'>Registrar leitura de hoje</h3>
            <p className='text-xs'>Registre os capítulos que você leu hoje.</p>
          </div>
        </div>

        <Form sendData={addNewReading} />
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
          <ul className='flex flex-col gap-2'>
            {historico.map((item, i) => (
              <li key={i}>
                <InfoCard {...item} onDelete={() => deleteReading(item.id)} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
export default App
