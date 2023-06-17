//pegando os valores dos elementos
const lamp = document.getElementById("lamp");
const targetDiv = document.getElementById("buttonReset");
const tagetDivButtons = document.getElementById("divButtons");

//Botão instalar lampada
const createButtonInstall = document.createElement("button");
createButtonInstall.textContent = "INSTALAR LAMPADA";
createButtonInstall.classList = "btn btn-warning m-3";
createButtonInstall.id = "installLamp";

//Criando botão de trocar lampada
const createButton = document.createElement("button");
createButton.textContent = "TROCAR LAMPADA";
createButton.classList = "btn btn-primary m-3";
createButton.id = "resetLamp";

//Criando botão ON
const createButtonOn = document.createElement("button");
createButtonOn.textContent = "ON";
createButtonOn.classList = "btn btn-success m-3";
createButtonOn.id = "turnOn";

//Criando botão OFF
const createButtonOff = document.createElement("button");
createButtonOff.textContent = "OFF";
createButtonOff.classList = "btn btn-danger m-3";
createButtonOff.id = "turnOff";

//pegando a div para criação do botão Instalar
targetDiv.appendChild(createButtonInstall);
installLamp.addEventListener("click", lampInstalada);

//Função para instalar a lampada
function lampInstalada() {
  lamp.src = "./assets/LampOff.png";
  createButtonInstall.parentNode.removeChild(createButtonInstall);
  tagetDivButtons.appendChild(createButtonOn);
  tagetDivButtons.appendChild(createButtonOff);
  const turnOn = document.getElementById("turnOn");
  const turnOff = document.getElementById("turnOff");
  turnOn.addEventListener("click", lampOn);
  turnOff.addEventListener("click", lampOff);

  //verificar se a lampada está quebrada
  function isLampNroken() {
    return lamp.src.indexOf("Broken") > -1;
  }

  //verificar se a lampada está quebrada
  function isLampOn() {
    return lamp.src.indexOf("On") > -1;
  }

  //função ligar lampada
  function lampOn() {
    if (!isLampNroken()) {
      lamp.src = "./assets/LampOn.png";
    }
  }

  //função desligar lampada
  function lampOff() {
    if (!isLampNroken()) {
      lamp.src = "./assets/LampOff.png";
    }
  }
  //função quebrar a lampada
  function lampBroken() {
    lamp.src = "./assets/LampBroken.png";
    createButtonOff.parentNode.removeChild(createButtonOff);
    createButtonOn.parentNode.removeChild(createButtonOn);
    targetDiv.appendChild(createButton);
    const newLamp = document.getElementById("resetLamp");
    newLamp.addEventListener("click", resetLamp);
  }

  //função trocar a lampada
  function resetLamp() {
    location.reload();
  }

  //interação quebrar lamapda
  lamp.addEventListener("dblclick", lampBroken);
 
}
