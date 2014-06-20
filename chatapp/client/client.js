/**
* Templates
*/




Template.input.events = {
  'keydown input#message' : function (event) {
        var d = new Date();
    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        var name = Meteor.user().profile.name;
      else
         var name = 'Anonymous';
        var message = document.getElementById('message');
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

Template.messages.messages = function() {
  return Messages.find({

  }, { sort: {
    time: -1
  },
  limit:15
  });
};
