import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent implements OnInit {
  references: any = [
    {
      reviewImage: 'assets/images/Client_2.png',
    },
    {
      reviewImage: 'assets/images/Client_3.png',
    },
    {
      reviewImage: 'assets/images/Client_4.png',
    },
    {
      reviewImage: 'assets/images/Client_5.png',
    },
    {
      reviewImage: 'assets/images/Client_6.png',
    },
    {
      reviewImage: 'assets/images/Client_7.png',
    },
    {
      reviewImage: 'assets/images/Client_8.png',
    },
    {
      reviewImage: 'assets/images/Client_9.png',
    },
    {
      reviewImage: 'assets/images/Client_1.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
