import { InjectionToken } from "@angular/core";

//create injection token
export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
    mediums: ['Movies', 'Series']
};