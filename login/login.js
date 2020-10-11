window.addEventListener("load", function(){  
      var form = document.querySelector("form")
      form.addEventListener("submit",enterLoginDetails)  
  })

function enterLoginDetails() {
    var arr = JSON.parse(localStorage.getItem('customerdetail'))
    console.log(arr)
    event.preventDefault();
    var form = new FormData(event.target);
    var email = form.get("email");
    var password = form.get("password");
    var check = false;
    for(var i = 0; i<arr.length; i++){
        //console.log(arr[i].email)
       if(email === arr[i].email && password === arr[i].password) {
           check = true;
           break;
       }
    }
    if(check){
        console.log("VAlid")

        location.assign("file:///C:/Users/lenovo/Desktop/Masai_pair_peoject/expense-manager/signup/signup.html")
    }else {
        var showError = document.getElementById('notify')
        showError.textContent = "Username or Password Incorrect"
    }
    
}

