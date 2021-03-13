import {Producto, ItemListConcrete} from '../src/generics'

test("largo de la lista", () => {
    const list = new ItemListConcrete()
    expect( list.count() ).toBe(0)
    list.add( {_id: 1, nombre: "xxx", precio: 100} )
    expect( list.count() ).toBe(1)
    list.add( {_id: 2, nombre: "other", precio: 50} )
    expect( list.count() ).toBe(2)
    list.add( {_id: 3, nombre: "another", precio: 150} )
    expect( list.count() ).toBe(3)
})