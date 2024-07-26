import { Component } from '@angular/core';
import { SoftwareSkillComponent } from './software-skill/software-skill.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SoftwareSkillComponent,NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      "⚡ Develop highly interactive end/user interfaces for web applications.",
      "⚡ Design and implement backend systems using Java with Spring frameworks.",
      "⚡ Implement responsive web designs using Angular, React, and jQuery.",
      "⚡ Utilize modern JavaScript frameworks and libraries for front-end development.",
      "⚡ Develop and maintain comprehensive test suites for web applications.",
      "⚡ Apply best practices in software development, including CI/CD and version control.",
      "⚡ Leverage Elasticsearch for search and data analytics within web applications.",
      "⚡ Mentor and guide junior developers and interns, providing support in their development."
    ]
  };
}
