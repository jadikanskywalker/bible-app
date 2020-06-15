$(document).ready(function() {
  const books = [
        'Genesis',         'Exodus',          'Leviticus',     'Numbers',
        'Deuteronomy',     'Joshua',          'Judges',        'Ruth',
        '1 Samuel',        '2 Samuel',        '1 Kings',       '2 Kings',
        '1 Chronicles',    '2 Chronicles',    'Ezra',          'Nehemiah',
        'Esther',          'Job',             'Psalms',         'Proverbs',
        'Ecclesiastes',    'Song of Songs', 'Isaiah',        'Jeremiah',
        'Lamentations',    'Ezekiel',         'Daniel',        'Hosea',
        'Joel',            'Amos',            'Obadiah',       'Jonah',
        'Micah',           'Nahum',           'Habakkuk',      'Zephaniah',
        'Haggai',          'Zechariah',       'Malachi',       'Matthew',
        'Mark',            'Luke',            'John',          'Acts',
        'Romans',          '1 Corinthians',   '2 Corinthians', 'Galatians',
        'Ephesians',       'Philippians',     'Colossians',    '1 Thessalonians', 
        '2 Thessalonians', '1 Timothy',       '2 Timothy',     'Titus',
        'Philemon',        'Hebrews',         'James',         '1 Peter',
        '2 Peter',         '1 John',          '2 John',        '3 John',
        'Jude',            'Revelation'
    ];  
  const booksObjects = [
        {name: 'Genesis', chapters: 50},
        {name: 'Exodus', chapters: 40},
        {name: 'Leviticus', chapters: 27},
        {name: 'Numbers', chapters: 36},
        {name: 'Deuteronomy', chapters: 34},
        {name: 'Joshua', chapters: 24},
        {name: 'Judges', chapters: 21},
        {name: 'Ruth', chapters: 4},
        {name: '1 Samuel', alt: 'I Samuel', chapters: 31},
        {name: '2 Samuel', alt: 'II Samuel', chapters: 24},
        {name: '1 Kings', alt: 'I Kings', chapters: 22},
        {name: '2 Kings',  alt: 'II Kings', chapters: 25},
        {name: '1 Chronicles', alt: 'I Chronicles', chapters: 29},
        {name: '2 Chronicles',  alt: 'II Chronicles', chapters: 36},
        {name: 'Ezra', chapters: 10},
        {name: 'Nehemiah', chapters: 13},
        {name: 'Esther', chapters: 10},
        {name: 'Job', chapters: 42},
        {name: 'Psalms', alt: 'Psalm', chapters: 150},
        {name: 'Proverbs', chapters: 31},
        {name: 'Ecclesiastes', chapters: 12},
        {name: 'Song of Songs', alt: 'Song of Solomon', chapters: 8},
        {name: 'Isaiah', chapters: 66},
        {name: 'Jeremiah', chapters: 52},
        {name: 'Lamentations', chapters: 5},
        {name: 'Ezekiel', chapters: 48},
        {name: 'Daniel', chapters: 12},
        {name: 'Hosea', chapters: 14},
        {name: 'Joel', chapters: 3},
        {name: 'Amos', chapters: 9},
        {name: 'Obadiah', chapters: 1},
        {name: 'Jonah', chapters: 4},
        {name: 'Micah', chapters: 7},
        {name: 'Nahum', chapters: 3},
        {name: 'Habakkuk', chapters: 3},
        {name: 'Zephaniah', chapters: 3},
        {name: 'Haggai', chapters: 2},
        {name: 'Zechariah', chapters: 14},
        {name: 'Malachi', chapters: 4},
        {name: 'Matthew', chapters: 28},
        {name: 'Mark', chapters: 16},
        {name: 'Luke', chapters: 24},
        {name: 'John', chapters: 21},
        {name: 'Acts', chapters: 28},
        {name: 'Romans', chapters: 16},
        {name: '1 Corinthian', alt: 'I Corinthian', chapters: 16},
        {name: '2 Corinthians', alt: 'II Corinthian', chapters: 13},
        {name: 'Galatians', chapters: 6},
        {name: 'Ephesians', chapters: 6},
        {name: 'Philippians', chapters: 4},
        {name: 'Colossians', chapters: 4},
        {name: '1 Thessalonians', alt: 'I Thessalonians', chapters: 5},
        {name: '2 Thessalonians', alt: 'II Thessalonians', chapters: 3},
        {name: '1 Timothy', alt: 'I Timothy', chapters: 6},
        {name: '2 Timothy', alt: 'II Timothy', chapters: 4},
        {name: 'Titus', chapters: 3},
        {name: 'Philemon', chapters: 1},
        {name: 'Hebrews', chapters: 13},
        {name: 'James', chapters: 5},
        {name: '1 Peter', alt: 'I Peter', chapters: 5},
        {name: '2 Peter', alt: 'II Peter', chapters: 3},
        {name: '1 John', alt: 'I Jude', chapters: 5},
        {name: '2 John', alt: 'II Jude', chapters: 1},
        {name: '3 John', alt: 'III Jude', chapters: 1},
        {name: 'Jude', chapters: 1},
        {name: 'Revelation', chapters: 22}
    ];
    const chapters = [
        50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22
    ];
    const booksRegex = /Genesis|Exodus|Leviticus|Numbers|Deuteronomy|Joshua|Judges|Ruth|1\s?Samuel|2\s?Samuel|1\s?Kings|2\s?Kings|1\s?Chronicles|2\s?Chronicles|Ezra|Nehemiah|Esther|Job|Psalms|Proverbs|Ecclesiastes|Song\sof\sSongs|Isaiah|Jeremiah|Lamentations|Ezekiel|Daniel|Hosea|Joel|Amos|Obadiah|Jonah|Micah|Nahum|Habakkuk|Zephaniah|Haggai|Zechariah|Malachi|Matthew|Mark|Luke|John|Acts|Romans|1\s?Corinthians|2\s?Corinthians|Galatians|Ephesians|Philippians|Colossians|1\s?Thessalonians|2\s?Thessalonians|1\s?Timothy|2\s?Timothy|Titus|Philemon|Hebrews|James|1\s?Peter|2\s?Peter|1\s?John|2\s?John|3\s?John|Jude|Revelation/gi;
    const numberBooks = [8, 9, 10, 11, 12, 13, 46, 47, 52, 53, 54, 55, 60, 61, 62, 63, 64];
    const numberOne = [8, 10, 12, 46, 52, 54, 60, 62];
    const numberTwo = [9, 11, 13, 47, 53, 55, 61, 63];
    const numberThree = 64;

    var currentChapters;
    var changeChapters = function() {
        var currentBook = $('#bible-book').val();
        var chapter = $('#bible-chapter');
        var currentChapter = chapter.val();
        var chapterSplit = currentChapter.split(':');
        for (i = 0; i < booksObjects.length; i++) {
            var bookObject = booksObjects[i];
            if (bookObject.name.toLowerCase().replace(/\s/g, '') == currentBook.toLowerCase().replace(/\s/g, '') || ('alt' in bookObject && bookObject.alt.toLowerCase().replace(/\s/g, '') == currentBook.toLowerCase().replace(/\s/g, ''))) {
                currentChapters = bookObject.chapters;
                break;
            }
        }
        if (chapterSplit.length === 1) {
           currentChapter = currentChapter.replace(/[^\d]/g, '');
            if (currentChapter < 1) {
                chapter.val(1);
            } else if (currentChapter > currentChapters) {
                chapter.val(currentChapters);
            } else {
                chapter.val(currentChapter);
            }
        } else if (chapterSplit.length === 2) {
            chapterSplit[0] = chapterSplit[0].replace(/[^\d]/g, '');
            chapterSplit[1] = chapterSplit[1].replace(/[^\d\,\-\s]/g, '');
            if (chapterSplit[0] < 1) {
                chapterSplit[0] = 1;
            } else if (chapterSplit[0] > currentChapters) {
                chapterSplit[0] = currentChapters;
            }
            chapter.val(chapterSplit.join(':'));
        } else {
            chapter.val(1);
        }
    }
    var changeValues = function() {
        var book = $('#bible-book');
        var chapter = $('#bible-chapter');
        var currentBook = book.val();
        var currentChapter = chapter.val();
        var chapterSplit = currentChapter.split(':');
        for (i = 0; i < booksObjects.length; i++) {
            var bookObject = booksObjects[i];
            if (bookObject.name.toLowerCase().replace(/\s/g, '') == currentBook.toLowerCase().replace(/\s/g, '')) {
                currentChapters = bookObject.chapters;
                break;
            } else if ('alt' in bookObject && bookObject.alt.toLowerCase().replace(/\s/g, '') == currentBook.toLowerCase().replace(/\s/g, '')) {
                currentChapters = bookObject.chapters;
                book.val(bookObject.name);
            }
        }
        if (chapterSplit.length === 1) {
            currentChapter = currentChapter.replace(/[^\d]/g, '');
            if (currentChapter < 1) {
                chapter.val(1);
            } else if (currentChapter > currentChapters) {
                chapter.val(currentChapters);
            } else {
                chapter.val(currentChapter);
            }
        } else if (chapterSplit.length === 2) {
            chapterSplit[0] = chapterSplit[0].replace(/[^\d]/g, '');
            chapterSplit[1] = chapterSplit[1].replace(/[^\d\,\-\s]/g, '');
            if (chapterSplit[0] < 1) {
                chapterSplit[0] = 1;
            } else if (chapterSplit[0] > currentChapters) {
                chapterSplit[0] = currentChapters;
            }
            chapter.val(chapterSplit.join(':'));
        } else {
            chapter.val(1);
        }
    }
    var changeInputWidth = function(which) {
      if (which.length > 0 & which.length <= 2) {
        for (i = 0; i < which.length; i++) {
          $('.card-search-' + which[i] + '-span').text($('.card-search-' + which[i]).val());
          var width = $('.card-search-' + which[i] + '-span').width();
          $('.card-search-' + which[i]).width(width + 7);
        }
      }
    }
    var changeTextSize = function(slider) {
      var sliderValue = slider.val() + 'px';
      $('.card-div, .card-copyright').css('font-size', sliderValue);
      scrollUpCheck();
    }
    var inputCheck = function(val) {
        if (val.match(booksRegex)) {
            return true;
        } else {
            return false;
        }
    }
    var scrollUpCheck = function(val) {
      var cardHeight = $('.card-verse').innerHeight();
      var contentHeight = $('.card-header').outerHeight() + $('.card-div').outerHeight() + $('.card-buttons').outerHeight() + $('.card-footer').outerHeight();
      if (contentHeight > cardHeight + 200) {
        $('#card-up').show();
      } else {
        $('#card-up').hide();
      }
    }
    var verseProcessing = function(json) {
        var outputHead = ['<div class="card-header"><div class="card-search-div"><pre class="card-search-book-span card-search-span">','</pre><input id="bible-book" class="card-search-book card-search" value="','" maxlength="25" autocomplete="nope"></div><div class="card-search-div"><span class="card-search-chapter-span card-search-span">', '</span><input id="bible-chapter" class="card-search-chapter card-search" value="', '" maxlength="15"></div><button class="btn btn-primary btn-round card-search-btn" id="card-search"><span class="nc-icon nc-zoom-split"></span></button></div>'];
        var book = json.book[0].book_name;
        var chapter = json.book[0].chapter_nr;
        var outputButtons = '<button id="card-full" class="btn btn-primary btn-round mt-0 mb-0" verse="'+ book + chapter + '">Full Chapter</button>';
        var verse = [];
        var outputFoot = '';
        jQuery.each(json.book, function(index, value) {
          var verses = [];
          if (index > 0) {
            outputFoot += '<p class="card-break">&#8226;&#8226;&#8226;</p>';
          }
          jQuery.each(value.chapter, function(i, v) {
            outputFoot += '<div class="card-div-unit"><span class="card-div-verse">' + v.verse_nr + '</span>' + v.verse + '</div>';
            verses.push(v.verse_nr);
          });
          verse.push(String(verses[0]));
          if (verses.length > 2) verse[verse.length - 1] += '-' + String(verses[verses.length - 1]);
          else if (verses.length > 1) verse[verse.length - 1] += ',' + String(verses[verses.length - 1]);
        });
        verse = verse.join(',');
        $('#bible-book').val(book);
        $('#bible-chapter').val(chapter + ':' + verse);
        changeInputWidth(['book', 'chapter']);
        $('.card-div').html(outputFoot);
        $('.card-buttons').html(outputButtons);

        if (chapter > 1) {
          $('#card-prev').fadeIn().attr('book', book).attr('chapter', Number(chapter) - 1);
        } else if (json.book[0].book_nr != 1) {
          $('#card-prev').fadeIn().attr('book', books[json.book[0].book_nr - 2]).attr('chapter', chapters[json.book[0].book_nr - 2]);
        } else {
          $('#card-prev').fadeOut();
        }
        if (chapter < chapters[json.book[0].book_nr - 1]) {
          $('#card-next').fadeIn().attr('book', book).attr('chapter', Number(chapter) + 1);
        } else if (json.book[0].book_nr != 1) {
          $('#card-next').fadeIn().attr('book', books[json.book[0].book_nr]).attr('chapter', 1);
        } else {
          $('#card-next').fadeOut();
        }

        $('#card-load').hide();
        scrollUpCheck();
        $('.card-div, .card-buttons, .card-footer').fadeIn();
        history.pushState(null, null, '/dashboard/' + 'bible' + '?verse=' + book + chapter + ':' + verse);
    }
    var chapterProcessing = function(json) {
        var book = json.book_name;
        var chapter = json.chapter_nr;
        var outputHead = '<div class="card-header"><div class="card-search-div"><pre class="card-search-book-span card-search-span">' + book + '</pre><input id="bible-book" class="card-search-book card-search" value="' + book + '" maxlength="25" autocomplete="nope"></div><div class="card-search-div"><span class="card-search-chapter-span card-search-span">' + chapter + '</span><input id="bible-chapter" class="card-search-chapter card-search" value="' + chapter + '" maxlength="15"></div><button class="btn btn-primary btn-round card-search-btn" id="card-search"><span class="nc-icon nc-zoom-split"></span></button></div>';
        var outputButtons = '';
        var outputFoot = '';
        jQuery.each(json.chapter, function(index, value) {
          outputFoot += '<div class="card-div-unit"><span class="card-div-verse">' + value.verse_nr + '</span>' + value.verse + '</div>';
        });
        $('#bible-book').val(book);
        $('#bible-chapter').val(chapter);
        changeInputWidth(['book', 'chapter']);
        $('.card-div').html(outputFoot);
        $('.card-buttons').html(outputButtons);

        if (chapter > 1) {
          $('#card-prev').fadeIn().attr('book', book).attr('chapter', chapter - 1);
        } else if (json.book_nr != 1) {
          $('#card-prev').fadeIn().attr('book', books[json.book_nr - 2]).attr('chapter', chapters[json.book_nr - 2]);
        } else {
          $('#card-prev').fadeOut();
        }
        if (chapter < chapters[json.book_nr - 1]) {
          $('#card-next').fadeIn().attr('book', book).attr('chapter', Number(chapter) + 1);
        } else if (json.book_nr != 66) {
          $('#card-next').fadeIn().attr('book', books[json.book_nr]).attr('chapter', 1);
        } else {
          $('#card-next').fadeOut();
        }

        $('#card-load').hide();
        scrollUpCheck();
        $('.card-div, .card-footer').fadeIn();
        history.pushState(null, null, '/dashboard/' + 'bible' + '?verse=' + book + chapter);
    }
    var errorProcessing = function(err = null) {
      if (err == 'timeout') {
        var output = '<div class="card-div-unit>Request timed out. Please try again.</div>';
      } else {
        var output = '<div class="card-div-unit>The verse could not be found.</div>';
      }
      $('.card-div').html(output);
      $('#card-prev, #card-next, .card-buttons, .card-footer, #card-load').hide();
      $('.card-div').fadeIn();
    }
    var setEvents = function() {
        $('#bible-book').on('change', function() {
            changeChapters();
            changeInputWidth(['chapter']);
        }).on('input paste keyup', function() {
            changeInputWidth(['book']);
        });
    
        $('#bible-chapter').on('change', function() {
            changeChapters();
            changeInputWidth(['chapter']);
        }).on('input paste keyupchange', function() {
            changeInputWidth(['chapter']);
        });
    
        $('#bible-book').autocomplete({
            lookup: books,
            onSelect: function (suggestion) {
                changeChapters();
                changeInputWidth('book');
            }
        });
      
        $(document)
          .on('input', '#textsize-slider', function() {
            changeTextSize($(this));
        })
          .keypress(function(e) {
            if (e.which == 13 && ($('#bible-book').is(':focus') || $('#bible-chapter').is(':focus'))) {
                $('#card-search').click();
            }
        });
    
        $('#card-search').click(function(e) {
            requestHandler('input', $('#card-prev'));
        });
      
        $('#card-prev, #card-next').click(function(e) {
          requestHandler('chapter', $(this));
        });
      
        $(window).resize(function() {
          scrollUpCheck();
        });
      
        $('#card-up').click(function() {
          $('.card-verse').animate({
            scrollTop: 0
          }, 700);
        });
    }
    setEvents();

    var requestHandler = function(val, val2) {
        if (val == 'input') {
          changeValues();
          var book = $('#bible-book').val();
          var chapter = $('#bible-chapter').val();
          if (inputCheck(book)) {
            var verse = book + chapter;
          } else {
            errorProcessing();
            return;
          }
        } else if (val == 'verse') {
          verse = val2.attr('verse');
        } else if (val == 'chapter') {
          var book = val2.attr('book');
          var chapter = val2.attr('chapter');
          if (inputCheck(book) && chapter > 0 && chapter <= chapters[books.indexOf(book)]) {
            var verse = book + chapter;
          } else {
            errorProcessing();
            return;
          }
        } else if (val == 'manual') {
          if (typeof val2 == 'string') {
            var verse = val2;
          } else {
            errorProcessing();
            return;
          }
        } else {
          errorProcessing();
          return;
        }
        $('.card-div, .card-buttons, .card-footer').hide();
        $('#card-load').show();
        $.ajax({
          url:'https://getbible.net/json',
          dataType: 'jsonp',
          data: 'p=' + verse + '&v=kjv',
          error: function(jqXHR, textStatus, errorThrown) {
            errorProcessing(textStatus);
          },
          success: function(json){
            if (json.type == "chapter") {
              chapterProcessing(json);
            } else if (json.type == 'verse') {
              verseProcessing(json);
              $('#card-full').click(function() {
                requestHandler('verse', $(this));
              });
            } else if (json.type == 'book') {
              errorProcessing();
              return;
            }
          },
          timeout: 5000
        });
    }
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('verse')) {
      requestHandler('manual', urlParams.get('verse'));
    } else {
      requestHandler('manual', 'Matthew1');
    }
    
});
