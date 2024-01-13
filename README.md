# Madu Framework
This is my own little framework based on webpack including typescript, static components and a compiler which compiles all files into 3.

# How to use this template
1. Create a repository based on this template
2. Run <code>npm run start</code> to watch the files
3. Run <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Liveserver</a> on <code>/dist/index.html</code>

# How to build the project
1. Run <code>npm run build</code>
2. When everything is done, you'll see the project at <code>/dist</code>

# How to create components
1. Create a directory at <code>/src/components</code>
2. Create the <code>/src/components/{name}/{name}.component.ts</code> file
3. Create the <code>/src/components/{name}/{name}.component.html</code> file
4. Paste this into the Typescript file and swap {name} with your component name:
```ts
import { Component } from '../../core/Component';
import template from './{name}.component.html';

@Component({
  tag: 'app-{name}',
  template,
})
export class {Name}Component { }
```
5. Add the component to the array at the <code>ComponentManager.manage</code> call at <code>/src/scripts/main.ts</code>:
```ts
import "../styles/styles";
import { ComponentManager } from "../core/ComponentManager";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { BodyComponent } from "../components/body/body.component";

ComponentManager.manage([
  HeaderComponent,
  FooterComponent,
  BodyComponent,
]);
```

### How to add extern content to your component
1. Add the <code>madu-template</code>-element, to your component html file. (If you changed the name in the <code>madu-configuration.json</code> use it instead)
2. Add content to the used component.

Example:
```html
<!--footer.component.html-->
<footer>
  <p>This is an example footer</p>
  <madu-template></madu-template>
</footer>
```
```html
<!--index.html-->
<!DOCTYPE html>
<html lang="de-DE">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MaduChat</title>
</head>
<body>
  <app-footer>
    Everything here will be pasted into the madu-template component
  </app-footer>
</body>
</html>
```

### How to use scoped css
1. Create a <code>style</code>-Tag at the end of your component html file.
2. Use everytime you want to <code>:scope</code> as pseudo element before you select your element

Example:
```html
<footer>
  <p>© Madu - <span id="year"></span></p>
</footer>

<style>
  :scope footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :scope p {
    color: red;
  }
</style>
```

### How to add logic to a component
1. Implement the <code>OnInit</code> interface to your component
2. Add the <code>maduOnInit</code> method to your component class. The first parameter is the HTMLElement that you created to paste your component/component.html into.
3. Now you can get every element of the single component and edit them for example.

Example:
```ts
@Component({
  tag: 'app-footer',
  template,
})
export class FooterComponent implements OnInit {
  maduOnInit(element: HTMLElement): void {
    const yearEl: HTMLElement = element.querySelector('#year');
    yearEl.innerHTML = new Date().getFullYear().toString();
  } 
}
```