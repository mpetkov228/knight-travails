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