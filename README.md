# Angular 2 TypeScript Snippets for Atom

This extension for Atom adds snippets for Angular 2 for TypeScript and HTML.

## Usage

Type part of a snippet, press `enter`, and the snippet unfolds.

### TypeScript Snippets

|snippet              |explanation                         |
|---------------------|------------------------------------|
|`ng2-component-root` |Angular 2 root App component        |
|`ng2-bootstrap`      |Angular 2 bootstraping, for main.ts |
|`ng2-component`      |Angular 2 component                 |
|`ng2-pipe`           |Angular 2 pipe                      |
|`ng2-routes`         |Angular 2 @Routes                   |
|`ng2-route-path`     |Angular 2 routing path              |
|`ng2-service`        |Angular 2 service                   |
|`ng2-subscribe`      |Angular 2 observable                |
|`ng2-rx-map`         |RxJs map-operator gets imported     |

### HTML Snippets

```html
ng2-ngClass
ng2-ngFor
ng2-ngIf
ng2-ngModel
ng2-routerLink
ng2-ngStyle
ng2-ngSwitch
```

Alternatively, press `Ctrl`+`Space` (Windows, Linux) or `Cmd`+`Space` (OSX) to activate snippets from within the editor.

## Known Issues

It seems that you need to have a `tsconfig.json` to get the TypeScript snippets to work.

## Snippets in Detail

No one wants to buy a pig in a poke. The following section will show you what the provided snippets actually do for you.

### ng2-component-root

`ng2-component-root` gives you a component that you want as entry point for your application.
It also sets up Routing, the HTTP client and RxJS.
Per default the RxJs library is referenced.

```javascript
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import 'rxjs/Rx'; // load the full rxjs

@Component({
  moduleId: module.id,
  selector: '[type-your-selector]',
  templateUrl: '[type-template-name].component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ]
})
@Router([

])
export class AppComponent {}
```

### ng2-bootstrap

`ng2-bootstrap` allows you to start your root component to get your app up and running.
It also prepares `enableProdMode()` for you.

```javascript
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { [type-component-name] } from './[reference-path-of-module].component';

// enableProdMode();

bootstrap([type-component-name])
  .then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));
```

### ng2-component

`ng2-component` provides a skeleton for a Angular 2 Component.
It saves you time typing the mandatory Decorator properties.

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '[type-your-selector]',
  templateUrl: '[type-component-name].component.html',
})
export class [type-component-name]Component implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
```

### ng2-pipe

`ng2-pipe` provides a skeleton for a Angular 2 Pipe.

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: '[type-pipe-name]'
})
export class [type-pipe-name]Pipe implements PipeTransform {
  transform(value: [type-value-type], args: any[]) : [type-value-type] {
    return ;
  }
}
```

### ng2-routes

`ng2-routes` creates the `@Routes` decorator with a single route in it.

```javascript
@Routes([
  { path: '/[type-route]', component: [type-component-name] }
])
```
