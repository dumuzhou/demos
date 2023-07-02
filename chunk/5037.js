"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5037],{"511":function(A){A.exports=JSON.parse('{"version":3,"names":["Icon","prototype","render","_b","this","type","size","color","iconType","replace","cls","classNames","_a","concat","style","h","Host","class"],"sources":["src/components/icon/icon.tsx"],"sourcesContent":["import { Component, h, ComponentInterface, Prop, Host } from \'@stencil/core\'\\nimport classNames from \'classnames\'\\n\\nexport type Type = \'success\' | \'success_no_circle\' | \'info\'| \'warn\'| \'waiting\'| \'cancel\'| \'download\'| \'search\'| \'clear\'\\ntype IconType = Exclude<Type, \'success_no_circle\'> | \'success-no-circle\'\\n\\n@Component({\\n  tag: \'taro-icon-core\'\\n})\\nexport class Icon implements ComponentInterface {\\n  @Prop() type: Type\\n  @Prop() size: string | number = \'23\'\\n  @Prop() color: string\\n\\n  render () {\\n    const {\\n      type,\\n      size,\\n      color\\n    } = this\\n\\n    const iconType = type?.replace(/_/g, \'-\') as IconType\\n\\n    const cls = classNames({\\n      [`weui-icon-${iconType}`]: true\\n    })\\n\\n    const style = {\\n      \'font-size\': `${size}px`,\\n      color\\n    }\\n\\n    return (\\n      <Host class={cls} style={style} />\\n    )\\n  }\\n}\\n"],"mappings":"wHASaA,KAAI,W,qEAEiB,K,qBAGhCA,EAAAC,UAAAC,OAAA,W,MACQ,IAAAC,EAIFC,KAHFC,EAAIF,EAAAE,KACJC,EAAIH,EAAAG,KACJC,EAAKJ,EAAAI,MAGP,IAAMC,EAAWH,IAAI,MAAJA,SAAI,SAAJA,EAAMI,QAAQ,KAAM,KAErC,IAAMC,EAAMC,YAAUC,EAAA,GACpBA,EAAC,aAAAC,OAAaL,IAAa,K,IAG7B,IAAMM,EAAQ,CACZ,YAAa,GAAAD,OAAGP,EAAI,MACpBC,MAAKA,GAGP,OACEQ,EAACC,KAAI,CAACC,MAAOP,EAAKI,MAAOA,G,WAxBd,U"}')}}]);