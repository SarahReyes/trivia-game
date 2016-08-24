// Hayao Miyazaki
// What was Miyazaki's first feature length film?
// answer: The Castle of Cagliostro

// First page begins with a 'start' button
// Name of the game on the first page
// User will click the start button and it fades to the next 'page'
// Once the user clicks 'start', it starts a timer on the next page
// The timer starts counting down when the 'start' button is clicked
// There is a question displayed on the screen
// There are multiple choice answers, in individual buttons
// The user clicks on a button to choose their answer
// The user can only click one button option
// The computer records the user click as true or false
// The computer increments or decrements if they got it true or false
// When the timer hits 0, the page switches
// The page shown after the timer ends has Correct Answers, Incorrect Answers,..
// ...and Unanswered

// use .hide() and .show() for each "page"?
var timeLeft = 10;

$(document).ready(function() {
    // Trivia questions are hidden upon first page load
    $('.all-questions').hide();

    // Function for when the user clicks the 'start' button
    $('.start-button').click(function() {
        // 'Start' button is now hidden and trivia is shown
        $('button').hide();
        $('.all-questions').show();
        // 'Counter' starts on click and counts down

            var countDown = setInterval(function() {
                $('.count-down').text("TIME REMAINING :" + timeLeft--);
                if (timeLeft === 0) {
                    clearInterval(countDown);
                    $('.all-questions').hide();
                    $('.count-down').hide();
                }
            }, 1000);
    });
});
