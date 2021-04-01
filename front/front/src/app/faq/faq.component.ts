import { Component } from '@angular/core';
import { moveSyntheticComments } from 'typescript';
declare const externaljs: any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  onclick(): void {
    externaljs();
  }
}
