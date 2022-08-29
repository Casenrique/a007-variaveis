let a = 10 //defini valor 10 para a
let b = 25 //defini valor 25 para b
console.log("a:", a, "b:", b)
let c = a // guarda o valor de a em c, assim c = 10
a = b //redefine valor de a para 25, assumindo o mesmo valor de b
b = c //redefine valor de b para 10, assumindo o mesmo valor de c, que havia guardado o valor inicial de a
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)
console.log("O novo valor de c é", c)