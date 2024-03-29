import type { QwikIntrinsicElements } from '@builder.io/qwik';
// changed into an Gmail
export function PhFacebookLogoLight(props: QwikIntrinsicElements['svg'], key: string) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 512 512" {...props} key={key}>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {/* Replace the 'd' attribute value with the Gmail logo SVG path */}
        <path style={{ display: 'inline', fillRule: 'evenodd', clipRule: 'evenodd' }} d="M511.5,446.753V65.247H0.5v381.506H511.5L511.5,446.753 L511.5,446.753z M438.245,368.552v74.224H79.53v-70.247h0.615l1.816-0.605l134.664-108.435l40.74,34.519l36.176-31.78 L438.245,368.552L438.245,368.552L438.245,368.552z M438.245,355.428l-137.114-95.917l137.114-118.819V355.428L438.245,355.428 L438.245,355.428z M415.453,69.215L396.898,86.93l-8.811,8.569l-8.205,8.532l-8.514,7.944l-7.898,7.945l-7.6,7.33l-7.004,7.33 l-7.294,6.725l-6.688,6.725l-12.462,12.519l-11.867,11.298l-5.457,5.197l-4.871,5.188l-5.16,4.285l-4.574,4.266l-8.195,7.954 l-3.959,3.354l-3.344,3.371l-3.344,2.72l-2.748,3.074l-5.16,4.284l-2.123,1.509l-1.527,1.845l-1.816,0.912l-1.221,1.229 l-1.518,1.211L101.102,68.609L415.453,69.215L415.453,69.215L415.453,69.215z M208.727,256.764L79.53,360.001l0.298-212.893 L208.727,256.764L208.727,256.764L208.727,256.764z" />
      </g>
    </svg>
  );
}

export default PhFacebookLogoLight;

