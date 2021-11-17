import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  //when something observable we need to put $
  breadcrumb$: Observable<any[]>;

  constructor(private bsService: BreadcrumbService) { }

  ngOnInit(){
    //taking an Observable and populate in 
    // breadcrumb$: Observable<any[]>; and use it in our template
   this.breadcrumb$ = this.bsService.breadcrumbs$;
  }

}
