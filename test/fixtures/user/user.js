// Import fixtures
const githubUserInfo = require('../auth/githubUserInfo')()

/**
 * User info for GitHub auth response
 * Multiple responses can be added to the array if required
 *
 * @return {Object}
 */
module.exports = () => {
  return [
    {
      username: 'ankur',
      first_name: 'Ankur',
      last_name: 'Narkhede',
      yoe: 0,
      img: './img.png',
      linkedin_id: 'nankurnarkhede',
      github_id: githubUserInfo[0].username,
      github_display_name: githubUserInfo[0].displayName,
      tokens: {
        githubAccessToken: 'githubAccessToken'
      }
    },
    {
      username: 'nikhil',
      first_name: 'Nikhil',
      last_name: 'Bhandarkar',
      yoe: 0,
      img: './img.png',
      github_id: 'whydonti',
      linkedin_id: 'nikhil-bhandarkar',
      twitter_id: 'whatifi'
    }
  ]
}
