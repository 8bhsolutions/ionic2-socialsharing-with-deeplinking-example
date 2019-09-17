import { Component, ViewChild } from '@angular/core';
import { Deeplinks } from '@ionic-native/deeplinks';
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { App, Nav, Platform, ToastController } from 'ionic-angular';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
	template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
	rootPage = TabsPage;

	@ViewChild(Nav) navChild: Nav;

	constructor(
		private platform: Platform,
		private app: App,
		private toast: ToastController,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		public deeplinks: Deeplinks
	) {
		platform.ready()
			.then(() => {
				// Okay, so the platform is ready and our plugins are available.
				// Here you can do any higher level native things you might need.
				this.statusBar.styleDefault();

				//this is the code who responds to the app deeplinks
				//Deeplinks if from Ionic Native
				this.deeplinks.routeWithNavController(this.navChild, {
					'/L/about': AboutPage,
					'/L/contact': ContactPage,
					'/L/items/:itemId': ItemDetailsPage
				}).subscribe((match) => {
					console.log('Successfully routed', match);
				}, (nomatch) => {
					console.log('Unmatched Route', nomatch);
				});
			})
			.then(() => {
				this.overrideBackButton();
			});
	}

	private overrideBackButton() {
		this.platform.registerBackButtonAction(() => {
			let nav = this.app.getActiveNavs()[0];
			let activeView: any = nav.getActive();

			if (activeView != null) {
				if (nav.canGoBack()) {
					nav.pop();
				} else {
					this.toast.create({
						message: 'On root page',
						duration: 3000,
						showCloseButton: true
					}).present();
				}
			}
		});
	}
}
