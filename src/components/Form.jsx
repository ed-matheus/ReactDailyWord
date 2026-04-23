import { useState } from 'react';

// Icons
import { FaBookOpen } from "react-icons/fa"
import { FaCross } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

const Form = ({ sendData }) => {  
  const [leitura, setLeitura] = useState({
    data: "",
    dia: "",
    antigo: "",
    novo: "",
    salmos: "",
    proverbios: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const date = new Date();
    
    setLeitura({
      ...leitura,
      [name]: value,
      data: date.toLocaleDateString("pt-BR"),
      dia: date.toLocaleDateString("pt-BR", { weekday: "long" })
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    const { antigo, novo, salmos, proverbios } = leitura;
    if (antigo || novo || salmos || proverbios) {
      sendData(leitura);
      
      // Clear the fields (HTML)
      e.target.reset(); 
      
      // Clear the state for the next register
      setLeitura({ data: "", dia: "", antigo: "", novo: "", salmos: "", proverbios: "" });
    } else {
      alert("Preencha pelo menos um campo.");
    }
  };

  return (
    // Mudamos de onClick no botão para onSubmit no form
    <form onSubmit={handleSubmit} className='p-4 flex flex-col gap-3'>
      {/* Inputs (mantidos como estavam) */}
      <div className='flex items-center justify-start gap-2'>
        <div className='bg-violet-100 w-10 h-10 rounded-full flex justify-center items-center'>
          <FaBookOpen className='text-indigo-600' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="antigo" className='flex text-sm text-black font-semibold'>Antigo Testamento</label>
          <input
            id='antigo'
            name='antigo'
            type="text"
            placeholder='Ex.: Gênesis 1-2'
            onChange={handleChange}
            className='border border-gray-300 rounded-md p-2 w-60 placeholder:text-sm'
          />
        </div>
      </div>

      <div className='flex items-center justify-start gap-2'>
        <div className='bg-blue-100 w-10 h-10 rounded-full flex justify-center items-center'>
          <FaCross className='text-blue-500' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="novo" className='flex text-sm text-black font-semibold'>Novo Testamento</label>
          <input
            id='novo'
            name='novo'
            type="text"
            placeholder='Ex.: Mateus 1-2'
            onChange={handleChange}
            className='border border-gray-300 rounded-md p-2 w-60 placeholder:text-sm'
          />
        </div>
      </div>

      <div className='flex items-center justify-start gap-2'>
        <div className='bg-green-100 w-10 h-10 rounded-full flex justify-center items-center'>
          <IoMusicalNotes className='text-green-500' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="salmos" className='flex text-sm text-black font-semibold'>Salmos</label>
          <input
            id='salmos'
            name='salmos'
            type="text"
            placeholder='Ex.: Salmo 1'
            onChange={handleChange}
            className='border border-gray-300 rounded-md p-2 w-60 placeholder:text-sm'
          />
        </div>
      </div>

      <div className='flex items-center justify-start gap-2 mb-4'>
        <div className='bg-yellow-100 w-10 h-10 rounded-full flex justify-center items-center'>
          <FaLightbulb className='text-yellow-500' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="proverbios" className='flex text-sm text-black font-semibold'>Provérbios</label>
          <input
            id='proverbios'
            name='proverbios'
            type="text"
            placeholder='Ex.: Provérbios 1'
            onChange={handleChange}
            className='border border-gray-300 rounded-md p-2 w-60 placeholder:text-sm'
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-indigo-500 text-white flex items-center justify-center gap-2 p-3 rounded-lg"
      >
        <FaRegCheckCircle />
        <span className="text-sm">Registrar leitura</span>
      </button>
    </form>
  );
};

export default Form;