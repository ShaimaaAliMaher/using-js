var card= document.querySelectorAll("#card")
var div1 = document.querySelector("#you")
var btn1 = document.querySelector("#total-price")
var div2 = document.querySelector("#prices")

var totalPrice = 0

card.forEach (function (item) {
    item.querySelector(".btn").onclick= function (){
        totalPrice += +item.querySelector("h3").textContent 
    //  totalPrice +=  +(item.getAttribute("price"))
      div1.innerHTML +=  item.querySelector("h5").textContent + "  &  "

      if (div1.innerHTML != ""){
        btn1.style.display = "block"
        btn1.style.margin="auto"
    }
    }
}

)
btn1.onclick = function (){
    div2.innerHTML=(totalPrice)
    
}
