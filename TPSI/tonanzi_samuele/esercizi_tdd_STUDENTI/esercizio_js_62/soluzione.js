export const unique_random_numbers = (n, m) => {
   //INSERISCI QUI IL TUO CODICE
   let arr = new Set()

   while (arr.size < n)
      arr.add(Math.ceil(Math.random()* m))

   return Array.from(arr).sort()
   
}
