abstract class BooksRepository {
    abstract createBook(): object;
    abstract getBook(id: string): object;
    abstract getBooks(): object;
    abstract updateBook(id: string): object;
    abstract deleteBook(id: string): object;
}