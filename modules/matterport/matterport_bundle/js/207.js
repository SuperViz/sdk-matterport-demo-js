(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[207],{89207:(i,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Plugin});var e=n(14877),s=n(40470),o=n(57227),a=n(51678);class Plugin extends o.Y{constructor(){super(...arguments),this.name="plugin",this.plugin=null,this.data=new a.x}async init(i,t){this.sdk=await t.getModuleBySymbol(e.y.SDK),t.market.register(this,a.x,this.data)}unload(i){var t;const n=i.pluginId&&""!==i.pluginId?i.pluginId:"default",e={applicationKey:i.applicationKey,pluginId:n},s=this.data.get(e);if(s){if(null===(t=s.module)||void 0===t?void 0:t.dispose)try{s.module.dispose()}catch(i){this.log.warn("An error occurred when disposing a plugin, it may be in a partially disposed state",i)}s.disposeEnv(),this.data.delete(e)}}async load(i,t,n,e){const o=i.pluginId&&""!==i.pluginId?i.pluginId:"default",a={applicationKey:i.applicationKey,pluginId:o};if(this.data.get(a))return this.log.warn(`Plugin for ${i.applicationKey}-${o} already loaded.`),Promise.resolve();if(t){const o=t();if(o.init){class BundleConnector{constructor(i,t){this.sdk=i,this.options=t}connect(){return this.sdk.connect(`${window.location.protocol}//${window.location.host}`,this.options)}cancelConnecting(){}}class BundleMessengerFactoryFetcher{getFactory(i){return i.messengerFactory}}const t=await s.tK.connect(new BundleConnector(this.sdk,{applicationKey:i.applicationKey}),new BundleMessengerFactoryFetcher,window);o.init(t,e)}this.data.set(a,o,n)}}dispose(){this.plugin&&this.plugin.dispose&&this.plugin.dispose()}}}}]);