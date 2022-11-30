let Mobile = function (Battery, name, number) {
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.battery = battery;
    this.status = false;
    this.message = ""
    this.inbox = [];
    this.outbox = [];
    this.soanMess = function (string){
        if(this.statusChecker()){
            this.message(string);
            this.batteryUse();
        }
    };
    this.sendMess = function (name){

    }
}
