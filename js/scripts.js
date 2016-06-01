$(document).ready(function () {
  $("form#appointment").submit(function(event) {
    event.preventDefault();

    var dayInput = $("#day").val();
    var dateInput = $("#date").val();

    $(".day").text(dayInput);
    $(".date").text(dateInput);
  })

})
