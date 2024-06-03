

//array de bloques pintados
let bloquespintado = [];
//array de bloques que se pintaron con el estilo "erroneo"
let bloquespintadoerroneo = [];
//array de bloques que se crearon
let bloques = [];
//bloques que se crearan
var numeroBloques = 9;
//array de valores que se asignaran a cada bloque 
let valores = [];
//contador de elecciones erroneas realizadas 
var eleccioneserroneas = 0;
//contador de elecciones correctas
var eleccionescorrectas = 0;
//numeros random generados para asignar los bloques que se tiene que elegir
var numerosrandomgenerados = 3;
//array de numeros random que se generaran 
let numerosrandom = []
//tope de bloques elegibles 
let bloqueselegibles = 3
//contador de niveles
var nivel = 1;

var lifes = 3;


//funcion para que se creen los bloques 
function crearElementos(){

   let level = document.querySelector('p')

   level.textContent = nivel



 //si se encuentra en el nivel 1 o 2
  if(nivel == 1 || nivel == 2){
    //se iterara 9 veces(numero de bloques que se tienen que crear)
    for(let i = 0; i < numeroBloques;i++){
      //se crea una etiqueta div
      let div = document.createElement('div');
      //se crea una etiqueta span 
      let span = document.createElement('span');
       
      //se le agrega una clase "bloque" al div
       div.classList.add('bloque');
       //se le agrega una etiqueta span al div
       div.appendChild(span)
    
       //se agrega el div creado al array bloques
         bloques.push(div);
       //se accede a la etiqueta con clase .containerfijo(container de los bloques) y se agrega el div que se acaba de crear  
       document.querySelector('.containerfijo').append(bloques[i]);
       // se llama a la funcion para crear los valores random que se asignaran a cada bloque
       randomValue();
       //al bloque que se acaba de crear,accedo a la etiqueta span y le asigno un valor random
       bloques[i].querySelector('span').textContent = valores[i]
       
  }

  //nivel 3
}else if(nivel == 3){
   //se iterara 16 veces(numero de bloques que se tienen que crear)
  for(let i = 0; i < numeroBloques;i++){
    
    //accedo a la etiqueta con la clase .containerfijo y le quito la clase container
    document.querySelector('.containerfijo').classList.remove('container');
    //accedo a la etiqueta con la clase .containerfijo y le agrego .container-nivel12
    document.querySelector('.containerfijo').classList.add('container-nivel2')

    //se crea una etiqueta div
    let div = document.createElement('div');
     //se le agrega una etiqueta span al div
    let span = document.createElement('span');
    //se le agrega una etiqueta span al div
    div.appendChild(span)
    //se le agrega una clase "bloque" al div
     div.classList.add('bloque');
    //se agrega el div creado al array bloques
       bloques.push(div);
    //se accede a la etiqueta con clase .containerfijo(container de los bloques) y se agrega el div que se acaba de crear  
     document.querySelector('.containerfijo').append(bloques[i]);
     // se llama a la funcion para crear los valores random que se asignaran a cada bloque
     randomValue();
     //al bloque que se acaba de crear,accedo a la etiqueta span y le asigno un valor random
     bloques[i].querySelector('span').textContent = valores[i]
}    
} 
 }

//funcion que generara los valores random para asignar a los bloques                  
function randomValue(){ 
  //genera un numero aleatorio del 1 al 9
let rnd = Math.floor(Math.random() * numeroBloques) + 1
  //al array valores se hare un filtro(cada elemento se compara con el numero random generado, si no es igual se devolvera los valores que se repiten),
let values = valores.filter(value => value === rnd);
  //si el rnd no es igual a ninguno de los elementos del array valores 
if(values.length < 1){
  //se hace agrega al array el rnd
valores.push(rnd);
}
else{
  //se vuelve a llamar a la funcion para que me genere un numero que no se repita
  randomValue();
} 
}             


