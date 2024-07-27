import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-software-skill',
  standalone: true,
  imports: [NgFor],
  templateUrl: './software-skill.component.html',
  styleUrl: './software-skill.component.css'
})
export class SoftwareSkillComponent {
  skillsSection = {
    softwareSkills: [
      {
        skillName: "Java",
        fontAwesomeClassname: "bx bxl-java"
      },{
        skillName: "Spring",
        fontAwesomeClassname: "bx bxl-spring-boot"
      },{
        skillName: "Hibernate",
        fontAwesomeClassname: "bx bx-rectangle"
      },{
        skillName: "Microservices",
        fontAwesomeClassname: "bx bx-collection"
      },{
        skillName: "HTML",
        fontAwesomeClassname: "bx bxl-html5"
      },{
        skillName: "JavaScript",
        fontAwesomeClassname: "bx bxl-javascript"
      },{
        skillName: "Angular",
        fontAwesomeClassname: "bx bxl-angular"
      },{
        skillName: "React",
        fontAwesomeClassname: "fab fa-react"
      },{
        skillName: "JSP",
        fontAwesomeClassname: "bx bx-code"
      },{
        skillName: "Maven",
        fontAwesomeClassname: "fa fa-box"
      },{
        skillName: "sql-database",
        fontAwesomeClassname: "fa fa-database"
      },{
        skillName: "Struts",
        fontAwesomeClassname: "bx bx-code-alt"
      },
      {
        skillName: "Eclipse IDE ",
        fontAwesomeClassname: "fa fa-laptop-code"
      },{
        skillName: "GIT",
        fontAwesomeClassname: "bx bxl-git"
      },
      {
        skillName: "Postman",
        fontAwesomeClassname: "bx bx-envelope"
      },{
        skillName: "RestAPI",
        fontAwesomeClassname: "bx bx-network-chart"
      },{
        skillName: "SVN",
        fontAwesomeClassname: "bx bx-code svn"
      },{
        skillName: "VS Code",
        fontAwesomeClassname: "bx bx-laptop"
      }
    ]
  };
}
