module.exports = {
    nets: {
    },
    params: {
      class: 'LED',
	    side: 'F'
    },
    body: p => `
(module "SK6812-MINI-E" (layer F.Cu) (tedit 5ECEB660)
  (fp_text reference "REF**" (at 0 2.1 unlocked) (layer F.SilkS)
    (effects (font (size 0.7 0.7) (thickness 0.15)))
  )
  (fp_text value "SK6812-MINI-E" (at 0 -0.5 unlocked) (layer F.SilkS) hide
    (effects (font (size 1 1) (thickness 0.15)))
  )
  (fp_poly (pts (xy 2.8 -1.4) (xy 2.2 -1.4) (xy 2.2 -2)) (layer F.SilkS) (width 0.1))
  (fp_line (start 1.6 -1.4) (end 1.6 1.4) (layer Cmts.User) (width 0.12))
  (fp_line (start 1.6 1.4) (end -1.6 1.4) (layer Cmts.User) (width 0.12))
  (fp_line (start -1.6 1.4) (end -1.6 -1.4) (layer Cmts.User) (width 0.12))
  (fp_line (start -1.6 -1.4) (end 1.6 -1.4) (layer Cmts.User) (width 0.12))
  (fp_line (start 1.7 -1.5) (end 1.7 1.5) (layer Edge.Cuts) (width 0.12))
  (fp_line (start 1.7 1.5) (end -1.7 1.5) (layer Edge.Cuts) (width 0.12))
  (fp_line (start -1.7 1.5) (end -1.7 -1.5) (layer Edge.Cuts) (width 0.12))
  (fp_line (start -1.7 -1.5) (end 1.7 -1.5) (layer Edge.Cuts) (width 0.12))
  (pad "1" smd rect (at -2.55 0.75) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.local_net('1').str})
  (pad "2" smd rect (at -2.55 -0.75) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.local_net('2').str})
  (pad "4" smd rect (at 2.55 0.75) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") ${p.local_net('4').str})
  (pad "3" smd roundrect (at 2.55 -0.75) (size 1.7 0.82) (layers "F.Cu" "F.Paste" "F.Mask") (roundrect_rratio 0.25) ${p.local_net('3').str})
  `
}