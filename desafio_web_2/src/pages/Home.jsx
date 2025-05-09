export default function Home() {
  const reservas = JSON.parse(localStorage.getItem('reservas')) || [];
  const vagasOcupadas = reservas.length;
  const vagasDisponiveis = 20 - vagasOcupadas;

  return (
    <div>
      <h1>Controle de Estacionamento</h1>
      <div className="dashboard">
        <p>Vagas Ocupadas: {vagasOcupadas}</p>
        <p>Vagas Disponíveis: {vagasDisponiveis}</p>
      </div>
    </div>
  );
}