//funcion para que se pinten los bloques con valores iguales a los valores random generados para elegir
function pintado(){
   //si el nivel es...
   switch (nivel) {
    case 1:
      //se iterara bloqueselegibles veces
      for(let i = 0; numerosrandom.length < bloqueselegibles ; i++){
        //se generara un numero random del 1 al 9
        let numerorandom = Math.floor(Math.random() * 9) + 1;
        //al array numerosrandom se hara un filtro(cada elemento se compara con el numero random generado, si no es igual se devolvera los valores que se repiten)
        let valorrepetido = numerosrandom.filter(value => value === numerorandom);
        //si el numero generado no se repite
        if(valorrepetido.length === 0){
          //a numerosrandom se le agregara el numerorandom generado
       numerosrandom.push(numerorandom);
       console.log(numerorandom)
       }   
     }
     
     //8 milisegundos
     setTimeout(() => {
      //se itera sobre los bloques
       for(let i = 0; i < bloques.length; i++){
        //obtengo el valor del bloque iterado
         let contenidoBloque = parseInt(bloques[i].querySelector('span').textContent);
         //si el valor esta dentro del arreglos numerosrandom(3)
         if (numerosrandom.includes(contenidoBloque)) {
          //al bloque iterado se le agrega la clase "active"
          bloques[i].classList.add('active');
          //8 milisegundos
          setTimeout(() => {
            //se le quita la clase "active" al bloque iterado
              bloques[i].classList.remove('active');
          }, 800);
      }
      //al bloque iterado se le agrega el evento click
      bloques[i].addEventListener('click', eleccion);
        
      }
     }, 800);

      break;
    case 2:
       
      
      //se itera sobre los bloques, en este nivel son 4 bloques que se pintaran
      for(let i = 0; numerosrandom.length < bloqueselegibles ; i++){
        //se generan numeros random del 1 al 9(hasta que el arreglo numeros random tenga 4 elementos)
        let numerorandom = Math.floor(Math.random() * 9) + 1;
        //al array numerosrandom se hara un filtro(cada elemento se compara con el numero random generado, si no es igual se devolvera los valores que se repiten)
        let valorrepetido = numerosrandom.filter(value => value === numerorandom);
        //si el numero generado no se repite
        if(valorrepetido.length === 0){
         
       numerosrandom.push(numerorandom);
       console.log(numerorandom)
       }   
     }
     
    
     
     setTimeout(() => {
       for(let i = 0; i < bloques.length; i++){
         let contenidoBloque = parseInt(bloques[i].querySelector('span').textContent);
         if (numerosrandom.includes(contenidoBloque)) {
          bloques[i].classList.add('active');
          setTimeout(() => {
              bloques[i].classList.remove('active');
          }, 800);
      }
      bloques[i].addEventListener('click', eleccion);
        
      }
     }, 800);
      break;
      case 3:

        for(let i = 0; numerosrandom.length < bloqueselegibles ; i++){
          let numerorandom = Math.floor(Math.random() * numeroBloques) + 1;
       
          let valorrepetido = numerosrandom.filter(value => value === numerorandom);
          
          if(valorrepetido.length === 0){
           
         numerosrandom.push(numerorandom);
         console.log(numerorandom)
         }   
       }
       
       
       setTimeout(() => {
         for(let i = 0; i < bloques.length; i++){
           let contenidoBloque = parseInt(bloques[i].querySelector('span').textContent);
           if (numerosrandom.includes(contenidoBloque)) {
            bloques[i].classList.add('active');
            setTimeout(() => {
                bloques[i].classList.remove('active');
            }, 800);
        }
        bloques[i].addEventListener('click', eleccion);
          
        }
       }, 800);
        break;
 
  }
 



      }
      
      
     
     
     
  
   
      
  







