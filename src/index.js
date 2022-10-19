import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components/App";
import GlobalStyles from 'styles/Global.styled';
import 'styles/fonts/fonts.css';


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
);
