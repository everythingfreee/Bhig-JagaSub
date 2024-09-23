// Toggle the sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// Show the dashboard content
function showDashboard() {
    document.getElementById("dashContainer").style.display = "block";
    document.getElementById("buyDataMain").style.display = "none";
    document.getElementById("airtimePage").style.display = "none";
    document.getElementById("CableSUb").style.display = "none";
    document.getElementById("transactionHistory").style.display = "none";
}

// Show the Buy Data page
function showBuyData() {
    document.getElementById("dashContainer").style.display = "none";
    document.getElementById("buyDataMain").style.display = "block";
    document.getElementById("airtimePage").style.display = "none";
    document.getElementById("CableSUb").style.display = "none";
    document.getElementById("transactionHistory").style.display = "none";
}

// Show the Airtime page
function showAirtime() {
    document.getElementById("dashContainer").style.display = "none";
    document.getElementById("buyDataMain").style.display = "none";
    document.getElementById("airtimePage").style.display = "block";
    document.getElementById("CableSUb").style.display = "none";
    document.getElementById("transactionHistory").style.display = "none";
}

// Show the Cable Subscription page
function showCableSub() {
    document.getElementById("dashContainer").style.display = "none";
    document.getElementById("buyDataMain").style.display = "none";
    document.getElementById("airtimePage").style.display = "none";
    document.getElementById("CableSUb").style.display = "block";
    document.getElementById("transactionHistory").style.display = "none";
}

// Show the transaction history
function transactionHistory() {
    document.getElementById("dashContainer").style.display = "none";
    document.getElementById("buyDataMain").style.display = "none";
    document.getElementById("airtimePage").style.display = "none";
    document.getElementById("CableSUb").style.display = "none";
    document.getElementById("transactionHistory").style.display = "block";

    // Example data - replace with your actual data fetching logic
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const tableBody = document.getElementById('transactionTableBody');
    
    tableBody.innerHTML = ""; // Clear existing rows

    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Example of adding a transaction - replace with your actual logic
function addTransaction(transaction) {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("dashboard").addEventListener("click", showDashboard);
    document.getElementById("buyData").addEventListener("click", showBuyData);
    document.getElementById("airtime").addEventListener("click", showAirtime);
    document.getElementById("cableSub").addEventListener("click", showCableSub);
    document.getElementById("history").addEventListener("click", transactionHistory);
});
