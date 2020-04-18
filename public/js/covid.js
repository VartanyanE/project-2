// RUNS THE COVID STATE RESUTLS

$(document).ready(function () {
  $("#button-addon2").on("keyup", function () {
    var value = $(this).val();
    $("#data tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
