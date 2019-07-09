function EmptyNoteListDouble () {
  this.notes = []
}

EmptyNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testEmptyNoteModel () {
  noteListView = new NoteListView(EmptyNoteListDouble)
  htmlOutput = 'no notes'
  testName = 'test that it returns an html string for an empty note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();

function OneNoteListDouble () {
  this.notes = ['single test note']
}

OneNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testOneNoteModel () {
  noteListView = new NoteListView(OneNoteListDouble)
  htmlOutput = `<ul><li><div>single test note</div></li>`
  testName = 'test that it returns an html string for a one note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();

function SeveralNoteListDouble () {
  this.notes = ['single test note','second test note', 'third test note']
}

SeveralNoteListDouble.prototype.displayNotes = function () {
  return this.notes
};

(function testOneNoteModel () {
  noteListView = new NoteListView(SeveralNoteListDouble)
  htmlOutput = `<ul><li><div>single test note</div></li><ul><li><div>second test note</div></li><ul><li><div>third test note</div></li>`
  testName = 'test that it returns an html string for a several note model'
  assert.isTrue(noteListView.printHtml() === htmlOutput, testName)
})();
