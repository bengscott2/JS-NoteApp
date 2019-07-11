(function (exports) {

  var SingleNoteView = function (noteModel) {
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
