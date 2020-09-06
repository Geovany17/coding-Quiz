//===============================================================//
// A var storing  array and objects with the questions and answers
//===============================================================//

var questions = [
    {
        title: "",
        choices: [""],
        answer: ""
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },


];


//=============================================//
// Declared variables
//=============================================//


var score = 0;
var questionIndex = 0;


//=============================================================//
// code starts working here
// Declared variables
//==============================================================//

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

//===============================================================//
// Seconds left is 15 seconds per question:
//===============================================================//

var secondsLeft = 76;
//===============================================================//
//  Interval time
//===============================================================//
var holdInterval = 0;
//===============================================================//
//  Penalty time
//===============================================================//
var penalty = 10;
//===============================================================//
// Creates new ul element
//===============================================================//
var ulCreate = document.createElement("ul");

//===============================================================//
// The button shows user a display on the screen
//===============================================================//

timer.addEventListener("click", function () {

    //===============================================================//
    //  Checking for the time
    //===============================================================//

    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

//===============================================================//
//  questions and choices to page: 
//===============================================================//

function render(questionIndex) {

    //===============================================================//
    // Clears existing data 
    //===============================================================//

    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    //===============================================================//
    //  loop through all info in the array
    //===============================================================//

    for (var i = 0; i < questions.length; i++) {

        //===============================================================//
        // Appends question title only
        //===============================================================//

        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    };

    //===============================================================//
    // New for each for question choices
    //===============================================================//

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    });
};

//===================================================//
// Event to compare choices with answer
//==================================================//

function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        //================================================//
        // Correct condition 
        //================================================//

        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
        } else {

            //==========================================================//
            // Will deduct time off secondsLeft for wrong answers
            //==========================================================//

            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    };

    //============================================================//
    // Question Index determines number question user is on
    //============================================================//

    questionIndex++;

    if (questionIndex >= questions.length) {

        //======================================================//
        // All done will append last page with user stats
        //======================================================//

        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

};

//=========================================//
// All done will append last page
//========================================//

function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    //=======================================//
    // create heading h1
    //=======================================//

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    //======================================//
    // Create Paragraph p
    //=====================================//

    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    //=======================================================//
    // Calculates time remaining and replaces it with score
    //=======================================================//

    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    };

    //================================================//
    // Label
    //================================================//

    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    //==============================================//
    // input
    //==============================================//

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    //==============================================//
    // submit
    //==============================================//

    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    //====================================================================================//
    // Event listener to capture initials and local storage for initials and score
    //====================================================================================//

    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
    });

}
