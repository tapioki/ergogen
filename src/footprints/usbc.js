module.exports = {
    nets: {
      GND: 'GND',
      VBUS: 'VBUS',
      VCC: 'VCC',
      CC1: 'CC1',
      CC2: 'CC2',
      DN: 'DN',
      DP: 'DP',
      P3: 'P3',
      P4: 'P4'
    },
    params: {
        class: 'USB',
        side: 'F'
    },
    body: p => {
        const standard = `
          (module USB-C-12-Pin-MidMount (layer F.Cu) (tedit 5DD50112)
          ${p.at /* parametric position */}
    
          ${'' /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer ${p.param.side}.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value "" (at 0 0) (layer ${p.param.side}.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

          (fp_line (start 7 0) (end 4.64 0) (layer Edge.Cuts) (width 0.15))
          (fp_line (start -7 0) (end -4.64 0) (layer Edge.Cuts) (width 0.15))
          (fp_line (start -4.64 6.66) (end 4.64 6.66) (layer Edge.Cuts) (width 0.15))
          (fp_line (start -4.64 6.66) (end -4.64 0) (layer Edge.Cuts) (width 0.15))
          (fp_line (start 4.64 6.66) (end 4.64 0) (layer Edge.Cuts) (width 0.15))
          (pad "1" smd rect (at 3.225 7.235 ${p.rot}) (size 0.6 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.GND.str})
          (pad "2" smd rect (at 2.45 7.235 ${p.rot}) (size 0.6 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.VBUS.str})
          (pad "3" smd rect (at 1.75 7.235 ${p.rot}) (size 0.3 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask))
          (pad "4" smd rect (at 1.25 7.235 ${p.rot}) (size 0.3 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.CC1.str})
          (pad "5" smd rect (at 0.75 7.235 ${p.rot}) (size 0.3 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.DP.str})
          (pad "6" smd rect (at 0.25 7.235 ${p.rot}) (size 0.3 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.DN.str})
          (pad "7" smd rect (at -0.25 7.235 ${p.rot}) (size 0.3 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.DP.str})
          (pad "8" smd rect (at -0.75 7.235 ${p.rot}) (size 0.3 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.DN.str})
          (pad "9" smd rect (at -1.25 7.235 ${p.rot}) (size 0.3 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.CC2.str})
          (pad "10" smd rect (at -1.75 7.235 ${p.rot}) (size 0.3 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask))
          (pad "11" smd rect (at -2.45 7.235 ${p.rot}) (size 0.6 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.VBUS.str})
          (pad "12" smd rect (at -3.225 7.235 ${p.rot}) (size 0.6 1.15) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.GND.str})
          (pad "13" thru_hole oval (at 5.62 6.1 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "13" thru_hole oval (at -5.62 6.1 ${p.rot}) (size 1 1.8) (drill oval 0.6 1.4) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "13" thru_hole oval (at -5.62 2.1 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask) ${p.net.GND.str})
          (pad "13" thru_hole oval (at 5.62 2.1 ${p.rot}) (size 1 2.2) (drill oval 0.6 1.8) (layers *.Cu *.Mask) ${p.net.GND.str})
          )
          `
          function components(label, x, y, rot, to, from) {
            return `
              (module 0603 (layer F.Cu) (tedit 5CF31DEF)
              ${'' /* footprint reference */}
              (at ${p.xy(x, y)} ${rot+p.rot})
              (fp_text reference "${label}" (at -2 0 ${p.rot+rot+90}) (layer F.SilkS) (effects (font (size 0.3 0.3) (thickness 0.05))))
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
          const GND_plane = `
          (zone (net ${p.net.GND.index}) (net_name ${p.net.GND.name}) (layer ${p.param.side}.Cu) (tstamp 0) (hatch full 0.508)
          (connect_pads (clearance 0.3))
          (min_thickness 0.254)
          (fill yes (arc_segments 32) (thermal_gap 0.3) (thermal_bridge_width 0.3))
            (polygon (pts (xy ${p.xy(7.5, 0)}) (xy ${p.xy(7.5, 16)}) (xy ${p.xy(-7.5, 16)}) (xy ${p.xy(-7.5, 0)})))
            )

          (zone (net ${p.net.GND.index}) (net_name ${p.net.GND.name}) (layer ${p.param.side}.Cu) (tstamp 0) (hatch full 0.508)
            (connect_pads (clearance 0.3))
            (min_thickness 0.254)
            (fill yes (arc_segments 32) (thermal_gap 0.3) (thermal_bridge_width 0.3))
              (polygon (pts (xy ${p.xy(7, 0)}) (xy ${p.xy(-7, 0)}) (xy ${p.xy(-7, 9)}) (xy ${p.xy(-7, 9)}))) 
            )
          `
          const traces = `
          (segment (start ${p.xy(3.225, 7.235)}) (end ${p.xy(3.225, 8.525)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(5.62, 6.1)}) (end ${p.xy(5.62, 2.1)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(-5.62, 2.1)}) (end ${p.xy(-5.62, 6.1)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(-5.62, 6.1)}) (end ${p.xy(-5.62, 6.445)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(6.725, 10.74)}) (end ${p.xy(6.725, 9.825)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(0.774999, 15.024999)}) (end ${p.xy(1.5, 15.75)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(-2.274999, 15.024999)}) (end ${p.xy(0.774999, 15.024999)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(-3, 15.75)}) (end ${p.xy(-2.274999, 15.024999)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(3.585003, 15.024999)}) (end ${p.xy(3.590004, 15.03)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(0.774999, 15.024999)}) (end ${p.xy(3.585003, 15.024999)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(-2.274999, 15.024999)}) (end ${p.xy(-3.645001, 15.024999)}) (width 0.25) (layer F.Cu) (net 1))
          (via (at ${p.xy(2.45, 9.025)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 2) (tstamp 60EF2089))
          (segment (start ${p.xy(2.45, 7.21)}) (end ${p.xy(2.45, 9.025)}) (width 0.25) (layer F.Cu) (net 2) (tstamp 60EF208A))
          (segment (start ${p.xy(2.45, 7.21)}) (end ${p.xy(2.45, 8.225)}) (width 0.25) (layer F.Cu) (net 2) (tstamp 60EF208B))
          (segment (start ${p.xy(-2.45, 7.235)}) (end ${p.xy(-2.45, 8.25)}) (width 0.25) (layer F.Cu) (net 2))
          (segment (start ${p.xy(-2.45, 7.235)}) (end ${p.xy(-2.45, 9.05)}) (width 0.25) (layer F.Cu) (net 2))
          (via (at ${p.xy(-2.45, 9.05)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 2))
          (segment (start ${p.xy(2.425, 9.05)}) (end ${p.xy(2.45, 9.025)}) (width 0.25) (layer B.Cu) (net 2))
          (segment (start ${p.xy(-2.45, 9.05)}) (end ${p.xy(2.425, 9.05)}) (width 0.25) (layer B.Cu) (net 2))
          (segment (start ${p.xy(3, 13.51)}) (end ${p.xy(3, 14.25)}) (width 0.25) (layer F.Cu) (net 2))
          (segment (start ${p.xy(2.274999, 12.784999)}) (end ${p.xy(3, 13.51)}) (width 0.25) (layer F.Cu) (net 2))
          (segment (start ${p.xy(2.274999, 9.200001)}) (end ${p.xy(2.274999, 12.784999)}) (width 0.25) (layer F.Cu) (net 2))
          (segment (start ${p.xy(2.45, 9.025)}) (end ${p.xy(2.274999, 9.200001)}) (width 0.25) (layer F.Cu) (net 2))
          (segment (start ${p.xy(3, 15.75)}) (end ${p.xy(3, 17.675)}) (width 0.25) (layer F.Cu) (net 3))
          (segment (start ${p.xy(3, 15.75)}) (end ${p.xy(5.78, 15.75)}) (width 0.25) (layer F.Cu) (net 3))
          (segment (start ${p.xy(6.825, 14.705)}) (end ${p.xy(6.825, 12.46)}) (width 0.25) (layer F.Cu) (net 3))
          (segment (start ${p.xy(5.78, 15.75)}) (end ${p.xy(6.825, 14.705)}) (width 0.25) (layer F.Cu) (net 3))
          (segment (start ${p.xy(1.25, 8.16)}) (end ${p.xy(1.25, 7.235)}) (width 0.25) (layer F.Cu) (net 4))
          (segment (start ${p.xy(1.5, 8.41)}) (end ${p.xy(1.25, 8.16)}) (width 0.25) (layer F.Cu) (net 4))
          (segment (start ${p.xy(1.5, 14.25)}) (end ${p.xy(1.5, 8.41)}) (width 0.25) (layer F.Cu) (net 4))
          (segment (start ${p.xy(-3, 14.25)}) (end ${p.xy(-3, 11.07)}) (width 0.25) (layer F.Cu) (net 5))
          (segment (start ${p.xy(-3, 11.07)}) (end ${p.xy(-1.25, 9.32)}) (width 0.25) (layer F.Cu) (net 5))
          (segment (start ${p.xy(-1.25, 7.235)}) (end ${p.xy(-1.25, 9.32)}) (width 0.25) (layer F.Cu) (net 5))
          (segment (start ${p.xy(-1.5, 12.9)}) (end ${p.xy(-1.5, 14.25)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(-1.426998, 13)}) (end ${p.xy(-1.5, 13)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(-1.5, 14.25)}) (end ${p.xy(-1.5, 13)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(4.625, 10.54)}) (end ${p.xy(3, 10.54)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(3, 10.54)}) (end ${p.xy(3, 10.54)}) (width 0.25) (layer F.Cu) (net 6) (tstamp 60F0556B))
          (via (at ${p.xy(3, 10.54)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 6))
          (segment (start ${p.xy(0.25, 7.235)}) (end ${p.xy(0.25, 9.42)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(0.25, 9.42)}) (end ${p.xy(0.25, 10.5)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(-0.75, 7.235)}) (end ${p.xy(-0.75, 9.45641)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(-0.75, 9.45641)}) (end ${p.xy(-1.5, 10.20641)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(-1.5, 10.20641)}) (end ${p.xy(-1.5, 11.23)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(-1.5, 13)}) (end ${p.xy(-1.5, 11.23)}) (width 0.25) (layer F.Cu) (net 6))
          (via (at ${p.xy(0.25, 10.5)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 6))
          (segment (start ${p.xy(2.96, 10.5)}) (end ${p.xy(3, 10.54)}) (width 0.25) (layer B.Cu) (net 6))
          (segment (start ${p.xy(0.25, 10.5)}) (end ${p.xy(2.96, 10.5)}) (width 0.25) (layer B.Cu) (net 6))
          (segment (start ${p.xy(-1.048002, 13)}) (end ${p.xy(-1.5, 13)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(0.25, 11.701998)}) (end ${p.xy(-1.048002, 13)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(0.25, 10.5)}) (end ${p.xy(0.25, 11.701998)}) (width 0.25) (layer F.Cu) (net 6))
          (segment (start ${p.xy(-0.7125, 11.2125)}) (end ${p.xy(-0.75, 11.25)}) (width 0.25) (layer F.Cu) (net 7) (tstamp 60EF20B2))
          (via (at ${p.xy(-0.7125, 11.2125)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 7))
          (segment (start ${p.xy(0, 13.2)}) (end ${p.xy(0, 14.25)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(-0.7125, 11.2125)}) (end ${p.xy(0.55, 12.475)}) (width 0.25) (layer B.Cu) (net 7))
          (via (at ${p.xy(0.55, 12.475)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 7))
          (segment (start ${p.xy(0, 13.025)}) (end ${p.xy(0.55, 12.475)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(0, 14.25)}) (end ${p.xy(0, 13.025)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(0.55, 12.475)}) (end ${p.xy(0.75, 12.275)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(4.625, 12.46)}) (end ${p.xy(3, 12.46)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(3, 12.46)}) (end ${p.xy(3, 12.46)}) (width 0.25) (layer F.Cu) (net 7) (tstamp 60F0556D))
          (via (at ${p.xy(3, 12.46)}) (size 0.8) (drill 0.4) (layers F.Cu B.Cu) (net 7))
          (segment (start ${p.xy(0.75, 8.29641)}) (end ${p.xy(0.75, 7.235)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(1.04999, 8.5964)}) (end ${p.xy(0.75, 8.29641)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(1.04999, 11.97501)}) (end ${p.xy(1.04999, 8.5964)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(0.55, 12.475)}) (end ${p.xy(1.04999, 11.97501)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(0.565, 12.46)}) (end ${p.xy(0.55, 12.475)}) (width 0.25) (layer B.Cu) (net 7))
          (segment (start ${p.xy(3, 12.46)}) (end ${p.xy(0.565, 12.46)}) (width 0.25) (layer B.Cu) (net 7))
          (segment (start ${p.xy(-0.7125, 11.2125)}) (end ${p.xy(-0.7125, 10.05532)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(-0.25, 9.59282)}) (end ${p.xy(-0.25, 9.41)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(-0.7125, 10.05532)}) (end ${p.xy(-0.25, 9.59282)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(-0.25, 9.41)}) (end ${p.xy(-0.25, 7.235)}) (width 0.25) (layer F.Cu) (net 7))
          (segment (start ${p.xy(-1.5, 15.75)}) (end ${p.xy(-1.5, 17.6)}) (width 0.25) (layer F.Cu) (net 8))
          (segment (start ${p.xy(0, 15.75)}) (end ${p.xy(0, 17.6)}) (width 0.25) (layer F.Cu) (net 9))



          (segment (start ${p.xy(6.825, 10.74)}) (end ${p.xy(5.875, 10.74)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(5.875, 10.74)}) (end ${p.xy(5.72, 10.895)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(5.72, 10.895)}) (end ${p.xy(5.72, 14.75)}) (width 0.25) (layer F.Cu) (net 1))
          (segment (start ${p.xy(5.72, 10.895)}) (end ${p.xy(5.72, 9.85)}) (width 0.25) (layer F.Cu) (net 1))
          `
          const ESD = `
          (module SR05 (layer F.Cu) (tedit 5CF31DEF)
          ${'' /* footprint reference */}
          (at ${p.xy(5.725, 11.5)} ${p.rot-90})
          (fp_text reference "SRO5" (at 0 0 ${p.rot}) (layer F.SilkS) (effects (font (size 0.3 0.3) (thickness 0.05))))
          (pad 3 smd rect (at 0.96 1.1 ${p.rot+90}) (size 1 1.4) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
            ${p.net.DP.str} (clearance 0.1))
          (pad 4 smd rect (at 0.96 -1.1 ${p.rot+90}) (size 1 1.4) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
            ${p.net.VCC.str} (clearance 0.1))
          (pad 2 smd rect (at -0.96 1.1 ${p.rot+90}) (size 1 1.4) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
            ${p.net.DN.str} (clearance 0.1))
          (pad 1 smd rect (at -0.76 -1.1 ${p.rot+90}) (size 1.2 1.4) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask)
            ${p.net.GND.str} (clearance 0.1))
          )
          `
    return `
      ${standard}
      ${components('5.1kΩ', -3, 15, 90, p.net.CC2.str, p.net.GND.str)}
      ${components('22Ω', -1.5, 15, 90, p.net.DN.str, p.net.P3.str)}
      ${components('22Ω', 0, 15, 90, p.net.DP.str, p.net.P4.str)}
      ${components('5.1kΩ', 1.5, 15, 90, p.net.CC1.str, p.net.GND.str)}
      ${components('500mA', 3, 15, 90, p.net.VBUS.str, p.net.VCC.str)}
      ${GND_plane}
      ${ESD}
      ${traces}
    `
  }
}