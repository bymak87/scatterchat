/**
* Templates
*/

Template.messages.messages = function() {
  return Messages.find({}, { sort: { time: -1}});
};

// Template.messages.img_add = function() {
//   var hash = CryptoJS.MD5(git_email);
//   return img_add = "http://www.gravatar.com/avatar/" + hash;
// };

Template.input.events = {
  'keydown input#message' : function (event) {
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().profile.name;
      else
        var name = 'Anonymous';
        var message = document.getElementById('message');
        var d = new Date();
      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: d.toLocaleTimeString(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
};
