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
        vaga: parseInt(document.getElementById("vaga").value)
      };

      const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
      reservas.push(reserva);
      localStorage.setItem("reservas", JSON.stringify(reservas));

      alert("Cadastro realizado com sucesso!");
      form.reset();
      updateDashboard();
    });
  }

  function updateDashboard() {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const vagasTotal = 20;
    const vagasOcupadas = reservas.length;
    const vagasDisponiveis = vagasTotal - vagasOcupadas;

    if (document.getElementById("vagas-ocupadas")) {
      document.getElementById("vagas-ocupadas").textContent = `Vagas Ocupadas: ${vagasOcupadas}`;
      document.getElementById("vagas-disponiveis").textContent = `Vagas Disponíveis: ${vagasDisponiveis}`;
    }

    const tabelaBody = document.querySelector("tbody");
    if (tabelaBody) {
      tabelaBody.innerHTML = '';

      reservas.forEach((reserva, index) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
          <td>${reserva.placa}</td>
          <td>${reserva.proprietario}</td>
          <td>${reserva.apartamento}</td>
          <td>${reserva.bloco}</td>
          <td>${reserva.modelo}</td>
          <td>${reserva.cor}</td>
          <td>${reserva.vaga}</td>
          <td><button class="remover-btn" data-index="${index}">Remover</button></td>
        `;
        tabelaBody.appendChild(linha);
      });

      document.querySelectorAll(".remover-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          const index = this.getAttribute("data-index");
          reservas.splice(index, 1);
          localStorage.setItem("reservas", JSON.stringify(reservas));
          updateDashboard();
        });
      });
    }
  }

  updateDashboard();
});
