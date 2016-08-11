
  // var request = new XMLHttpRequest();

  // request.onload = function() {
  //   if (request.status === 200) {
  //     // Success!!
  //     var resp = request.responseText
  //     console.log('Success!' + resp);
  //   }
  // };

  // request.onerror = function() {
  //   console.log("server error");
  // };

  // request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=3256527.1677ed0.cdbc6ce2681742fab477b432f0f333ac&callback=events', true);
  // request.send();

function showEvents (data) {
  var newContent = '';
//build string with called content
  for (var i = 0; i < data.data.length; i++) {
    newContent += '<div class="events">';
    newContent += '<img src="' + data.data[i].images.low_resolution.url + '"';
    newContent += ' alt="' + data.data[i].caption.text + '" />';
    newContent += '<p><b>' + data.data[i].caption.text + '</b></br>';
    newContent += '</div>';
  }
//update page with new content
document.getElementById('content').innerHTML = newContent;
}

