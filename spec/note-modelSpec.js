function testNoteModelObjectExists() {
  var note = new Note();
  assert.isTrue(typeof Object === typeof Note, "Test note model object exists")
};

testNoteModelObjectExists();
