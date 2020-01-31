function Camera(model, liveRecording, nightMode) {
  this._liveRecording = liveRecording;
  this._nightMode = nightMode;
}

Camera.prototype = Object.create(Devices.prototype);
Camera.prototype.constructor = Camera;

Camera.prototype.onLiveRecording = function() {
  this._liveRecording = true;
};

Camera.prototype.offLiveRecording = function() {
  this._liveRecording = false;
};

Camera.prototype.onNightMode = function() {
  this._nightMode = true;
};

Camera.prototype.offNightMode = function() {
  this._nightMode = false;
};
