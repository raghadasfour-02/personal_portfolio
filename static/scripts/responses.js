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
    if (input == "hello" || input == "hi" || input == "hey"  || input == "raghad") {
        return "Hello there!";
    } else if (input == "how are you" || input == "how is it going" || input == "how are you?" || input == "how is it going?") {
        return "Good! How are you? ";
    } else if (input == "good" || input == "fine") {
        return "That's good to hear!";
    } else if (input == "what is your name?" || input == "what is your name?" || input == "whats your name?" || input == "whats your name" || input == "what's your name?" || input == "whats your name") {
        return "Well, I'm just a chatbot. But this portfolio is for Raghad Asfour.";
        count2++;
    } else if (input == "Oopsies. I clicked the enter button by accident!") {
        return "That's okay!";
    } else if (input == "good bye" || input == "bye") {
        return "Talk to you later!";
    } else if (input == "Heart clicked!") {
        return "Aw!";
    } else if (input == "are you a robot?" || input == "are you a robot" || input == "are u a robot" || input == "r you a robot" || input == "r u a robot") {
        number = Math.floor(Math.random() * 4);
        if (number == 0){
            return "What do you think?";
        }
        else if (number ==1){
            return "Maybe yes, maybe no!";
        }
        else if (number ==2){
            return "Yes, I am a robot with human feelings.";
        }
        else if (number ==3){
            return "Hmm, I rather not answer that";
        }
    } else {
        return "Try asking something else!";
    }
}