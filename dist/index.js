$(document).ready(function () {
  $("#nav").load("nav.html");
  $("#main").load('dashboard.html');

  $(document).on("click", ".dropdown-menu", function (e) {
    e.stopPropagation();
  });

  $(".dropdown-toggle").on("mouseenter", function () {
    if (!$(this).parent().hasClass("show")) {
      $(this).click();
    }
  });

  $(".btn-group, .dropdown").on("mouseleave", function () {
    if ($(this).hasClass("show")) {
      $(this).children(".dropdown-toggle").first().click();
    }
  });

  // *************** NAV BAR ******************

  window.activeSideNav = function (navLinkId) {
    document.querySelectorAll(".nav-link").forEach((navEle) => {
      if (navEle.id === navLinkId) {
        navEle.classList.add("active");
      } else {
        navEle.classList.remove("active");
      }
    });
  };

  window.displaySubMenuPage = function (subMenuId) {
    if (subMenuId === "app_sfe_general") {
      $("#main").load("application/sfe/SFEGeneral.html");
    } else if (subMenuId === "app_sfe_dev") {
      $("#main").load("application/sfe/SFEDevelopment.html");
    }
  };

  // ************* SFE *************************
});
