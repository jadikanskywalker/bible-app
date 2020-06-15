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
    updateContent: function(page, checkPath, button = null) {
      if (location && (location.pathname == '/dashboard/' + page || location.pathname == 'dashboard/' + page) && checkPath) {
        return;
      }
      let parentRouter = this;
      let link = $('.sidebar .' + page + '-link');
      $('.sidebar-wrapper a').off('click');
      $('.content').load('/dashboard/get/' + page, function() {
        $('.sidebar-wrapper .active').removeClass('active');
        link.parent().addClass('active');
        let height = link.position().top - 20;
        $('.moving-arrow').css('transform', 'translate3d(0px, ' + height + 'px, 0px)');
        var verseAttr = button ? button.attr('verse') : null;
        if (page == 'bible' && verseAttr) {
          history.pushState(null, null, '/dashboard/' + page + '?verse=' + button.attr('verse'));
        } else {
          history.pushState(null, null, '/dashboard/' + page + window.location.search);
        }
        if (page == 'saved' || page == 'notes' || page == 'journal') {
          $('.navbar-brand').html('<nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><span class="bible-link">Bible</span></li><li class="breadcrumb-item active" aria-current="page">' + page + '</li></ol></nav>');
        } else {
          $('.navbar-brand').html('<span class="navbar-brand-span">' + page + '</span>');
        }
        parentRouter.setCallbacks();
      });
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
        parentRouter.updateContent("bible", true, $(this));
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
      $('.post-user-password').click(function() {
        parentRouter.postContent.user.password();
      });
    },
    /*postContent: {
      user: {
        profile: function() {
          $.ajax('./post/user/profile');
        },
        password: function() {
          $.post('./post/user/password', {
            oldPassword: $('#oldPassword').val(),
            newPassword: $('#newPassword').val(),
            confirmPassword: $('#confirmPassword').val()
          }).done(function(res) {
            alert('done');
          });
        }
      }
    }*/
  };
}());