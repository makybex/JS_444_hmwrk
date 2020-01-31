addCondBtn = document.getElementById("addCond");
addCondBtn.className = "add-btn-style";
addCondBtn.addEventListener("click", function(){
    var condModel = new Conditioner("LG");
    var viewCondModel = new ViewConditioner(condModel, document.getElementById("root"));
    viewCondModel.render();
});

addCamBtn =  document.getElementById("addCam");
addCamBtn.className = "add-btn-style";
addCamBtn.addEventListener("click", function(){
    var camModel = new Camera("Sony", true, false);
    var viewCamModel = new ViewCamera(camModel, document.getElementById("root"));
    viewCamModel.render();
});

addAlarmBtn = document.getElementById("addAlarm");
addAlarmBtn.className = "add-btn-style";
addAlarmBtn.addEventListener("click", function(){
    var alarmModel = new Alarm("LOL");
    var viewAlarmModel = new ViewAlarm(alarmModel, document.getElementById("root"));
    viewAlarmModel.render();
});