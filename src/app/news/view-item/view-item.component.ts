import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Story } from 'src/app/shared/models/story.model';
import { HackerNewsApiService } from 'src/app/shared/services/hacker-news-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  item: Story;

  constructor(private route: ActivatedRoute,
              private hackerNews: HackerNewsApiService,
              private location: Location) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(itemId => this.hackerNews.fetchItem(itemId.id))
    )
    .subscribe(item => this.item = item);
  }

  goBack(): void{
    this.location.back();
  }

}
