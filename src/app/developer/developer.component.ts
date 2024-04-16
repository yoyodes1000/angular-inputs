import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.scss'
})
export class DeveloperComponent {
  
  newDev : Developer = new Developer (
   "Johann", "Toto",  40, "M",  "Ca c'est moi",
     [
      new Skill ( "PHP", "https://image.tmdb.org/t/p/original/7mPAXa0c0V9T596qOQi74C0e0le.jpg", "www.php.net")
    ]
)
}
