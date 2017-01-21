import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'welcome',   title: 'Add Contacts', nav : true, href: ''},
      { route: 'list',  moduleId: 'list-contacts', title: 'List Contacts',  name:'list-contacts',  nav : true, href: '/list' }
    ]);

    this.router = router;
  }
}