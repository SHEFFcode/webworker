//receive messages
self.onmessage = function (e) {
  var messageObject = e.data;
  var message = messageObject.messagekey;
  setTimeout(function () {
    self.postMessage(message + 'Processed')}, 1000);
//coment
};
