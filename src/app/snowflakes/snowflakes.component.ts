import { Component } from "@angular/core";

@Component({
	selector: "app-snowflakes",
	templateUrl: "./snowflakes.component.html",
  styleUrls: ["./snowflakes.component.scss"],
})
export class SnowflakesComponent{ 
	flakeCount: number[];
	
	constructor() {
		this.flakeCount = [];
		for (let i = 0; i <= 100; i++) {
			this.flakeCount.push(i);
		}
	}
}
