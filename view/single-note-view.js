(function (exports) {

  var SingleNoteView = function (noteModel = NoteModel) {
    var noteModel = noteModel;

    printHtml = function () {
      return `<div>${noteModel.displayNote()}</div>`
    }

    return {
      printHtml: printHtml
    }

  }

  exports.SingleNoteView = SingleNoteView
})(this);
