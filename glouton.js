function rendu_glouton(montants, pieces_rendues = [], index_pieces = 0) {
  const pieces = [100, 50, 20, 10, 5, 2, 1]; //Initialisation des differents rendus monnais possible


  for (let i = index_pieces; i < pieces.length; i++) {//Analyse et calcul des rendements avec un index de 0 au debut puis i++ etc
    if (montants === 0) {
      return pieces_rendues;//Cas ou il me donne rien
    }
    else if (montants >= pieces[i]) {
      pieces_rendues.push(pieces[i]);
      return rendu_glouton(montants - pieces[i], pieces_rendues, i);
    }
  }
  return pieces_rendues;
}

console.log("Voici les rendus pour tes montants");

console.log(rendu_glouton(68,[],0));
console.log(rendu_glouton(68,[],0));

console.log("Test");
console.log(rendu_glouton(10560,[],0));