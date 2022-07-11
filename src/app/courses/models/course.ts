export class Course{
    id:number = 0;
    name:string;
    imageUrl:string;
    price:number;
    code:string;
    description:string = "";
    duration:number;
    rating:number;
    releaseDate:Date;

    constructor(name:string, imageUrl:string, price:number,code:string, duration:number,rating:number,releaseDate:string){
        this.name = name;
        this.imageUrl = imageUrl;
        this.price = price;
        this.code = code;
        this.duration = duration;
        this.rating = rating;
        this.releaseDate = new Date(releaseDate);
    }
}