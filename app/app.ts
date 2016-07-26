import { provide, PLATFORM_DIRECTIVES, PLATFORM_PIPES, enableProdMode } from '@angular/core';
import { ionicBootstrap } from 'ionic-angular';
import { Splashscreen } from 'ionic-native';

import { WordpressAppComponent } from './ionic-wordpress-app';
import { Config, APP_CONFIG } from './config'
import { APP_DIRECTIVES, APP_PROVIDERS, APP_PIPES } from './providers'

// enableProdMode();

ionicBootstrap(WordpressAppComponent, [
  ...APP_PROVIDERS,
  provide(Config, { useValue: APP_CONFIG }),
  provide(PLATFORM_DIRECTIVES, { useValue: APP_DIRECTIVES, multi: true }),
  provide(PLATFORM_PIPES, { useValue: APP_PIPES, multi: true })
], {
    prodMode: false,
    activator: 'ripple',
    menuType: 'overlay',
    spinner: 'bubbles'
  });
