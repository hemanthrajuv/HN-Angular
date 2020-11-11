import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Story } from '../../models/story.model';
import { HackerNewsApiService } from '../../services/hacker-news-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input() id: number;
  @Input() isUserSubmission: boolean;
  @Input() index: number;
  @Input() showText: boolean;
  @Output() viewItem: EventEmitter<number> = new EventEmitter<number>();

  page: number;
  item: Story;
  itemSubcription: Subscription;
  isLoading = true;


  toggleText = false;

  constructor(private route: ActivatedRoute,
              private hackerNews: HackerNewsApiService,
              private router: Router) { }

  ngOnInit(): void {
   this.route.queryParams
    .subscribe(
       params => {
         if (params.page){
           this.page = params.page;
         }
         else {
           this.page = 1;
         }
       }
    );
   this.itemSubcription = this.hackerNews.fetchItem(this.id)
  //  .pipe(
  //    tap(d => console.log(d))
  //  )
   .subscribe(
     story => this.item = story,
     err => console.error(err),
     () => this.isLoading = false
   );
  }

  ngOnDestroy(): void {
    this.itemSubcription.unsubscribe();
  }

  onViewTextClick(): void{
    this.toggleText = !this.toggleText;
  }

  onClickComments(id: number): void{
    // this.viewItem.emit(id);
    this.router.navigateByUrl(`item/${id}`);
  }

  viewUser(userId: string): void{
    this.router.navigateByUrl(`user/${userId}`);
  }
}
