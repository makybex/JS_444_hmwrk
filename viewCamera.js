function ViewCamera(camera, rootDom) {
  this._camera = camera;
  this._rootDom = rootDom;

  this._state = document.createElement("div");
  this._liveRec = document.createElement("div");
  this._nightMode = document.createElement("div");
}

ViewCamera.prototype.stateChange = function() {
  if (this._camera._state == true) {
    this._state.innerHTML = "Камера включена";
  } else {
    this._state.innerHTML = "Камера выключена";
    this._liveRec.innerHTML = "-";
    this._nightMode.innerHTML = "-";
  }
};

ViewCamera.prototype.liveRecChange = function() {
  if (this._camera._state == true) {
    var redPoint = document.getElementById("redpoint");
    if (redPoint) redPoint.parentNode.removeChild(redPoint);
    if (this._camera._liveRecording == true) {
      this._liveRec.innerHTML = "Прямая трансляция";
      redPoint = document.createElement("div");
      redPoint.id = "redpoint";
      redPoint.style.backgroundColor = "red";
      redPoint.style.width = "10px";
      redPoint.style.height = "10px";
      redPoint.style.borderRadius = "5px";
      redPoint.style.position = "relative";
      redPoint.style.top = "-95px";
      redPoint.style.left = "70px";
      this._liveRec.parentElement.parentElement.lastChild.appendChild(redPoint);
    } else {
      this._liveRec.innerHTML = "Воспроизведение записи";
    }
  } else {
    this._liveRec.innerHTML = "-";
  }
};

ViewCamera.prototype.nightModeChange = function() {
  if (this._camera._state == true) {
    if (this._camera._nightMode == true) {
      this._nightMode.innerHTML = "Ночной режим включен";
      this._nightMode.parentElement.parentElement.classList.add("dark");
    } else {
      this._nightMode.innerHTML = "Ночной режим выключен";
      this._nightMode.parentElement.parentElement.classList.remove("dark");
    }
  } else this._nightMode.innerHTML = "-";
};

ViewCamera.prototype.render = function() {
  var camContainer = document.createElement("div");
  camContainer.className = "cam-container";

  var name = document.createElement("div");
  name.innerHTML = "Камера";

  var onBtn = document.createElement("button");
  onBtn.className = "on";
  onBtn.innerHTML = "Включить камеру";
  onBtn.addEventListener("click", () => {
    this._camera.offLiveRecording();
    this._camera.offNightMode();
    this.liveRecChange();
    this.nightModeChange();
    this._camera.on();
    this.stateChange();
  });

  var offBtn = document.createElement("button");
  offBtn.className = "off";
  offBtn.innerHTML = "Выключить камеру";
  offBtn.addEventListener("click", () => {
    this._camera.offLiveRecording();
    this._camera.offNightMode();
    this.liveRecChange();
    this.nightModeChange();
    this._camera.off();
    this.stateChange();
  });

  var onliveRecBtn = document.createElement("button");
  onliveRecBtn.className = "onLive";
  onliveRecBtn.innerHTML = "Включить трансляцию";
  onliveRecBtn.addEventListener("click", () => {
    this._camera.onLiveRecording();
    this.liveRecChange();
  });

  var offliveRecBtn = document.createElement("button");
  offliveRecBtn.className = "offLive";
  offliveRecBtn.innerHTML = "Включить запись";
  offliveRecBtn.addEventListener("click", () => {
    this._camera.offLiveRecording();
    this.liveRecChange();
  });

  var onNightModeBtn = document.createElement("button");
  onNightModeBtn.className = "onNight";
  onNightModeBtn.innerHTML = "Включить ночной режим";
  onNightModeBtn.addEventListener("click", () => {
    this._camera.onNightMode();
    this.nightModeChange();
  });

  var offNightModeBtn = document.createElement("button");
  offNightModeBtn.className = "offNight";
  offNightModeBtn.innerHTML = "Выключить ночной режим";
  offNightModeBtn.addEventListener("click", () => {
    this._camera.offNightMode();
    this.nightModeChange();
  });

  var imgCamera = document.createElement("img");
  imgCamera.className = "cam-img";
  imgCamera.src = "./камера.jpg";

  var fields = document.createElement("div");
  fields.className = "fields";

  var buttons = document.createElement("div");
  buttons.className = "buttons";

  var image = document.createElement("div");
  image.className = "image";

  camContainer.appendChild(fields);
  camContainer.appendChild(buttons);
  camContainer.appendChild(image);
  fields.appendChild(name);
  fields.appendChild(this._state);
  fields.appendChild(this._liveRec);
  fields.appendChild(this._nightMode);
  buttons.appendChild(onBtn);
  buttons.appendChild(offBtn);
  buttons.appendChild(onliveRecBtn);
  buttons.appendChild(offliveRecBtn);
  buttons.appendChild(onNightModeBtn);
  buttons.appendChild(offNightModeBtn);
  image.appendChild(imgCamera);

  this._rootDom.appendChild(camContainer);

  this.stateChange();
  this.liveRecChange();
  this.nightModeChange();
};
