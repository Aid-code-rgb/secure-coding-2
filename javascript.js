let currentState = 0;

const storyData = [{
    /*0, First Choice*/
    question: "In front of you are two paths: One leads to a forest.The other leads to a barren landscape strewn with boulders.",
    answers: [
        {text: "Take the forest path", nextState: 1},
        {text: "Take the rocky landscape path", nextState: 7} 
    ]      
},
{/*1, Forest 1*/
    question: "You enter the forest. A bear is on the trail in front of you. It is staring at you and looks hungry. Do you...",
    answers: [
        {text: "Fight?", nextState: 12},
        {text: "Flee?", nextState: 2}
    ]
},
{/*2, Forest 2*/
    question: "You run until the bear is long behind you. You see an old house through the trees. Do you...",
    answers: [
        {text: "Investigate the house?", nextState: 4},
        {text: "Keep going?", nextState: 3},
    ]
}, 
{/*3, Forest 3*/
    question: "You travel until you begin to get hungry and it starts to get dark. You lost your backpack to the bear and have no food or water, but there are white mushrooms growing in the shade beside the path. Do you...",
    answers: [
        {text: "Eat the mushrooms?", nextState: 13},
        {text: "Head back to the old house?", nextState: 4}
    ]
},
{/*4, House 1*/
    question: "On the trail towards the house, you see leaves and twigs spread all along the path. Do you...",
    answers:[
        {text: "Go around the leaves and twigs?", nextState: 5},
        {text: "Keep walking over the leaves and twigs?", nextState: 14}
    ]
},
{/*5, House 2*/
    question: "You knock on the door of the house. There is no response. The door is locked. Do you...",
    answers:[
        {text: "Try to break down the door?", nextState: 19},
        {text: "Look for another way in?", nextState: 6}
    ]
},
{/*6, House 3*/
    question: "At the back of the house you see an open window. You open it wide and enter the house. Inside it is dusty and ramshackle. Do you...",
    answers:[
        {text: "Stay?", nextState: 10},
        {text: "Leave?", nextState: 15}
    ]
},
{/*7, Rocky Landscape 1*/
    question: "You turn towards the rocky land. You hike up a hill and see a lake on the other side. There are the remains of a campfire on the shore. Do you...",
    answers: [
        {text: "Keep walking?", nextState: 8},
        {text: "Make camp by the lake?", nextState: 9}
    ]
},
{/*8, Rocky Landscape 2*/
    question: "After walking for some time, you see a turned over wagon on the trail. There are boxes and clothes strewn about. Do you...",
    answers: [
        {text: "Search through the items?", nextState: 11},
        {text: "Keep walking?", nextState: 16}
    ]
},
{/*9, Rocky Landscape 3*/
    question: "You relax by the fire. You see bubbles in the lake coming towards you. Do you...",
    answers: [
        {text: "Get up and look closer at the bubbles?", nextState: 17},
        {text: "Ignore the bubbles and enjoy the fire?", nextState: 18}
    ]
},
{/*10, House win*/
    question: "You decide to stay in the house. It is safe and hidden, and you feel you can make a life for yourself. You win!.",
    answers: [{text: "Try again.", nextState: 0}]
},
{/*11, Rocky land win*/
    question: "You pick through the clothing and search the boxes. You find a letter that talks about a safe refuge in the far corner of the rocky land. You make camp at the wagon, and continue the next day towards the safe haven. You Win!",
    answers: [{text: "Try again.", nextState: 0}]
},
{/*12, Forest lose 1*/
    question: "You can't fight a bear! GAME OVER",
    answers: [{text: "Try again.", nextState: 0}]
},
{/*13, Forest lose 2*/
    question: "The mushrooms were poisonous! GAME OVER",
    answers: [{text: "Try again.", nextState: 0}]
},
{/*14, House lose 1*/
    question: "You fall through the leaves and into darkness. GAME OVER",
    answers: [{text: "Try again.", nextState: 0}]
},
{/*15, House lose 2*/
    question: "You decide the house is too run down to live in. You leave the house and move back onto the forest trail. You travel for many days, over lots of different terrain, but cannot find anywhere to rest and set up a home. GAME OVER",
    answers: [{text: "Try again.", nextState: 0}]
},
{/*16, Rocky land lose 1*/
    question: "You leave the items strewn on the ground and keep walking along the trail. The sun is going down, and you have no place to go. You hear a growl behind you and turn, but...   GAME OVER",
    answers: [{text: "Try again.", nextState: 0}]
},
{/*17, Rocky land lose 2*/
    question: "You get up and move closer to the waters edge. You can see something moving under the water. Suddenly, a huge claw shoots out of the water, grabs you, and pulls you in. GAME OVER",
    answers: [{text: "Try again.", nextState: 0}]
},
{/*18, Rocky land lose 3*/
    question: "You settle back beside the fire. The bubbles intensify, then a huge crayfish, bigger than a horse, rises out of the water. It quickly advances on you and the fire, snapping it's huge claws. GAME OVER",
    answers: [{text: "Try again.", nextState: 0}]
}, 
{/*19, House try again*/
    question: "You crash your body against the door repeatedly, injuring your shoulder. The door doesn't budge. You look for another way in.",
    answers: [
        {text: "Look for another way in?", nextState: 6}
    ]
}
];

function renderQuestion() {
    const story = storyData[currentState];
    const questionContainer = document.getElementById("question");    
    questionContainer.textContent = story.question;

    const answersList = document.getElementById("answers");
    answersList.innerHTML = "";

    story.answers.forEach((answer) => {
        addAnswerButton(answer.text, answer.nextState);
    })
}

function addAnswerButton(answerText, nextState) {
    const answersList = document.getElementById("answers");

    const optionButton = document.createElement("button");
    optionButton.textContent = answerText;
    optionButton.addEventListener("click", () => {
        currentState = nextState;
        renderQuestion();
    });
    answersList.appendChild(optionButton);
}

renderQuestion();