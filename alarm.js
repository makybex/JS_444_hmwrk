function Alarm(model) {
  this._password = "1111";
  this._passwordCounter = 0;
  this._sirenState = false;
}

Alarm.prototype = Object.create(Devices.prototype);
Alarm.prototype.constructor = Alarm;

Alarm.prototype.enterPassword = function(enteredPassword) {
  if (enteredPassword == this._password) {
    //console.log("Охранная сигнализация выключена");
    this._passwordCounter = 0;
    return;
  } else {
    this._passwordCounter++;
    if (this._passwordCounter >= 3) this.onSiren();
  }
};

Alarm.prototype.onSiren = function() {
  this._sirenState = true;
};

Alarm.prototype.offSiren = function(enterPassword) {
  if (enterPassword == this._password) {
    this._sirenState = false;
    this._passwordCounter = 0;
  }
};
