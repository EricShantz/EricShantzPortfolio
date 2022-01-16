let scrollDirection = true

const App = {
  init(){
    App.addEventListeners()
    if(document.body.id == "homePage"){
      App.checkForSpline()
      App.checkDeviceType()
    }
  },

  addEventListeners(){
    if(document.getElementById('portfolioHeader'))
    document.getElementById('downArrowDiv').addEventListener('click', App.scrollDown)
},

  scrollDown(){
    if(scrollDirection){
    window.scrollTo({ 
      top:695,
    behavior:'smooth'});
    document.getElementById('downArrow').innerHTML = "keyboard_arrow_up"
    scrollDirection = !scrollDirection
    }else{
      window.scrollTo({ 
        top:0,
      behavior:'smooth'});
    document.getElementById('downArrow').innerHTML = "keyboard_arrow_down"
    scrollDirection = !scrollDirection
    }
  },

  checkForSpline(){
    let splineInterval = setInterval(() => {
      if(document.readyState === 'complete'){
        App.terminateSpinner()
        clearInterval(splineInterval)
      }
    }, 500);
  },

  terminateSpinner(){
  document.getElementById("spinner").setAttribute("class" , "loader hide")
  },

  checkDeviceType() {
    var userAgent = navigator.userAgent.toLowerCase();
    var Android = userAgent.indexOf("android") > -1;
      
    if(Android) {
        alert("You are on android")
    }
}


}
document.addEventListener('DOMContentLoaded', App.init)