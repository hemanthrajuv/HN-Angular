import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() selectedMenu = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      queryParam => {
        if (!queryParam.newsType){
          this.router.navigate([''], {relativeTo: this.route, queryParams: {newsType: 'new'}}).then().catch(err => console.error(err));
        } else {
          this.selectedMenu.emit(queryParam.newsType);
        }
      },
      err => console.error(err)
    );
  }

}
