function ViewAlarm(alarm, rootDom) {
  this._alarm = alarm;
  this._rootDom = rootDom;

  this._state = document.createElement("div");
  this._sirenState = document.createElement("div");
  this._sirenState.innerHTML = "Сирена выключена";

  this._imgAlarm = document.createElement("img");
  this._imgAlarm.className = "alarm-img hide";
  this._imgAlarm.src = "./наручники.jpg";
}


ViewAlarm.prototype.sirenStateChange = function() {
  if (this._alarm._sirenState == true) {
    this._sirenState.innerHTML = "Включена сирена";
    this._imgAlarm.classList.remove("hide");
    this._sirenState.parentElement.parentElement.classList.add("red");
  } else {
    this._sirenState.innerHTML = "Сирена выключена";
    this._imgAlarm.classList.add("hide");
    this._sirenState.parentElement.parentElement.classList.remove("red");
  }
};

ViewAlarm.prototype.render = function() {
  var alarmContainer = document.createElement("div");
  alarmContainer.className = "alarm-container";

  var name = document.createElement("div");
  name.innerHTML = "Сигнализация дома";

  var textField = document.createElement("input");
  textField.type = "text";

  var enterBtn = document.createElement("button");
  enterBtn.className = "enter";
  enterBtn.innerHTML = "Войти в дом";
  enterBtn.addEventListener("click", () => {
    this._alarm.enterPassword(textField.value);
    this.sirenStateChange();
  });

  var offSiren = document.createElement("button");
  offSiren.className = "offSiren";
  offSiren.innerHTML = "Выключить сирену";
  offSiren.addEventListener("click", () => {
    this._alarm.offSiren(textField.value);
    this.sirenStateChange();
  });

  var fields = document.createElement("div");
  fields.className = "fields";

  var buttons = document.createElement("div");
  buttons.className = "buttons";

  var image = document.createElement("div");
  image.className = "image";

  alarmContainer.appendChild(fields);
  alarmContainer.appendChild(buttons);
  alarmContainer.appendChild(image);
  fields.appendChild(name);
  fields.appendChild(this._state);
  fields.appendChild(this._sirenState);
  fields.appendChild(textField);
  buttons.appendChild(enterBtn);
  buttons.appendChild(offSiren);
  image.appendChild(this._imgAlarm);

  this._rootDom.appendChild(alarmContainer);

  this.sirenStateChange();
};