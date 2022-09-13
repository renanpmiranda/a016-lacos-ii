const n = Number(prompt('Forneça um número: '))
const multiplicador = [0,0,0,0,0,0,0,0,0,0]

for(let i in multiplicador){
    i = `${Number(i)+1}`
    console.log(`${n} x ${i} = ${n*i}`)
}