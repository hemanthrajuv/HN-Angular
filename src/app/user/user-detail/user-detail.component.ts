import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';
import { HackerNewsApiService } from 'src/app/shared/services/hacker-news-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute,
              private hackerNews: HackerNewsApiService,
              private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(param => {
        return this.hackerNews.fetchUser(param.id);
      }),
    ).subscribe(
      user => this.user = user
    );
  }

  goBack(): void{
    this.location.back();
  }

}