//funcion para cuando se selecciona un bloque
function eleccion(e){
  //si la longitud del arreglo numerosrandom es igual a bloques elegibles 
  if(numerosrandom.length == bloqueselegibles){
    //se almacena la informacion de la etiqueta donde se hizo el click
    let bloqueseleccionado = e.target
    //se obtiene el valor del bloque seleccionado
    let valorseleccionado = bloqueseleccionado.querySelector('span').textContent



    //se itera sobre los numerosrandom
    for(let i = 0; i < numerosrandom.length; i++ ){
      //si el valor del bloque seleccionado es igual al primer elemento de los bloques pintados
      if(valorseleccionado == numerosrandom[i]){
  
        //al bloque seleccionado se le agrega la clase active     
        bloqueseleccionado.classList.add('active')
        //el bloque seleccionado se agrega al array bloquespintados
        bloquespintado.push(bloqueseleccionado) 
        //al bloque seleccionado se le quita el evento click
        bloqueseleccionado.removeEventListener('click', eleccion)
        console.log(bloquespintado)
        //se suma 1 al contador elecciones correctas
        eleccionescorrectas++
  
        //si elecciones correctas es igual bloques elegibles
        if(eleccionescorrectas == bloqueselegibles){
           
          //se itera sobre bloquespintadoserroneo
           for(let i = 0; i < bloquespintadoerroneo.length; i++){
            //a los bloques que estan en el array bloquespintadoerroneo se le quitara la clase "bloque-equivocado"
            bloquespintadoerroneo[i].classList.remove('bloque-equivocado');
      
      
           }
           
           

           setTimeout(() => {
        
            bloquespintado = [];
            bloquespintadoerroneo = [];
            bloques = [];
            valores = [];
            numerosrandom = [];
            eleccionescorrectas = 0
            eleccioneserroneas = 0;
            //subes de nivel
            nivel++
            //se suma un 1 a bloques elegibles
            bloqueselegibles++
            //si pasas al nivel 3 el numero de bloques ahora seran 16
            if(nivel == 3){
             numeroBloques += 7
            }
            
           //limpio el containerfijo
            document.querySelector('.containerfijo').innerHTML = '';
            //llamo a crear elementos
            crearElementos()
            //llamo a pintado
            pintado()
           },
           500);
           //se reinicia todo
      
    
      
  

        }
       
        //si la ultima eleccion que hiciste fue la ultima para que sea igual a bloques elegibles se terminara el bucle 
       return
  
    }
    }

    //se itera sobre los numerosrandom
    for(let i = 0; i < numerosrandom.length; i++ ){
     //si el valor seleccionado es diferente a cualquier elemento de los numeros random
     if(valorseleccionado !== numerosrandom[i]){
      //se suma 1 al contador eleccioneserroneas
      eleccioneserroneas++
      console.log(eleccioneserroneas)
      //al bloque seleccionado se le agrega la clase shaking-block(para que tiemble)
      bloqueseleccionado.classList.add('shaking-block')
      //si la eleccion que hiciste es tu tercera eleccion erronea
      if(eleccioneserroneas == 3){
        
        

      for(let i = lifes - 1; i < lifes; i++){
        let life = document.querySelectorAll('.fa-solid')[i]
        life.classList.add('lostheart')
        console.log(life)
        lifes--
       }
      
      if(lifes == 0){
        let lose = document.querySelector('main')
        lose.style.display = 'none'
      } 
        
       
       
      
      
      

      console.log(`---------${lifes}--------`)
        for(let i = 0; i < bloques.length; i++){
          bloques[i].removeEventListener('click',eleccion)

        }
  
      //se obtiene la etiquera body
      let mainerroneo = document.querySelector('main');
  
      //el bloque seleccionado que es un bloque erroneo se agrega al array bloquespontadoerroneo para luego iterar sobre ello y quitarle la clase "erroneo"    
      bloquespintadoerroneo.push(bloqueseleccionado);
     
     console.log(bloquespintadoerroneo)
      
     //se le agrega la clase "erroeno" a la etiqueta body
     mainerroneo.classList.add('erroneo')
  
    //al bloque seleccionado se le agrega la clase "gameover-bloque-equivocado" 
    bloqueseleccionado.classList.add('gameover-bloque-equivocado')
  
    

    //se obtiene las etiquetas que tengan como clase .bloque-equivocado(devuelve un nodelist)
    let gameoverBloques = document.querySelectorAll('.bloque-equivocado');

    //para cada elemento del array gameoverBloques, se almacena en la variable gameoverBloque 
    gameoverBloques.forEach(gameoverBloque => {
       //se le quita la clase "bloque-equivocado"
      gameoverBloque.classList.remove('bloque-equivocado')
      //se le agrega la clase "gameover-bloque-equivocado"
    gameoverBloque.classList.add('gameover-bloque-equivocado');

    });

    //se obtiene las etiquetas que tengan la clase "bloque" y que no tengan la clase ".gameover-bloque-equivocado"(devuelve un nodelist )
    let noElegidos  = document.querySelectorAll('div.bloque:not(.gameover-bloque-equivocado)');
    
    //para cada elemento del array noElegidos se almacena en una variable noElegidos
    noElegidos.forEach(noElegidos => {
    
      //se le agrega la clase "gameover"
      noElegidos.classList.add('gameover')
    

    });
      

   
      //5 milisegundos
      setTimeout(() => {
        //al body se le quita la clase "erroneo"
        mainerroneo.classList.remove('erroneo')




    }, 200);

    

     
      
     
          setTimeout(() => {
        
        //se reinicia todo(no se sube nivel)
        bloquespintado = [];
        bloquespintadoerroneo = []
        bloques = [];
        valores = [];
        numerosrandom = [];
        eleccioneserroneas = 0;
        eleccionescorrectas = 0;
        document.querySelector('.containerfijo').innerHTML = '';
        crearElementos()
        pintado()

        
    }, 500);
  
    
  
  
      //de lo contario si la eleccion es erronea pero no es tu tercer eleccion erronea
      }else{
        //al bloque seleccionado se le agrega la clase "bloque-equivocado"
        bloqueseleccionado.classList.add('bloque-equivocado')
        //al bloque seleccionado se le agrega la clase "shaking-block"
        bloqueseleccionado.classList.add('shaking-block')
        //al bloque seleccionado se le quita el evento click
        bloqueseleccionado.removeEventListener('click', eleccion)
        //se agrega el bloque erroneo al array bloquespintadoerroneo
        bloquespintadoerroneo.push(bloqueseleccionado)
        console.log(bloquespintadoerroneo)
        
       }

      //se finaliza el buvle
      return



     }
    }
  
  
  }
 



   }



crearElementos()
  pintado()









