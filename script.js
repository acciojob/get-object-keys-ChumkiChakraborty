//your JS code here. If required.
// Create a student object with a name property
const student = {
  name: "John"
};

// Add a method to Object.prototype to get all keys
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Now you can call getKeys() on the student object
console.log(student.getKeys()); // Output: ['name']
