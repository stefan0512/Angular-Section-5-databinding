import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, ShadowDome
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() nameInput: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('# 01 - ngOnChanges called');
    console.log('# 01 - Changes=' + changes);
  }

  ngOnInit(): void {
    console.log('# 02 - ngOnInit called');
    console.log('## 02 - header: ' + this.header.nativeElement.textContent);
    console.log(
      '## 02 - Paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngDoCheck(): void {
    console.log('# 03 -ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('# 04 -ngAfterContentInit called');
    console.log(
      '## 04 - Paragraph: ' + this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentCheck(): void {
    console.log('# 05 -ngAfterContentCheck called');
  }

  ngAfterViewInit(): void {
    console.log('# 06 -ngAfterViewInit called');
    console.log('## 06 - header: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewCheck(): void {
    console.log('# 07 -ngAfterViewCheck called');
  }
  ngOnDestroy(): void {
    console.log('# 10 -ngOnDestroy called');
  }
}
