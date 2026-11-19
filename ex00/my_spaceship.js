function my_spaceship(flight_path){
    let x =0;
    let y=0;
    const directions = ['up','right','down','left'];
    let dirIndex = 0;

    for (let i = 0; i < flight_path.length; i++) {
        const move = flight_path[i];

        if (move === 'R') {
            dirIndex = (dirIndex + 1) % 4;
        } else if (move === 'L') {
            dirIndex = (dirIndex + 3) % 4;
        } else if (move === 'A') {
            const currentDir = directions[dirIndex];
            if (currentDir === 'up') {
                y -= 1;
            } else if (currentDir === 'down') {
                y += 1;
            } else if (currentDir === 'right') {
                x += 1;
            } else if (currentDir === 'left') {
                x -= 1;
            }
        }

    }
    
    return `{x: ${x}, y: ${y}, direction: '${directions[dirIndex]}'}`

}