export class Heroe {

    private Id: number;
    private Name: string;
    private Description: string;
    private ImgPath: string;
    private ImgExtension: string;

    constructor(
        _Id: number,
        _Name: string,
        _Description: string,
        _ImgPath: string,
        _ImgExtension: string,
    ) { 
        this.Id = _Id;
        this.Name = _Name;
        this.Description = _Description;
        this.ImgPath = _ImgPath;
        this.ImgExtension = _ImgExtension;
    }
}