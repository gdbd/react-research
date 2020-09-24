export interface IItem {
    readonly id: number;
    readonly title: string;
}


export class AppState {
    readonly Items: ReadonlyArray<IItem>;
}
