// Display a greeting message in the console
console.log("Welcome to Lokesh Dawkare's Portfolio!");

// Add dynamic interactivity
document.addEventListener("DOMContentLoaded", () => {
  const detailsButton = document.createElement("button");
  detailsButton.textContent = "Show More About Me";
  detailsButton.style.padding = "10px 20px";
  detailsButton.style.marginTop = "20px";
  detailsButton.style.backgroundColor = "#007acc";
  detailsButton.style.color = "white";
  detailsButton.style.border = "none";
  detailsButton.style.borderRadius = "5px";
  detailsButton.style.cursor = "pointer";

  const achievementsSection = document.querySelector("#achievements");
  achievementsSection.appendChild(detailsButton);

  const additionalDetails = document.createElement("p");
  additionalDetails.textContent =
    "I am passionate about leveraging Artificial Intelligence to solve real-world challenges. My long-term goal is to contribute to AI research simulating neurological processes to advance healthcare.";
  additionalDetails.style.display = "none";
  additionalDetails.style.marginTop = "10px";
  additionalDetails.style.color = "#333";

  achievementsSection.appendChild(additionalDetails);

  detailsButton.addEventListener("click", () => {
    if (additionalDetails.style.display === "none") {
      additionalDetails.style.display = "block";
      detailsButton.textContent = "Show Less About Me";
    } else {
      additionalDetails.style.display = "none";
      detailsButton.textContent = "Show More About Me";
    }
  });
});
