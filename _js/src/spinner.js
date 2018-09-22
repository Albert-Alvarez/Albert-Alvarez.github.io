function mainLoaded() {
    $(".spinner-background").fadeOut("slow", function() {
        $(".spinner-background").addClass("loaded");
    });
}
$("main").on("load", mainLoaded()); 