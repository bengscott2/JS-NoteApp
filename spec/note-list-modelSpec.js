function testNoteListExists() {
  var noteList = new NoteList();
  var object = new Object();
  assert.isTrue(typeof object === typeof noteList, "Test note list model object exists")
};

testNoteListExists();
