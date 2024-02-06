const storyStages = {
    start: {
        text: "You find yourself in a mystical forest. Do you go left or right?",
        choices: ["Go left", "Go right"],
        consequences: ["forestLeft", "forestRight"],
        image: "forest.png"
    },
    forestLeft: {
        text: "You discover a hidden cave. Enter or keep walking?",
        choices: ["Enter the cave", "Keep walking"],
        consequences: ["caveEnding", "walkEnding"],
        image: "cave.jpg"
    },
    forestRight: {
        text: "You encounter a magical creature. Approach or run away?",
        choices: ["Approach the creature", "Run away"],
        consequences: ["creatureEnding", "runEnding"],
        image: "creature.jpg"
    },
    caveEnding: {
        text: "You uncover a treasure in the cave. Congratulations!",
        image: "treasure.jpg"
    },
    walkEnding: {
        text: "You continue walking and find yourself lost. Game over.",
        image: "lost.jpg"
    },
    creatureEnding: {
        text: "The creature grants you a wish. You live happily ever after.",
        image: "wish.jpg"
    },
    runEnding: {
        text: "You run away, but the creature was friendly. You missed a great opportunity.",
        image: "missed.jpg"
    },
    // Additional endings
    ending5: {
        text: "You discover a portal to another dimension. What awaits you there?",
        image: "portal.jpg"
    },
    ending6: {
        text: "You find a time machine and decide to change a key moment in history.",
        image: "timemachine.jpg"
    },
    ending7: {
        text: "You become the ruler of the mystical forest. All creatures bow to your command.",
        image: "ruler.jpg"
    },
    ending8: {
        text: "You encounter a wise old sage who imparts profound wisdom. Your journey transforms you.",
        image: "sage.jpg"
    },
    ending9: {
        text: "You fall into a deep slumber and awaken in a different era. Time travel has its surprises.",
        image: "asleep.jpg"
    },
    ending10: {
        text: "You discover a magical artifact that grants unimaginable powers. What will you do with it?",
        image: "artifact.jpg"
    },
    ending11: {
        text: "You befriend a mythical creature and embark on epic adventures together.",
        image: "adventure.jpg"
    },
    ending12: {
        text: "You unlock the secrets of the forest and become its guardian for generations to come.",
        image: "guardian.jpg"
    }
};

function startGame() {
    currentStage = "start";
    updatePage();
}

function updatePage() {
    const stage = storyStages[currentStage];

    document.getElementById("story-text").textContent = stage.text;

    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    for (let i = 0; i < stage.choices.length; i++) {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = stage.choices[i];
        choiceButton.addEventListener("click", () => makeChoice(i));
        choicesContainer.appendChild(choiceButton);
    }

    document.getElementById("story-image").src = `images/${stage.image}`;
}

function makeChoice(choiceIndex) {
    const stage = storyStages[currentStage];
    const nextStageKey = stage.consequences[choiceIndex];
    
    if (storyStages[nextStageKey]) {
        currentStage = nextStageKey;
        updatePage();
    } else {
        endGame(nextStageKey);
    }
}

function endGame(endingKey) {
    const ending = storyStages[endingKey];
    document.getElementById("story-text").textContent = ending.text;
    document.getElementById("choices").innerHTML = "";
    document.getElementById("story-image").src = `images/${ending.image}`;
}

let currentStage;
startGame();
