import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HackerNewsApiService } from 'src/app/shared/services/hacker-news-api.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {

  page = 1;
  storyType: string;
  stories: Array<number>;
  param: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private hackerNewsApi: HackerNewsApiService) {
      this.page = this.route.snapshot.queryParams.page ? this.route.snapshot.queryParams.page : 1;
     }

ngOnInit(): void {
const queryParam = this.route.queryParams;
const stories$ = queryParam.pipe(
  switchMap(queryParams => {
    if (queryParams.page){
      this.param = queryParams.newsType;
      return this.hackerNewsApi.fetchStories(queryParams.newsType, queryParams.page);
    }
    else{
      this.param = queryParams.newsType;
      return this.hackerNewsApi.fetchStories(queryParams.newsType);
    }
  })
);
stories$.subscribe(
  stories => this.stories = stories,
  err => console.error(err)
);
}

onMenuSelect(storyType: string): void {
// console.log(storyType);
}

viewItem(itemId: number): void{
  // console.log(itemId);
  this.router.navigate(['item', itemId]);
}

nextPage(): void{
this.page++;
let lastElement: number;
if (this.stories.length > 1){
lastElement = this.stories[this.stories.length - 1];
}
console.log(this.param);
if (this.param){
this.router.navigate([`news`],
{ queryParams: {newsType: `${this.param}`,
page: `${+this.page }`, lastElement: `${+lastElement}`} }, ).catch(
err => console.log(err)
);
} else {
  this.router.navigate([`news`], { queryParams: {newsType: 'new', page: `${+this.page }`, lastElement: `${+lastElement}`} }, ).catch(
    err => console.log(err)
    );
}
}

prevPage(): void{
if (this.page > 1){
this.page--;
this.router.navigate(['news'], { queryParams: { newsType: `${this.param}`, page: `${+this.page }`} }, ).catch(
err => console.log(err)
);
}
}

}
