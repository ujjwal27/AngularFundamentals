/**
 * Created by uvadde on 6/17/2016.
 */
'use strict';

myAppModule.controller("EventDetailsController",
    function EventDetailsController($scope) {

        $scope.snippet='<span style="color:red">Hi there</span>'
        $scope.boolValue = true;
        $scope.myStyle = {color: 'red'};
        $scope.myClass = "blue";
        $scope.buttonDisbaled = true;

        $scope.sortorder = 'name';

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '4:00 PM',
            location: {
                address: 'Google Head Quarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Master Class',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In This session ull learn about ins and outs of directives',
                    upVoteCount: 0
                },
                {
                    name: 'scopes for fun and profit',
                    creatorName: 'John Smith',
                    duration: 2,
                    level: 'Introductory',
                    abstract: ' This session will be closer look at scopes',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Jane Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are beginning of every thing',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);
