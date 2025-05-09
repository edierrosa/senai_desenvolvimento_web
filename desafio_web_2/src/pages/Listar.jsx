import { useEffect, useState } from 'react';


export default function Listar() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('reservas');
    if (data) {
      setReservas(JSON.parse(data));
    }
  }, []);

  const removerReserva = (index) => {
    const novasReservas = reservas.filter((_, i) => i !== index);
    setReservas(novasReservas);
    localStorage.setItem("reservas", JSON.stringify(novasReservas));
  };

  const vagasOcupadas = reservas.length;
  const vagasDisponiveis = 20 - vagasOcupadas;

  return (
    <div>
      <h1>Lista de Vagas Cadastradas</h1>
      <div className="dashboard">
        <p>Vagas Ocupadas: {vagasOcupadas}</p>
        <p>Vagas Disponíveis: {vagasDisponiveis}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Proprietário</th>
            <th>Apartamento</th>
            <th>Bloco</th>
            <th>Modelo</th>
            <th>Cor</th>
            <th>Vaga</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {reservas.length === 0 ? (
            <tr><td colSpan="8">Nenhuma vaga cadastrada.</td></tr>
          ) : (
            reservas.map((reserva, index) => (
              <tr key={index}>
                <td>{reserva.placa}</td>
                <td>{reserva.proprietario}</td>
                <td>{reserva.apartamento}</td>
                <td>{reserva.bloco}</td>
                <td>{reserva.modelo}</td>
                <td>{reserva.cor}</td>
                <td>{reserva.vaga}</td>
                <td>
                  <button onClick={() => removerReserva(index)}>Remover</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
