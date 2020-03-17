import { Component, ViewChild } from '@angular/core';
import { Deeplinks } from '@ionic-native/deeplinks';
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Toast as NativeToast, ToastOptions } from '@ionic-native/toast';
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
		public deeplinks: Deeplinks,
		private nativeToast: NativeToast,
	) {
		platform.ready()
			.then(() => {
				this.showToast();
			})
			.then(() => {
				// Okay, so the platform is ready and our plugins are available.
				// Here you can do any higher level native things you might need.
				this.statusBar.styleDefault();

				//this is the code who responds to the app deeplinks
				//Deeplinks if from Ionic Native
				// this.deeplinks.routeWithNavController(this.navChild, {
				// 	'/L/about': AboutPage,
				// 	'/L/contact': ContactPage,
				// 	'/L/items/:itemId': ItemDetailsPage
				// }, { root: false }).subscribe((match) => {
				// 	console.log('Successfully routed', match);
				// }, (nomatch) => {
				// 	console.log('Unmatched Route', nomatch);
				// });

				this.deeplinks.route({
					'/L/about': AboutPage,
					'/L/contact': ContactPage,
					'/L/items/:itemId': ItemDetailsPage
				}).subscribe((match) => {
					console.log('Successfully routed', match);
					const nav = this.app.getActiveNavs()[0];
					nav.push(match.$route, match.$args);
				}, (nomatch) => {
					console.log('Unmatched Route', nomatch);
				});
			})
			.then(() => {
				this.overrideBackButton();
			});
	}

	private showToast() {
		console.log("SHOWING NATIVE TOAST");

		const options: ToastOptions = {
			message: "hey there",
			duration: 5000,
			position: "bottom",
			// addPixelsY: -40,  // (optional) added a negative value to move it up a bit (default 0)
			// styling: {
			// 	opacity: 0.8,
			// 	backgroundColor: "black",
			// 	textColor: "white"
			// }
		};
		this.nativeToast.showWithOptions(options)
			.subscribe((d) => {		// Need to subscribe for this function to work
				console.log(`NativeToast - Response - ${JSON.stringify(d)}`, d);
			});
	}

	private overrideBackButton() {
		this.platform.registerBackButtonAction(() => {
			const nav = this.app.getActiveNavs()[0];
			const activeView: any = nav.getActive();

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
