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