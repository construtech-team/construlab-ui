import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
// tslint:disable-next-line: no-host-metadata-property
  host: {
    role: 'banner'
  }
})
export class HeaderComponent { }
