"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[2812],{"2812":function(n){n.exports=JSON.parse('{"version":3,"names":["PageMeta","prototype","componentDidLoad","notSupport","this","render","h","Host"],"sources":["src/components/page-meta/page-meta.tsx"],"sourcesContent":["import { Component, ComponentInterface, h, Host } from \'@stencil/core\'\\n\\nimport { notSupport } from \'../../utils\'\\n\\n@Component({\\n  tag: \'taro-page-meta-core\'\\n})\\nexport class PageMeta implements ComponentInterface {\\n  componentDidLoad () {\\n    notSupport(\'PageMeta\', this)\\n  }\\n\\n  render () {\\n    return (\\n      <Host />\\n    )\\n  }\\n}\\n"],"mappings":"8IAOaA,SAAQ,W,uCACnBA,EAAAC,UAAAC,iBAAA,WACEC,WAAW,WAAYC,K,EAGzBJ,EAAAC,UAAAI,OAAA,WACE,OACEC,EAACC,KAAI,K,WAPU,U"}')}}]);