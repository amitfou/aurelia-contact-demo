import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {WebAPI} from './web-api';



@inject(HttpClient, WebAPI)
export default class Welcome {
    contact:Contact = new Contact();

    constructor(private httpClient:HttpClient, private api:WebAPI) {
      console.log('constructor..');
    }    

    save() {
      let dis = this;
      console.log(this.contact);
    //   this.httpClient.fetch('contacts/add', {
    //         method: 'post',
    //         body: json(this.contact)
    //     }).then(response => 
    //     response.json()
    //   ).then(data => {
    //       window.alert("Contact saved successfully");
    //       dis.contact = null;
    //       console.log(data);
    //   }); 

        this.contact.createdOn = new Date().getTime();
        this.api.saveContact(this.contact).then(contact => {
            window.alert("Contact saved successfully");
        });

    }

  activate() {
      console.log('activate..');
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

export class Contact {
    firstName:string;
    lastName:string;
    emailAddress:string;
    phoneNumber:string;
    createdOn: number;
}