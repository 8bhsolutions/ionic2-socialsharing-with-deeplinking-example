/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './contact';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from 'ionic-angular/components/toolbar/toolbar';
import * as import12 from 'ionic-angular/components/navbar/navbar';
import * as import13 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import14 from 'ionic-angular/components/content/content';
import * as import15 from 'ionic-angular/components/list/list';
import * as import16 from 'ionic-angular/components/item/item';
import * as import17 from 'ionic-angular/components/list/list-header';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from 'ionic-angular/components/icon/icon';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import26 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/gestures/gesture-controller';
import * as import31 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import32 from 'ionic-angular/util/form';
var renderType_ContactPage_Host:import0.RenderComponentType = (null as any);
class _View_ContactPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ContactPage_0_4:import3.ContactPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ContactPage_Host0,renderType_ContactPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-contact',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ContactPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ContactPage_0_4 = new import3.ContactPage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._ContactPage_0_4,([] as any[]),compView_0);
    compView_0.create(this._ContactPage_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ContactPage) && (0 === requestNodeIndex))) { return this._ContactPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ContactPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ContactPage_Host === (null as any))) { (renderType_ContactPage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ContactPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ContactPageNgFactory:import10.ComponentFactory<import3.ContactPage> = new import10.ComponentFactory<import3.ContactPage>('page-contact',viewFactory_ContactPage_Host0,import3.ContactPage);
const styles_ContactPage:any[] = ([] as any[]);
var renderType_ContactPage:import0.RenderComponentType = (null as any);
class _View_ContactPage0 extends import1.AppView<import3.ContactPage> {
  _el_0:any;
  _Header_0_3:import11.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import12.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import13.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Content_9_4:import14.Content;
  _text_10:any;
  _el_11:any;
  _List_11_3:import15.List;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import2.AppElement;
  _Item_13_4:import16.Item;
  _ListHeader_13_5:import17.ListHeader;
  _query_Label_13_0:import18.QueryList<any>;
  _query_Button_13_1:import18.QueryList<any>;
  _query_Icon_13_2:import18.QueryList<any>;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  /*private*/ _appEl_16:import2.AppElement;
  _Item_16_4:import16.Item;
  _ItemContent_16_5:import16.ItemContent;
  _query_Label_16_0:import18.QueryList<any>;
  _query_Button_16_1:import18.QueryList<any>;
  _query_Icon_16_2:import18.QueryList<any>;
  _text_17:any;
  _el_18:any;
  _Icon_18_3:import19.Icon;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _Item_21_4:import16.Item;
  _ListHeader_21_5:import17.ListHeader;
  _query_Label_21_0:import18.QueryList<any>;
  _query_Button_21_1:import18.QueryList<any>;
  _query_Icon_21_2:import18.QueryList<any>;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  /*private*/ _appEl_24:import2.AppElement;
  _Item_24_4:import16.Item;
  _ItemContent_24_5:import16.ItemContent;
  _query_Label_24_0:import18.QueryList<any>;
  _query_Button_24_1:import18.QueryList<any>;
  _query_Icon_24_2:import18.QueryList<any>;
  _text_25:any;
  _el_26:any;
  _Icon_26_3:import19.Icon;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  /*private*/ _appEl_32:import2.AppElement;
  _Item_32_4:import16.Item;
  _ListHeader_32_5:import17.ListHeader;
  _query_Label_32_0:import18.QueryList<any>;
  _query_Button_32_1:import18.QueryList<any>;
  _query_Icon_32_2:import18.QueryList<any>;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  /*private*/ _appEl_35:import2.AppElement;
  _Item_35_4:import16.Item;
  _ItemContent_35_5:import16.ItemContent;
  _query_Label_35_0:import18.QueryList<any>;
  _query_Button_35_1:import18.QueryList<any>;
  _query_Icon_35_2:import18.QueryList<any>;
  _text_36:any;
  _el_37:any;
  _Icon_37_3:import19.Icon;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ContactPage0,renderType_ContactPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Header(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import22.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','primary');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import23.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import12.Navbar(this.parentInjector.get(import24.App),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import25.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import13.ToolbarTitle(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import11.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      Contact\n    ',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import26.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import14.Content(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import24.App),this.parentInjector.get(import27.Keyboard),this.parentInjector.get(import28.NgZone),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import29.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_11_3 = new import15.List(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_11),this.renderer,this.parentInjector.get(import30.GestureController));
    this._text_12 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'ion-list-header',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','item');
    this._appEl_13 = new import2.AppElement(13,11,this,this._el_13);
    var compView_13:any = import31.viewFactory_Item0(this.viewUtils,this.injector(13),this._appEl_13);
    this._Item_13_4 = new import16.Item(this.parentInjector.get(import32.Form),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_13),this.renderer);
    this._ListHeader_13_5 = new import17.ListHeader(this.parentInjector.get(import20.Config),this.renderer,new import21.ElementRef(this._el_13),(null as any));
    this._query_Label_13_0 = new import18.QueryList<any>();
    this._query_Button_13_1 = new import18.QueryList<any>();
    this._query_Icon_13_2 = new import18.QueryList<any>();
    this._appEl_13.initComponent(this._Item_13_4,([] as any[]),compView_13);
    this._text_14 = this.renderer.createText((null as any),'Follow us on Twitter',(null as any));
    this._query_Label_13_0.reset(([] as any[]));
    this._Item_13_4.contentLabel = this._query_Label_13_0.first;
    compView_13.create(this._Item_13_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._text_14]),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_15 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_11,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','item item-block');
    this._appEl_16 = new import2.AppElement(16,11,this,this._el_16);
    var compView_16:any = import31.viewFactory_Item0(this.viewUtils,this.injector(16),this._appEl_16);
    this._Item_16_4 = new import16.Item(this.parentInjector.get(import32.Form),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_16),this.renderer);
    this._ItemContent_16_5 = new import16.ItemContent();
    this._query_Label_16_0 = new import18.QueryList<any>();
    this._query_Button_16_1 = new import18.QueryList<any>();
    this._query_Icon_16_2 = new import18.QueryList<any>();
    this._appEl_16.initComponent(this._Item_16_4,([] as any[]),compView_16);
    this._text_17 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_18 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_18,'item-left','');
    this.renderer.setElementAttribute(this._el_18,'name','logo-twitter');
    this.renderer.setElementAttribute(this._el_18,'role','img');
    this._Icon_18_3 = new import19.Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_18),this.renderer);
    this._text_19 = this.renderer.createText((null as any),'\n      @ionicthemes\n    ',(null as any));
    this._query_Label_16_0.reset(([] as any[]));
    this._Item_16_4.contentLabel = this._query_Label_16_0.first;
    compView_16.create(this._Item_16_4,[
      ([] as any[]).concat([this._el_18]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_17,
        this._text_19
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_20 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_11,'ion-list-header',(null as any));
    this.renderer.setElementAttribute(this._el_21,'class','item');
    this._appEl_21 = new import2.AppElement(21,11,this,this._el_21);
    var compView_21:any = import31.viewFactory_Item0(this.viewUtils,this.injector(21),this._appEl_21);
    this._Item_21_4 = new import16.Item(this.parentInjector.get(import32.Form),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_21),this.renderer);
    this._ListHeader_21_5 = new import17.ListHeader(this.parentInjector.get(import20.Config),this.renderer,new import21.ElementRef(this._el_21),(null as any));
    this._query_Label_21_0 = new import18.QueryList<any>();
    this._query_Button_21_1 = new import18.QueryList<any>();
    this._query_Icon_21_2 = new import18.QueryList<any>();
    this._appEl_21.initComponent(this._Item_21_4,([] as any[]),compView_21);
    this._text_22 = this.renderer.createText((null as any),'Follow us on Facebook',(null as any));
    this._query_Label_21_0.reset(([] as any[]));
    this._Item_21_4.contentLabel = this._query_Label_21_0.first;
    compView_21.create(this._Item_21_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._text_22]),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_23 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_11,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','item item-block');
    this._appEl_24 = new import2.AppElement(24,11,this,this._el_24);
    var compView_24:any = import31.viewFactory_Item0(this.viewUtils,this.injector(24),this._appEl_24);
    this._Item_24_4 = new import16.Item(this.parentInjector.get(import32.Form),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_24),this.renderer);
    this._ItemContent_24_5 = new import16.ItemContent();
    this._query_Label_24_0 = new import18.QueryList<any>();
    this._query_Button_24_1 = new import18.QueryList<any>();
    this._query_Icon_24_2 = new import18.QueryList<any>();
    this._appEl_24.initComponent(this._Item_24_4,([] as any[]),compView_24);
    this._text_25 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_26 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_26,'item-left','');
    this.renderer.setElementAttribute(this._el_26,'name','logo-facebook');
    this.renderer.setElementAttribute(this._el_26,'role','img');
    this._Icon_26_3 = new import19.Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_26),this.renderer);
    this._text_27 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_28 = this.renderer.createElement((null as any),'a',(null as any));
    this.renderer.setElementAttribute(this._el_28,'href','www.facebook.com/ionicthemes');
    this._text_29 = this.renderer.createText(this._el_28,'www.facebook.com/ionicthemes',(null as any));
    this._text_30 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_24_0.reset(([] as any[]));
    this._Item_24_4.contentLabel = this._query_Label_24_0.first;
    compView_24.create(this._Item_24_4,[
      ([] as any[]).concat([this._el_26]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_25,
        this._text_27,
        this._el_28,
        this._text_30
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_31 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_32 = this.renderer.createElement(this._el_11,'ion-list-header',(null as any));
    this.renderer.setElementAttribute(this._el_32,'class','item');
    this._appEl_32 = new import2.AppElement(32,11,this,this._el_32);
    var compView_32:any = import31.viewFactory_Item0(this.viewUtils,this.injector(32),this._appEl_32);
    this._Item_32_4 = new import16.Item(this.parentInjector.get(import32.Form),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_32),this.renderer);
    this._ListHeader_32_5 = new import17.ListHeader(this.parentInjector.get(import20.Config),this.renderer,new import21.ElementRef(this._el_32),(null as any));
    this._query_Label_32_0 = new import18.QueryList<any>();
    this._query_Button_32_1 = new import18.QueryList<any>();
    this._query_Icon_32_2 = new import18.QueryList<any>();
    this._appEl_32.initComponent(this._Item_32_4,([] as any[]),compView_32);
    this._text_33 = this.renderer.createText((null as any),'Visit our website',(null as any));
    this._query_Label_32_0.reset(([] as any[]));
    this._Item_32_4.contentLabel = this._query_Label_32_0.first;
    compView_32.create(this._Item_32_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._text_33]),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_34 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._el_35 = this.renderer.createElement(this._el_11,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_35,'class','item item-block');
    this._appEl_35 = new import2.AppElement(35,11,this,this._el_35);
    var compView_35:any = import31.viewFactory_Item0(this.viewUtils,this.injector(35),this._appEl_35);
    this._Item_35_4 = new import16.Item(this.parentInjector.get(import32.Form),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_35),this.renderer);
    this._ItemContent_35_5 = new import16.ItemContent();
    this._query_Label_35_0 = new import18.QueryList<any>();
    this._query_Button_35_1 = new import18.QueryList<any>();
    this._query_Icon_35_2 = new import18.QueryList<any>();
    this._appEl_35.initComponent(this._Item_35_4,([] as any[]),compView_35);
    this._text_36 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_37 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_37,'item-left','');
    this.renderer.setElementAttribute(this._el_37,'name','link');
    this.renderer.setElementAttribute(this._el_37,'role','img');
    this._Icon_37_3 = new import19.Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_37),this.renderer);
    this._text_38 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_39 = this.renderer.createElement((null as any),'a',(null as any));
    this.renderer.setElementAttribute(this._el_39,'href','www.ionicthemes.com');
    this._text_40 = this.renderer.createText(this._el_39,'www.ionicthemes.com',(null as any));
    this._text_41 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._query_Label_35_0.reset(([] as any[]));
    this._Item_35_4.contentLabel = this._query_Label_35_0.first;
    compView_35.create(this._Item_35_4,[
      ([] as any[]).concat([this._el_37]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_36,
        this._text_38,
        this._el_39,
        this._text_41
      ]
      ),
      ([] as any[]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_42 = this.renderer.createText(this._el_11,'\n  ',(null as any));
    this._text_43 = this.renderer.createText((null as any),'\n',(null as any));
    compView_9.create(this._Content_9_4,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_43
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_44 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._text_42,
      this._text_43,
      this._text_44
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import12.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4; }
    if (((token === import11.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3; }
    if (((token === import16.Item) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Item_13_4; }
    if (((token === import17.ListHeader) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._ListHeader_13_5; }
    if (((token === import19.Icon) && (18 === requestNodeIndex))) { return this._Icon_18_3; }
    if (((token === import16.Item) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Item_16_4; }
    if (((token === import16.ItemContent) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._ItemContent_16_5; }
    if (((token === import16.Item) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Item_21_4; }
    if (((token === import17.ListHeader) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._ListHeader_21_5; }
    if (((token === import19.Icon) && (26 === requestNodeIndex))) { return this._Icon_26_3; }
    if (((token === import16.Item) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._Item_24_4; }
    if (((token === import16.ItemContent) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 30)))) { return this._ItemContent_24_5; }
    if (((token === import16.Item) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) { return this._Item_32_4; }
    if (((token === import17.ListHeader) && ((32 <= requestNodeIndex) && (requestNodeIndex <= 33)))) { return this._ListHeader_32_5; }
    if (((token === import19.Icon) && (37 === requestNodeIndex))) { return this._Icon_37_3; }
    if (((token === import16.Item) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 41)))) { return this._Item_35_4; }
    if (((token === import16.ItemContent) && ((35 <= requestNodeIndex) && (requestNodeIndex <= 41)))) { return this._ItemContent_35_5; }
    if (((token === import15.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 42)))) { return this._List_11_3; }
    if (((token === import14.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._Content_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = 'primary';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Navbar_2_4.color = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_9_4.ngOnInit(); }
    const currVal_4:any = 'logo-twitter';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._Icon_18_3.name = currVal_4;
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = 'logo-facebook';
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._Icon_26_3.name = currVal_6;
      this._expr_6 = currVal_6;
    }
    const currVal_8:any = 'link';
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this._Icon_37_3.name = currVal_8;
      this._expr_8 = currVal_8;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_13_1.dirty) {
        this._query_Button_13_1.reset(([] as any[]));
        this._Item_13_4._buttons = this._query_Button_13_1;
        this._query_Button_13_1.notifyOnChanges();
      }
      if (this._query_Icon_13_2.dirty) {
        this._query_Icon_13_2.reset(([] as any[]));
        this._Item_13_4._icons = this._query_Icon_13_2;
        this._query_Icon_13_2.notifyOnChanges();
      }
      if (this._query_Button_16_1.dirty) {
        this._query_Button_16_1.reset(([] as any[]));
        this._Item_16_4._buttons = this._query_Button_16_1;
        this._query_Button_16_1.notifyOnChanges();
      }
      if (this._query_Icon_16_2.dirty) {
        this._query_Icon_16_2.reset([this._Icon_18_3]);
        this._Item_16_4._icons = this._query_Icon_16_2;
        this._query_Icon_16_2.notifyOnChanges();
      }
      if (this._query_Button_21_1.dirty) {
        this._query_Button_21_1.reset(([] as any[]));
        this._Item_21_4._buttons = this._query_Button_21_1;
        this._query_Button_21_1.notifyOnChanges();
      }
      if (this._query_Icon_21_2.dirty) {
        this._query_Icon_21_2.reset(([] as any[]));
        this._Item_21_4._icons = this._query_Icon_21_2;
        this._query_Icon_21_2.notifyOnChanges();
      }
      if (this._query_Button_24_1.dirty) {
        this._query_Button_24_1.reset(([] as any[]));
        this._Item_24_4._buttons = this._query_Button_24_1;
        this._query_Button_24_1.notifyOnChanges();
      }
      if (this._query_Icon_24_2.dirty) {
        this._query_Icon_24_2.reset([this._Icon_26_3]);
        this._Item_24_4._icons = this._query_Icon_24_2;
        this._query_Icon_24_2.notifyOnChanges();
      }
      if (this._query_Button_32_1.dirty) {
        this._query_Button_32_1.reset(([] as any[]));
        this._Item_32_4._buttons = this._query_Button_32_1;
        this._query_Button_32_1.notifyOnChanges();
      }
      if (this._query_Icon_32_2.dirty) {
        this._query_Icon_32_2.reset(([] as any[]));
        this._Item_32_4._icons = this._query_Icon_32_2;
        this._query_Icon_32_2.notifyOnChanges();
      }
      if (this._query_Button_35_1.dirty) {
        this._query_Button_35_1.reset(([] as any[]));
        this._Item_35_4._buttons = this._query_Button_35_1;
        this._query_Button_35_1.notifyOnChanges();
      }
      if (this._query_Icon_35_2.dirty) {
        this._query_Icon_35_2.reset([this._Icon_37_3]);
        this._Item_35_4._icons = this._query_Icon_35_2;
        this._query_Icon_35_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_13_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_16_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_21_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_24_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_32_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_35_4.ngAfterContentInit(); }
    }
    const currVal_1:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_9_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = this._Icon_18_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_18,'hide',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_7:any = this._Icon_26_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_26,'hide',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_9:any = this._Icon_37_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_37,'hide',currVal_9);
      this._expr_9 = currVal_9;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_18_3.ngOnDestroy();
    this._Icon_26_3.ngOnDestroy();
    this._Icon_37_3.ngOnDestroy();
    this._Content_9_4.ngOnDestroy();
  }
}
export function viewFactory_ContactPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ContactPage> {
  if ((renderType_ContactPage === (null as any))) { (renderType_ContactPage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_ContactPage,{})); }
  return new _View_ContactPage0(viewUtils,parentInjector,declarationEl);
}