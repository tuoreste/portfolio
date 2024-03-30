document.addEventListener("DOMContentLoaded", function() {
    var coverCheckbox = document.getElementById("checkbox-cover");
    var pageCheckboxes = document.querySelectorAll(".checkbox-page");

    coverCheckbox.addEventListener("change", function() {
        if (!coverCheckbox.checked) {
            pageCheckboxes.forEach(function(checkbox) {
                checkbox.checked = false;
            });
        }
    });
});
