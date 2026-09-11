/** A small grid-based monogram; the containing link supplies its accessible name. */
export function PixelLogo() {
 const glyphs = ['10001','01010','00100','01010','10001']
 const z = ['11111','00010','00100','01000','11111']
 return <svg className="pixel-logo" viewBox="0 0 60 28" fill="currentColor" aria-hidden="true" shapeRendering="crispEdges">
  {glyphs.flatMap((row,y)=>[...row].map((pixel,x)=>pixel==='1'?<rect key={'x'+x+y} x={x*4} y={y*4+4} width="4" height="4"/>:null))}
  {z.flatMap((row,y)=>[...row].map((pixel,x)=>pixel==='1'?<rect key={'z'+x+y} x={x*4+28} y={y*4+4} width="4" height="4"/>:null))}
  <rect x="54" y="20" width="4" height="4" fill="#9dbbff"/>
 </svg>
}
