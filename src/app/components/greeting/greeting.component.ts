import { Component } from '@angular/core';
import { SocialMediaComponent } from "../social-media/social-media.component";

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
  greeting= {
    username: "Maroti Uppe",
    title: "Hi all, I'm Maroti",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web applications with Java / Spring / Angular / Struts and some other cool libraries and frameworks.",
    resumeLink: "https://google.com"
  }
}
