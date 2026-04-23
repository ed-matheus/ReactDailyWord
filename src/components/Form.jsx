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
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    const date = new Date()
    const formattedDate = date.toLocaleDateString("pt-BR")
    const weekDay = date.toLocaleDateString("pt-BR", {
      weekday: "long",
    })

    // console.log(value)

    setLeitura({
      ...leitura,
      [name]: value,
      data: formattedDate,
      dia: weekDay
    })
  }

  const handleSubmit = () => {
    const someFilledInput = Object.values(leitura).some(value => value !== "")

    if (someFilledInput) {
      console.log("Chique")
    } else {
      alert("Preencha pelo menos um campo.")
    }

    // console.log(historico)

    sendData(leitura)
  }

  return (
    <form className='p-4 flex flex-col gap-3'>
      {/* Antigo Testamento */}
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

      {/* Novo Testamento */}
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

      {/* Salmos */}
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

      {/* Provérbios */}
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
        type="button"
        onClick={handleSubmit}
        className="bg-indigo-500 text-white flex items-center justify-center gap-2 p-3 rounded-lg"
      >
        <FaRegCheckCircle />
        <span className="text-sm">Registrar leitura</span>
      </button>
    </form>
  )
}

export default Form