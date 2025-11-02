import { timeData } from "../../data.js";

const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const menuBtn = document.querySelectorAll(".menu-btn")
const dropDownMenu = document.querySelectorAll(".dropdown-menu")
const currentHours = document.querySelectorAll(".current-hours");
const previousHours = document.querySelectorAll(".previous-hours");

const time = {
  daily: "Day",
  weekly: "Week",
  monthly: "Month",
 };

// Function to update the dashboard
function updateDashboard(period) {
  timeData.forEach((activity, index) => {
    const timeframe = activity.timeframes[period];
    currentHours[index].textContent = `${timeframe.current}hrs`;
    previousHours[index].textContent = `Last ${time[period]} - ${timeframe.previous}hrs`;
  });
}

 // Function to set active button state
function setActive(activeBtn) {
  [dailyBtn, weeklyBtn, monthlyBtn].forEach(btn => {
    btn.classList.remove("active");
  });
  activeBtn.classList.add("active");
}
  // Event listeners
  dailyBtn.addEventListener("click", () => {
    updateDashboard("daily");
    setActive(dailyBtn);
  });

  weeklyBtn.addEventListener("click", () => {
    updateDashboard("weekly");
    setActive(weeklyBtn);
  });

  monthlyBtn.addEventListener("click", () => {
    updateDashboard("monthly");
    setActive(monthlyBtn);
  });
  menuBtn.forEach((btn, index) => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      e.stopPropagation(); 
    const thisMenu = dropDownMenu[index];
    const isVisible = thisMenu.style.display === "flex";

   // Close all dropdowns first
      dropDownMenu.forEach(menu => (menu.style.display = "none"));
      if (!isVisible) {
        thisMenu.style.display = "flex";
      }
    });
  });
  
    // Prevent clicks inside dropdown from closing it
  dropDownMenu.forEach(menu => {
    menu.addEventListener("click", e => {
      e.stopPropagation();
    });
  });

  // Hide all dropdowns when clicking anywhere else
  document.addEventListener("click", () => {
    dropDownMenu.forEach(menu => (menu.style.display = "none"));
  });

  // Default load state 
  updateDashboard("weekly");
  setActive(weeklyBtn);