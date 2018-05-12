export class Heroe {

    private _Id: number;
    private _Name: string;
    private _Description: string;

    constructor(
        Id: number,
        Name: string,
        Description: string
    ) { 
        this._Id = Id;
        this._Name = Name;
        this._Description = Description;
    }
}