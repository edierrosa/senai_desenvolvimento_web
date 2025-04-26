document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-reserva");

  
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const reserva = {
        placa: document.getElementById("placa").value,
        proprietario: document.getElementById("proprietario").value,
        apartamento: document.getElementById("apartamento").value,
        bloco: document.getElementById("bloco").value,
        modelo: document.getElementById("modelo").value,
        cor: document.getElementById("cor").value,
        vaga: document.getElementById("vaga").value
      };

      
      const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
      reservas.push(reserva);
      localStorage.setItem("reservas", JSON.stringify(reservas));

      alert("Cadastro realizado com sucesso!");
      form.reset();
    });
  }

  
  const tabelaBody = document.querySelector("tbody");
  if (tabelaBody) {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    reservas.forEach((reserva) => {
      const linha = document.createElement("tr");
      linha.innerHTML = `
        <td>${reserva.placa}</td>
        <td>${reserva.proprietario}</td>
        <td>${reserva.apartamento}</td>
        <td>${reserva.bloco}</td>
        <td>${reserva.modelo}</td>
        <td>${reserva.cor}</td>
        <td>${reserva.vaga}</td>
      `;
      tabelaBody.appendChild(linha);
    });
  }
});
