module.exports = {
    nets: ['A', 'B', 'C', 'D'],
    params: {
        class: 'F',
        reverse: false
    },
    body: p => {
      const standard = ` 
        (module pimoroni_trackball (layer F.Cu) (tedit 5D20B36F)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        (descr "Pimoroni I2C trackball breakout")

        ${''/* corner marks */}
        (fp_line (start -0.635 -1.27) (end 1.27 -1.27) (layer F.Fab) (width 0.1))
        (fp_line (start 1.27 -1.27) (end 1.27 11.43) (layer F.Fab) (width 0.1))
        (fp_line (start 1.27 11.43) (end -1.27 11.43) (layer F.Fab) (width 0.1))
        (fp_line (start -1.27 11.43) (end -1.27 -0.635) (layer F.Fab) (width 0.1))
        (fp_line (start -1.27 -0.635) (end -0.635 -1.27) (layer F.Fab) (width 0.1))
        (fp_line (start -1.33 11.49) (end 1.33 11.49) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.33 1.27) (end -1.33 11.49) (layer F.SilkS) (width 0.12))
        (fp_line (start 1.33 1.27) (end 1.33 11.49) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.33 1.27) (end 1.33 1.27) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.33 0) (end -1.33 -1.33) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.33 -1.33) (end 0 -1.33) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.8 -1.8) (end -1.8 11.95) (layer F.CrtYd) (width 0.05))
        (fp_line (start -1.8 11.95) (end 1.8 11.95) (layer F.CrtYd) (width 0.05))
        (fp_line (start 1.8 11.95) (end 1.8 -1.8) (layer F.CrtYd) (width 0.05))
        (fp_line (start 1.8 -1.8) (end -1.8 -1.8) (layer F.CrtYd) (width 0.05))
        (fp_line (start -1.5 -2.6) (end -1.5 12.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.5 12.5) (end 4.5 12.5) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 12.5) (end 4.5 17.5) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 17.5) (end 20.5 17.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -1.5 -2.6) (end 4.5 -2.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 -7.6) (end 20.5 -7.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 4.5 -2.6) (end 4.5 -7.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 20.5 17.5) (end 20.5 -7.6) (layer F.SilkS) (width 0.12))
        `
        function pins(x, y) {
              return `
                ${'' /* pins */ }
                (pad 1 thru_hole rect (at ${x} ${y}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.A})
                (pad 2 thru_hole oval (at ${x} ${y+2.54}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.A})
                (pad 3 thru_hole oval (at ${x} ${y+5.08}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.A})
                (pad 4 thru_hole oval (at ${x} ${y+7.62}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.A})
                (pad 5 thru_hole oval (at ${x} ${y+10.16}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask) ${p.net.A})
              `
        }
    if(p.param.reverse) {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins(0, 0)}
        ${pins(1.45, 1.34)})
      `
    } else {
      return `
        ${standard}
        ${p.param.keycaps ? keycap : ''}
        ${pins(0, 0)})
      `
    }
  }   
}
