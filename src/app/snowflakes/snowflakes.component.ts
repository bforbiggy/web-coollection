import { Component } from "@angular/core";
import { FlakeData } from "./flake/FlakeData";

@Component({
	selector: "app-snowflakes",
	templateUrl: "./snowflakes.component.html",
  styleUrls: ["./snowflakes.component.scss"],
})
export class SnowflakesComponent{ 
  flakesData: FlakeData[];

  constructor() {
    this.flakesData = [];
    for (let i = 0; i < 10; i++) {
      const flakeData: FlakeData = {
				top: i * 10,
				left: i * 10,
			};
      this.flakesData.push(flakeData);
    }
  }
}
