const fs = require('fs');
const dox = require('dox');

// Lisez le contenu du fichier source
const sourceCode = fs.readFileSync('chemin/vers/votre/fichier.js', 'utf-8');

// Utilisez Dox pour analyser les commentaires
const comments = dox.parseComments(sourceCode, { raw: true });

// Affichez les commentaires (ou enregistrez-les dans un fichier, une base de données, etc.)
console.log(comments);
