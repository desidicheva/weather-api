//Desislava Dicheva
//November 26, 2018

$( document ).ready(function() {

    $("#view").click(function (e) {
        var validate = Validate();
        $("#forecast").html(validate);
        if (validate.length == 0) {
            $.post("http://api.openweathermap.org/data/2.5/weather?id=" + 
            $("input[id='cityChoice']:checked").val() + 
            "&appid=8358cc506b8a7f6961d00310169e3e9e&units=metric",
            function (result, status, xhr) {
               var list = "<ul>" 
               + "<li>Name/Location : "  + result['name']  + "</li>"
               + "<li> Temperature: "  + result["main"]["temp"]  + "&#8451;</li>"
               + "<li>Low Temperature: "  + result["main"]["temp_min"]  + "&#8451;</li>"
               + "<li>High Temperature : "  + result["main"]["temp_max"]  + "&#8451;</li>"
               + "<li>Description/Conditions: "  + result["weather"][0]["description"]  + "</li>"
               + "</ul>";

                $("#forecast").html(list);
            }
            ).fail(function (xhr, status, error) {
                alert("Result: " + status + " " + error + " " + 
                xhr.status + " " + xhr.statusText);
            });
        }
    });


   function Validate() {
        var errorForecast = "";
        if ($("input[id='cityChoice']").is(":checked") == false) {
            errorForecast += "? Select A City";
        }
        return errorForecast;
    }
});

    

   