$(function() {
  $('#addLink').submit(function(event) {
    event.preventDefault();

    var name = $('#name').val();
    var folder = $('#folder').val();

    $('input').hide();
    $('body').append('<p>' + name + ' added to ' + folder + '</p>');

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {


      var data = {
        folder: folder,
        name: name,
        url: tabs[0].url
      };

      $.post('https://linkd.herokuapp.com/api/link/plugin/create', data)
      .done(function(result) {
        console.log(result);
      });

    });

  });
});
