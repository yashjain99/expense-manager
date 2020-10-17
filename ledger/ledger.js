window.addEventListener('load', function(){
    showAllTransaction()
    var allbtn = document.getElementById('all')
    allbtn.addEventListener('click',showAllTransaction)
    var creditbtn = document.getElementById('onlycredit')
    creditbtn.addEventListener('click',showCredit)
    var debitvtn = document.getElementById('onlydebit')
    debitvtn.addEventListener("click", showDebit);
})

function loadData(key){
    return JSON.parse(localStorage.getItem(key))
}

function showAllTransaction(){
    var customerdetail = loadData("customerdetail");
    var key = JSON.parse(localStorage.getItem("dataKey"));
   
    var tbody = document.querySelector("#content");
    tbody.innerHTML = "";

    for(var i =0; i < customerdetail[key].transactions.length; i++){
        
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        td1.textContent = customerdetail[key].transactions[i].title;
        td2.textContent = customerdetail[key].transactions[i].type;
        td3.textContent = customerdetail[key].transactions[i].ammount;
        td4.textContent = customerdetail[key].transactions[i].timestamp;

        tr.append(td1);
        tr.append(td2);
        tr.append(td3,td4);
        tbody.append(tr);
    }
}

function showCredit(){
    var customerdetail = loadData("customerdetail");
    var key = JSON.parse(localStorage.getItem("dataKey"));
   
    var tbody = document.querySelector("#content");
    tbody.innerHTML = "";

    for(var i =0; i < customerdetail[key].transactions.length; i++){
        if(customerdetail[key].transactions[i].type === "credit"){
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            td1.textContent = customerdetail[key].transactions[i].title;
            td2.textContent = customerdetail[key].transactions[i].type;
            td3.textContent = customerdetail[key].transactions[i].ammount;
            td4.textContent = customerdetail[key].transactions[i].timestamp;

            tr.append(td1);
            tr.append(td2);
            tr.append(td3,td4);
            tbody.append(tr);
        }
    }
}

function showDebit(){
    var customerdetail = loadData("customerdetail");
    var key = JSON.parse(localStorage.getItem("dataKey"));
   
    var tbody = document.querySelector("#content");
    tbody.innerHTML = "";

    for(var i =0; i < customerdetail[key].transactions.length; i++){
        if(customerdetail[key].transactions[i].type === "debit"){
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            td1.textContent = customerdetail[key].transactions[i].title;
            td2.textContent = customerdetail[key].transactions[i].type;
            td3.textContent = customerdetail[key].transactions[i].ammount;
            td4.textContent = customerdetail[key].transactions[i].timestamp;

            tr.append(td1);
            tr.append(td2);
            tr.append(td3,td4);
            tbody.append(tr);
        
        } 
    }
}