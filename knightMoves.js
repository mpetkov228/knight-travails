function Node(pos, path) {
    if (pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7) {
        return { pos, path };
    }

    return null;
}

function calcMoves([x, y]) {
    return [
        [x + 2, y + 1], [x + 1, y + 2],
        [x - 1, y + 2], [x - 2, y + 1],
        [x - 2, y - 1], [x - 1, y - 2],
        [x + 1, y - 2], [x + 2, y - 1],
    ];
}

function knightMoves([x, y], [a, b]) {
    let queue = [Node([x, y], [[x, y]])];
    let currentNode = queue.shift();

    while (currentNode.pos[0] != a || currentNode.pos[1] != b) {
        let moves = calcMoves(currentNode.pos);
        for (let move of moves) {
            let node = Node(move, currentNode.path.concat([move]));
            if (node) {
                queue.push(node);
            }
        }
        currentNode = queue.shift();
    }

    let pathString = '';
    for (let path of currentNode.path) {
        pathString += `[${path}] `;
    }

    console.log(`Moves: ${currentNode.path.length - 1}  Path: ${pathString}`);
}

knightMoves([0, 0], [4, 4]);