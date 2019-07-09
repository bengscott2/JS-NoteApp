(function testNoteListExists() {
  var noteList = new NoteList();
  var object = new Object();
  var testName = "Test note list model object exists"
  assert.isTrue(typeof object === typeof noteList, testName )
})();

(function testNoteListAddsNote() {
  var noteList = new NoteList();
  var noteDouble1 = new Double('Note')
  var addedNote = noteList.addNote(noteDouble1);
  var testName = "Test note list adds a new note"
  assert.isTrue(addedNote === noteDouble1, testName)
})();



// (function testNoteListHoldsNotes() {
//   var noteList = new NoteList();
//   var noteDouble1 = new Double('Note')
//   var noteDouble2 = new Double('Note')
//   var testName = "Test displayNotes function"
//
//   assert.isTrue(noteList.displayNotes === [noteDouble1, noteDouble2], testName)
// };)();
