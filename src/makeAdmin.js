import { getFunctions, httpsCallable } from 'firebase/functions';

export const makeAdmin = (email) => {
  // Initialize Cloud Functions through Firebase with the correct region
  const functions = getFunctions(); // Use the default Firebase app instance
  const addAdminRole = httpsCallable(functions, 'addAdminRole');

  addAdminRole({ email }).then((result) => {
    console.log(result.data);
    alert(result.data.message);
  }).catch((error) => {
    console.error(error);
    alert(error.message);
  });
};