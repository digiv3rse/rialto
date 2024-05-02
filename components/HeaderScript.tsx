import Script from 'next/script'

export default function HeaderScript({ Component, pageProps }) {
	return (
		<>
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.164.1/three.module.min.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/babylonjs/7.4.0/babylon.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.9.17/Tone.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/regl/2.1.0/regl.min.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/aframe/1.4.2/aframe.min.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.17/paper-full.min.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/svg.js/3.2.0/svg.min.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.6/processing.min.js" />
		<Script src="https://unpkg.com/zdog@1/dist/zdog.dist.min.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.3/addons/p5.sound.min.js" />
		<Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.3/p5.min.js" />
      <Component {...pageProps} />
    </>
	)
}