
export type Position = [
    x: number,
    y: number,
]

export const BOARD_GAME_SIZE = 6


export function indexToPosition(index: number): Position {
    return [
        (index % BOARD_GAME_SIZE),
        Math.floor(index / BOARD_GAME_SIZE)
    ]
}