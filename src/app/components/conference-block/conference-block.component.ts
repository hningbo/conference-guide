import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-conference-block',
  templateUrl: './conference-block.component.html',
  styleUrls: ['./conference-block.component.css']
})
export class ConferenceBlockComponent implements OnInit {

  @Input() conferenceSymbolAddress: string;
  @Input() conferenceName: string;
  @Input() conferenceUrl: string;

  constructor() {
  }

  ngOnInit() {
  }

  public jumpToConferencePage(conferenceUrl: string, year: string): any {
    window.open(conferenceUrl.replace('%year%', year));
  }
}
