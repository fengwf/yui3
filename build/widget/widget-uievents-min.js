YUI.add("widget-uievents",function(e){var d="boundingBox",c=e.Widget,b="render",a=e.Lang;e.mix(c.prototype,{_destroyUIEvents:function(){var f=e.stamp(this,true),g=this._uievts;if(g){e.each(g,function(i,h){if(i.instances[f]){delete i.instances[f];if(e.Object.isEmpty(i.instances)){i.handle.detach();if(g[h]){delete g[h];}}}});}},UI_EVENTS:e.Node.DOM_EVENTS,_getUIEventNode:function(){return this.get(d);},_createUIEvent:function(g){var j=this._getUIEventNode(),f=(e.stamp(j)+g),i,h;this._uievts=this._uievts||{};i=this._uievts[f];if(!i){h=j.delegate(g,function(k){var l=c.getByNode(this);l.fire(k.type,{domEvent:k});},"."+e.Widget.getClassName());this._uievts[f]=i={instances:{},handle:h};}i.instances[e.stamp(this)]=1;},_getUIEvent:function(g){if(a.isString(g)){var h=this.parseType(g)[1],f;if(this.UI_EVENTS[h]){f=h;}return f;}},_initUIEvent:function(g){var h=this._getUIEvent(g),f=this._uiEvtsInitQueue||{};if(h&&!f[h]){this._uiEvtsInitQueue=f[h]=1;this.after(b,function(){this._createUIEvent(h);delete this._uiEvtsInitQueue[h];});}},on:function(f){this._initUIEvent(f);return c.superclass.on.apply(this,arguments);},publish:function(g,f){var h=this._getUIEvent(g);if(h&&f&&f.defaultFn){this._initUIEvent(h);}return c.superclass.publish.apply(this,arguments);}},true);},"@VERSION@",{requires:["widget-base","node-event-delegate"]});