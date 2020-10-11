var arr;
function loadData(key){
    return JSON.parse(localStorage.getItem(key))
}


function saveData(key,data){
localStorage.setItem(key, JSON.stringify(data))
}

window.addEventListener('load', function(){
  //alert('works')
    arr = loadData('customerdetail') || []  
    var form = document.getElementById("form")
    form.addEventListener("submit",handleData)
   
    
})

function handleData(){
    event.preventDefault()
    var form = new FormData(event.target)
    var mail = form.get("mail")
    
    var name = form.get("name")
    var pass = form.get("password")
    var found = arr.some(function(el){
        return el.email === mail;
  });
    if (!found) { 
      arr.push({name:name, email: mail, password:pass  });
     }
     else {
       var errmsg = document.getElementById("error")
         errmsg.textContent = "User Already exists"
     }
    document.getElementById("form").reset()
   
   
    saveData('customerdetail', arr) 
    //console.log(arr)
}


