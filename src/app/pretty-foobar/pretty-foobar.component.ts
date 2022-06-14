import { Component, OnInit, Input } from '@angular/core';
import { MatButton } from '@angular/material';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './pretty-foobar.component.html',
  styleUrls: ['./pretty-foobar.component.css'],
})
export class PrettyFoobarComponent implements OnInit {
  @Input() answer: string[];
  constructor() {}

  ngOnInit() {}
}
