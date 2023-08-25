import React from 'react';
import { useParams } from 'react-router-dom';
import useReceitas from '../hooks/useReceitas';

function Receita() {
  const { id } = useParams();
  const { receitas } = useReceitas();

  const receita = receitas.find(r => r._id.$oid === id);

  if (!receita) {
    return <div>Receita não encontrada!</div>;
  }

  return (
    <div>
      <h1>{receita.nome}</h1>
      {receita.secao.map((section, index) => (
        <div key={index}>
          <h2>{section.nome}</h2>
          <ul>
            {section.conteudo.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Receita;
