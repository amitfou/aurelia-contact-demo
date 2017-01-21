import {Contact} from './welcome';
import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';


@inject(HttpClient, WebAPI)
export class ListContacts {
    contacts : Array<Contact>;
    
    constructor(private httpClient:HttpClient, private api:WebAPI) {
      console.log('constructor..');
    }

    activate() {
        console.log('activate..');
        let dis = this;
        // return this.httpClient.fetch('contacts/list')
        // .then(response => 
        //     response.json()
        // )
        // .then(data => {
        //     console.log('got the data..');
        //     dis.contacts = <any>data;
        // });
        return this.api.getContactList().then(contacts => this.contacts = <any>contacts);
    }


    created(owningView, myView) {
      console.log('created..');
   }

   bind(bindingContext, overrideContext) {
      console.log('bind..');
   }

   attached(argument) {
      console.log('attached..');
   }

   detached(argument) {
      console.log('detached..');
   }

   unbind(argument) {
      console.log('unbind..');
   }

}