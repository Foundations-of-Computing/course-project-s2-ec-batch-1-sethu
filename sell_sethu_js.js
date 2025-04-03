function showhat() {
    let type = document.getElementById("types").value;    // Gets whether the business provided is a product or a service
    document.getElementById("pfields").style.display = (type === "product") ? "block" : "none";    // Displays input boxes for products
    document.getElementById("sfields").style.display = (type === "service") ? "block" : "none";    // displays input boxes for services
}

function inserter() {
    let type = document.getElementById("types").value;     // Gets whether the business provided is a product or a service
    let table = document.getElementById("lists");   // Variable for output table display
    if (type === "product") {
        let name = document.getElementById("pname").value;// Gets product's name
        let description = document.getElementById("pdescription").value;    // Gets product's description
        if (!name || !description) {
            alert("Please fill all product fields.");  // Alert for incomplete data entered
            return;
        }
        let new_row = table.insertRow();
        new_row.innerHTML = `<td>Product</td><td>${name}</td><td>${description}</td>`;  // Record inserted
    }
    else if (type === "service") {
        let name = document.getElementById("sname").value;// Gets service's name
        let details = document.getElementById("sdetails").value;      // Gets service's details
        if (!name || !details) {
            alert("Please fill all service fields.");     // Alert for incomplete data entered
            return;
        }
        let new_row = table.insertRow();
        new_row.innerHTML = `<td>Service</td><td>${name}</td><td>${details}</td>`;      // Record inserted
    }
    else {
        alert("Please select a business type.");    // Alert for not choosing business type
        return;
    }
    document.getElementById("PorS").reset();  // Clears form after submission
    showhat();    // Both div's style.display becomes none as the form was cleared above
}