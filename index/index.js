$(document).ready(function(){
    console.log('jquery working');
    $('#timer-content').click(function(){
        console.log('button clicked');
        $('#content').load('../timer/timer.html');
    })
})