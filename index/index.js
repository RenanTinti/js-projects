$(document).ready(function(){
    console.log('jquery working');
    $('#timer-content').click(function(){
        $('#content').load('../timer/timer.html');
    })

    $('#calculator-content').click(function(){
        $('#content').load('../calculator/calculator.html');
    })

    $('#drums-content').click(function(){
        $('#content').load('../drums/drums.html');
    })

    $('#colorsgame-content').click(function(){
        $('#content').load('../colors_game/colors_game.html');
    })

    $('#tictactoe-content').click(function(){
        $('#content').load('../tic_tac_toe/tic_tac_toe.html');
    })

    $('#tipcalculator-content').click(function(){
        $('#content').load('../tip_calculator/tip_calculator.html');
    })

    $('#todo-content').click(function(){
        $('#content').load('../todo_list/todo_list.html');
    })
})