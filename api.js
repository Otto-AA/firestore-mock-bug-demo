const { getFirestore, collection } = require("firebase/firestore");

// just use firestore api
module.exports = {
  createCollection: () => collection(getFirestore(), 'users'),
};
