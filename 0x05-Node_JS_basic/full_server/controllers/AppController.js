/**
 * Contains the miscellaneous route handlers.
 * @author Yohannes Mebrahtom <https://github.com/johngit23>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
