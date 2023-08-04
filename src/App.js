import "./App.css";
import { NavBar, NewsItemCollection } from "./ui-components";
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <div className="App" style={{width: "100%", padding: '20px'}}>
      <NavBar width={"100%"} />
      <NewsItemCollection width={"100%"} />
    </div>
  );
}
export default withAuthenticator(App);