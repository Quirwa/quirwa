
function openNewTab(url) {
    window.open(url, "_blank");
  }
  var mode = document.getElementById("clrmode");
  mode.addEventListener("click", function () {
    document.body.classList.toggle("black-bg");
    mode.classList.toggle("clrmode");
  });
  showSlide(1);
  let activeCircle = null;
  setActiveCircle(document.getElementById(`circle1`));

  function showSlide(slideNumber) {
    // Hide all slides
    const slides = document.querySelectorAll(".project-img-img");
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    const selectedSlide = document.getElementById(
      `project-image${slideNumber}`
    );
    selectedSlide.classList.add("active");
  }
  function openside(path) {
    window.location.href = path;
  }
  function setActiveCircle(circle) {
    if (activeCircle) {
      activeCircle.classList.remove("active-circle");
    }
    activeCircle = circle;
    activeCircle.classList.add("active-circle");
  }
  document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      circle.addEventListener("click", function () {
        setActiveCircle(circle);
      });
    });
  });
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.1 }
  );
  var containers = document.querySelectorAll(".showanimation");
  containers.forEach(function (container) {
    observer.observe(container);
  });
  var projectsObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var projectsElement = entry.target;
          projectsElement.style.opacity = "1";
          projectsElement.classList.add("typing");
          projectsObserver.unobserve(projectsElement);
        }
      });
    },
    { threshold: 0.1 }
  );
  var projectsElement = document.getElementById("projects");
  projectsObserver.observe(projectsElement);
  function reloadAndScroll() {
    let scrollSpeed = 50;
    const scrollInterval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, window.scrollY - scrollSpeed);
        scrollSpeed *= 0.99;
      } else {
        clearInterval(scrollInterval);
        location.reload();
      }
    }, 10);
  }
  window.addEventListener("scroll", function () {
    var topContainer = document.getElementById("Top-Container");
    if (window.scrollY > 0) {
      topContainer.classList.add("Top-ContainerScroll");
    } else {
      topContainer.classList.remove("Top-ContainerScroll");
    }
  });
  let lastScrollTop = 0;
  const statusDiv = document.getElementById("Top-Container");
  function checkScrollDirection() {
    const scrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    if (lastScrollTop - scrollTop > 7.5) {
      statusDiv.classList.remove("hide");
    } else if (scrollTop > lastScrollTop) {
      statusDiv.classList.add("hide");
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }
  window.addEventListener("scroll", checkScrollDirection);