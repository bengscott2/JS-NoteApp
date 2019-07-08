var assert = {
  isTrue: function(assertionToCheck, test) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + test + " is not truthy");
    } else {
      console.log(test + " passed!")
    }
  }
};
