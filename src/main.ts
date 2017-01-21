import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {HttpClient} from 'aurelia-fetch-client';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
(<any>Promise).config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  configureFetchClient(aurelia.container);

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}

function configureFetchClient(container) {
  let http = new HttpClient();
  http.configure(config => {
    config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:8030/');
  });
  container.registerInstance(HttpClient, http);
}
