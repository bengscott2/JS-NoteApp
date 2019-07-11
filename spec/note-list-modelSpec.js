function NoteDouble (text, id = 0) {
    this.displayNote = text;
    this.id = id
};

(function testNoteListAddsNote() {
  var noteList = new NoteList();
  var noteDouble = NoteDouble
  var object = new Object
  var addedNote = noteList.addNote('test text', noteDouble);
  var testName = "Test note list adds a new note"
  assert.isTrue(typeof addedNote === typeof object, testName)
})();

(function testNoteListHoldsNotes() {
  var noteList = new NoteList();
  var noteDouble = NoteDouble
  var testName = "Test displayNotes function"
  noteList.addNote('test text1', noteDouble);
  noteList.addNote('test text2', noteDouble);
  assert.isTrue(noteList.displayNotes()[0].displayNote === 'test text1', testName)
  assert.isTrue(noteList.displayNotes().length === 2, testName)
})();

(function testNoteListAddsIdToNote() {
  var noteList = new NoteList();
  var noteDouble = NoteDouble
  var testName = "Test checks that addNote adds id to note"
  noteList.addNote('test text1', noteDouble);
  noteList.addNote('test text2', noteDouble);
  assert.isTrue(noteList.displayNotes()[0].id === 0, testName)
  assert.isTrue(noteList.displayNotes()[1].id === 1, testName)
})();
