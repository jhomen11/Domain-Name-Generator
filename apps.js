
 var pronoun = ['the','our'];
 var adj = ['great', 'big' ];
 var noun = ['jogger','racoon'];

  

    for(i = 0; i < pronoun.length; i++){
        for(j = 0; j < adj.length; j++){
            for(k = 0; k < noun.length; k++){
                let dominio = pronoun[i]+adj[j]+noun[k]+".com";
                console.log(dominio);
                document.write('<p>'+dominio+'</p>')
            }
        } 
    }


