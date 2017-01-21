import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
  config.globalResources(['./attributes/gravatar/gravatar',
//  './value-converters/converters',
  './elements/contacts/contact-card.html'
  ]);
}
