import { useState } from 'react';
import data from '../data/receitas.json';

function useReceitas() {
  const [receitas, setReceitas] = useState(data);
    
    const addReceita = (novaReceita) => {
        setReceitas((prevReceitas) => [...prevReceitas, novaReceita]);
    };

    return { receitas, addReceita };
}

export default useReceitas;
