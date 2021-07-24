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
    } else if (input == "how are you" || input == "how is it going" || input == "how are you?" || input == "how is it going?" || input == "how are u?" || input == "how are u") {
        return "Good! How are you? ";
    } else if (input == "good" || input == "fine" || input == "Good" || input == "Fine" || input == "I am good" || input == "Im good" || input == "I'm good" || input == "i am good" || input == "im good" || input == "i'm good" || input == "I am fine" || input == "Im fine" || input == "I'm fine" || input == "i am fine" || input == "im fine" || input == "i'm fine") {
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
    } else if (input == "what can you do" || input == "what can u do" || input == "what can you do?" || input == "what can u do?" ) {
        return "I can hold a converstation and tell bad jokes.";
    } else if (input == "that is mean" || input == "ur mean" || input == "thats mean" || input == "you're mean" || input == "You're mean" || input == "Ur mean" || input == "That's mean"|| input == "That is mean") {
        return "Sorry, I guess";
    } else if (input == "ok tell me a joke" || input == "tell me a joke" || input == "can u tell me a joke?" || input == "can you tell me a joke?" || input == "can you tell me a joke" || input == "can u tell me a joke" || input == "tell me another joke" || input == "can u tell me another joke" || input == "can you tell me another joke") {
        number2 = Math.floor(Math.random() * 8);
        if (number2 == 0){
            return "How does a penguin build its house? Igloos it together.";
        }
        else if (number2 ==1){
            return "What do you call a belt made of watches? A waist of time!";
        }
        else if (number2 ==2){
            return "Why did Adele cross the road? To say hello from the other side!";
        }
        else if (number2 ==3){
           return "What is the difference between a piano and a fish? You can tune a piano, but you cant tuna fish.";
        }
        else if (number2 ==4){
            return "How do you organize an astronomers party? You planet.";
        }
        else if (number2 ==5){
            return "What kind of car does an egg drive? A Yolkswagen.";
        }
        else if (number2 ==6){
            return "Why was 6 afraid of 7? Because 7 ate 9.";
        }
        else if (number2 ==7){
            return "Did you hear about the mediocre restaurant on the moon? It has great food but no atmosphere.";
        }
    } else if (input == "haha" || input == "LOL" || input == "you're funny" || input == "haha you're funny" || input == "haha that was funny" || input == "haha, that was funny" || input == "haha, you're funny" || input == "good one" || input == "haha, good one" || input == "haha good one" || input == "ur funny") {
        return "Glad I made you laugh!";
    } else if (input == "i love you" || input == "i love u" || input == "ily" || input == "love u" || input == "love you" || input == "I love you" || input == "Love you" || input == "Love u") {
        number3 = Math.floor(Math.random() * 7);
        if (number3 == 0){
            return "Me or Raghad?";
        }
        else if (number3 ==1){
            return "Wish I could say the same.";
        }
        else if (number3 ==2){
            return "Well, that's sweet.";
        }
        else if (number3 ==3){
            return "You hardly know me.";
        } 
        else if (number3 ==4){
            return "Thanks?";
        } 
        else if (number3 ==5){
            return "You're making me blush.";
        }
        else if (number3 ==6){
            return "I know.";
        }
    } else if (input == "do u love me?" || input == "do u love me" || input == "do you love me?" || input == "do you love me") {
        number4 = Math.floor(Math.random() * 2);
        if (number4 == 0){
            return "What is love?";
        }
        else if (number4 ==1){
            return "Try something else.. Just kidding!";
        }
    } else if (input == "knock knock" || input == "knock") {
        return "Who's there?"
    } else if (input == "Will u marry me" || input == "Will you marry me" || input == "Will you marry me? " || input == "Will u marry me?" || input == "will u marry me?" || input == "will u marry me" || input == "will you marry me?" || input == "will you marry me") {
        number5 = Math.floor(Math.random() * 3);
        if (number5 == 0){
            return "Let's just stay friends, OK?";
        }
        else if (number5 ==1){
            return "You know I'm just a robot... right?";
        }
        else if (number5 ==2){
            return "Awkward..";
        }
    } else if (input == "are you a robot?" || input == "are you a robot" || input == "are u a robot" || input == "r you a robot" || input == "r u a robot" || input == "Are you a robot?" || input == "Are u a robot" || input == "Are you a robot") {
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
        return "What do you mean?";
    }
}
