(function testNoteModelObjectExists() {
  var note = new Note();
  var object = new Object();
  assert.isTrue(typeof object === typeof note, "Test note model object exists")
})();

(function testNoteAcceptsString() {
  var note = new Note('My favourite language is JavaScript');
  assert.isTrue('My favourite language is JavaScript' === note.displayNote(), 'Test note model accepts string')
})();

(function testNoteHasIdValue() {
  var note = new Note('My favourite language is JavaScript');
  assert.isTrue(note.id === 0, 'test note has id of 0')
})();
