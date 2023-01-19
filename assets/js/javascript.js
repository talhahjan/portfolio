const navBar = document.querySelector("header nav"),
  NavBarToggler = document.getElementById("toggler"),
  navMenu = document.getElementById("nav-menu"),
  ThemeIcon = document.getElementById("themeIcon"),
  themes = document.querySelectorAll('[name="theme"][type="radio"]'),
  html = document.documentElement,
  defaultMode = "dark", // string : 'dark' , 'light' or 'system'
  //check if darkMode is active in user system
  darkModeQuery = matchMedia("(prefers-color-scheme: dark)"),
  navLinks = document.querySelectorAll("#nav-menu li a"),
  animatedText = document.getElementById("animated-text"),
  textList = document.querySelectorAll("#animated-text-list li"),
  backendSkills = document.getElementById("skill-list-backend"),
  frontendSkills = document.getElementById("skill-list-frontend"),
  goToTopBtn = document.getElementById("goToTopBtn"),
  speed = 60,
  skinSwitcherBtn = document.getElementById("skin-switcher-toggler"),
  skinsList = document.querySelectorAll("#skin-list span");

const switchSkin = (skinClass) => {
  document.querySelector("body").className = skinClass;
};

skinsList.forEach((skin) => {
  skin.addEventListener("click", (e) => {
    let isDefault = skin.classList.contains("skin-default");
    if (isDefault) localStorage.removeItem("skin");
    let skinClass = skin.className.replace("bg-primary", "");
    let selectedSkin = isDefault ? null : skinClass.trim();
    localStorage.setItem("skin", selectedSkin);
    switchSkin(selectedSkin);

    document
      .getElementById("skin-switcher")
      .classList.toggle("translate-x-full");
  });
});

skinSwitcherBtn.addEventListener("click", () => {
  document.getElementById("skin-switcher").classList.toggle("translate-x-full");
});

goToTopBtn.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);

const animateText = () => {
  setTimeout(() => {
    animatedText.innerText = "blogger";
  }, 4900);

  setTimeout(() => {
    animatedText.innerText = "freelancer";
  }, 11000);

  setTimeout(() => {
    animatedText.innerText = "web devloper";
  }, 15900);

  setInterval(animateText, 25000);
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
  goToTopBtn.classList.toggle("hidden", window.scrollY < 100);
});

themes.forEach((theme) => {
  theme.addEventListener("click", (event) => {
    saveTheme(theme.id);
  });
});

NavBarToggler.addEventListener("click", () => {
  toggleNavbar();
});

const saveTheme = (themeID) => {
  let theme = document.getElementById(themeID);
  let svg = theme.nextElementSibling.children[0].outerHTML;
  ThemeIcon.innerHTML = svg;
  theme.checked = true;
  switch (themeID) {
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

const watchThemeMode = () => {
  let mode = localStorage.theme ?? defaultMode;
  saveTheme(mode);
};

const backendSkillObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    const backendSkillsList = backendSkills.querySelectorAll(".skill-per");

    backendSkillsList.forEach((value) => {
      const updateSkills = () => {
        const targetNum = value.dataset.per;
        const initialNumber = parseInt(value.innerText);
        const incrementNum = Math.trunc(targetNum / speed);
        const percentageWidth =
          value.parentElement.nextElementSibling.querySelector(
            ".skill-per-bar"
          );
        if (initialNumber < targetNum) {
          let percent = initialNumber + incrementNum;
          value.innerText = `${percent}%`;
          percentageWidth.classList.remove("max-w-0");
          percentageWidth.style.width = `${percent}%`;
          setTimeout(updateSkills, 60);
        }
      };
      updateSkills();
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

const frontendSkillObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    const frontendSkillsList = frontendSkills.querySelectorAll(".skill-per");

    frontendSkillsList.forEach((value) => {
      const updateSkills = () => {
        const targetNum = value.dataset.per;
        const initialNumber = parseInt(value.innerText);
        const incrementNum = Math.trunc(targetNum / speed);
        const percentageWidth =
          value.parentElement.nextElementSibling.querySelector(
            ".skill-per-bar"
          );
        if (initialNumber < targetNum) {
          let percent = initialNumber + incrementNum;
          value.innerText = `${percent}%`;
          percentageWidth.classList.remove("max-w-0");
          percentageWidth.style.width = `${percent}%`;
          setTimeout(updateSkills, 60);
        }
      };
      updateSkills();
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

backendSkillObserver.observe(backendSkills);
frontendSkillObserver.observe(frontendSkills);

window.onload = (e) => {
  if (localStorage.skin) switchSkin(localStorage.skin);
  watchThemeMode();
  // keep call saveTheme function if dark mode set to system keep watch change of user
  //  system setting after every 5 seconds
  setInterval(() => {
    let curMode = localStorage.theme ?? defaultMode;
    if (curMode != "system") return;
    watchThemeMode();
    console.log("watching", curMode);
  }, 5000);
  animateText();
};
