var key = JSON.parse(localStorage.getItem("dataKey"));

function loadData(key){
    return JSON.parse(localStorage.getItem(key))
}

window.addEventListener("load", function(){
    var form = document.querySelector("form");
    form.addEventListener("submit",enterTransaction);
})

function enterTransaction() {
    event.preventDefault();
    var form = new FormData(event.target);
    var title = form.get("title");
    var type = form.get("type");
    var ammount = form.get("ammount");
    var time = new Date().toLocaleString();
    var payload = {
        "title": title,
        "type": type,
        "ammount": Number(ammount),
        "timestamp": time
    }
    var customerdetail = loadData("customerdetail");
    customerdetail[key].transactions.push(payload);
    console.log(customerdetail[key].transactions);
    localStorage.setItem("customerdetail", JSON.stringify(customerdetail));
    displayAccountSummary();
    latestTransactions();
}

function displayAccountSummary() {
    var customerdetail = loadData("customerdetail");
    var income = 0;
    var expense = 0;
    for(var i = 0; i < customerdetail[key].transactions.length; i++){
        if(customerdetail[key].transactions[i].type == "credit"){
            income+= Number(customerdetail[key].transactions[i].ammount);
        } 
        else if(customerdetail[key].transactions[i].type == "debit"){
            expense+= Number(customerdetail[key].transactions[i].ammount);
        }
    }
    var balance = income-expense;

    var summary = document.querySelector(".account-summary");
    
    var t_income = document.querySelector("#t_income");
    var t_expense = document.querySelector("#t_expense");
    var t_balance = document.querySelector("#t_balance");
    
    t_income.innerHTML = "Total Income :" + income;
    t_expense.innerHTML = "Total Expense :" + expense;
    t_balance.innerHTML = "Balance :" + balance;
    
    summary.append(t_income);
    summary.append(t_expense);
    summary.append(t_balance);
}

function latestTransactions() {
    var customerdetail = loadData("customerdetail");
    var tbody = document.querySelector("tbody");

    for(var i = customerdetail[key].transaction- 1; i >= 0; i--){
        if(i === customerdetail[key].transaction - 5){
            break;
        }
      
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");

            td1.textContent = customerdetail[key].transactions[i].title;
            td2.textContent = customerdetail[key].transactions[i].type;
            td3.textContent = customerdetail[key].transactions[i].ammount;

            tr.append(td1);
            tr.append(td2);
            tr.append(td3);
            tbody.append(tr);
        
    }
}

var ledger = document.querySelector(".ledger-button");
ledger.addEventListener("click", goToLedger);

function goToLedger() {
    location.assign("../login/login.html");
}