  # Frontend Mentor - Time tracking dashboard solution

  This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

  ## Table of contents

  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [Key Features](#key-features-explained)
    - [What I learned](#what-i-learned)
  - [Author](#author)

  ## Overview

  ### The challenge

  Users should be able to:

  - View the optimal layout for the site depending on their device's screen size
  - See hover states for all interactive elements on the page
  - Switch between viewing Daily, Weekly, and Monthly stats

  **Extra feature:** I added interactive dropdown menus for each activity card with options (Delete, Set Goal, View History), which wasn't part of the original challenge requirements.


  ### Links

  - Solution URL: [GitHub Repository](https://github.com/AsmaaG87/time-tracking-dashboard)
  - Live Site URL: [Add live site URL here](https://asmaag87.github.io/time-tracking-dashboard/)

  ## My process

  ### Built with

  - Semantic HTML5 markup
  - CSS custom properties
  - Flexbox
  - CSS Grid
  - Mobile-first workflow
  - Vanilla JavaScript (ES6 modules)

  ## Key Features Explained

  ### Time Period Toggle
  Users can switch between three time periods:
  - **Daily** - Shows today's hours vs. yesterday
  - **Weekly** - Shows this week's hours vs. last week (default)
  - **Monthly** - Shows this month's hours vs. last month

  ### Activity Cards
  Each activity card displays:
  - Activity name with category icon
  - Current period hours (large display)
  - Previous period comparison
  - Interactive menu button

  ### Dropdown Menus
  Custom feature added beyond requirements:
  - Three options per card: Delete, Set Goal, View History
  - Opens on click, closes on outside click
  - Only one menu open at a time
  - Smooth hover states on menu items

  ### What I learned

  This project was a great opportunity to strengthen my JavaScript skills, particularly in DOM manipulation, event handling, and managing interactive components.

  I learned how to dynamically update multiple elements efficiently using `forEach` and array methods:

  ```js
  function updateDashboard(period) {
    timeData.forEach((activity, index) => {
      const timeframe = activity.timeframes[period];
      currentHours[index].textContent = `${timeframe.current}hrs`;
      previousHours[index].textContent = `Last ${time[period]} - ${timeframe.previous}hrs`;
    });
  }
  ```

  Managing active states taught me how to toggle classes effectively across multiple elements:

  ```js
  function setActive(activeBtn) {
    [dailyBtn, weeklyBtn, monthlyBtn].forEach(btn => {
      btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
  }
  ```

 The most challenging part was implementing the dropdown menu system with proper event propagation control:

 ```js
 menuBtn.forEach((btn, index) => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation(); 
    const thisMenu = dropDownMenu[index];
    const isVisible = thisMenu.style.display === "flex";

    dropDownMenu.forEach(menu => (menu.style.display = "none"));
    if (!isVisible) {
      thisMenu.style.display = "flex";
    }
  });
 });

   // Close all dropdowns when clicking outside
 document.addEventListener("click", () => {
    dropDownMenu.forEach(menu => (menu.style.display = "none"));
 });
 ```
  This taught me the importance of `stopPropagation()` to prevent event bubbling and how to create click-outside-to-close functionality.

  ## 👨‍💻 Author

  **Asmaa GAD**

  - Frontend Mentor - [@AsmaaG87](https://www.frontendmentor.io/profile/AsmaaG87)
  - Twitter/X - [@Asmaagadel](https://x.com/Asmaagadel)
  - GitHub - [@AsmaaG87](https://github.com/AsmaaG87)

  **⭐ If you found this project helpful, please consider giving it a star!**

