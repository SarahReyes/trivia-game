// Hayao Miyazaki Trivia
// What was Miyazaki's first feature length film?
// answer: The Castle of Cagliostro
// Which Miyazaki film won Best Picture at the Academy Awards?
// answer: Spirited Away
// What year did Miyazaki begin his animation career?
// answer: 1963
// What other form of art is Miyazaki passionate about?
// answer: manga


// use .hide() and .show() for each "page"?
var timeLeft = 10;
var correctAnswers = [];
var incorrectAnswers = [];

$(document).ready(function() {
    // Trivia questions are hidden upon first page load
    $('.all-questions').hide();
    $('.count-down').hide();
    $('.answers-page').hide();
    $('.times-up').hide();

    // Function for when the user clicks the 'start' button
    $('.start-button').click(function() {
        // 'Start' button is now hidden and trivia is shown
        $('button').fadeOut(500);
        $('.all-questions').fadeIn(1000);
        $('.count-down').fadeIn(1000);
        // 'Counter' starts on click and counts down
            var countDown = setInterval(function() {
                $('.count-down').text("TIME REMAINING :" + timeLeft--);
                if (timeLeft === 0) {
                    clearInterval(countDown);
                    // Questions elements fade out and answers fade in
                    $('.all-questions').fadeOut(1000);
                    $('.count-down').fadeOut(1000);
                    $('.answers-page').fadeIn(1000);
                    $('.times-up').fadeIn(1000);
                }
                // User clicks their answer and it's value is returned
                $('.q-one-answer-options').click(function() {
                    var questionOneValue = $('input[name="q1"]:checked').val();
                    if (questionOneValue === "1963" && correctAnswers.indexOf("q1") < 0) {
                        correctAnswers.push("q1");
                        incorrectAnswers.delete("q1");
                        $('.correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                    }
                    else if (questionOneValue !== "1963" && incorrectAnswers.indexOf("q1") < 0) {
                        incorrectAnswers.push("q1");
                        correctAnswers.delete("q1");
                        $('.incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                });
            }, 1000);



        // var questionTwoValue = $('input[name="q2"]:checked').val();
        // var questionThreeValue = $('input[name="q3"]:checked').val();
        // var questionsFourValue = $('input[name="q4"]:checked').val();
    });
});
