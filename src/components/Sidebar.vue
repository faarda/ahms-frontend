<template>
  <!-- #Left Sidebar ==================== -->
  <div class="sidebar">
    <div class="sidebar-inner">
      <!-- ### $Sidebar Header ### -->
      <div class="sidebar-logo">
        <div class="peers ai-c fxw-nw">
          <div class="peer peer-greed">
            <a class="sidebar-link td-n" href="index.html">
              <div class="peers ai-c fxw-nw">
                <div class="peer">
                  <div class="logo">
                    <img src="@/assets/logo.png" alt="" />
                  </div>
                </div>
                <div class="peer peer-greed">
                  <h5 class="lh-1 mB-0 logo-text">AHMS</h5>
                </div>
              </div>
            </a>
          </div>
          <div class="peer">
            <div class="mobile-toggle sidebar-toggle">
              <a href="" class="td-n">
                <i class="ti-arrow-circle-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- ### $Sidebar Menu ### -->
      <ul class="sidebar-menu scrollable pos-r">
        <li class="nav-item mT-30 actived">
          <router-link to="/" class="sidebar-link">
            <span class="icon-holder">
              <i class="c-blue-500 ti-dashboard"></i>
            </span>
            <span class="title">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="icon-holder">
              <i class="c-orange-500 ti-book"></i>
            </span>
            <span class="title">Animal diseases</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="sidebar-link" to="/animals">List</router-link>
            </li>
            <li>
              <router-link class="sidebar-link" to="/animals/cattle">Cattle</router-link>
            </li>
            <li>
              <router-link class="sidebar-link" to="/animals/sheep">Sheep</router-link>
            </li>
            <li>
              <router-link class="sidebar-link" to="/animals/rabbit">Rabbit</router-link>
            </li>
            <li>
              <router-link class="sidebar-link" to="/animals/goat">Goat</router-link>
            </li>
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    // Sidebar links
    $(".sidebar .sidebar-menu li a").on("click", function() {
      const $this = $(this);

      if ($this.parent().hasClass("open")) {
        $this
          .parent()
          .children(".dropdown-menu")
          .slideUp(200, () => {
            $this.parent().removeClass("open");
          });
      } else {
        $this
          .parent()
          .parent()
          .children("li.open")
          .children(".dropdown-menu")
          .slideUp(200);

        $this
          .parent()
          .parent()
          .children("li.open")
          .children("a")
          .removeClass("open");

        $this
          .parent()
          .parent()
          .children("li.open")
          .removeClass("open");

        $this
          .parent()
          .children(".dropdown-menu")
          .slideDown(200, () => {
            $this.parent().addClass("open");
          });
      }
    });

    // Sidebar Activity Class
    const sidebarLinks = $(".sidebar").find(".sidebar-link");

    sidebarLinks
      .each((index, el) => {
        $(el).removeClass("active");
      })
      .filter(function() {
        const href = $(this).attr("href");
        const pattern = href[0] === "/" ? href.substr(1) : href;
        return pattern === window.location.pathname.substr(1);
      })
      .addClass("active");

    // ٍSidebar Toggle
    $(".sidebar-toggle").on("click", e => {
      $(".app").toggleClass("is-collapsed");
      e.preventDefault();
    });

    /**
     * Wait untill sidebar fully toggled (animated in/out)
     * then trigger window resize event in order to recalculate
     * masonry layout widths and gutters.
     */
    $("#sidebar-toggle").click(e => {
      e.preventDefault();
      setTimeout(() => {
        window.dispatchEvent(window.EVENT);
      }, 300);
    });
  }
};
</script>
