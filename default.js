//Back up or Default value set...
//code er error theke safe korte useful...

/* program vul hole NAN ase, undefined
tai backup rakhte hoe jno NAN na ase
ai choto function er jnno 2ta way ase
1st way: if(num2==undefined){
         num2 = 0;
         }
2nd way: num2 = num2||0;
*/

/*and aro shortcut way hocche 
function er moddhe backup value set kora

function add(num1, num2=0){

}

akhne jodi by chanc num2 value call kora naw hoe
taholew num2 er default value se kore dea hoise,
so tokhn aita niye kaj korbe, ar jodi value call 
kora hoe thn default value kaj korbe na
*/

function add(num1, num2=0){
    return num1 + num2;
}

const total = add(17);
console.log(total);