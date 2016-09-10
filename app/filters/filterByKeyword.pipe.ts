import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({ name: 'filterByKeywords' })
export class FilterByKeywordsPipe implements PipeTransform {
    transform(value: Array<any>, keyword: string): Array<any> {

        if (!value)
            return new Array();

        return value.filter(function (item, idx) {

            if (item.Email && item.Email.toString().includes(keyword))
                return true;

            if (item.Mobile && item.Mobile.toString().includes(keyword))
                return true;

            if (item.LoginName && item.LoginName.includes(keyword))
                return true;

            return false;
        });


    }
}