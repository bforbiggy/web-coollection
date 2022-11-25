import { Component, Input} from "@angular/core";
import randomInteger from "random-int";

@Component({
	selector: "app-flake",
	templateUrl: "./flake.component.html",
	styleUrls: ["./flake.component.scss"],
})
export class FlakeComponent {
	customStyle: HTMLStyleElement;
	@Input() flakeID: number = 0;
	
	constructor() {
		this.customStyle = document.createElement("style");
	}

	public ngOnDestroy() {
		document.head.removeChild(this.customStyle);
	}

	public ngAfterViewInit(): void {
		this.customStyle.textContent = `
			.flake${this.flakeID}{
				top: ${randomInteger(0, 500)}px;
				animation: 1s linear -16s infinite normal none running example${this.flakeID};
			}

			@keyframes example${this.flakeID} {
				49% {
					transform: translate(2vw, 49vh) scale(0.553223);
				}
				100% {
					transform: translate(1vw, 100vh) scale(0.553223);
				}
			}
		`;

		const element = document.getElementById(`flake${this.flakeID}`);
		document.head.appendChild(this.customStyle);
	}
}