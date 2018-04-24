const librarian = Object.create({},{
    register: {
        value: function register(firstName, lastName, address, favoriteGenres){
            // const libraryCardNumber = Math.random().toString(36).substr(2, 4);
            customerBuilder(firstName, lastName, address, favoriteGenres);
            this.addToTimeline(firstName, 'registered');
        }
    },
    checkout: {
        value: function checkout(bookTitle, customer){
            var includes = Library.some( book =>book["title"] === bookTitle);
            if(!includes){
                return false;
            }else{
                for(var book in Library){
                    if(Library[book].title == bookTitle){
                        Library[book].checkedOut = true;
                        Library[book].customer = customer;
                        Library[book].dueDate = librarian.setDueDate();
                        this.addToTimeline(customer, `checked out ${bookTitle}`);
                        return true;
                    }
                }
            }
        } 
    },
    setDueDate: {
        value: function(){
            var date = new Date();
            var dueDate = new Date(date.getTime() + (7 * 24 * 60 * 60 * 1000));
            return dueDate.toDateString();
        } 
    },
    returnBook: {
        value: function(book, customer){
            for(var i =0;i <Library.length;i++){
                if(Library[i].title == book){
                    var today = new Date();
                    var todayTime = today.getTime(); 
                    var dueDateTime = Date.parse(Library[i].dueDate);
                    if(todayTime > dueDateTime){
                        console.log("late")
                    }else{
                        console.log("not late");
                    }
                    this.addToTimeline(customer, `returned ${book}`);
                    Library[i].customer = "";
                    Library[i].dueDate = "";
                    break;
                }
            }
    
        }
    },
    checkGenre: {
        value: function(genre, customer){
            const books = Library.filter(book => book.genre == genre);
            const bookTitles = [];
            for(var i= 0;i<books.length;i++){
                bookTitles.push(books[i].title)
            }
            this.addToTimeline(customer, `asked what ${genre} books Library had: ${bookTitles}`);
        }
    },
    addToTimeline: {
        value: function(who, what){
            var date = new Date();
            var stringDate = date.toDateString();
            timeline.push(
                {
                    who: who,
                    what: what,
                    when: stringDate
                }
            )
            printTimeline();
        }
    }
})
