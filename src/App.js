import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import LeftSide from "./Components/LeftSide/LeftSide";
import RightSide from "./Components/RightSide/RightSide";
import Footer from "./Components/RightSide/Footer/Footer";
import LanguageProvider from "./Components/store/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="website-body">
        <LeftSide />
        <RightSide />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
