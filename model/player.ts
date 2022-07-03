import {Position} from "~/model/position";

export type PlayerIndex = number

export class Token {
    constructor(
        public position: Position,
        public player: PlayerIndex
    ) {
    }
}