function initializePage() {
    // Display current time
    var currentTimeElement = document.getElementById("currentTime");
    var currentTime = new Date().toLocaleTimeString();
    currentTimeElement.textContent = "Current time: " + currentTime;
  
    // Initialize table content using JSON data
    var jsonData = [
      { name: "John", age: 25 },
      { name: "Jane", age: 30 },
      { name: "Bob", age: 40 }
    ];
  
    var tableBody = document.querySelector("#dataTable tbody");
    jsonData.forEach(function(data) {
      var row = document.createElement("tr");
      var nameCell = document.createElement("td");
      nameCell.textContent = data.name;
      var ageCell = document.createElement("td");
      ageCell.textContent = data.age;
      row.appendChild(nameCell);
      row.appendChild(ageCell);
      tableBody.appendChild(row);
    });
  
    // Add dynamic element
    var dynamicElement = document.createElement("div");
    dynamicElement.textContent = "Dynamic Element";
    document.body.appendChild(dynamicElement);
  }
  
  function showConfirmation() {
    // Show confirmation dialog
    var result = confirm("Are you sure you want to submit?");
    if (result) {
      alert("Submitted successfully!");
    }
  }
  
  function toggleElement() {
    var targetElement = document.getElementById("targetElement");
    targetElement.style.display = (targetElement.style.display === "none") ? "block" : "none";
  }
  
  function showMouseCoordinates(event) {
    var mouseCoordinatesElement = document.getElementById("mouseCoordinates");
    var coordinates = "X: " + event.clientX + ", Y: " + event.clientY;
    mouseCoordinatesElement.textContent = "Mouse coordinates: " + coordinates;
  }
  
  document.addEventListener("mousemove", showMouseCoordinates);
  
  function addElement() {
    var newElement = document.createElement("div");
    newElement.textContent = "New Element";
    document.body.appendChild(newElement);
  }
  
  function removeElement() {
    var elements = document.querySelectorAll("div");
    if (elements.length > 0) {
      var lastElement = elements[elements.length - 1];
      lastElement.parentNode.removeChild(lastElement);
    }
  }
  