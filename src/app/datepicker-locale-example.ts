import { Component, Inject } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import 'moment/locale/ja';
import 'moment/locale/fr';
import { FormControl } from '@angular/forms';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MMM-YYYY HH:mm',
  },
  display: {
    dateInput: 'DD-MMM-YYYY HH:mm',
  },
};
/** @title Datepicker with different locale */
@Component({
  selector: 'datepicker-locale-example',
  templateUrl: 'datepicker-locale-example.html',
  styleUrls: ['datepicker-locale-example.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DatepickerLocaleExample {
  constructor(
    private _adapter: DateAdapter<any>,
    @Inject(MAT_DATE_LOCALE) private _locale: string
  ) {}

  serializedDate = new FormControl(new Date().toISOString());

  french() {
    this._locale = 'fr';
    this._adapter.setLocale(this._locale);
  }

  japan() {
    this._locale = 'ja';
    this._adapter.setLocale(this._locale);
  }

  getDateFormatString(): string {
    if (this._locale === 'ja-JP') {
      return 'YYYY/MMM/DD';
    } else if (this._locale === 'fr') {
      return 'DD/MMM/YYYY';
    }
    return '';
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
