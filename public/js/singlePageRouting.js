var SinglePageRouter = SinglePageRouter || (function(){
  let _page = '';
  
  return {
    init: function(page) {
      this._page = page;
    },
    loadContent: function() {
      switch (this._page) {
        case "home":
          this.updateContent("home", false);
          break;
        case "saved":
          this.updateContent("saved", false);
          break;
        case "notes":
          this.updateContent("notes", false);
          break;
        case "journal":
          this.updateContent("journal", false);
          break;
        case "bible":
          this.updateContent("bible", false);
          break;
        case "profile":
          this.updateContent("profile", false);
          break;
        case "icons":
          this.updateContent("icons", false);
          break;
        case "map":
          this.updateContent("map", false);
          break;
        case "notifications":
          this.updateContent("notifications", false);
          break;
        case "tables":
          this.updateContent("tables", false);
          break;
        case "typography":
          this.updateContent("typography", false);
          break;
        case "user":
          this.updateContent("user", false);
          break;
        case "upgrade":
          this.updateContent("upgrade", false);
          break;
        default:
          this.updateContent("home", false);
          break;
      }
    },
    /* changeActive: function(link) {
      $('.sidebar-wrapper .active').removeClass('active');
      link.parent().addClass('active');
      let height = link.position();
      $('.moving-arrow').css('transform', 'translate3d(0px, ' + height + 'px, 0px)');
    },
    updateHistory: function(path) {
      history.pushState(null, null, '/dashboard/' + path);
    }, */
    updateContent: function(page, checkPath) {
      if (location && (location.pathname == '/dashboard/' + page || location.pathname == 'dashboard/' + page) && checkPath) {
        return;
      }
      let parentRouter = this;
      let link = $('.sidebar .' + page + '-link');
      $('.sidebar-wrapper a').off('click');
      $('.content').load('/dashboard/content/' + page, function() {
        $('.sidebar-wrapper .active').removeClass('active');
        link.parent().addClass('active');
        let height = link.position().top - 20;
        $('.moving-arrow').css('transform', 'translate3d(0px, ' + height + 'px, 0px)');
        history.pushState(null, null, '/dashboard/' + page);
        if (page == 'saved' || page == 'notes' || page == 'journal') {
          $('.navbar-brand').html('<nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><span class="home-link">Home</span></li><li class="breadcrumb-item active" aria-current="page">' + page + '</li></ol></nav>');
        } else {
          $('.navbar-brand').html(page);
        }
        parentRouter.setCallbacks();
      });
      /* home: function() {
        let link = $('#home-link');
        $('.content').load('/dashboard/content/home', function() {
          SinglePageRouter.changeActive(link, 0);
          SinglePageRouter.updateHistory('home');
        });
      },
      saved: function() {
        let link = $('#saved-link');
        $('.content').load('/dashboard/content/saved', function() {
          SinglePageRouter.changeActive(link, 60);
          SinglePageRouter.updateHistory('saved');
        });
      },
      notes: function() {
        let link = $('#notes-link');
        $('.content').load('/dashboard/content/notes', function() {
          SinglePageRouter.changeActive(link, 120);
          SinglePageRouter.updateHistory('notes');
        });
      },
      journal: function() {
        let link = $('#journal-link');
        $('.content').load('/dashboard/content/journal', function() {
          SinglePageRouter.changeActive(link, 180);
          SinglePageRouter.updateHistory('journal');
        });
      },
      bible: function() {
        let link = $('#bible-link');
        $('.content').load('/dashboard/content/bible', function() {
          SinglePageRouter.changeActive(link, 240);
          SinglePageRouter.updateHistory('bible');
        });
      },
      icons: function() {
        let link = $('#icons-link');
        $('.content').load('/dashboard/content/icons', function() {
          SinglePageRouter.changeActive(link, 60);
          SinglePageRouter.updateHistory('icons');
        });
      },
      map: function() {
        let link = $('#map-link');
        $('.content').load('/dashboard/content/map', function() {
          SinglePageRouter.changeActive(link, 120);
          SinglePageRouter.updateHistory('map');
        });
      },
      notifications: function() {
        let link = $('#notifications-link');
        $('.content').load('/dashboard/content/notifications', function() {
          SinglePageRouter.changeActive(link, 180);
          SinglePageRouter.updateHistory('notifications');
        });
      },
      tables: function() {
        let link = $('#tables-link');
        $('.content').load('/dashboard/content/tables', function() {
          SinglePageRouter.changeActive(link, 300);
          SinglePageRouter.updateHistory('tables');
        });
      },
      typography: function() {
        let link = $('#typography-link');
        $('.content').load('/dashboard/content/typography', function() {
          SinglePageRouter.changeActive(link, 360);
          SinglePageRouter.updateHistory('typography');
        });
      },
      user: function() {
        let link = $('#user-link');
        $('.content').load('/dashboard/content/user', function() {
          SinglePageRouter.changeActive(link, 240);
          SinglePageRouter.updateHistory('user');
        });
      },
      upgrade: function() {
        let link = $('#upgrade-link');
        $('.content').load('/dashboard/content/upgrade', function() {
          SinglePageRouter.changeActive(link, 0);
          SinglePageRouter.updateHistory('upgrade');
        });
      } */
    },
    setCallbacks: function() {
      let parentRouter = this;
      $('.home-link').click(function() {
        parentRouter.updateContent("home", true);
      });
      $('.saved-link').click(function() {
        parentRouter.updateContent("saved", true);
      });
      $('.notes-link').click(function() {
        parentRouter.updateContent("notes", true);
      });
      $('.journal-link').click(function() {
        parentRouter.updateContent("journal", true);
      });
      $('.bible-link').click(function() {
        parentRouter.updateContent("bible", true);
      });
      $('.profile-link').click(function() {
        parentRouter.updateContent("profile", true);
      });
      $('.icons-link').click(function() {
        parentRouter.updateContent("icons", true);
      });
      $('.map-link').click(function() {
        parentRouter.updateContent("map", true);
      });
      $('.notifications-link').click(function() {
        parentRouter.updateContent("notifications", true);
      });
      $('.tables-link').click(function() {
        parentRouter.updateContent("tables", true);
      });
      $('.typography-link').click(function() {
        parentRouter.updateContent("typography", true);
      });
      $('.user-link').click(function() {
        parentRouter.updateContent("user", true);
      });
      $('.upgrade-link').click(function() {
        parentRouter.updateContent("upgrade", true);
      });
    }
  };
}());