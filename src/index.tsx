import React from "react";
import App from "./components/App";
import { createRoot } from 'react-dom/client';
import './css/Home.css';

if (typeof window !== 'undefined') {
  const container = document.getElementById('app');
  const root = createRoot(container);
  root.render(<App/>);
}