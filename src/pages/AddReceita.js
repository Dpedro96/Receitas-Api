import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import receitasData from '../data/receitas.json';

function AddReceita() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [ingredientes, setIngredientes] = useState(['']);
    const [modoPreparo, setModoPreparo] = useState(['']);
    const [observacoes, setObservacoes] = useState(['']);

    const handleAddReceita = () => {
        const novaReceita = {
            _id: { "$oid": new Date().getTime().toString() }, // Apenas para gerar um id único
            nome: nome,
            secao: [
                {
                    nome: "Ingredientes",
                    conteudo: ingredientes
                },
                {
                    nome: "Modo de Preparo",
                    conteudo: modoPreparo
                },
                {
                    nome: "Outras informações",
                    conteudo: observacoes
                }
            ]
        };

        receitasData.push(novaReceita);
        // Aqui você pode salvar o receitasData atualizado em seu backend ou local storage
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <div>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome da Receita" />
            {/* Você pode melhorar essa parte, tornando-a dinâmica para adicionar múltiplos ingredientes, modos de preparo, etc. */}
            <textarea value={ingredientes[0]} onChange={(e) => setIngredientes([e.target.value])} placeholder="Ingredientes" />
            <textarea value={modoPreparo[0]} onChange={(e) => setModoPreparo([e.target.value])} placeholder="Modo de Preparo" />
            <textarea value={observacoes[0]} onChange={(e) => setObservacoes([e.target.value])} placeholder="Observações" />
            <button onClick={handleAddReceita}>Adicionar</button>
        </div>
    );
}

export default AddReceita;
