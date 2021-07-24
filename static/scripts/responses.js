function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello" || input == "hi") {
        return "Hello there!";
    } else if (input == "how are you" || input == "how is it going" || input == "how are you?" || input == "how is it going?") {
        return "Good! How are you? ";
    } else if (input == "good" || input == "fine") {
        return "That's good to hear!";
    } else if (input == "Oopsies. I clicked the enter button by accident!") {
        return "That's okay!";
        
    } else if (input == "good bye" || input == "bye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}