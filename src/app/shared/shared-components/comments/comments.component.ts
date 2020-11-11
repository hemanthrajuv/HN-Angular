import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HackerNewsApiService } from '../../services/hacker-news-api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() commentId: number;
  viewComments = false;
  comment: Comment;
  isLoading = true;

  constructor(private hackerNews: HackerNewsApiService, private router: Router) { }

  ngOnInit(): void {
    this.hackerNews.fetchItem(this.commentId)
    .subscribe(
      comment => { this.comment = comment; },
      err => console.error(err),
      () => this.isLoading = false
    );
  }

  toggleViewComments(): void{
    this.viewComments = !this.viewComments;
  }

  viewUser(userId: string): void{
    this.router.navigateByUrl(`user/${userId}`);
  }
}
