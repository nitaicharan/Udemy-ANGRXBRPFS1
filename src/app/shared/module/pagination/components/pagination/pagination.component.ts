import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/service/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() limit = 20;
  @Input() page: number;
  @Input() url: string;

  count: number;
  pages: number[];

  constructor(private utilsService: UtilsService) { }

  ngOnInit(): void {
    this.count = Math.ceil(this.total / this.limit);
    this.pages = this.utilsService.range(1, this.count);
  }
}
