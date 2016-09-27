import apiUrl from '../api.url'

export default class UserService {
  /* @ngInject */
  constructor ($http) {
    var service = this
    service.$http = $http
    service.route

    service.getUser = function (username) {
      return this.$http.get(apiUrl + '/users/' + username)
    }
    this.getFlights = function () {
      return this.$http.get(apiUrl + '/flights')
    }
  }
}
