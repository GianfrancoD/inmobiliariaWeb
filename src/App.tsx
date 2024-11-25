import { About } from "./modules/about/components/about";
import { Noticias } from "./modules/blogs/components/noticias";
import { Footers } from "./modules/footer/components/footers";
import { Headers } from "./modules/header/components/headers";
import { Two } from "./modules/herotwo/components/segundohero";
import { Heros } from "./modules/hero/components/hero";
import { Propiedades } from "./modules/properties/components/allproperties";
import { Selecting } from "./modules/selecting/components/selects";
import { Testimonios } from "./modules/testimonios/components/testimimonios";
import { Helps } from "./modules/help/components/helps";

function App() {
  return (
    <div className="App">
      <Headers />
      <Heros />
      <Two />
      <Propiedades />
      <Selecting />
      <About />
      <Helps />
      <Testimonios />
      <Noticias />
      <Footers />
    </div>
  );
}

export default App;
