const clickEvents = {};
function hc(e, value, id, flip = false) {
    e.preventDefault();
    const [setIndex, imageIndex, choice] = id.split('@');
    if (!clickEvents[setIndex]) {
        clickEvents[setIndex] = {};
    }
    if (!clickEvents[setIndex]["flip"]) {
        clickEvents[setIndex]["flip"] = [];
    }
    if (flip) {
        if (!clickEvents[setIndex]["flip"].includes(imageIndex)) {
            clickEvents[setIndex]["flip"].push(imageIndex);
        }
    }
    if (clickEvents[setIndex][imageIndex] === undefined) {
        clickEvents[setIndex][imageIndex] = 'unlabelled';
    }
    const leftButton = document.getElementById(setIndex + '@' + imageIndex + '@Left');
    const rightButton = document.getElementById(setIndex + '@' + imageIndex + '@Right');
    if (clickEvents[setIndex][imageIndex] === value) {
        clickEvents[setIndex][imageIndex] = 'unlabelled';
    } else {
        clickEvents[setIndex][imageIndex] = value;
    }
    const labels = document.getElementById('labels');
    labels.value = JSON.stringify(clickEvents);
    leftButton.style.borderColor = 'red';
    rightButton.style.borderColor = 'blue';
    if (clickEvents[setIndex][imageIndex] !== 'unlabelled') {
        const selectedButton = document.getElementById(id);
        selectedButton.style.borderColor = 'rgb(3, 208, 103)'; // Green color when selected
    }
}