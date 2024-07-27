import { Component } from '@angular/core';
import { SoftwareSkillComponent } from './software-skill/software-skill.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SoftwareSkillComponent,NgFor,NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "Curious Full Stack Developer Ready to Tackle Any Tech Stack!",
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
  
  techStack = {
    viewSkillBars: true,
    experience: [
      {
        Stack: "Java With Spring Frameworks",
        progressPercentage: "80%"
      },{
        Stack: "Angular",
        progressPercentage: "65%"
      },{
        Stack: "React",
        progressPercentage: "30%"
      },{
        Stack: "HTML/CSS/JavaScript",
        progressPercentage: "60%"
      },{
        Stack: "Version Control(Git,SVN)",
        progressPercentage: "70%"
      },{
        Stack: "Problem-Solving",
        progressPercentage: "85%"
      },{
        Stack: "Programming",
        progressPercentage: "75%"
      },{
        Stack: "Database Management",
        progressPercentage: "50%"
      },{
        Stack: "API Development",
        progressPercentage: "65%"
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

  progressStyle(percentage:string){
    return {width: percentage}
  }
}
