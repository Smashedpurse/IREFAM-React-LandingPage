import { HomeLine, ContentLine } from "./Components/index";
import {
  Navbar,
  Hero,
  Content,
  SecondContent,
  Footer,
} from "./Container/index";

function App() {
  return (
    <>
      <Navbar />
      <HomeLine />
      <Hero />
      <Content />
      <ContentLine />
      <SecondContent />
      <Footer />
    </>
  );
}

export default App;
