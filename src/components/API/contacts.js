export default class Contacts{
  static async getContacts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = response.json();
    return result;
  }
}
