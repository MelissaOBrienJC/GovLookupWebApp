import { Component, OnInit } from '@angular/core';
import { IQuote} from './quote';

@Component({
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  quotes: IQuote[];
  selectedQuote: IQuote;
  selectedJustice: number;


  /*-----------------------------------------------------------------------
   --  ngOnInit()
   -----------------------------------------------------------------------*/
   ngOnInit(): void {
    this.quotes = [
      { 'text': 'We do not have government by the majority. We have government by the majority who participate.',
        'author': 'Thomas Jefferson'
      },
      { 'text': 'Just as important as how we vote is that we vote… Every time we vote we help to make America stronger.',
        'author': 'Ronald Reagan'
      },
      { 'text': 'Someone struggled for your right to vote. Use it.',
        'author': 'Susan B. Anthony'
      },
      { 'text': 'Turn on to politics, or politics will turn on you.',
        'author': 'Ralph Nader'
      },
      // tslint:disable-next-line:max-line-length
      { 'text': 'Change will not come if we wait for some other person or some other time. We are the ones weve been waiting for. We are the change that we seek.',
      'author': 'Barack Obama'
      }];

      const  selectedIndex = this.getRandomNumberBetween( 0, 4 );
      this.selectedQuote  = this.quotes[selectedIndex];

      this.selectedJustice = this.getRandomNumberBetween( 1, 2 );
  }

  getRandomNumberBetween(min: number, max: number ): number {
    return Math.floor(Math.random() * ( max - min + 1) + min);
}


}
