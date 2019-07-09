function NoteDouble (text) {
    this.text = text;
};

NoteDouble.prototype.displayNote = function () {
  return this.text
};

function EmptyNoteListDouble () {
  this.notes = []
}

EmptyNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testEmptyNoteModel () {
  var emptyNoteListDouble = new EmptyNoteListDouble();
  noteListView = new NoteListView(emptyNoteListDouble)
  htmlOutput = 'no notes'
  testName = 'test that it returns an html string for an empty note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();


function OneNoteListDouble () {
  this.notes = [new NoteDouble('single test')]
}

OneNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testOneNoteModel () {
  var oneNoteListDouble = new OneNoteListDouble()
  noteListView = new NoteListView(oneNoteListDouble)
  htmlOutput = `<ul><li><div>single test</div></li></ul>`
  testName = 'test that it returns an html string for a one note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();

function SeveralNoteListDouble () {
  this.notes = [new NoteDouble('single test'),new NoteDouble('second test'), new NoteDouble('third test')]
}

SeveralNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testOneNoteModel () {
  var severalNoteListDouble = new SeveralNoteListDouble();
  noteListView = new NoteListView(severalNoteListDouble);
  htmlOutput = `<ul><li><div>single test</div></li></ul><ul><li><div>second test</div></li></ul><ul><li><div>third test</div></li></ul>`
  testName = 'test that it returns an html string for a several note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();
