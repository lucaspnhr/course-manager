export class Course{
    id:number;
    name:string;
    imageUrl:string;
    price:number;
    code:string;
    description:string = "";
    duration:number;
    rating:number;
    releaseDate:Date;

    constructor(id:number, name:string, imageUrl:string, price:number,code:string, duration:number,rating:number,releaseDate:string){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.code = code;
        this.duration = duration;
        this.rating = rating;
        this.releaseDate = new Date(releaseDate);
    }
}