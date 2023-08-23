$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const taskName = $('#task-name').val();
        const newTask = $(`<li></li>`);
        $(newTask).append(taskName);
        $(newTask).appendTo('ol');
        $('#task-name').val('');
    });

    $('#sorted-list').on('click', function () {
        $('li:hover').addClass('completed');
    });
});