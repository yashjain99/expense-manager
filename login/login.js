window.addEventListener("load", function(){  
      var form = document.querySelector("form")
      form.addEventListener("submit",enterLoginDetails)  
  })

function enterLoginDetails() {
    event.preventDefault();
    var form = new FormData(event.target);
    var email = form.get("email");
    var password = form.get("password");
    console.log(loadData("customerdetail")); 
}

function loadData(key){
    return JSON.parse(localStorage.getItem(key));
}