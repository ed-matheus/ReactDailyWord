import { useState } from 'react';
import { FaBookOpen, FaRegCalendar, FaLightbulb, FaRegCheckCircle } from "react-icons/fa";
import { FaCross } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";

const Form = ({ sendData }) => {
  const [leitura, setLeitura] = useState({
    data: "",
    dia: "",
    antigo: "",
    novo: "",
    salmos: "",
    proverbios: "",
  });

  const hojeInput = new Date().toISOString().split('T')[0];
  const dataMinima = "2000-01-01";

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "data") {
      const selectedDate = new Date(value + 'T00:00:00');
      setLeitura({
        ...leitura,
        data: selectedDate.toLocaleDateString("pt-BR"),
        dia: selectedDate.toLocaleDateString("pt-BR", { weekday: "long" })
      });
    } else {
      setLeitura({ ...leitura, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rawDate = e.target.data.value;
    const { antigo, novo, salmos, proverbios, data } = leitura;

    if (rawDate > hojeInput) {
      alert("Você não pode registrar uma leitura no futuro!");
      return;
    }

    if ((antigo || novo || salmos || proverbios) && data) {
      sendData(leitura);
      e.target.reset();
      setLeitura({ data: "", dia: "", antigo: "", novo: "", salmos: "", proverbios: "" });
    } else if (!data) {
      alert("Selecione uma data válida.");
    } else {
      alert("Preencha pelo menos um campo de leitura.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='p-4 flex flex-col gap-3'>
      {[
        { 
          id: 'antigo', 
          label: 'Antigo Testamento', 
          placeholder: 'Ex.: Gênesis 1-2', // Placeholder específico
          icon: <FaBookOpen className='text-indigo-600' />, 
          bg: 'bg-violet-100' 
        },
        { 
          id: 'novo', 
          label: 'Novo Testamento', 
          placeholder: 'Ex.: Mateus 1-2', // Placeholder específico
          icon: <FaCross className='text-blue-500' />, 
          bg: 'bg-blue-100' 
        },
        { 
          id: 'salmos', 
          label: 'Salmos', 
          placeholder: 'Ex.: Salmo 1', 
          icon: <IoMusicalNotes className='text-green-500' />, 
          bg: 'bg-green-100' 
        },
        { 
          id: 'proverbios', 
          label: 'Provérbios', 
          placeholder: 'Ex.: Provérbios 1', 
          icon: <FaLightbulb className='text-yellow-500' />, 
          bg: 'bg-yellow-100' 
        }
      ].map((field) => (
        <div key={field.id} className='flex items-center justify-start gap-2'>
          <div className={`${field.bg} w-10 h-10 rounded-full flex justify-center items-center`}>
            {field.icon}
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor={field.id} className='flex text-sm text-black font-semibold'>{field.label}</label>
            <input
              id={field.id} 
              name={field.id} 
              type="text"
              placeholder={field.placeholder} // Aplicando o placeholder dinâmico
              onChange={handleChange}
              className='border border-gray-300 rounded-md p-2 w-60 placeholder:text-sm'
            />
          </div>
        </div>
      ))}

      <div className='flex items-center justify-start gap-2 mb-4'>
        <div className='bg-indigo-100 w-10 h-10 rounded-full flex justify-center items-center'>
          <FaRegCalendar className='text-indigo-500' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="data" className='flex text-sm text-black font-semibold'>Data da leitura</label>
          <input
            id='data' name='data' type="date"
            min={dataMinima}
            max={hojeInput}
            required
            onChange={handleChange}
            className='border border-gray-300 rounded-md p-2 w-60 text-sm'
          />
        </div>
      </div>

      <button type="submit" className="bg-indigo-500 text-white flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-indigo-600 transition-colors">
        <FaRegCheckCircle />
        <span className="text-sm">Registrar leitura</span>
      </button>
    </form>
  );
};

export default Form;
