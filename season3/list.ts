
class LisHandler <T> {
    items: T [] = [];

    add(item: T ): void {
        this.items.push(item);
    }

    remove(item: T): void {
        this.items = this.items.filter((i) => i != item);
    }

    getAll() : T[] {
        return this.items
    }
}

const array = new LisHandler<Number>() ;
array.add(10)
array.add(20)
array.add(30)

console.log(array.getAll());

array.remove(3)

console.log(array.getAll());

