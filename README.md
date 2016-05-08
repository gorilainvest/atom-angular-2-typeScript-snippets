# Angular 2 TypeScript Snippets for Atom

This extension for Atom adds snippets for Angular 2 for TypeScript and HTML.

## Usage

Type part of a snippet, press `enter`, and the snippet unfolds.

### TypeScript Snippets

|snippet              |explanation                         |
|---------------------|------------------------------------|
|[ng2-component-root](#ng2-component-root) |Angular 2 root App component        |
|[ng2-bootstrap](#ng2-bootstrap)      |Angular 2 bootstraping, for main.ts |
|[ng2-component](#ng2-component)      |Angular 2 component                 |
|[ng2-pipe](#ng2-pipe)           |Angular 2 pipe                      |
|[ng2-routes](#ng2-routes)         |Angular 2 @Routes                   |
|[ng2-route-path](#ng2-route-path)     |Angular 2 routing path              |
|[ng2-service](#ng2-service)        |Angular 2 service                   |
|[ng2-subscribe](#ng2-subscribe)      |Angular 2 observable                |
|[ng2-rx-map](#ng2-rx-map)         |RxJs map-operator gets imported     |

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
  selector: '[your-selector]',
  templateUrl: '[template-name].component.html',
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

import { [component-name] } from './[reference-path-of-module].component';

// enableProdMode();

bootstrap([component-name])
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
  selector: '[your-selector]',
  templateUrl: '[component-name].component.html',
})
export class [component-name]Component implements OnInit {
  constructor() {  }

  ngOnInit() {}
}
```

### ng2-pipe

`ng2-pipe` provides a skeleton for a Angular 2 Pipe.

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: '[pipe-name]'
})
export class [pipe-name]Pipe implements PipeTransform {
  transform(value: [value-type], args: any[]) : [value-type] {
    return ;
  }
}
```

### ng2-routes

`ng2-routes` creates the `@Routes` decorator with a single route in it.

```javascript
@Routes([
  { path: '/[route]', component: [component-name] }
])
```

### ng2-route-path

`ng2-route-path` adds a single route to `@Routes`.
**Use** this snippet inside the `@Routes` decorator.

```javascript
{ path: '/[route]', component: [component-name] }
```

### ng2-service

`ng2-service` provides a skeleton for a Angular 2 Service.

```javascript
import { Injectable } from '@angular/core';

@Injectable()
export class [service-name]Service {
  constructor() {  }
}
```

### ng2-subscribe

`ng2-subscribe` gives you a shorthand to call a service function, that returns a observable.
The `subscribe` method is also created for you. So you can assign the response quickly.

```javascript
this.[service-name].[service-function]
    .subscribe([response] => this.[assign-target] = [response]});
```

### ng2-rx-map

`ng2-rx-map` simply creates the import statement to reference the map operator of RxJs.

```javascript
import 'rxjs/add/operator/map';
```

### ng2-ngClass

This snippet inserts the `ngClass` directive.

```html
<div [ngClass]="cssClass: expression"></div>
```

### ng2-ngFor

This snippet inserts the `ngFor` directive.

```html
<div *ngFor="let {1:$item} of list"></div>
```

### ng2-ngIf

This snippet inserts the `ngIf` directive.

```html
<div *ngIf="expression"></div>
```

### ng2-ngModel

This snippet inserts the `ngModel` directive.

```html
<div [(ngModel)]="binding"></div>
```

### ng2-routerLink

This snippet inserts the `routerLink` directive.

```html
<a [routerLink]="routeName"></a>
```

### ng2-ngStyle

This snippet inserts the `ngStyle` directive.

```html
<div [ngStyle]="'style': expression"></div>
```
