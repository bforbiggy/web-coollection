import { Component, Input} from "@angular/core";
import randomInteger from "random-int";

@Component({
	selector: "app-flake",
	templateUrl: "./flake.component.html",
	styleUrls: ["./flake.component.scss"],
})
export class FlakeComponent {
	top: number;
	left: number;
	
	constructor() {
		this.top = randomInteger(0, 100);
		this.left = randomInteger(0, 100);
	}
}