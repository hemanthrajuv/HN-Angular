import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HackerNewsApiService } from 'src/app/shared/services/hacker-news-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-submissions',
  templateUrl: './user-submissions.component.html',
  styleUrls: ['./user-submissions.component.css']
})
export class UserSubmissionsComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router,
              private hackerNewsApi: HackerNewsApiService,
              private location: Location) { }

  userId: string;
  submissions: Array<number>;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params.id;
      this.hackerNewsApi.fetchUserSubmissionIds(params.id).subscribe(
        submissions => this.submissions = submissions
      );
    });
  }

  onClickMore(): void{
    this.hackerNewsApi.fetchUserSubmissionIds(this.userId, this.submissions[this.submissions.length - 1]).subscribe(
      newSubmissions => {
        newSubmissions.forEach( submission => this.submissions.push(submission) );
      }
    );
  }

  goBack(): void{
    this.location.back();
  }

}
