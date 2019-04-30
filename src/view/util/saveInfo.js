const sessionStorage = window.localStorage;
const session =window.sessionStorage;
const bill ={ countPrice:0,
               countTicket:0}
export  class  saveInfo{
  static setFlightBook(info=[]){
    sessionStorage.setItem("flightBook", JSON.stringify(info));
  }

  static getFlightBook(){
   var info = sessionStorage.getItem("flightBook");
   return info ? JSON.parse(info) : [];
  }

  static setFlightBill(info=[]){
    sessionStorage.setItem("flightBill", JSON.stringify(info));
  }

  static getFlightBill(){
    var info = sessionStorage.getItem("flightBill");
    return info ? JSON.parse(info) : {};
  }


  static setSaveFlightList(info=[]){
    sessionStorage.setItem("saveFlight", JSON.stringify(info));
  }

  static getSaveFlightList(){
    var info = sessionStorage.getItem("saveFlight");
    return info ? JSON.parse(info) : bill;
  }


  static setUserName(info=[]){
    session.setItem("username", JSON.stringify(info));
  }

  static getUserName(){
    var info = session.getItem("username");
    return info ? JSON.parse(info) : null;
  }
}
