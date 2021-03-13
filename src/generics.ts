export interface DbObject {
    _id: number
}

export abstract class ItemList<T extends DbObject> {
    abstract add(item:T):void 
    abstract remove(item:T):void
    abstract show():void 
    abstract count():number
}

export interface Producto {
    _id:number 
    nombre: string 
    precio:number
}

export class ItemListConcrete implements ItemList<Producto> {

    data:Producto[] = []

    add(item:Producto): void {
        this.data.push(item)
    }

    remove(item: Producto): void {
        const index = this.data.indexOf(item, 0)
        if( index > -1) {
            this.data.splice(index, 1)
        }
    }

    show():void {
        console.dir( this.data )
    }

    count():number {
        return this.data.length
    }

}
