// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//    diode: default is false
//      if true, will add a diode, with all required traces already placed
// 
// note: hotswap, reverse, and diode can be used simultaneously

module.exports = {
  nets: {
    from: undefined,
    to: undefined,
  },
  params: {
    class: 'S',
    hotswap: false,
    reverse: false,
    keycaps: false,
    diode: false,
  },
  body: p => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

      ${''/* corner marks */}
      (fp_line (start -7 -6) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -6 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -6 -7) (end -7 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start -7 7) (end -7 6) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 6) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 6 -7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 6 7) (end 7 7) (layer Dwgs.User) (width 0.15))
      (fp_line (start 7 -7) (end 7 -6) (layer Dwgs.User) (width 0.15))      
      
      ${''/* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))
        
      ${''/* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
    `
    const keycap = `
      ${'' /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
    `
    function pins(def_neg, def_pos, def_side) {
      if(p.param.hotswap) {
        return `
          ${'' /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))
      
          ${'' /* net pads */}
          (pad 2 smd rect (at ${def_neg}3.275 -5.95 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.net.to.str})
          (pad 1 smd rect (at ${def_pos}8.275 -3.75 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.net.from.str})
        `
      } else {
          return `
            ${''/* pins */}
            (pad 1 thru_hole circle (at ${def_pos}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.net.from.str})
            (pad 2 thru_hole circle (at ${def_pos}0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.net.to.str})
          `
      }
    }
    var traces = ''
    var d_net = ''
    if(p.net.diode_net != undefined) {
      d_net = `${p.net.diode_net.str}`
    } else {
      d_net = `${p.local_net('diode').str}`
    }
    function diode(def_side) {
      var out = `
        (fp_line (start 2.5 3.15) (end -2.5 3.15) (layer Dwgs.User) (width 0.12))
        (fp_line (start -2.5 3.15) (end -2.5 6.25) (layer Dwgs.User) (width 0.12))
        (fp_line (start -2.5 6.25) (end 2.5 6.25) (layer Dwgs.User) (width 0.12))
        (fp_line (start 2.5 6.25) (end 2.5 3.15) (layer Dwgs.User) (width 0.12))
      `
      if(p.param.hotswap) {
        if(p.param.reverse) {
          traces =  `
          ${'' /* traces */}
            (via (at ${p.xy(0, -3)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net ${p.net.to.index}))
            (segment (start ${p.xy(2.95, -5.95)}) (end ${p.xy(3.275, -5.95)}) (width 0.25) (layer F.Cu) (net ${p.net.to.index}))
            (segment (start ${p.xy(0, -3)}) (end ${p.xy(2.95, -5.95)}) (width 0.25) (layer F.Cu) (net ${p.net.to.index}))
            (segment (start ${p.xy(-2.95, -5.95)}) (end ${p.xy(0, -3)}) (width 0.25) (layer B.Cu) (net ${p.net.to.index}))
            (segment (start ${p.xy(-3.275, -5.95)}) (end ${p.xy(-2.95, -5.95)}) (width 0.25) (layer B.Cu) (net ${p.net.to.index}))
            (segment (start ${p.xy(6.73, 4.5)}) (end ${p.xy(1.65, 4.5)}) (width 0.25) (layer B.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(8.275, 2.955)}) (end ${p.xy(6.73, 4.5)}) (width 0.25) (layer B.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(8.275, -3.75)}) (end ${p.xy(8.275, 2.955)}) (width 0.25) (layer B.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(-8.02, 2.64)}) (end ${p.xy(-8.275, 2.385)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(1.32, 2.64)}) (end ${p.xy(-8.02, 2.64)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(1.65, 2.97)}) (end ${p.xy(1.32, 2.64)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(1.65, 4.5)}) (end ${p.xy(1.65, 2.97)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(-8.275, 2.385)}) (end ${p.xy(-8.275, -3.75)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
          `
          out += `
            (pad 1 thru_hole rect (at 1.65 4.5 ${p.rot}) (size 0.9 1.2) (drill 0.4) (layers *.Cu *.Mask) ${p.net.from.str})
            (pad 2 thru_hole rect (at -1.65 4.5 ${p.rot}) (size 0.9 1.2) (drill 0.4) (layers *.Cu *.Mask) ${d_net})
          `
          return out
        } else {
          traces =  `
          ${'' /* traces */}
            (segment (start ${p.xy(3.54, -3.8)}) (end ${p.xy(5, -3.8)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (via (at ${p.xy(5.5, 4.5)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(1.65, 4.5)}) (end ${p.xy(5.5, 4.5)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(8.275, 1.725)}) (end ${p.xy(5.5, 4.5)}) (width 0.25) (layer B.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(8.275, -3.75)}) (end ${p.xy(8.275, 1.725)}) (width 0.25) (layer B.Cu) (net ${p.net.from.index}))
          `
          out += `
            (pad 1 thru_hole rect (at 1.65 4.5 ${p.rot}) (size 0.9 1.2) (drill 0.4) (layers ${def_side}.Cu ${def_side}.Mask) ${p.net.from.str})
            (pad 2 thru_hole rect (at -1.65 4.5 ${p.rot}) (size 0.9 1.2) (drill 0.4) (layers ${def_side}.Cu ${def_side}.Mask) ${d_net})
          `
          return out
        }
      } else {
        if(p.param.reverse) {
          traces =  `
          ${'' /* traces */}
            (segment (start ${p.xy(3.23, -2.03)}) (end ${p.xy(3.23, 4.18)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(2.91, 4.5)}) (end ${p.xy(1.65, 4.5)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(3.23, 4.18)}) (end ${p.xy(2.91, 4.5)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(3.23, -3.49)}) (end ${p.xy(3.54, -3.8)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(3.23, -2.03)}) (end ${p.xy(3.23, -3.49)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(3.54, -3.8)}) (end ${p.xy(5, -3.8)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(-5, -3.8)}) (end ${p.xy(3.54, -3.8)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
          `
          out += `
            (pad 1 thru_hole rect (at 1.65 4.5 ${p.rot}) (size 0.9 1.2) (drill 0.4) (layers *.Cu *.Mask) ${p.net.from.str})
            (pad 2 thru_hole rect (at -1.65 4.5 ${p.rot}) (size 0.9 1.2) (drill 0.4) (layers *.Cu *.Mask) ${d_net})
          `
          return out
        } else {
          traces =  `
          ${'' /* traces */}
            (segment (start ${p.xy(5, -3.8)}) (end ${p.xy(3.41, -2.21)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(3.41, 2.74)}) (end ${p.xy(1.65, 4.5)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
            (segment (start ${p.xy(3.41, -2.21)}) (end ${p.xy(3.41, 2.74)}) (width 0.25) (layer F.Cu) (net ${p.net.from.index}))
          `
          out += `
            (pad 1 thru_hole rect (at 1.65 4.5 ${p.rot}) (size 0.9 1.2) (drill 0.4) (layers ${def_side}.Cu ${def_side}.Mask) ${p.net.from.str})
            (pad 2 thru_hole rect (at -1.65 4.5 ${p.rot}) (size 0.9 1.2) (drill 0.4) (layers ${def_side}.Cu ${def_side}.Mask) ${d_net})
          `
          return out
        }
      }
    }
    if(p.param.reverse) {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${p.param.diode ? diode(p.param.side) : ''}
        ${pins('-', '', 'B')}
        ${pins('', '-', 'F')})
        ${traces}
      `
    } else {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${p.param.diode ? diode(p.param.side) : ''}
        ${pins('-', '', 'B')})
        ${traces}
      `
    }
  }
}