function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // function to change the text of the paragraph in the HTML
    function changeText() {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    }

    // adds an event to button - when button is clicked, functin changText is ran
    button.addEventListener('click', changeText);


    // function to change background color of abortMission button
    function backgroundColor() {
        missionAbort.style.backgroundColor = 'red'
    }

    //mouseover is when mouse is hovering over button then function runs
    missionAbort.addEventListener('mouseover', backgroundColor);


    // function to change background color back to normal once mouse is out of element
    function backgroundNormal() {
        missionAbort.style.backgroundColor = '';
    }

    // mosueout is when mouse leaves element then function runs
    missionAbort.addEventListener('mouseout', backgroundNormal)

    // creates a window user responds to, if user response is true (or ok), text in paragraph changes
    function abort() {
        let response = window.confirm('Are you sure you want to abort the mission?');
        
        if(response) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home'
        }
    }

    missionAbort.addEventListener('click', abort);
}

window.addEventListener("load", init);
