$(document).ready(function () {
  (function () {
    [].slice.call(document.querySelectorAll('.tabs')).forEach(function (el) {
      new CBPFWTabs(el);
    });
  })();
  $('#main-nav').sidr();
  $('#fullpage').fullpage({
    'verticalCentered': true,
    'easing': 'easeInOutCirc',
    'css3': false,
    'scrollingSpeed': 900,
    'slidesNavigation': true,
    'slidesNavPosition': 'bottom',
    'easingcss3': 'ease',
    'navigation': true,
    'anchors': ['Home', 'Features', 'About', 'Video', 'Affirmations', 'Whyredessnce', 'Team', 'Download', 'Contact'],
    'navigationPosition': 'left'
  });
  $('.whyredessnce-content, .affirmations-content').css('height', $(window).height());

  // CONTACT FORM

  $(document).mouseup(function (e) {
    if ($(".sidr-open ")[0]) {
      var container = $("#sidr");

      if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        $(".sidr-open #main-nav").click();
      }
    }
  });


  $('#submit').click(function () {

    $.post("contact.php", $("#contact-form").serialize(), function (response) {
      $('#success').fadeIn().html(response);
      $('#success').delay(2000).fadeOut();
    });
    return false;

  });


});
jQuery(window).load(function () {
  jQuery('#preloader').fadeOut();
});


// cursor animation

document.onmousedown = function (event) {
  var trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = event.clientX - 30 + 'px';
  trail.style.top = event.clientY - 30 + 'px';
  document.body.appendChild(trail);

  setTimeout(function () {
    document.body.removeChild(trail);
  }, 1000);
};


// ChatBot 

(function (w, d, s, o, f, js, fjs) {
  w["botsonic_widget"] = o;
  w[o] =
    w[o] ||
    function () {
      (w[o].q = w[o].q || []).push(arguments);
    };
  (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
  js.id = o;
  js.src = f;
  js.async = 1;
  fjs.parentNode.insertBefore(js, fjs);
})(window, document, "script", "Botsonic", "https://widget.writesonic.com/CDN/botsonic.min.js");
Botsonic("init", {
  serviceBaseUrl: "https://api-azure.botsonic.ai",
  token: "c4ab0ad9-ebbe-458e-92a0-28991682f457",
});

// Background Audio 

var tom1 = new Audio("./audio/audio.mp3");

tom1.loop = true;

tom1.play();
document.querySelector("#checkbox").addEventListener("change", function () {
  if (this.checked) {
    tom1.play();
  } else {
    tom1.pause();
  }
});

// pop up video 

function openPopup(videoId) {
  var popupContainer = document.getElementById('popup-container');
  var youtubeIframe = document.getElementById('youtube-iframe');

  youtubeIframe.src = "https://www.youtube.com/embed/" + videoId;
  popupContainer.classList.add('show');
}

function closePopup() {
  var popupContainer = document.getElementById('popup-container');
  var youtubeIframe = document.getElementById('youtube-iframe');

  youtubeIframe.src = "";
  popupContainer.classList.remove('show');
}

var popupButtons = document.querySelectorAll('.play-button');
popupButtons.forEach(function(button) {
  button.addEventListener('click', function() {
      var videoId = this.getAttribute('data-video-id');
      openPopup(videoId);
  });
});

/*================ cursor trail =================*/
document.onmousedown = function(event) {
  var trail = document.createElement('div');
  trail.className = 'cursor-trail';
  trail.style.left = event.clientX - 30 + 'px';
  trail.style.top = event.clientY - 30 + 'px';
  document.body.appendChild(trail);

  setTimeout(function() {
    document.body.removeChild(trail);
  }, 1000);
};  


// Video Presentation 

const videoPlayer = document.querySelector('.video-presentation iframe');

function playVideo() {
    if (videoPlayer) {
        videoPlayer.contentWindow.postMessage('play', '*');
    } else {
        console.error('Video player iframe not found');
    }
}

function pauseVideo() {
    if (videoPlayer) {
        videoPlayer.contentWindow.postMessage('pause', '*');
    } else {
        console.error('Video player iframe not found');
    }
}

if (videoPlayer) {
    videoPlayer.onload = function() {
        videoPlayer.contentWindow.postMessage('addEventListener', 'ended');
        videoPlayer.contentWindow.postMessage('ended', '*');
        videoPlayer.contentWindow.postMessage('play', '*');
    };

    window.addEventListener('message', event => {
        if (event.data === 'ended') {
            playVideo(); // Restart the video
        }
    });

    // Start the video when the page loads
    playVideo();
} else {
    console.error('Video player iframe not found');
}


// shop button 

function visitStore(event) {
  event.stopPropagation(); // Prevent click event from bubbling to parent elements
  window.location.href = "https://wiredsaver.com/products";
}
