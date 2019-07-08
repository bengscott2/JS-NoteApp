function testNoteModelObjectExists() {
  var note = new Note();
  assert.isTrue(typeof Object === typeof note, "Test note model object exists")
};

testNoteModelObjectExists();
