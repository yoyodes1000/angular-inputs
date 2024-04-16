import { Component, Input} from '@angular/core';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})

export class SkillComponent {
  @Input()
  name : string = "PHP";

  @Input()
  logo : string = "https://image.tmdb.org/t/p/original/7mPAXa0c0V9T596qOQi74C0e0le.jpg";

  @Input()
  site : string = "www.php.net";
  
}
