export default function embaralhar(elementos:any[]): any {
  return elementos 
    .map(valor => ({valor, aleatorio: Math.random()}))
    .sort((ob1, ob2) => ob1.aleatorio - ob2.aleatorio)
    .map(obj => obj.valor)
}