const fs = require('fs');
const path = require('path');

class People {

    json = `${path.basename(__filename, path.extname(__filename))}.json`

    getPeople() {
        if (fs.existsSync(this.json)) {
            return JSON.parse(fs.readFileSync(this.json, 'utf-8'));
        } else {
            this.setPeople([])
            return this.getPeople();
        }
    }

    setPeople(people) {
        fs.writeFileSync(this.json, JSON.stringify(people), 'utf-8');
        return this.getPeople();
    }

    getPerson(id) {
        return this.getPeople().find(person => `${person.id || 0}` === `${id || 0}`)
    }

    matchNamePassword(person) {
        return this.getPeople().find(
            findingPerson => findingPerson.name === person.name && 
            findingPerson.password === person.password
        )
    }

    addPerson(person) {
        const people = this.getPeople();
        let id = person.id || 0
        while(people.some(person => `${person.id || 0}` === `${id || 0}`)) {
            id++
        }
        const personToAdd = {...person, id: id};
        people.push(personToAdd);
        this.setPeople(people);
        return personToAdd;
    }

    putPerson(person) {
        let people = this.getPeople();
        let nextPerson = person
        const modified = people.some((currentPerson, index) => {
            if(`${currentPerson.id || 0}` === `${person.id || 0}`) {
                nextPerson = {...person, id: currentPerson.id};
                people[index] = nextPerson
                return true
            }
            return false
        });
        this.setPeople(people);
        return modified? nextPerson : null;
    }

    deletePerson(id) {
        const currentPeople = this.getPeople()
        const nextPeople = currentPeople.filter(person => `${person.id || 0}` !== `${id || 0}`)
        const modified = currentPeople.length !== nextPeople.length
        return modified? this.setPeople(nextPeople) : null;
    }
}

module.exports = new People()
