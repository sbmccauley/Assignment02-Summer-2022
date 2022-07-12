let ready = confirm('Are you ready to play the game?');

if (ready) {
    alert('Awesome, your hero is waiting');
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');

    let direction = prompt('Which direction would you like to head? (please enter forward, left, or right.)');

    switch (direction) {
        case 'left':
            alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
            break;
        case 'forward':
            alert('You walk 100 yards and safely make your way out of the cave.');
            break;
        case 'right':
            alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!')
            break;
        default:
            alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
    }

    let userRating = prompt('The game is now over.  Please rate the game getween 1 and 10.')

    if (userRating > 5 && userRating <= 10) {
        alert('Thank you, would you like to play again?!');
    } else if (userRating > 0 && userRating <= 5) {
        alert('Thank you, we are working hard to improve the game.');
    } else {
        alert('Thanks for playing!');
    }


} else {
    alert('Ok, thanks for visiting, maybe we can play another time.');
}

