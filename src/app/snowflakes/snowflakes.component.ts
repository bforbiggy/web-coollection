import { Component } from "@angular/core";

@Component({
	selector: "app-snowflakes",
	templateUrl: "./snowflakes.component.html",
  styleUrls: ["./snowflakes.component.scss"],
})
export class SnowflakesComponent{ 
  flakeCount: number[] = Array(100);
}
