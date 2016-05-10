$(document).ready(function() {
//    var sqlite3 = require('sqlite3').verbose();
//    var db = new sqlite3.Database('./cgk.db');

    $('button#addQuestion').click(function() {
        var arr = { questionText : 'Где можно посрать?', image: 'Какой-то левый путь, пустой' };
        $.ajax({
            url: '/admin/question',
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(msg) {
                console.log(msg);
            },
            error: function(msg) {
                console.log('алахакбар ошибка на подходе ' + msg);
            }
        });
    });

});