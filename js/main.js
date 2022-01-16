let scrollDirection = true

const App = {
  init(){
    App.addEventListeners()
    if(document.body.id == "homePage"){
      App.checkForSpline()
      
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

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      alert('you are on android')
      }
  },

  terminateSpinner(){
  document.getElementById("spinner").setAttribute("class" , "loader hide")
  },


}
document.addEventListener('DOMContentLoaded', App.init)