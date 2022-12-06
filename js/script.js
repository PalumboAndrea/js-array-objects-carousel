/*
Modifichiamo il codice dell'esercizio per renderlo funzionante con
un array di oggetti, con una regola: non potete modificare l'array di oggetti in nessun caso.
Dato un array di oggetti letterali con:
   url dell’immagine
   titolo
   descrizione
Creare un carosello.

Milestone 0:
Popoliamo dinamicamente il contenuto del carosello con i dati forniti dall'array di oggetti,
dal js (dentro al nostro 'carousel-item', per capirci).

Milestone 1:
Al click dell'utente sulle frecce verso l'alto o verso il basso,
l'immagine attiva diventerà visibile.

Milestone 2:
Aggiungiamo alla visualizzazione delle immagini anche titolo e testo relative alla singola immagine.

Bonus 1:
Aggiungere il ciclo infinito del carosello.
Ovvero se l'immagine attiva è la prima e l'utente clicca la freccia verso l'alto,
l'immagine che deve attivarsi sarà l'ultima e
viceversa per l'ultima immagine se l'utente clicca la freccia verso il basso.

Bonus 2:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

Bonus 3:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva
dovrà cambiare alla successiva.

*/

const images = [
   {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
   },
   {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
   },
   {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
   },
   {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
   },
   {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
   }
];

let carouselImage = document.querySelector('.carousel-image');


let previousButton = document.querySelector('.button.previous');

let nextButton = document.querySelector('.button.next');

// The usefull array is used to contain all the HTML image element after their creation.
// In this way I can modify the HTML element (example adding classes) using the array index.

let usefull = [];

images.forEach((element) => {
   let imageContainer = document.createElement('div');
   imageContainer.classList.add('image-container');
   carouselImage.append(imageContainer);

   image = document.createElement('img');
   image.setAttribute('src', `./${element.image}`);
   image.classList.add('image');

   let imageInfo = document.createElement('div');
   imageInfo.classList.add('description', 'me-4', 'px-4');
   imageContainer.append(imageInfo);

   title = document.createElement('h2');
   title.innerHTML = element.title;
   imageInfo.append(title);
   text = document.createElement('p');
   text.innerHTML = element.text;
   imageInfo.append(text);

   imageContainer.classList.add('none');
   imageContainer.append(image);
   usefull.push(imageContainer);
});



for (i=0; i<images.length; i++){
   images[i].none = i;
}

num = 0;

usefull[num].classList.add('block');

nextButton.addEventListener ('click', function(){
   num++;
   if (num>=images.length){
      usefull[num-1].classList.remove('block');
      num = 0;
   }
   usefull[num].classList.toggle('block');
   if (num>0 && num<images.length){
      usefull[num-1].classList.remove('block');
   }
})

previousButton.addEventListener ('click', function(){
   num= num - 1;
   if (num<0){
      num = images.length - 1;
      usefull[0].classList.remove('block');
      usefull[num].classList.toggle('block');
   } else if (num==0){
      usefull[num+1].classList.remove('block');
      usefull[num].classList.toggle('block');
   } else {
      usefull[num+1].classList.remove('block');
      usefull[num].classList.toggle('block');
   }
   
})



