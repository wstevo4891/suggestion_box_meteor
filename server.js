if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Suggestions.find().count() === 0) {
      var suggestions = [
        {
          'title': 'Free pizza at club meetings',
          'upvotes': 15,
          comments: [
            {
              body: 'Heartily agree!',
              upvotes: 2
            },
            {
              body: 'YESSS!!!',
              upvotes: 5
            },
            {
              body: 'Hooray Pizza!',
              upvotes: 4
            }
          ]
        },
        {
          'title': 'End all club emails with Laffy Taffy jokes',
          'upvotes': 9,
          comments: [
            {
              body: 'I love those!',
              upvotes: 4
            },
            {
              body: 'Not my cup of tea',
              upvotes: 2
            }
          ]
        },
        {
          'title': 'Retrofit water fountain with Gatorade',
          'upvotes': 7,
          comments: [
            {
              body: 'This would be great after my lunch break workout',
              upvotes: 3
            }
          ]
        },
        {
          'title': 'Sing Bon Jovi\'s "Living on a Prayer" halfway throught meetings',
          'upvotes': 3,
          comments: [
            {
              body: 'Let\'s not and say we did',
              upvotes: 4
            },
            {
              body: 'How about just the first line of the chorus?',
              upvotes: 3
            },
            {
              body: 'Good idea',
              upvotes: 1
            }
          ]
        }
      ];
 
      for (var i = 0; i < suggestions.length; i++) {
        Suggestions.insert(suggestions[i]);
      }
    }
  });
}