import { Component, Input} from "@angular/core";
import { FlakeData } from './FlakeData';

@Component({
	selector: "app-flake",
	templateUrl: "./flake.component.html",
	styleUrls: ["./flake.component.scss"],
})
export class FlakeComponent {
  @Input() flakeData?: FlakeData;
}