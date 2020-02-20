import { Component, OnInit } from "@angular/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "../../react-src/App";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const entrypoint = document.getElementById("reactApp");
    ReactDOM.render(<App />, entrypoint);
  }
  title = "rectangular";
}
