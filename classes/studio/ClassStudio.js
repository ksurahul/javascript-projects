//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    // Add a new score to a candiates score board
    addScore(newScore) {
        this.scores.push(newScore)
    }

    average() {
        let sum = 0;

        for(let i = 0; i < this.scores.length; i++) {
            sum = sum + this.scores[i];
        }

        // for(let score of this.scores) {
        //     sum = sum + score
        // }

        return (sum / this.scores.length).toFixed(1);
    }

    status() {
        
    }
}

let candidate1 = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]);
let candidate2 = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]);
let candidate3 = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]);



candidate1.addScore(83);
console.log(candidate1.scores)

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

console.log(candidate2.average())


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.