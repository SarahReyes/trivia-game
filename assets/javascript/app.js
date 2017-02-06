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
var timeLeft = 30;
var correctAnswers = [];
var incorrectAnswers = [];

$(document).ready(function() {
    // Trivia questions are hidden upon first page load
    $('#all-questions').hide();
    $('#count-down').hide();
    $('#answers-page').hide();
    $('#times-up').hide();

    // Function for when the user clicks the 'start' button
    $('#start-button').click(function() {
        // 'Start' button is now hidden and trivia is shown
        $('button').fadeOut(500);
        $('#all-questions').fadeIn(1000);
        $('#count-down').fadeIn(1000);
        // 'Counter' starts on click and counts down
            var countDown = setInterval(function() {
                $('#count-down').text("TIME REMAINING :" + timeLeft--);
                if (timeLeft === 0) {
                    clearInterval(countDown);
                    // Questions elements fade out and answers fade in
                    $('#all-questions').fadeOut(1000);
                    $('#count-down').fadeOut(1000);
                    $('#answers-page').fadeIn(1000);
                    $('#times-up').fadeIn(1000);
                }
                // User clicks their answer and it's value is returned
                $('#q-one-answer-options').click(function() {
                    // checks the value of the input click
                    var questionOneValue = $('input[name="q1"]:checked').val();
                    // if the user clicked the correct answer it adds it to an empty array
                    if (questionOneValue === "1963" && correctAnswers.indexOf("q1") < 0) {
                        // correct answer pushed to correctAnswers empty array
                        correctAnswers.push("q1");
                        // check the index of q1, add that value to a new variable
                        var incorrectIndex = incorrectAnswers.indexOf("q1");
                        // if the index of q1 isn't there, it's -1, so check if incorrectIndex
                        // is greater than 0, and delete it if it is.
                        if (incorrectIndex >= 0) {
                            incorrectAnswers.splice(incorrectIndex, 1);
                        }
                        // array lengths are checked and added to the div
                        $('#correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                        $('#incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                    // if the user clicks the wrong answer it adds it to a separate empty array
                    else if (questionOneValue !== "1963" && incorrectAnswers.indexOf("q1") < 0) {
                        // incorrect click is pushed to the incorrectAnswers array
                        incorrectAnswers.push("q1");
                        // check the index of q1, add that value to a new variable
                        var correctIndex = correctAnswers.indexOf("q1");
                        // making sure there aren't duplicate wrong answers
                        if (correctIndex >= 0) {
                            correctAnswers.splice(correctIndex, 1);
                        }
                        // array lengths are checked and added to the div
                        $('#correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                        $('#incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                });
                // User clicks their answer and it's value is returned
                $('#q-two-answer-options').click(function() {
                    // checks the value of the input click
                    var questionTwoValue = $('input[name="q2"]:checked').val();
                    // if the user clicked the correct answer it adds it to an empty array
                    if (questionTwoValue === "The Castle of Cagliostro" && correctAnswers.indexOf("q2") < 0) {
                        // correct answer pushed to correctAnswers empty array
                        correctAnswers.push("q2");
                        // check the index of q1, add that value to a new variable
                        var incorrectIndex = incorrectAnswers.indexOf("q2");
                        // if the index of q1 isn't there, it's -1, so check if incorrectIndex
                        // is greater than 0, and delete it if it is.
                        if (incorrectIndex >= 0) {
                            incorrectAnswers.splice(incorrectIndex, 1);
                        }
                        // array lengths are checked and added to the div
                        $('#correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                        $('#incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                    // if the user clicks the wrong answer it adds it to a separate empty array
                    else if (questionTwoValue !== "The Castle of Cagliostro" && incorrectAnswers.indexOf("q2") < 0) {
                        // incorrect click is pushed to the incorrectAnswers array
                        incorrectAnswers.push("q2");
                        // check the index of q1, add that value to a new variable
                        var correctIndex = correctAnswers.indexOf("q2");
                        // making sure there aren't duplicate wrong answers
                        if (correctIndex >= 0) {
                            correctAnswers.splice(correctIndex, 1);
                        }
                        // array lengths are checked and added to the div
                        $('#correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                        $('#incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                });
                // User clicks their answer and it's value is returned
                $('#q-three-answer-options').click(function() {
                    // checks the value of the input click
                    var questionThreeValue = $('input[name="q3"]:checked').val();
                    // if the user clicked the correct answer it adds it to an empty array
                    if (questionThreeValue === "Spirited Away" && correctAnswers.indexOf("q3") < 0) {
                        // correct answer pushed to correctAnswers empty array
                        correctAnswers.push("q3");
                        // check the index of q1, add that value to a new variable
                        var incorrectIndex = incorrectAnswers.indexOf("q3");
                        // if the index of q1 isn't there, it's -1, so check if incorrectIndex
                        // is greater than 0, and delete it if it is.
                        if (incorrectIndex >= 0) {
                            incorrectAnswers.splice(incorrectIndex, 1);
                        }
                        // array lengths are checked and added to the div
                        $('#correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                        $('#incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                    // if the user clicks the wrong answer it adds it to a separate empty array
                    else if (questionThreeValue !== "Spirited Away" && incorrectAnswers.indexOf("q3") < 0) {
                        // incorrect click is pushed to the incorrectAnswers array
                        incorrectAnswers.push("q3");
                        // check the index of q1, add that value to a new variable
                        var correctIndex = correctAnswers.indexOf("q3");
                        // making sure there aren't duplicate wrong answers
                        if (correctIndex >= 0) {
                            correctAnswers.splice(correctIndex, 1);
                        }
                        // array lengths are checked and added to the div
                        $('#correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                        $('#incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                });
                // User clicks their answer and it's value is returned
                $('#q-four-answer-options').click(function() {
                    // checks the value of the input click
                    var questionFourValue = $('input[name="q4"]:checked').val();
                    // if the user clicked the correct answer it adds it to an empty array
                    if (questionFourValue === "Manga" && correctAnswers.indexOf("q4") < 0) {
                        // correct answer pushed to correctAnswers empty array
                        correctAnswers.push("q4");
                        // check the index of q4, add that value to a new variable
                        var incorrectIndex = incorrectAnswers.indexOf("q4");
                        // if the index of q4 isn't there, it's -1, so check if incorrectIndex
                        // is greater than 0, and delete it if it is.
                        if (incorrectIndex >= 0) {
                            incorrectAnswers.splice(incorrectIndex, 1);
                        }
                        // array lengths are checked and added to the div
                        $('#correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                        $('#incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                    // if the user clicks the wrong answer it adds it to a separate empty array
                    else if (questionFourValue !== "Manga" && incorrectAnswers.indexOf("q4") < 0) {
                        // incorrect click is pushed to the incorrectAnswers array
                        incorrectAnswers.push("q4");
                        // check the index of q4, add that value to a new variable
                        var correctIndex = correctAnswers.indexOf("q4");
                        // making sure there aren't duplicate wrong answers
                        if (correctIndex >= 0) {
                            correctAnswers.splice(correctIndex, 1);
                        }
                        // array lengths are checked and added to the div
                        $('#correct-answers').text("CORRECT ANSWERS: " + correctAnswers.length);
                        $('#incorrect-answers').text("INCORRECT ANSWERS: " + incorrectAnswers.length);
                    }
                });
            }, 1000);
    });
});
