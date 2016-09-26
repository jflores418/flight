import apiUrl from '../api.url'

export default class UserService {
  /* @ngInject */
  constructor ($http) {
    var service = this
    service.$http = $http
    service.user
    service.route

    service.login = function (username) {
      return this.$http.get(apiUrl + '/users/' + username)
    }
    this.getFlights = function () {
      return this.$http.get(apiUrl + '/flights')
    }
    this.getLocations = function () {
      return this.$http.get(apiUrl + '/location').then(result => result.data)
    }
    this.getMarkerByCityName = function (name) {
      return this.$http.get(`${this.apiUrl}/location/name`, { params: { name } })
    }
  }
}
