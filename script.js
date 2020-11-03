 var dates = [
 
 //Copier ce premier exemple et remplir avec les dates/articles/liens/catégories

    {
      "Titre": "Apparition des logos",
      "Date":"Fin des années 1400",
      "Résumé":"C’est l’imprimerie qui a utilisé en premier les logos.",
      "Catégorie":"Logo",
      //Lien a copier dedans
      "Lien":"<a href='https://99designs.fr/blog/histoire-design-genres-mouvements/histoire-design-graphique/#firstlogos'>99designs</a>"
    },
    {
      "Titre": "No friend but the mountains",
      "Date":"Writing from manu prison",
      "Résumé":"Behrouz Boochani",
      "Catégorie":"Webdesign",
      "Lien":"Pan Macmillan Australia"
    },
    {
      "Titre": "Indian Harvest",
      "Date":"Classic and contemporary vegetarian dishes",
      "Résumé":"Vikas Khanna",
      "Catégorie":"Nouvelle technologie",
      "Lien":"Bloomsbury USA"
    },
    {
      "Titre": "Upheaval",
      "Date":"Turning points for nations in crisis",
      "Résumé":"Jared Diamond",
      "Catégorie":"Programming",
      "Lien":"Little, Brown & Company"
    },
    {
      "Titre": "Algorithms",
      "Date":"Fourth Edition",
      "Résumé":"Robert Sedgewick, Kevin Wayne",
      "Catégorie":"Programming",
      "Lien":"Addison Wesley"
    },
    {
      "Titre": "How We Die",
      "Date":"Reflections on Life's Final Chapter",
      "Résumé":"Sherwin B. Nuland",
      "Catégorie":"Design",
      "Lien":"Vintage"
    },
    {
      "Titre": "The Circle",
      "Date":"",
      "Résumé":"Dave Eggers",
      "Catégorie":"Design",
      "Lien":"Vintage"
    },
    {
      "Titre": "The Algorithm Design Manual",
      "Date":"",
      "Résumé":"Steven S. Skiena",
      "Catégorie":"Programming",
      "Lien":"Springer"
    },
    {
      "Titre": "I Contain Multitudes",
      "Date":"The microbes within us and a grander view of life",
      "Résumé":"Ed Yong",
      "Catégorie":"Typographie",
      "Lien":"HarperCollins"
    },
    {
      "Titre": "The Silkwarm",
      "Date":"A Cormoran Strike Novel",
      "Résumé":"Robert Galbraith",
      "Catégorie":"UX",
      "Lien":"Mulholland"
    },
    {
      "Titre": "Cosmos",
      "Date":"",
      "Résumé":"Carl Sagan",
      "Catégorie":"Typographie",
      "Lien":"Ballantine"
    },
    {
      "Titre": "Comanche Moon",
      "Date":"",
      "Résumé":"Larry McMurtry",
      "Catégorie":"Ordinateur",
      "Lien":"Simon & Schuster"
    },
    {
      "Titre": "Nine Pints",
      "Date":"A journey through the money, medicine, and mysteries of blook",
      "Résumé":"Rose George",
      "Catégorie":"Ordinateur",
      "Lien":"Metropolitan"
    },
  ]
  
  var render = function(data) {
    var app = document.getElementById('app');
    var datesHTMLString = '<ul>'+
      data.map(function(date){
        // Retourne les données sour forme de liste
        return '<li>'+
                '<strong><h3>Titre: </strong>' + date.Titre + '</h3>' +
                '<strong><time>Date: </strong>' + date.Date + '</time><br/>' +
                '<strong>Résumé: </strong>' + date.Résumé + '<br/>' +
                '<strong>Catégorie: </strong>' + date.Catégorie + '<br/>' +
                '<strong>Lien: </strong>' + date.Lien + '<br/>' +
                '<br/><hr>' +
              '</li>';
      }).join('');
      + '</ul>';

    app.innerHTML = datesHTMLString;
  }
  render(dates);

  var handleSearch = function(event) {
    event.preventDefault();
    // Cherche le mot écrit dans la barre de recherche
    var searchTerm = event.target.elements['search'].value;
    // Tokenize le mot et enlève les espaces
    var tokens = searchTerm
                  .toLowerCase()
                  .split(' ')
                  .filter(function(token){
                    return token.trim() !== '';
                  });
   if(tokens.length) {
    //  Create a regular expression of all the search terms
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = dates.filter(function(date){
      // Create a string of all object values
      var dateString = '';
      for(var key in date) {
        if(date.hasOwnProperty(key) && date[key] !== '') {
          dateString += date[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return date objects where a match with the search regex if found
      return dateString.match(searchTermRegex);
    });
    // Rendu des résultats obtenus
    render(filteredList);
   }
  };

  document.addEventListener('submit', handleSearch);
  document.addEventListener('reset', function(event){
    event.preventDefault();
    render(dates);
  })