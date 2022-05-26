class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        return `
        ${this.nombre} ${this.apellido}
        `
    }
    
    addMascota(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombreBook, autor){
            this.libros.push({
            nombre: `${nombreBook}`,
            autor: `${autor}`
        })
    }

    getBookNames(){
        return (this.libros.map(titulo => titulo.nombre))
    }
}

const usuario1 = new Usuario ("Denny", "Crane", 
[{nombre:"Boston Legal", autor:"David E. Kelley"}]
,["perro"])

console.log(`Nombre completo del usuario: ${usuario1.getFullName()}`)

console.log(`Mascotas: ${usuario1.mascotas}`)

usuario1.addMascota(" gato")
console.log(`Mascotas ahora: ${usuario1.mascotas}`)

console.log(`Cantidad de mascotas: ${usuario1.countMascotas()}`)

usuario1.addBook("The Practice", "Seth Godin")

console.log(usuario1.libros)

console.log(usuario1.getBookNames())