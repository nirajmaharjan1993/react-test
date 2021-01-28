import React from "react";
import "./styles.css";

function SecretComponent() {
  return <div> SecretComponent can be seen by authorised user. </div>;
}

function RegularComponent() {
  return <div> Everyone can see this component.</div>;
}
export default function App({ authorised }) {
  return <>{authorised ? <SecretComponent /> : <RegularComponent />}</>;
}
