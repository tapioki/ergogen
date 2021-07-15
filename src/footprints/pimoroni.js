module.exports = {
    nets: ['A'],
    params: {
        class: 'F'
    },
    body: p => {
      const standard = ` 
        (module pimoroni_trackball (layer F.Cu) (tedit 5D20B36F)
        ${p.at /* parametric position */}

        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        (descr "Pimoroni I2C trackball breakout")

        (fp_line (start -7 7) (end -7 5) (layer B.SilkS) (width 0.12))
        (fp_line (start -7 7) (end -5 7) (layer B.SilkS) (width 0.12))
        (fp_line (start 7 -7) (end 5 -7) (layer B.SilkS) (width 0.12))
        (fp_circle (center 0 0) (end 0 2.5) (layer B.SilkS) (width 0.12))
        (fp_line (start 7 7) (end 7 5) (layer B.SilkS) (width 0.12))
        (fp_line (start -7 -7) (end -7 -5) (layer B.SilkS) (width 0.12))
        (fp_line (start -7 -7) (end -5 -7) (layer B.SilkS) (width 0.12))
        (fp_line (start 7 7) (end 5 7) (layer B.SilkS) (width 0.12))
        (fp_line (start -5 -7) (end -7 -7) (layer B.SilkS) (width 0.12))
        (fp_line (start -5 7) (end -7 7) (layer B.SilkS) (width 0.12))
        (fp_line (start 7 -7) (end 7 -6) (layer B.SilkS) (width 0.12))
        (fp_line (start 7 -6) (end 7 -5) (layer B.SilkS) (width 0.12))
        (fp_line (start 7 -5) (end 7 -7) (layer B.SilkS) (width 0.12))
        (fp_line (start -7 7) (end -7 5) (layer F.SilkS) (width 0.12))
        (fp_line (start -5 7) (end -7 7) (layer F.SilkS) (width 0.12))
        (fp_line (start -7 7) (end -5 7) (layer F.SilkS) (width 0.12))
        (fp_line (start -7 -7) (end -7 -5) (layer F.SilkS) (width 0.12))
        (fp_line (start -5 -7) (end -7 -7) (layer F.SilkS) (width 0.12))
        (fp_line (start -7 -7) (end -5 -7) (layer F.SilkS) (width 0.12))
        (fp_line (start 7 7) (end 5 7) (layer F.SilkS) (width 0.12))
        (fp_line (start 7 5) (end 7 7) (layer F.SilkS) (width 0.12))
        (fp_line (start 7 6) (end 7 5) (layer F.SilkS) (width 0.12))
        (fp_line (start 7 7) (end 7 6) (layer F.SilkS) (width 0.12))
        (fp_line (start 7 -7) (end 5 -7) (layer F.SilkS) (width 0.12))
        (fp_line (start 7 -7) (end 7 -5) (layer F.SilkS) (width 0.12))
        (fp_circle (center 0 0) (end 0 -2.5) (layer F.SilkS) (width 0.12))
        (fp_line (start -2.5 -13.5065) (end -2.5 -14.459) (layer F.Fab) (width 0.1))
        (fp_line (start 2.5 -14.459) (end 2.5 -13.189) (layer F.Fab) (width 0.1))
        (fp_line (start -2.1825 -13.189) (end -2.5 -13.5065) (layer F.Fab) (width 0.1))
        (fp_text user %R (at 0 -13.824 180) (layer F.Fab)
          (effects (font (size 0.76 0.76) (thickness 0.114)))
        )
        (fp_line (start -5.9 -15.1) (end 6 -15.1) (layer F.SilkS) (width 0.12))
        (fp_line (start 6 -15.1) (end 6 -12.6) (layer F.SilkS) (width 0.12))
        (fp_line (start 6 -12.6) (end -6.1 -12.6) (layer F.SilkS) (width 0.12))
        (fp_line (start -6.1 -12.6) (end -6.1 -15.1) (layer F.SilkS) (width 0.12))
        (fp_line (start -6.1 -15.1) (end -5.9 -15.1) (layer F.SilkS) (width 0.12))
        (fp_line (start 6 -12.6) (end 6 -15.1) (layer B.SilkS) (width 0.12))
        (fp_line (start -5.9 -12.6) (end 6 -12.6) (layer B.SilkS) (width 0.12))
        (fp_line (start 6 -15.1) (end -6.1 -15.1) (layer B.SilkS) (width 0.12))
        (fp_line (start -6.1 -12.6) (end -5.9 -12.6) (layer B.SilkS) (width 0.12))
        (fp_line (start -6.1 -15.1) (end -6.1 -12.6) (layer B.SilkS) (width 0.12))
        (fp_text user "pimoroni trackball breakout" (at 0 -9.2) (layer F.SilkS)
          (effects (font (size 1 1) (thickness 0.15)))
        )

        (pad 5 thru_hole roundrect (at 5.08 -13.824 180) (size 1.7 2.2) (drill oval 1 1.5) (layers *.Cu *.Mask) (roundrect_rratio 0.25))
        (pad 4 thru_hole roundrect (at 2.54 -13.824 180) (size 1.7 2.2) (drill oval 1 1.5) (layers *.Cu *.Mask) (roundrect_rratio 0.25))
        (pad 3 thru_hole roundrect (at 0 -13.824 180) (size 1.7 2.2) (drill oval 1 1.5) (layers *.Cu *.Mask) (roundrect_rratio 0.25))
        (pad 2 thru_hole roundrect (at -2.54 -13.824 180) (size 1.7 2.2) (drill oval 1 1.5) (layers *.Cu *.Mask) (roundrect_rratio 0.25))
        (pad 1 thru_hole roundrect (at -5.08 -13.824 90) (size 2.2 1.7) (drill oval 1.5 1) (layers *.Cu *.Mask) (roundrect_rratio 0.25))
        (pad 6 thru_hole oval (at 9.8 -5.5 90) (size 3.8 3.3) (drill oval 3.5 3) (layers *.Cu *.Mask))
        (pad 7 thru_hole oval (at 9.8 5.5 90) (size 3.8 3.3) (drill oval 3.5 3) (layers *.Cu *.Mask))
        (pad 8 thru_hole oval (at -9.8 5.5 90) (size 3.8 3.3) (drill oval 3.5 3) (layers *.Cu *.Mask))
        (pad 9 thru_hole oval (at -9.8 -5.5 90) (size 3.8 3.3) (drill oval 3.5 3) (layers *.Cu *.Mask))
      `
      return `
        ${standard}
      `
    }
  }  

