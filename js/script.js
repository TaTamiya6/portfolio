document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
  
    const showSkills = () => {
      const triggerHeight = window.innerHeight * 0.8;
  
      skills.forEach((skill, index) => {
        const skillTop = skill.getBoundingClientRect().top;
  
        if (skillTop < triggerHeight) {
          skill.style.setProperty("--delay", `${index * 0.3}s`); // 順番に遅延
          skill.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", showSkills);
  });
  