import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  cv="";
  @Output() e:EventEmitter<any>=new EventEmitter();
  send()
  {
    console.log(this.cv)
    this.e.emit(this.cv);
  }

  @Input() a="";
  ngOnInit(): void {
  }

}
