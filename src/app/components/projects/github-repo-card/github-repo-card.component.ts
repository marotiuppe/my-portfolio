import { Component, Input, OnInit } from '@angular/core'
import { DataService } from '../../../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-github-repo-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './github-repo-card.component.html',
  styleUrls: ['./github-repo-card.component.scss']
})
export class GithubRepoCardComponent implements OnInit {
  @Input() github: any;
  languagesList: [string, string][] = [];

  constructor(private appService: DataService) { }

  ngOnInit(): void {
    if (this.github?.languages && typeof this.github.languages === 'object') {
      // Convert to entries and map to append #
      this.languagesList = Object.entries(this.github.languages).map(([key, value]) => {
        return [key, `#${value}`];  // Append # to the value and return new entry
      });
    } else {
      console.warn('languages is not properly initialized or not an object');
    }
    // console.log("Repository : ",this.github)
    // this.appService.getDataByUrl(this.github.languages_url).subscribe((data: any) => {
    //   this.language = data;
    //   console.log("languages : ",this.language);
    // }, (error: any) => {
    //   console.error('Error fetching language data:', error);
    // });
  }


}
