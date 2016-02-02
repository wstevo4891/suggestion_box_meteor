Suggestions = new Mongo.Collection("suggestions");

if (Meteor.isClient) {
  angular.module('socially', ['angular-meteor', 'ui.router']);

  angular.module('socially').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
 
    $stateProvider
      .state('parties', {
        url: '/suggestions',
        template: '<parties-list></parties-list>'
      })
      .state('partyDetails', {
      	url: '/suggestions/:suggestionId',
      	template: '<party-details></party-details>'
      });
 
    $urlRouterProvider.otherwise("/suggestions");
  });

  angular.module('socially').directive('partiesList', function() {
    return {
      restrict: 'E',
      templateUrl: 'parties-list.html',
      controllerAs: 'partiesList',
      controller: function($scope, $reactive) {
        $reactive(this).attach($scope);

        this.newSuggestion = {};
 
        this.helpers({
          suggestions: () => {
            return Suggestions.find({});
          }
        });

        this.addSuggestion = () => {
          Suggestions.insert(this.newSuggestion);
          this.newSuggestion = {};
        };

        this.upVote = function(index) {
          this.suggestion[index].upvotes += 1; 
        };

        this.removeSuggestion = (suggestion) => {
          Suggestions.remove({_id: suggestion._id});
        }
      }
    }
  });

  angular.module('socially').directive('partyDetails', function () {
    return {
      restrict: 'E',
      templateUrl: 'party-details.html',
      controllerAs: 'partyDetails',
      controller: function ($scope, $stateParams, $reactive) {
        $reactive(this).attach($scope);

        this.helpers({
          suggestion: () => {
            return Suggestions.findOne({ _id: $stateParams.suggestionId });
          },
          comments: () => {
            return Suggestions.comments.find({ _id: $stateParams.suggestionId });
          }
        });

        this.addComment = () => {
          suggestion.comments.insert(this.newComment);
          this.newComment = {};
        };

        this.upVoteComment = (comment) => {
          comment.upvotes += 1; 
        };
      }
    }
  });
}





























