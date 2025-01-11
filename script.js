document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  // Define the toggleTheme function globally so it can be used in the HTML
  window.toggleTheme = function () {
    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
});

//Add records
document.addEventListener("DOMContentLoaded", () => {
    const addRecordButton = document.getElementById("add-record");
    const recordTbody = document.getElementById("record-tbody");

    addRecordButton.addEventListener("click", () => {
        const type = document.getElementById("type").value;
        const amount = document.getElementById("amount").value;
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;

        if(type && amount && category && description){
            const newRow = document.createElement("tr");
            const newFlag = document.createElement("td");

            if(type.toLowerCase() === "expense"){
                newFlag.classList.add("expense-row");
            }else if(type.toLowerCase() === "income"){
                newFlag.classList.add("income-row");
            };

            newRow.innerHTML = `
                <td>${type}</td>
                <td>${amount}</td>
                <td>${category}</td>
                <td>${description}</td>
            `;
            newRow.prepend(newFlag);
            recordTbody.appendChild(newRow);

            document.getElementById("amount").value = "";
            document.getElementById("description").value = "";
            
        } else {
            alert("Please fill in all fields");
        }
    });
});






// Navigation for Mobile Devices
function navMobile(){
    var  mobile_items = document.getElementById("mobile-item");

    //window.getComputedStyle(mobileItem).display retrieves the computed style of the element,
    //  regardless of whether it is set inline or via CSS.
    var display = window.getComputedStyle(mobile_items).display;

    if(display === "none"){
        mobile_items.style.display = "flex";
    }else{
        mobile_items.style.display = "none";
    }
}