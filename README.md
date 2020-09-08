# coding-Quiz

This app was made as a homework for Penn LPS bootcamp.
This is a quiz application using HTML, CSS, and Javascript.
This application use Javascript to provide quiz questions and collect user data to determine if the answers to the question were correct, this then generates a score and appends a final page of results.
This project has been deployed to GitHub Pages.

- [GitHub Repository](https://github.com/Geovany17/coding-Quiz)
- [Deployed GitHub IO](https://geovany17.github.io/coding-Quiz/)

### This project has the following features:

- A Start Quiz button
  ![](<assets/images/Screenshot(2).png>)

- This starts a timer for the user

![](<assets/images/Screenshot(3).png>)

- Each question averages 15 seconds each for a total time of 75 seconds + 1.

![](<assets/images/Screenshot(4).png>)

![](<assets/images/Screenshot(5).png>)

![](<assets/images/Screenshot(6).png>)

![Code-Quiz Demo](assets/cqGif.gif)

### Psuedo code:

- Create a timer attached to a button with a starting value of 0
- When timer is pressed start a reverse countdown
- Create a 0 for countdown
- When countdown starts, start quiz
- Start Quiz will be on appended page
- Append the question: choices
- When user selects the right answer, textcontent "Correct!"
- When user selects the right answer, textcontent "Wrong!"
- Final score will keep track of how many the user got right
- Left over time will be deducted from final score
- Final Score Appended page
- Captures local storage
- Travels to another HTML
- Retrieved highscores
