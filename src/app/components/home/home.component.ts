import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GreetingComponent } from "../greeting/greeting.component";
import { SkillsComponent } from "../skills/skills.component";
import { EducationComponent } from "../education/education.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, GreetingComponent,HeaderComponent, GreetingComponent, SkillsComponent, EducationComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  about: any = aboutDetails;
}
const aboutDetails: any = {
  "name": "Maroti Uppe",
  "role": "Java Software Developer",
  "address": "Hyderabad, INDIA",
  "email": "marotiuppe891@gmail.com",
  "contact": "(+91) 9867205329"
}
