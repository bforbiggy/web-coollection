import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { LandingComponent } from "./landing/landing.component";

import { SnowflakesComponent } from "./snowflakes/snowflakes.component";
import { BlobliquidfollowComponent } from "./blobliquidfollow/blobliquidfollow.component";
import { FlakeComponent } from './snowflakes/flake/flake.component';
const routes: Routes = [
	{ path: "", component: LandingComponent },
	{ path: "snowflakes", component: SnowflakesComponent },
	{ path: "blobliquidfollow", component: BlobliquidfollowComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		BlobliquidfollowComponent,
		LandingComponent,
		SnowflakesComponent,
  FlakeComponent,
	],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
