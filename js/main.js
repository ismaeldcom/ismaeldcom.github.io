(function() {
  var anchor, closeModal, get, i, len, modal, openModal, parseHTML, ref;

  ref = document.getElementsByTagName('a');
  for (i = 0, len = ref.length; i < len; i++) {
    anchor = ref[i];
    if (anchor.href.indexOf('#')) {
      anchor.addEventListener('click', function(event) {
        var hash;
        event.preventDefault();
        hash = this.href.slice(this.href.indexOf('#') + 1);
        if (hash === '') {
          return closeModal();
        } else {
          return get('projects.html', function(html) {
            return openModal(parseHTML(html).getElementById(hash).innerHTML);
          });
        }
      });
    }
  }

  parseHTML = function(htmlString) {
    return (new DOMParser).parseFromString(htmlString, 'text/html');
  };

  get = function(url, next) {
    var request;
    request = new XMLHttpRequest;
    request.open('GET', url, true);
    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        return next(this.response);
      }
    };
    return request.send();
  };

  modal = document.getElementById('modal');

  openModal = function(content) {
    modal.getElementsByTagName('article')[0].innerHTML = content;
    modal.classList.add('opened');
    return document.body.classList.add('modal');
  };

  closeModal = function() {
    modal.classList.remove('opened');
    return document.body.classList.remove('modal');
  };

}).call(this);

 //# sourceMappingURL=main.js.map