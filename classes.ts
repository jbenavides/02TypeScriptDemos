import {Book, Author, DamageLogger, Librarian} from './interfaces';

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string){
        console.log(this.name + ' is assisting ' + custName);
    }
}

abstract class ReferenceItem {  

    private _publisher: string; 

    constructor(public title: string, protected year:number){
        console.log('crerating a new referenceItem...');
    }

    printItem(): void{
        console.log(`${this.title} was pusblished in ${this.year}`);
    }

    get publisher(): string{
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher:string){
        this._publisher = newPublisher;
    }

    abstract printCitation():void;
}

class Encyclopedia extends ReferenceItem{
    
    constructor(newTitle: string, newYear: number, public edition: number){
        super(newTitle, newYear)
    }

    printItem():void{
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    printCitation():void{
        console.log(`${this.edition} (${this.year})`);
    }

}

export {UniversityLibrarian, ReferenceItem, Encyclopedia};