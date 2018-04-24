const Customers = [];

const customerBuilder = (firstName, lastName, address, favoriteGenres) => {
    Customers.push(
        Object.create({}, {
            firstName: {
                value: firstName
            },
            lastName: {
                value: lastName
            },
            address: {
                value: address  
            },
            favoriteGenres: {
                value: favoriteGenres
            },
            libraryCardNumber: {
                value: (Math.random().toString(36).substr(2, 4))
            },
            bookshelf: {
                value: [],
                writable: true
            },
            customercheckout: {
                value: function(book) {
                    if (librarian.checkout(book, this.firstName)) {
                       this.bookshelf.push(Library.find(function (obj) {
                            return obj.title == book;
                        }
                        ))
                    }
                }
            },
            returnBook: {
                value: function(book) {
                    librarian.returnBook(book, this.firstName);
                    this.bookshelf.forEach(element => {
                        if (element.title === book) {
                            const index = this.bookshelf.indexOf(element);
                            if (index > -1) {
                                this.bookshelf.splice(index, 1);
                            }
                        }
                    })
                }
            },
            checkGenre: {
                value: function(genre){
                    librarian.checkGenre(genre, this.firstName);
                }
            }
        })
    )
}

// customerBuilder("Jermiah", "Pritchard","456 Halloway Rd, Antioch, TN", "Science Fiction")

