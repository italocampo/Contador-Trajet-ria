// Data do início do namoro (substitua pela sua data)
const dataInicioNamoro = new Date("2024-08-23T00:20:00"); // Formato: AAAA-MM-DD

function atualizarContador() {
  const agora = new Date();
  const diferenca = agora - dataInicioNamoro;

  // Calculando anos, meses, dias, horas, minutos e segundos
  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );
  const dias = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Atualizando os elementos no HTML
  document.getElementById("anos").textContent = anos;
  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

// Seletor para o botão e a seção do contador
const botao = document.getElementById("mostrarContador");
const contador = document.getElementById("contador");


// Função para mostrar o contador ao clicar no botão
botao.addEventListener("click", function () {
  // Alterando a visibilidade do contador
  contador.style.display = "block";
  // Desabilitando o botão após o clique
  botao.style.display = "none";
 
});



// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);
