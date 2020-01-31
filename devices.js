function Devices(model){
    this._state = false;
    this._model = model;
}

Devices.prototype.on = function(){
    this._state = true;
};

Devices.prototype.off = function(){
    this._state = false;
};

Devices.prototype.getState = function(){
    return this._state;
};

Devices.prototype.getModel = function(){
    return this._model;
};