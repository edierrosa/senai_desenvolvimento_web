import { useState } from 'react';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    vaga: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(formData);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    alert("Reserva salva com sucesso!");
    setFormData({
      placa: '',
      proprietario: '',
      apartamento: '',
      bloco: '',
      modelo: '',
      cor: '',
      vaga: ''
    });
  };

  return (
    <div>
      <h1>Cadastro de Reserva de Vaga</h1>
      <form onSubmit={handleSubmit}>
        {["placa", "proprietario", "apartamento", "bloco", "modelo", "cor", "vaga"].map(field => (
          <label key={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}:
            <input
              type={field === "vaga" ? "number" : "text"}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </label>
        ))}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
