module.exports = {
    nets: {
      RAW: 'RAW',
      GND: 'GND',
      RST: 'RST',
      VCC: 'VCC',
      P42: 'P42',
      P41: 'P41',
      P40: 'P40',
      P39: 'P39',
      P38: 'P38',
      P37: 'P37',
      P36: 'P36',
      P35: 'P35',
      P34: 'P34',
      P33: 'P33',
      P32: 'P32',
      P31: 'P31',
      P30: 'P30',
      P29: 'P29',
      P28: 'P28',
      P27: 'P27',
      P26: 'P26',
      P25: 'P25',
      P24: 'P24',
      P23: 'P23',
      P22: 'P22',
      P21: 'P21',
      P20: 'P20',
      P19: 'P19',
      P18: 'P18',
      P17: 'P17',
      P16: 'P16',
      P15: 'P15',
      P14: 'P14',
      P13: 'P13',
      P12: 'P12',
      P11: 'P11',
      P10: 'P10',
      P1: 'P1',
      P0: 'P0',
      P2: 'P2',
      P3: 'P3',
      P4: 'P4',
      P5: 'P5',
      P6: 'P6',
      P7: 'P7',
      P8: 'P8',
      P9: 'P9',
    },
    params: {
        class: 'MCU',
        side: 'F'
    },
    body: p => {
      const standard = ` 
      ${'' /* ATMEGA32U4-AU */}
        (module Integrated_ATMEGA32U4-AU (layer F.Cu) (tedit 5CF31DEF)
          ${p.at /* parametric position */}
          ${'' /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))

            (fp_line (start -7 7) (end -7 -7) (layer Dwgs.User) (width 0.05))
            (fp_line (start 7 7) (end -7 7) (layer Dwgs.User) (width 0.05))
            (fp_line (start 7 -7) (end 7 7) (layer Dwgs.User) (width 0.05))
            (fp_line (start -7 -7) (end 7 -7) (layer Dwgs.User) (width 0.05))
            (fp_circle (center -4 -4) (end -3.7173 -4) (layer F.SilkS) (width 0.254))
            (fp_line (start -4.8 4.8) (end -4.8 -4.8) (layer F.SilkS) (width 0.2032))
            (fp_line (start 4.8 4.8) (end -4.8 4.8) (layer F.SilkS) (width 0.2032))
            (fp_line (start 4.8 -4.8) (end 4.8 4.8) (layer F.SilkS) (width 0.2032))
            (fp_line (start -4.8 -4.8) (end 4.8 -4.8) (layer F.SilkS) (width 0.2032))
            (pad 1 smd rect (at -5.9 -4 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P1.str} (solder_mask_margin 0.2))
            (pad 2 smd rect (at -5.9 -3.2 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P2.str} (solder_mask_margin 0.2))
            (pad 3 smd rect (at -5.9 -2.4 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P3.str} (solder_mask_margin 0.2))
            (pad 4 smd rect (at -5.9 -1.6 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P4.str} (solder_mask_margin 0.2))
            (pad 5 smd rect (at -5.9 -0.8 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.GND.str} (solder_mask_margin 0.2))
            (pad 6 smd rect (at -5.9 0 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P6.str} (solder_mask_margin 0.2))
            (pad 7 smd rect (at -5.9 0.8 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.VCC.str} (solder_mask_margin 0.2))
            (pad 8 smd rect (at -5.9 1.6 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P8.str} (solder_mask_margin 0.2))
            (pad 9 smd rect (at -5.9 2.4 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P9.str} (solder_mask_margin 0.2))
            (pad 10 smd rect (at -5.9 3.2 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P10.str} (solder_mask_margin 0.2))
            (pad 11 smd rect (at -5.9 4 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P11.str} (solder_mask_margin 0.2))
            (pad 12 smd rect (at -4 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P12.str} (solder_mask_margin 0.2))
            (pad 13 smd rect (at -3.2 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P13.str} (solder_mask_margin 0.2))
            (pad 14 smd rect (at -2.4 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.VCC.str} (solder_mask_margin 0.2))
            (pad 15 smd rect (at -1.6 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.GND.str} (solder_mask_margin 0.2))
            (pad 16 smd rect (at -0.8 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P16.str} (solder_mask_margin 0.2))
            (pad 17 smd rect (at 0 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P17.str} (solder_mask_margin 0.2))
            (pad 18 smd rect (at 0.8 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P18.str} (solder_mask_margin 0.2))
            (pad 19 smd rect (at 1.6 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P19.str} (solder_mask_margin 0.2))
            (pad 20 smd rect (at 2.4 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P20.str} (solder_mask_margin 0.2))
            (pad 21 smd rect (at 3.2 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P21.str} (solder_mask_margin 0.2))
            (pad 22 smd rect (at 4 5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P22.str} (solder_mask_margin 0.2))
            (pad 23 smd rect (at 5.9 4 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.GND.str} (solder_mask_margin 0.2))
            (pad 24 smd rect (at 5.9 3.2 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.VCC.str} (solder_mask_margin 0.2))
            (pad 25 smd rect (at 5.9 2.4 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P25.str} (solder_mask_margin 0.2))
            (pad 26 smd rect (at 5.9 1.6 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P26.str} (solder_mask_margin 0.2))
            (pad 27 smd rect (at 5.9 0.8 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P27.str} (solder_mask_margin 0.2))
            (pad 28 smd rect (at 5.9 0 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P28.str} (solder_mask_margin 0.2))
            (pad 29 smd rect (at 5.9 -0.8 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P29.str} (solder_mask_margin 0.2))
            (pad 30 smd rect (at 5.9 -1.6 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P30.str} (solder_mask_margin 0.2))
            (pad 31 smd rect (at 5.9 -2.4 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P31.str} (solder_mask_margin 0.2))
            (pad 32 smd rect (at 5.9 -3.2 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P32.str} (solder_mask_margin 0.2))
            (pad 33 smd rect (at 5.9 -4 ${p.rot}) (size 1.5 0.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P33.str} (solder_mask_margin 0.2))
            (pad 34 smd rect (at 4 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.VCC.str} (solder_mask_margin 0.2))
            (pad 35 smd rect (at 3.2 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.GND.str} (solder_mask_margin 0.2))
            (pad 36 smd rect (at 2.4 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P36.str} (solder_mask_margin 0.2))
            (pad 37 smd rect (at 1.6 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P37.str} (solder_mask_margin 0.2))
            (pad 38 smd rect (at 0.8 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P38.str} (solder_mask_margin 0.2))
            (pad 39 smd rect (at 0 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P39.str} (solder_mask_margin 0.2))
            (pad 40 smd rect (at -0.8 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P40.str} (solder_mask_margin 0.2))
            (pad 41 smd rect (at -1.6 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P41.str} (solder_mask_margin 0.2))
            (pad 42 smd rect (at -2.4 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P42.str} (solder_mask_margin 0.2))
            (pad 43 smd rect (at -3.2 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.GND.str} (solder_mask_margin 0.2))
            (pad 44 smd rect (at -4 -5.9 ${p.rot}) (size 0.5 1.5) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.VCC.str} (solder_mask_margin 0.2))
          ${'' /* Crystal */}
            (pad 4 smd rect (at -1.1 ${11.9-0.85} ${180+p.rot}) (size 1.4 1.2) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.GND.str})
            (pad 3 smd rect (at 1.1 ${11.9-0.85} ${180+p.rot}) (size 1.4 1.2) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P17.str})
            (pad 2 smd rect (at 1.1 ${11.9+0.85} ${180+p.rot}) (size 1.4 1.2) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.GND.str})
            (pad 1 smd rect (at -1.1 ${11.9+0.85} ${180+p.rot}) (size 1.4 1.2) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
              ${p.net.P16.str})
          )
        `
      const GND_plane = `
          (zone (net ${p.net.GND.index}) (net_name ${p.net.GND.name}) (layer ${p.param.side}.Cu) (tstamp 0) (hatch full 0.508)
            (connect_pads (clearance 0))
            (min_thickness 0.254)
            (fill yes (arc_segments 32) (thermal_gap 0) (thermal_bridge_width 0))
            (polygon (pts (xy ${p.xy(4.8, 4.8)}) (xy ${p.xy(4.8, -4.8)}) (xy ${p.xy(-4.8, -4.8)}) (xy ${p.xy(-4.8, 4.8)})))
          )
          (zone (net ${p.net.GND.index}) (net_name ${p.net.GND.name}) (layer ${p.param.side}.Cu) (tstamp 0) (hatch full 0.508)
            (connect_pads (clearance 0.3))
            (min_thickness 0.254)
            (fill yes (arc_segments 32) (thermal_gap 0.3) (thermal_bridge_width 0.3))
            (polygon (pts (xy ${p.xy(5.3, 14.5)}) (xy ${p.xy(-5.3, 14.5)}) (xy ${p.xy(-5.3, 7)}) (xy ${p.xy(5.3, 7)})))
          )
        `
      function components(label, x, y, rot, to, from) {
        return `
          (module 0603 (layer F.Cu) (tedit 5CF31DEF)
          ${'' /* footprint reference */}
          (at ${p.xy(x, y)} ${rot+p.rot})
          (fp_text reference "${label}" (at ${Math.abs(rot) == 90 ? '-2 0' : '0 -1'}) (layer F.SilkS) (effects (font (size 0.7 0.7) (thickness 0.15))))
          (fp_line (start -1.35 0.55) (end -1.35 -0.55) (layer F.SilkS) (width 0.2))
          (fp_line (start 1.35 0.55) (end -1.35 0.55) (layer F.SilkS) (width 0.2))
          (fp_line (start 1.35 -0.55) (end 1.35 0.55) (layer F.SilkS) (width 0.2))
          (fp_line (start -1.35 -0.55) (end 1.35 -0.55) (layer F.SilkS) (width 0.2))
          (pad 2 smd rect (at 0.75 0 ${rot+p.rot}) (size 0.8 0.75) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
            ${to} (clearance 0.1))
          (pad 1 smd rect (at -0.75 0 ${rot+p.rot}) (size 0.8 0.75) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
            ${from} (clearance 0.1))
          )
        `
      }
      const traces = `
      (segment (start ${p.xy(0.7, 12.85)}) (end ${p.xy(1.1, 12.85)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-1, 11.15)}) (end ${p.xy(0.7, 12.85)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-1.1, 11.15)}) (end ${p.xy(-1, 11.15)}) (width 0.25) (layer F.Cu) (net 1))    
      (segment (start ${p.xy(-1.1, 11.15)}) (end ${p.xy(-1.1, 10.125)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-1.1, 10.125)}) (end ${p.xy(-0.6, 9.625)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-1.6, 5.9)}) (end ${p.xy(-1.6, 7.925)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(3.2, -5.9)}) (end ${p.xy(3.2, -6.95)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(5.6, -10.1)}) (end ${p.xy(8.775, -10.1)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(9, -9.875)}) (end ${p.xy(8.775, -10.1)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(9, -9.875)}) (end ${p.xy(9, -7.75)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-5.25, -8.95)}) (end ${p.xy(-5.25, -9)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(8.65, 6.75)}) (end ${p.xy(5.9, 4)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(9, 6.75)}) (end ${p.xy(8.65, 6.75)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-9.85, -0.8)}) (end ${p.xy(-5.9, -0.8)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-10.25, -0.4)}) (end ${p.xy(-9.85, -0.8)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(2.9, 12.85)}) (end ${p.xy(3, 12.75)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(1.1, 12.85)}) (end ${p.xy(2.9, 12.85)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-3.2, -5.9)}) (end ${p.xy(-3.2, -4.55)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-5.9, -0.8)}) (end ${p.xy(-4.725, -0.8)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-1.6, 5.9)}) (end ${p.xy(-1.6, 4.55)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(3.2, -5.9)}) (end ${p.xy(3.2, -4.475)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(5.9, 4)}) (end ${p.xy(4.8, 4)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-5.2, -8.9)}) (end ${p.xy(-5.25, -8.9)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-3.2, -6.9)}) (end ${p.xy(-5.2, -8.9)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(-3.2, -5.9)}) (end ${p.xy(-3.2, -6.9)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(5.15, -8.9)}) (end ${p.xy(3.2, -6.95)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(5.25, -8.9)}) (end ${p.xy(5.15, -8.9)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(5.25, -9.75)}) (end ${p.xy(5.6, -10.1)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(5.25, -8.9)}) (end ${p.xy(5.25, -9.75)}) (width 0.25) (layer F.Cu) (net 1))
      (segment (start ${p.xy(4, -5.9)}) (end ${p.xy(4, -6.25)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-4, -5.9)}) (end ${p.xy(-4, -6.25)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(6.95, 3.2)}) (end ${p.xy(5.9, 3.2)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(9, 5.25)}) (end ${p.xy(6.95, 3.2)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(9, 5.25)}) (end ${p.xy(9, 3.2)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(9, 3.2)}) (end ${p.xy(9, 3.2)}) (width 0.25) (layer F.Cu) (net 2) (tstamp 60EF3065))
      (via (at ${p.xy(9, 3.2)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 2))


      (segment (start ${p.xy(6.65, -7.225)}) (end ${p.xy(9, -4.875)}) (width 0.25) (layer B.Cu) (net 2))


      (segment (start ${p.xy(6.65, -7.85)}) (end ${p.xy(6.65, -7.85)}) (width 0.25) (layer B.Cu) (net 2))
      (segment (start ${p.xy(-7.375, -7.85)}) (end ${p.xy(-7.375, -7.85)}) (width 0.25) (layer B.Cu) (net 2))
      (segment (start ${p.xy(-8.475, -6.75)}) (end ${p.xy(-7.375, -7.85)}) (width 0.25) (layer B.Cu) (net 2))
      (segment (start ${p.xy(-8.475, 5.3)}) (end ${p.xy(-8.475, 5.3)}) (width 0.25) (layer B.Cu) (net 2))
      (segment (start ${p.xy(9, -4.225)}) (end ${p.xy(9, -4.875)}) (width 0.25) (layer B.Cu) (net 2))
      (segment (start ${p.xy(9, 3.2)}) (end ${p.xy(9, -4.225)}) (width 0.25) (layer B.Cu) (net 2))
      (segment (start ${p.xy(-7.375, -7.85)}) (end ${p.xy(6.65, -7.85)}) (width 0.25) (layer B.Cu) (net 2) (tstamp 60EF306C))
      (via (at ${p.xy(-7.375, -7.85)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 2))


      (segment (start ${p.xy(6.65, -7.85)}) (end ${p.xy(6.65, -7.225)}) (width 0.25) (layer B.Cu) (net 2) (tstamp 60EF3084))


      (via (at ${p.xy(6.65, -7.85)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 2))
      (segment (start ${p.xy(6.75, -7.95)}) (end ${p.xy(6.65, -7.85)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-8.475, 5.3)}) (end ${p.xy(-8.475, 0.825)}) (width 0.25) (layer B.Cu) (net 2) (tstamp 60EF3087))
      (via (at ${p.xy(-8.475, 5.3)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 2))
      (segment (start ${p.xy(-8.475, 8.95)}) (end ${p.xy(-8.475, 5.3)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-8.475, 0.825)}) (end ${p.xy(-8.475, -6.75)}) (width 0.25) (layer B.Cu) (net 2) (tstamp 60EF3091))
      (via (at ${p.xy(-8.475, 0.825)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 2))
      (segment (start ${p.xy(-5.925, 0.825)}) (end ${p.xy(-5.9, 0.8)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-8.475, 0.825)}) (end ${p.xy(-5.925, 0.825)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-3.85, 8.35)}) (end ${p.xy(-5, 8.35)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-2.4, 6.9)}) (end ${p.xy(-3.85, 8.35)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-2.4, 5.9)}) (end ${p.xy(-2.4, 6.9)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-6.5, 9.85)}) (end ${p.xy(-5, 8.35)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-7, 9.85)}) (end ${p.xy(-6.5, 9.85)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-7.575, 9.85)}) (end ${p.xy(-8.475, 8.95)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-7, 9.85)}) (end ${p.xy(-7.575, 9.85)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-4, -6.15)}) (end ${p.xy(-6.75, -8.9)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-4, -5.9)}) (end ${p.xy(-4, -6.15)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(4, -5.9)}) (end ${p.xy(4, -7.1)}) (width 0.25) (layer F.Cu) (net 2))

      (segment (start ${p.xy(4.75, -7.85)}) (end ${p.xy(5.6, -7.85)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(5.6, -7.85)}) (end ${p.xy(6.75, -9)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(4, -7.1)}) (end ${p.xy(4.75, -7.85)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(6.65, -8.8)}) (end ${p.xy(6.75, -8.9)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(6.65, -7.85)}) (end ${p.xy(6.65, -8.8)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-7.375, -8.275)}) (end ${p.xy(-6.75, -8.9)}) (width 0.25) (layer F.Cu) (net 2))
      (segment (start ${p.xy(-7.375, -7.85)}) (end ${p.xy(-7.375, -8.275)}) (width 0.25) (layer F.Cu) (net 2))
      (via (at ${p.xy(-2.4, -9.85)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 3))
      (segment (start ${p.xy(-2.4, -5.9)}) (end ${p.xy(-2.4, -9.85)}) (width 0.25) (layer F.Cu) (net 3))
      (via (at ${p.xy(-1.6, -10.35)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 4))
      (segment (start ${p.xy(-1.6, -5.9)}) (end ${p.xy(-1.6, -10.35)}) (width 0.25) (layer F.Cu) (net 4))
      (segment (start ${p.xy(-0.8, -9.675)}) (end ${p.xy(-0.8, -9.675)}) (width 0.25) (layer F.Cu) (net 5) (tstamp 60ECAF3A))
      (via (at ${p.xy(-0.8, -9.85)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 5))
      (segment (start ${p.xy(-0.8, -5.9)}) (end ${p.xy(-0.8, -9.85)}) (width 0.25) (layer F.Cu) (net 5))
      (via (at ${p.xy(0, -10.35)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 6))
      (segment (start ${p.xy(0, -5.9)}) (end ${p.xy(0, -10.35)}) (width 0.25) (layer F.Cu) (net 6))
      (via (at ${p.xy(0.8, -9.85)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 7))
      (segment (start ${p.xy(0.8, -5.9)}) (end ${p.xy(0.8, -9.85)}) (width 0.25) (layer F.Cu) (net 7))
      (via (at ${p.xy(1.6, -10.35)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 8))
      (segment (start ${p.xy(1.6, -5.9)}) (end ${p.xy(1.6, -10.35)}) (width 0.25) (layer F.Cu) (net 8))
      (via (at ${p.xy(2.4, -9.85)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 9))
      (segment (start ${p.xy(2.4, -6.9)}) (end ${p.xy(2.4, -9.85)}) (width 0.25) (layer F.Cu) (net 9))
      (segment (start ${p.xy(2.4, -5.9)}) (end ${p.xy(2.4, -6.9)}) (width 0.25) (layer F.Cu) (net 9))



      (segment (start ${p.xy(6.75, -4)}) (end ${p.xy(9, -6.25)}) (width 0.25) (layer F.Cu) (net 10))
      (segment (start ${p.xy(5.9, -4)}) (end ${p.xy(6.75, -4)}) (width 0.25) (layer F.Cu) (net 10))
      (via (at ${p.xy(10.5, -3.2)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 11) (tstamp 60EF3029))
      (segment (start ${p.xy(5.9, -3.2)}) (end ${p.xy(10.5, -3.2)}) (width 0.25) (layer F.Cu) (net 11))
      (via (at ${p.xy(10, -2.4)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 12) (tstamp 60EF302F))
      (segment (start ${p.xy(5.9, -2.4)}) (end ${p.xy(10, -2.4)}) (width 0.25) (layer F.Cu) (net 12))
      (via (at ${p.xy(10.5, -1.6)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 13) (tstamp 60EF302C))
      (segment (start ${p.xy(5.9, -1.6)}) (end ${p.xy(10.5, -1.6)}) (width 0.25) (layer F.Cu) (net 13))
      (via (at ${p.xy(10, -0.8)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 14) (tstamp 60EF3026))
      (segment (start ${p.xy(5.9, -0.8)}) (end ${p.xy(10, -0.8)}) (width 0.25) (layer F.Cu) (net 14))
      (via (at ${p.xy(10.5, 0)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 15) (tstamp 60EF3023))
      (segment (start ${p.xy(5.9, 0)}) (end ${p.xy(10.5, 0)}) (width 0.25) (layer F.Cu) (net 15))
      (segment (start ${p.xy(10.225, 0.8)}) (end ${p.xy(10.225, 0.8)}) (width 0.25) (layer F.Cu) (net 16) (tstamp 60EF3017))
      (via (at ${p.xy(10, 0.8)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 16) (tstamp 60EF3020))
      (segment (start ${p.xy(5.9, 0.8)}) (end ${p.xy(10, 0.8)}) (width 0.25) (layer F.Cu) (net 16))
      (via (at ${p.xy(10.5, 1.6)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 17) (tstamp 60EF3032))
      (segment (start ${p.xy(5.9, 1.6)}) (end ${p.xy(10.5, 1.6)}) (width 0.25) (layer F.Cu) (net 17))
      (via (at ${p.xy(10, 2.4)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 18) (tstamp 60EF3035))
      (segment (start ${p.xy(5.9, 2.4)}) (end ${p.xy(10, 2.4)}) (width 0.25) (layer F.Cu) (net 18))
      (via (at ${p.xy(4, 7.9)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 19))
      (segment (start ${p.xy(4, 7.9)}) (end ${p.xy(4, 5.9)}) (width 0.25) (layer F.Cu) (net 19))
      (via (at ${p.xy(3.2, 7.5)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 20))
      (segment (start ${p.xy(3.2, 7.5)}) (end ${p.xy(3.2, 5.9)}) (width 0.25) (layer F.Cu) (net 20))
      (via (at ${p.xy(2.4, 7.9)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 21))
      (segment (start ${p.xy(2.4, 7.9)}) (end ${p.xy(2.4, 5.9)}) (width 0.25) (layer F.Cu) (net 21))
      (via (at ${p.xy(1.6, 7.5)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 22))
      (segment (start ${p.xy(1.6, 7.5)}) (end ${p.xy(1.6, 5.9)}) (width 0.25) (layer F.Cu) (net 22))
      (via (at ${p.xy(0.8, 7.9)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 23))
      (segment (start ${p.xy(0.8, 7.9)}) (end ${p.xy(0.8, 5.9)}) (width 0.25) (layer F.Cu) (net 23))
      (segment (start ${p.xy(2.9, 11.15)}) (end ${p.xy(3, 11.25)}) (width 0.25) (layer F.Cu) (net 24))
      (segment (start ${p.xy(1.1, 11.15)}) (end ${p.xy(2.9, 11.15)}) (width 0.25) (layer F.Cu) (net 24))
      (segment (start ${p.xy(-0.025, 5.925)}) (end ${p.xy(0, 5.9)}) (width 0.25) (layer F.Cu) (net 24))
      (segment (start ${p.xy(1.1, 11.15)}) (end ${p.xy(1.1, 9.725)}) (width 0.25) (layer F.Cu) (net 24))
      (segment (start ${p.xy(1.1, 9.725)}) (end ${p.xy(-0.025, 8.6)}) (width 0.25) (layer F.Cu) (net 24))
      (segment (start ${p.xy(-0.025, 8.6)}) (end ${p.xy(-0.025, 5.925)}) (width 0.25) (layer F.Cu) (net 24))
      (segment (start ${p.xy(-2.9, 12.85)}) (end ${p.xy(-3, 12.75)}) (width 0.25) (layer F.Cu) (net 25))
      (segment (start ${p.xy(-1.2, 12.75)}) (end ${p.xy(-1.1, 12.85)}) (width 0.25) (layer F.Cu) (net 25))
      (segment (start ${p.xy(-3, 12.75)}) (end ${p.xy(-1.2, 12.75)}) (width 0.25) (layer F.Cu) (net 25))
      (segment (start ${p.xy(-0.8, 8.65)}) (end ${p.xy(-0.8, 5.925)}) (width 0.25) (layer F.Cu) (net 25))
      (segment (start ${p.xy(-2.125001, 9.975001)}) (end ${p.xy(-0.8, 8.65)}) (width 0.25) (layer F.Cu) (net 25))
      (segment (start ${p.xy(-2.125001, 12.010001)}) (end ${p.xy(-2.125001, 9.975001)}) (width 0.25) (layer F.Cu) (net 25))
      (segment (start ${p.xy(-1.285002, 12.85)}) (end ${p.xy(-2.125001, 12.010001)}) (width 0.25) (layer F.Cu) (net 25))
      (segment (start ${p.xy(-1.1, 12.85)}) (end ${p.xy(-1.285002, 12.85)}) (width 0.25) (layer F.Cu) (net 25))
      (segment (start ${p.xy(-3.2, 7.025)}) (end ${p.xy(-3.2, 5.9)}) (width 0.25) (layer F.Cu) (net 26))
      (segment (start ${p.xy(-3.65, 7.475)}) (end ${p.xy(-3.2, 7.025)}) (width 0.25) (layer F.Cu) (net 26))
      (segment (start ${p.xy(-3.65, 7.475)}) (end ${p.xy(-5.625, 7.475)}) (width 0.25) (layer F.Cu) (net 26))
      (segment (start ${p.xy(-6.5, 8.35)}) (end ${p.xy(-5.625, 7.475)}) (width 0.25) (layer F.Cu) (net 26))
      (segment (start ${p.xy(-7, 8.35)}) (end ${p.xy(-6.5, 8.35)}) (width 0.25) (layer F.Cu) (net 26))
      (via (at ${p.xy(-10, 4)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 28))
      (segment (start ${p.xy(-5.9, 4)}) (end ${p.xy(-10, 4)}) (width 0.25) (layer F.Cu) (net 28))
      (via (at ${p.xy(-10.5, 3.2)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 29))
      (segment (start ${p.xy(-5.9, 3.2)}) (end ${p.xy(-10.5, 3.2)}) (width 0.25) (layer F.Cu) (net 29))
      (via (at ${p.xy(-10.5, -4)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 30))
      (segment (start ${p.xy(-5.9, -4)}) (end ${p.xy(-10.5, -4)}) (width 0.25) (layer F.Cu) (net 30))
      (via (at ${p.xy(-10, -3.2)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 31))
      (segment (start ${p.xy(-5.9, -3.2)}) (end ${p.xy(-10, -3.2)}) (width 0.25) (layer F.Cu) (net 31))
      (via (at ${p.xy(-10.5, -2.4)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 32))
      (segment (start ${p.xy(-5.9, -2.4)}) (end ${p.xy(-10.5, -2.4)}) (width 0.25) (layer F.Cu) (net 32))
      (via (at ${p.xy(-10, -1.6)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 33))
      (segment (start ${p.xy(-5.9, -1.6)}) (end ${p.xy(-10, -1.6)}) (width 0.25) (layer F.Cu) (net 33))
      (segment (start ${p.xy(-6.685002, 0)}) (end ${p.xy(-5.9, 0)}) (width 0.25) (layer F.Cu) (net 34))
      (segment (start ${p.xy(-11.049999, 0.300001)}) (end ${p.xy(-11.75, -0.4)}) (width 0.25) (layer F.Cu) (net 34))
      (segment (start ${p.xy(-9.589999, 0.300001)}) (end ${p.xy(-11.049999, 0.300001)}) (width 0.25) (layer F.Cu) (net 34))
      (segment (start ${p.xy(-9.289998, 0)}) (end ${p.xy(-9.589999, 0.300001)}) (width 0.25) (layer F.Cu) (net 34))
      (segment (start ${p.xy(-5.9, 0)}) (end ${p.xy(-9.289998, 0)}) (width 0.25) (layer F.Cu) (net 34))
      (segment (start ${p.xy(-10.25, 1.6)}) (end ${p.xy(-10.25, 1.6)}) (width 0.25) (layer F.Cu) (net 35) (tstamp 60ECACAF))
      (via (at ${p.xy(-10.5, 1.6)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 35))
      (segment (start ${p.xy(-5.9, 1.6)}) (end ${p.xy(-10.5, 1.6)}) (width 0.25) (layer F.Cu) (net 35))
      (via (at ${p.xy(-10, 2.4)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 36))
      (segment (start ${p.xy(-5.9, 2.4)}) (end ${p.xy(-10, 2.4)}) (width 0.25) (layer F.Cu) (net 36))
      `
      return `
        ${standard}
        ${components('1uF', -11, -0.5, 0, p.net.GND.str, p.net.P6.str)}
        ${components('10K', -7, 9, -90,  p.net.VCC.str, p.net.P13.str)}

        ${components('100nF', -6, -9, 0, p.net.GND.str, p.net.VCC.str)}
        ${components('100nF', 6, -9, 0, p.net.VCC.str,p.net.GND.str)}

        ${components('10K', 9, -7, 90, p.net.GND.str, p.net.P33.str)}
        ${components('100nF', 9, 6, 90, p.net.VCC.str, p.net.GND.str)}

        ${components('100nF', -5, 9, -90, p.net.GND.str, p.net.VCC.str)}

        ${components('22pF', -3, 11.9, 90, p.net.GND.str, p.net.P16.str)}
        ${components('22pF', 3, 11.9, 90, p.net.P17.str, p.net.GND.str)}

        ${GND_plane}
        ${traces}
      `
    }
  }