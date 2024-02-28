// // 1- عرفت المتغيرات
// var productBtn= document.getElementById("productbtn")
// var productContainer= document.getElementById("productcontainer")
// var productInput =document.getElementById("productinput")

// // 2-الداتا اللي عايزاها تظهر
// data = [
//     {id :1 , name:"iphonex" , desc:"this is product-----"},      // object
//     {id :2 , name:"iphone11" , desc:"this is product-----"},
//     {id :3 , name:"iphone12" , desc:"this is product-----"},
//     {id :4 , name:"iphonepro" , desc:"this is product-----"}
// ]
// // console.log(data);    // طبع في ال console
// function draw (items){
// // console.log(items)
// items.forEach(function(element) {    //عدي على كل واحد
//     // console.log(element);
//     // productContainer.innerHTML += "<div>" + element.name + "</div>"      //اطبع الاسماء تحت بعض وكلها مش الاخير بس
//   productContainer.innerHTML +=`<div onclick =deletItem(${element.id})> ${element.name }</div>`
// })
// }
// //  draw(data)     // استدعيها عشان تشتغل
// window.onload =function(){
//     draw(data);
// }

// // 3- add elements
// productBtn.addEventListener("click",addItem)
// function addItem(){
//  if(productInput.value=="")alert("you shoud enter a product")
//  var lastId = data[data.length -1].id;
// //  var lastId = data.length? data[data.length -1].id :0;
// // console.log(lastId)
// data.push({id:++lastId , name:productInput.value ,desc:"this is product-----"})
// console.log(data)
// var addedItem= data[data.length-1]
// // productContainer.innerHTML += "<div>" + addedItem.name + "</div>" 
// productContainer.innerHTML +=`<div onclick =deletItem(${element.id})> ${element.name }</div>`
// productInput.value=""     
// }
// function deletItem (id){
//     // console.log(id)
//     data.splice(1,1)
//     console.log(data)
// }
// ////////////////////////////////////


const myFunc = str => {

    if (str.length > 1) {
  
      return myFunc(str.slice(1));
  
    }
  
    return str;
  
  };
  
  console.log(myFunc('Hello world'))