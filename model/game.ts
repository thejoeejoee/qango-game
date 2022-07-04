import {indexToPosition, Position} from "~/model/position";
import {PlayerIndex, Token} from "~/model/player";
import {sliding} from "~/model/utils";

type TileColor = string

class TilesGroup {
  constructor(
    public color: TileColor,
    public tiles: Position[]
  ) {
  }
}

export class GameResult {
  constructor(
    // null in case of tie
    public readonly winner: PlayerIndex | null,
    public readonly winningTiles: Position[]
  ) {

  }

  public includesTileIndex(index: number) : boolean {
    const pos = indexToPosition(index)
    return this.winningTiles.some(p => p[0] == pos[0] && p[1] == pos[1])
  }
}


export class Game {
  public tokens: Token[]
  public nextPlayer: PlayerIndex = 0
  public result: GameResult | void = undefined

  constructor(
    public readonly groups: TilesGroup[] = DEFAULT_GROUPS
  ) {
    this.tokens = []
  }

  public playPosition(pos: Position) {
    if (this.positionToToken(pos)) return
    if (this.result) return

    this.tokens.push(new Token(pos, this.nextPlayer))
    this.nextPlayer = (this.nextPlayer + 1) % 2

    this.result = this.hasWinnerByGroups(pos) ||
      this.hasWinnerBySquare(pos) ||
      this.hasWinnerByLine(pos) ||
      this.isDraw()
  }

  public hasWinnerByGroups(lastPlayedPos: Position): GameResult | void {
    const token = this.positionToToken(lastPlayedPos)
    if (!token) return

    const player = token.player
    const g = this.positionToGroup(lastPlayedPos)
    if (!g) return

    // every tile from group does have token with player
    if (g.tiles.every(
      tile => {
        const token = this.positionToToken(tile)
        return token && token.player == player
      }
    )) {
      return new GameResult(player, g.tiles)
    }
  }

  public hasWinnerBySquare(lastPlayedPos: Position): GameResult | void {
    const token = this.positionToToken(lastPlayedPos)
    if (!token) return
    const [x, y] = token.position
    const player = token.player
    const toCheck: [number, number][][] = [
      [[x, y], [x + 1, y], [x, y + 1], [x + 1, y + 1]],
      [[x, y], [x - 1, y], [x, y + 1], [x - 1, y + 1]],
      [[x, y], [x + 1, y], [x, y - 1], [x + 1, y - 1]],
      [[x, y], [x - 1, y], [x, y - 1], [x - 1, y - 1]],
    ]

    for (const square of toCheck) {
      if (square.every(pos => {
        const token = this.positionToToken(pos)
        return token && token.player == player
      }))
        return new GameResult(player, square)
    }
  }

  public hasWinnerByLine(lastPlayedPos: Position): GameResult | void {
    const token = this.positionToToken(lastPlayedPos)
    if (!token) return
    const [x, y] = token.position
    const player = token.player
    const toCheck: [number, number][][] = [
      [[x, y - 4], [x, y - 3], [x, y - 2], [x, y - 1], [x, y],
        [x, y + 1], [x, y + 2], [x, y + 3], [x, y + 4]],
      [[x - 4, y], [x - 3, y], [x - 2, y], [x - 1, y], [x, y],
        [x + 1, y], [x + 2, y], [x + 3, y], [x + 4, y]],
      [[x - 4, y - 4], [x -3, y - 3], [x -2 , y - 2], [x - 1, y - 1], [x, y],
        [x + 1, y + 1], [x + 2, y + 2], [x + 3, y + 3], [x + 4, y + 4]],
      [[x + 4, y - 4], [x +3, y - 3], [x +2 , y - 2], [x + 1, y - 1], [x, y],
        [x - 1, y + 1], [x - 2, y + 2], [x - 3, y + 3], [x - 4, y + 4]],
    ]

    for (const line of toCheck) {
      for (const five of sliding(line, 5)) {
        if (five.every(pos => {
          const token = this.positionToToken(pos)
          return token && token.player == player
        }))
          return new GameResult(player, five)
      }
    }
  }

  public isDraw(): GameResult | void {
    return this.tokens.length === 6 * 6 && !this.result ?
      new GameResult(null, []) :
      undefined
  }

  public positionToGroup(pos: Position): TilesGroup | void {
    for (const g of this.groups) {
      if (g.tiles.some(tile => tile[0] == pos[0] && tile[1] == pos[1])) {
        return g
      }
    }
  }

  public positionToToken(pos: Position): Token | void {
    for (const t of this.tokens) {
      if (t.position[0] == pos[0] && t.position[1] == pos[1]) {
        return t
      }
    }
  }

  public toJSON() {
    return {...this}
  }

}

const DEFAULT_GROUPS: TilesGroup[] = [
  new TilesGroup("bg-pink-400", [[0, 0], [0, 1], [1, 0]]),
  new TilesGroup("bg-pink-400", [[5, 5], [4, 5], [5, 4]]),
  new TilesGroup("bg-pink-400", [[0, 5], [1, 5], [0, 4]]),
  new TilesGroup("bg-pink-400", [[5, 0], [5, 1], [4, 0]]),

  new TilesGroup("bg-yellow-300", [[2, 0], [1, 1], [0, 2]]),
  new TilesGroup("bg-yellow-300", [[5, 3], [4, 4], [3, 5]]),

  new TilesGroup("bg-orange-400", [[0, 3], [1, 4], [2, 5]]),
  new TilesGroup("bg-orange-400", [[3, 0], [4, 1], [5, 2]]),

  new TilesGroup("bg-blue-300", [[2, 1], [2, 2], [1, 2]]),
  new TilesGroup("bg-blue-300", [[3, 4], [3, 3], [4, 3]]),

  new TilesGroup("bg-green-400", [[1, 3], [2, 3], [2, 4]]),
  new TilesGroup("bg-green-400", [[3, 1], [3, 2], [4, 2]]),

]
