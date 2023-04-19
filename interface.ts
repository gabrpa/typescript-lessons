interface PersonState {
    name: string;
    isHungry: boolean;
}

const showState = (person: PersonState) => {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry")
}

let anakin: PersonState = {
    name: "Anakin Skywalker",
    isHungry: true
}

console.log(showState(anakin));
