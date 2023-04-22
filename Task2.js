const jsonString =`
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
//console.log('jsonString',jsonString)

const data = JSON.parse(jsonString);
const list = data.list;
console.log(list)
