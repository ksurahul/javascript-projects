// Define your Book class here:

class Book {
    constructor(title, author, copyRightDate, ibn, pages, checkedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyRightDate = copyRightDate;
        this.ibn = ibn;
        this.pages = pages;
        this.checkedOut = checkedOut
        this.discarded = discarded;
    }

    checkout(uses = 1) {
        this.checkedOut = this.checkedOut + uses
    }

}


// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyRightDate, ibn, pages, checkedOut, discarded) {
        super(title, author, copyRightDate, ibn, pages, checkedOut, discarded);
    }

    discard(curYear) {
        if(curYear - this.copyRightDate > 5) {
            this.discarded = 'Yes';
        }
    }
}


class Novel extends Book {
    constructor(title, author, copyRightDate, ibn, pages, checkedOut, discarded) {
        super(title, author, copyRightDate, ibn, pages, checkedOut, discarded);
    }

    discard() {
        if(this.checkedOut > 100) {
            this.discard = 'Yes';
        }
    }
}


// Declare the objects for exercises 2 and 3 here:

let bookOne = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', '432', 32, 'No')
let bookTwo = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', '1147', 1, 'No')



// Code exercises 4 & 5 here:

//manual is out of date
bookTwo.discard(2024);
console.log(bookTwo);

bookOne.checkout(5)
console.log(bookOne)


