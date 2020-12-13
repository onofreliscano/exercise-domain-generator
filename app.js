let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

for (let iPronoun=0; iPronoun<=1; iPronoun++) {
    for (let iAdj=0; iAdj<=1; iAdj++) {
        for (let iNoun=0; iNoun<=1; iNoun++) {
            console.log (pronoun[iPronoun] + adj[iAdj]+ noun[iNoun] + ".com"); 
        }
    }
}