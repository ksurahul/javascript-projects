function init() {
    const takeOff = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight')
    const land = document.getElementById('landing');
    const abort = document.getElementById('missionAbort');
    const up = document.getElementById('up');
    const down = document.getElementById('down');
    const right = document.getElementById('right');
    const left = document.getElementById('left');
    const rocket = document.getElementById('rocket');

    // when take off is clicked, things should happen if user hits yes
    takeOff.addEventListener('click', () => {
        let response = window.confirm('Confirm that the shuttle is ready for takeoff.');

        if(response){
            flightStatus.innerHTML = 'Shuttle in flight';
            shuttleBackground.style.backgroundColor = 'blue'
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    })


    land.addEventListener('click', () => {
        window.confirm('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
    })

    abort.addEventListener('click', () => {
        let response = window.confirm('Confirm that you want to abort the mission.');

        if(response) {
            flightStatus.innerHTML = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    })

       // function that moves rocket to the up or down based on distance
    function moveVertically (distance) {
        const currentPosition = parseFloat(window.getComputedStyle(rocket).top);
        const newPosition = currentPosition - distance

        rocket.style.top = `${newPosition}px`
    }

    // moves rocket up
    up.addEventListener('click', () => {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        moveVertically(10);
    })

    // moves rocket down
    down.addEventListener('click', () => {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        moveVertically(-10);
    })


    // moves rocket to the left or right based on distance
    function moveHorizontally (distance) {
        // parseFloat takes the number value within the parenthesis & getComputedStyle gets the details of id specified 
        const currentPosition = parseFloat(window.getComputedStyle(rocket).left);
        const newPosition = currentPosition - distance

        // sets new postion 
        rocket.style.left = `${newPosition}px`
    }


    // moves rocket to the right
    right.addEventListener('click', () => {
        moveHorizontally(-10);
    })

    // moves rocket to the left
    left.addEventListener('click', () => {
        moveHorizontally(10);
    })

}

window.addEventListener("load", init);
