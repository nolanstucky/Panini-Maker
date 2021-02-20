$(document).ready(function(){
    $("#submit-button").on("click", function(event){
        event.preventDefault();

        var panini = {
            name: $("#enter_text").val().trim(),
            eaten: 0
        }

        $.ajax("/api/panini", {
            type: "POST",
            data: panini
        }).then(
            function(){
                location.reload();
            }
        )
    })

    $(".eat-it").on("click", function(event){
        let paniniId = $(this).data("id");

        let ifEaten = {
            eaten: 1
        }

        $.ajax(`/api/panini/${paniniId}`, {
            type:"PUT",
            data: ifEaten
        }).then(
            function() {
                // location.reload();
            }
        )

    })

    $(".delete-it").on("click", function(event){
        let id = $(this).data("id");
        console.log("test delete button")
        $.ajax(`/api/panini/${id}`,{
            type: "DELETE"
        }).then(
            function() {
                // location.reload();
            }
        )
    })
})

