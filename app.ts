import {Category} from './enums';
import {Book, DamageLogger, Author, Librarian} from './interfaces'
import {UniversityLibrarian} from './classes'

function GetAllBooks() : Book[]{
    let books = [
        {id:1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction},
        {id:2, title: 'A Farewell to Arms', author: 'Ernest H.', available: false, category: Category.Fiction},
        {id:3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry},
        {id:4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];

    return books;
}

function LogFirstAvailable(books): void{
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books){
        
        if(currentBook.available){
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable)
}



function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string>{
    console.log("Getting books in category: " + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for(let currentBook of allBooks){
        if(currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTitles(titles: string[]):void{
    for(let title of titles){
        console.log(title);
    }
}

function GetBookById(id: number): Book{
    const allBooks = GetAllBooks();
    return allBooks.find(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number) : string {
    return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void{
    console.log("Creating customer " + name);

    if(age)
        console.log("Age: " + age);
    
    if(city)
        console.log("City: " + city);
}

function PrintBook(book: Book): void{
    console.log(book.title + ' by ' + book.author);
}

/************************************************************************ */

let myID = CreateCustomerID('Jose', 10);
console.log(myID);


//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));






let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Pantro');





