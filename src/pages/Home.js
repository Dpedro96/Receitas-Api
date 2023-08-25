import React from 'react';
import { Link } from 'react-router-dom';
import useReceitas from '../hooks/useReceitas';

function Home() {
  const { receitas } = useReceitas();

  return (
    <div>
      <h1>Lista de Receitas</h1>
      <Link to="/add-receita">Adicionar Receita</Link>
      <ul>
        {receitas.map((receita) => (
          <li key={receita._id.$oid}>
            <Link to={`/receita/${receita._id.$oid}`}>{receita.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
