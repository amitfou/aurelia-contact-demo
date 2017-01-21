import {inject, customAttribute, bindingMode} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';
import * as md5 from 'blueimp-md5';


@customAttribute('gravatar')
@inject(DOM.Element)
export class Gravatar {
    constructor(private element:Element) {
        this.element = element;
    }

    valueChanged(newEmail, oldEmail) {
        this.element.setAttribute("src", "https://www.gravatar.com/avatar/" + this.getHash(newEmail) + "?s=300&d=mm");
    }

    getHash(email:string) {
        console.log(email + ' ' + md5(email));
        return md5(email);
    }
}