import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { BlobliquidfollowComponent } from "./blobliquidfollow/blobliquidfollow.component";
import { LandingComponent } from "./landing/landing.component";

const routes: Routes = [
	{ path: "", component: LandingComponent },
	{ path: "blobliquidfollow", component: BlobliquidfollowComponent },
];

@NgModule({
	declarations: [AppComponent, BlobliquidfollowComponent, LandingComponent],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
