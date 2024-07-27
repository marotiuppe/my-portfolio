import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
 timeline = [
    {
      heading: "B.Tech - Electronics and Telecommunication",
      duration: "2021",
      subtitle: "Mumbai University, Mumbai",
      content: "Successfully completed my B.tech in Electronics and Telecommunication from Mumbai University, Mumbai.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "PG Diploma - Electronics",
      duration: "2017",
      subtitle: "Rajiv Gandhi Poly (MSBTE), Udgir",
      content: "Successfully completed my PG Diploma in 2017 from Rajiv Gandhi Poly, Udgir",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2014",
      subtitle: "CBSE Board",
      content: "Successfully completed my high school studies in 2014 from Rani Laxmibai Vidyalaya, Nanded.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];
}
