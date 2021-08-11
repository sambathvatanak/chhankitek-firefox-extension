var moment = momentkh(moment);
var today = moment();
document.getElementById("contentArea").innerHTML = today.toKhDate();
var date = today.format("YYYY-MM-DD");
//$("#pickDate").val(date);
date = today.toNormalDate(date);
document.getElementById("contentAreaGeneral").innerHTML = date;

if ( $('[type="date"]').prop('type') != 'date' ) {
    $('[type="date"]').datepicker();
}

$(document).ready(function(){
    $("#pickDate").on('change', function () {
        $(document).on('keypress',function(e) {
            if(e.which == 13) {
                var date  = $("#pickDate").val();
                //$("#pickDate").val(date);
                var newDate = today.toKhDateParameter(undefined, date);           
                var normalDate = today.toNormalDate(date);
                document.getElementById("contentArea").innerHTML = newDate; //+ "<br>" + normalDate;
                document.getElementById("contentAreaGeneral").innerHTML = normalDate;
            }
        });
             
    });
});



