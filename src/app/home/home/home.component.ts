import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    {
      title: 'Uncharted',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '★★★★',
      img: 'assets/img/home/carrusel/movie01.jpg'
    },
    {
      title: 'Avatar 2: The Way of Water',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '★★★★★',
      img: 'assets/img/home/carrusel/movie02.png'
    },
    {
      title: 'The Lost City',
      description: 'Some quick example text to build on the card title and make up the bulk of the card content',
      buttonText: '★★★★',
      img: 'assets/img/home/carrusel/movie03.png'
    },
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
      buttonText: '★★★★★',
      img: 'assets/img/home/movies/movie04.jpg'
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
      buttonText: '★★★★',
      img: 'assets/img/home/movies/movie05.jpg'
    },
    {
      title: 'Schindler\'s List',
      description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      buttonText: '★★',
      img: 'assets/img/home/movies/movie06.png'
    },
    {
      title: 'The Dark Knight',
      description: 'There’s a new Batman in Gotham, in the shadowy form of Matt Reeves’s The Batman – and this is the bar it has to clear.',
      buttonText: '★★★★',
      img: 'assets/img/home/movies/movie07.png'
    },
    {
      title: 'The Terminator',
      description: 'It features time travel and a cyborg, with car chases and shoot-outs, but in James Cameron\'s first proper movie (ie. not featuring flying piranhas) it\'s all packed around the blood-covered endoskeleton of a relentless-killer horror pic.',
      buttonText: '★★★',
      img: 'assets/img/home/movies/movie08.png'
    },
    {
      title: 'The Exorcist',
      description: 'William Friedkin\'s horror masterwork, in which a 12-year-old girl is possessed by a demon, has a reputation as a shocker (in the good sense), with the pea-soup vomit, head-spin and crucifix abuse moments the most regularly cited.',
      buttonText: '★★★',
      img: 'assets/img/home/movies/movie09.jpg'
    },
    {
      title: 'Alien',
      description: 'Alien begins in the distant future as the commercial spaceship, Nostromo, returns to Earth.',
      buttonText: '★★★★',
      img: 'assets/img/home/movies/movie10.jpg'
    },
  ];
}

