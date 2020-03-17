import { Component } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Toast as NativeToast, ToastOptions } from '@ionic-native/toast';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];

  constructor(
    private navCtrl: NavController,
    public socialSharing: SocialSharing,
    private nativeToast: NativeToast,
  ) {

    //this code is to build the dummy data of this example
    for (let i = 1; i < 4; i++) {
      this.items.push({
        id: i,
        title: 'Item ' + i,
        description: 'This is item #' + i,
        img: './assets/imgs/img' + i + '.jpeg'
      });
    }
  }

  showToast() {
    console.log("SHOWING NATIVE TOAST");

    const options: ToastOptions = {
      message: "hey there",
      duration: 5000,
      position: "bottom",
      addPixelsY: -40,  // (optional) added a negative value to move it up a bit (default 0)
    };
    this.nativeToast.showWithOptions(options)
      // .subscribe((d) => {
      //   console.log(`Response - ${JSON.stringify(d)}`, d);
      // });
  }

  //this method gets called when the user taps on a specific item
  itemTapped(item) {
    this.navCtrl.push(ItemDetailsPage, {
      'itemId': item.id
    });
  }

  shareItem(item) {
    //this code is to use the social sharing plugin
    // message, subject, file, url
    this.socialSharing.share("Check this item:  demoapp://home/items/" + item.id, item.title, item.img)
      .then(() => {

      })
      .catch(() => {

      });
  }

}
