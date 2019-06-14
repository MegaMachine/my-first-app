import * as firebase from 'firebase';

export class AuthService {
  signupUser(email: string, password: string)  {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
}
