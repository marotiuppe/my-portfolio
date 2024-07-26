import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  socialMediaLinks = {
    github: "https://github.com/marotiuppe",
    linkedin: "https://www.linkedin.com/in/maroti-u-448324199/",
    gmail: "marotiuppe891@gmail.com",
    instagram : "https://www.instagram.com/maroti_uppe/",
    facebook: "https://www.facebook.com/maroti.uppe/",
    whatsapp:"https://wa.me/9867205329"
  };
}
