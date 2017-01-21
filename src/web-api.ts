let latency = 200;
let id = 0;

function getId(){
  return ++id;
}

let contacts = [
  {
    id:getId(),
    firstName:'Graham',
    lastName:'Campbell',
    emailAddress:'graham@alt-three.com',
    phoneNumber:'867-5309',
    createdOn: 1484984888082
  },
  {
    id:getId(),
    firstName:'Fabien',
    lastName:'Potencier',
    emailAddress:'fabien@symfony.com',
    phoneNumber:'867-5309',
    createdOn: 1484984888082
  },
  {
    id:getId(),
    firstName:'Konstantin',
    lastName:'Haase',
    emailAddress:'github@rkh.im',
    phoneNumber:'867-5309',
    createdOn: 1484984888082
  }
];

export class WebAPI {
  isRequesting = false;
  
  getContactList(){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = contacts.map(x =>  { return {
          id:x.id,
          firstName:x.firstName,
          lastName:x.lastName,
          emailAddress:x.emailAddress,
          phoneNumber:x.phoneNumber,
          createdOn:x.createdOn
        }});
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }

  getContactDetails(id){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let found = contacts.filter(x => x.id == id)[0];
        resolve(JSON.parse(JSON.stringify(found)));
        this.isRequesting = false;
      }, latency);
    });
  }

  saveContact(contact){
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let instance = JSON.parse(JSON.stringify(contact));
        let found = contacts.filter(x => x.id == contact.id)[0];

        if(found){
          let index = contacts.indexOf(found);
          contacts[index] = instance;
        }else{
          instance.id = getId();
          contacts.push(instance);
        }

        this.isRequesting = false;
        resolve(instance);
      }, latency);
    });
  }
}
