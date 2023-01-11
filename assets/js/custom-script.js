const navBar = document.querySelector("header nav"),
  NavBarToggler = document.getElementById("toggler"),
  navMenu = document.getElementById("nav-menu"),
  ThemeIcon = document.getElementById("themeIcon"),
  themes = document.querySelectorAll('[name="theme"][type="radio"]'),
  html = document.documentElement,
  defaultMode = "dark", // string : 'dark' , 'light' or 'system'
  //check if darkMode is active in user system
  darkModeQuery = matchMedia("(prefers-color-scheme: dark)"),
  skillsContent = document.getElementsByClassName("skill_content"),
  skillHeader = document.querySelectorAll(".skill_header"),
  navLinks = document.querySelectorAll("#nav-menu li a"),
  animatedText = document.getElementById("animated-text"),
  textList = document.querySelectorAll("#animated-text-list li");

const animateText = () => {
  setTimeout(() => {
    animatedText.textContent = "web devloper";
  }, 0);

  setTimeout(() => {
    animatedText.textContent = "blogger";
  }, 5000);

  setTimeout(() => {
    animatedText.textContent = "freelancer";
  }, 10000);
  setInterval(animateText, 15000);
};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNavbar();
  });
});

const toggleNavbar = () => {
  navMenu.classList.toggle("-left-full");
  navMenu.classList.toggle("left-0");
};

window.addEventListener("scroll", () => {
  navBar.classList.toggle("navbar-fixed", window.scrollY > 0);
});

themes.forEach((theme) => {
  theme.addEventListener("click", (event) => {
    saveTheme(theme);
  });
});

NavBarToggler.addEventListener("click", () => {
  toggleNavbar();
});

const saveTheme = (theme) => {
  let svg = theme.nextElementSibling.children[0].outerHTML;
  ThemeIcon.innerHTML = svg;
  document.getElementById(theme.id).checked = true;
  switch (theme.id) {
    case "light":
      localStorage.setItem("theme", "light");
      html.className = "light";
      break;
    case "dark":
      localStorage.setItem("theme", "dark");
      html.className = "dark";
      break;
    case "system":
      localStorage.setItem("theme", "system");
      html.className = darkModeQuery.matches ? "dark" : "light";
      break;
    default:
      localStorage.removeItem("theme");
      html.className = defaultMode;
      break;
  }
};

const onWindowLoad = () => {
  if (localStorage.theme === "dark") {
    let theme = document.getElementById("dark");
    saveTheme(theme);
  } else if (localStorage.theme === "light") {
    let theme = document.getElementById("light");
    saveTheme(theme);
  } else if (localStorage.theme === "system") {
    let theme = document.getElementById("system");
    saveTheme(theme);
  } else {
    let theme = document.getElementById(defaultMode);
    saveTheme(theme);
  }
};
//  if clicked on page  check out if any dropdown remains open
// close it dynamically

window.onload = (e) => {
  onWindowLoad();
  animateText();
};
