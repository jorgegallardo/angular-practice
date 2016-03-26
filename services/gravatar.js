angular.module('GravatarModule', [])
.factory('Gravatar', function GravatarFactory() {
  var avatarSize = 80;
  var avatarUrl = 'http://www.gravatar.com/avatar/';
  // return {
  //   generate: function(email) {
  //     return avatarUrl + md5(email).toString() + '?size=' + avatarSize.toString();
  //   }
  // };

  // If service contains only one function, instead of returning an object with that one function, you can just return the function.
  return function(email) {
    return avatarUrl + CryptoJS.MD5(email) + '?size=' + avatarSize.toString();
  };
});