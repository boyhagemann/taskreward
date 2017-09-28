import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import { spacing, fontSize, color } from 'styled-system'

const Path = styled.path`
  fill: ${ props => color(props).color };
`

const icons = [
  {
    name: 'home',
    path: "M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z",
    size: 32
  },
  {
    name: 'profile',
    path: "M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150    C299.996,67.156,232.835,0,149.996,0z M150.453,220.763v-0.002h-0.916H85.465c0-46.856,41.152-46.845,50.284-59.097l1.045-5.587    c-12.83-6.502-21.887-22.178-21.887-40.512c0-24.154,15.712-43.738,35.089-43.738c19.377,0,35.089,19.584,35.089,43.738    c0,18.178-8.896,33.756-21.555,40.361l1.19,6.349c10.019,11.658,49.802,12.418,49.802,58.488H150.453z",
    size: 300
  },
  {
    name: 'cogwheel',
    path: "M440.813,280.5c0-7.65,2.55-15.3,2.55-25.5s0-17.85-2.55-25.5l53.55-43.35c5.1-5.1,5.1-10.2,2.55-15.3l-51-89.25    c-2.55-2.55-7.649-5.1-15.3-2.55l-63.75,25.5c-12.75-10.2-28.05-17.85-43.35-25.5l-10.2-66.3C315.863,5.1,308.212,0,303.113,0    h-102c-5.101,0-12.75,5.1-12.75,10.2l-10.2,68.85c-15.3,5.1-28.05,15.3-43.35,25.5l-61.2-25.5c-7.65-2.55-12.75,0-17.851,5.1    l-51,89.25c-2.55,2.55,0,10.2,5.1,15.3l53.55,40.8c0,7.65-2.55,15.3-2.55,25.5s0,17.85,2.55,25.5l-53.55,43.35    c-5.1,5.101-5.1,10.2-2.55,15.301l51,89.25c2.55,2.55,7.649,5.1,15.3,2.55l63.75-25.5c12.75,10.2,28.05,17.85,43.35,25.5    l10.2,66.3c0,5.1,5.1,10.2,12.75,10.2h102c5.101,0,12.75-5.101,12.75-10.2l10.2-66.3c15.3-7.65,30.6-15.3,43.35-25.5l63.75,25.5    c5.101,2.55,12.75,0,15.301-5.101l51-89.25c2.55-5.1,2.55-12.75-2.551-15.3L440.813,280.5z M252.113,344.25    c-48.45,0-89.25-40.8-89.25-89.25s40.8-89.25,89.25-89.25s89.25,40.8,89.25,89.25S300.563,344.25,252.113,344.25z",
    size: 507
  },
  {
    name: 'money',
    path: props => <g>
      <g>
        <Path { ...props } d="M284.4,242.4h-11.2c-11.2,0-20.4,9.2-20.4,20.4v4.8c0,11.2,9.2,20.4,20.4,20.4h11.2c11.2,0,20.4-9.2,20.4-20.4v-4.8    C304.8,251.6,295.6,242.4,284.4,242.4z M292,267.6c0,4-3.6,7.6-7.6,7.6h-11.2c-4,0-7.6-3.6-7.6-7.6v-4.8c0-4,3.6-7.6,7.6-7.6h11.2    c4,0,7.6,3.6,7.6,7.6V267.6z"/>
      </g>
    	<g>
    		<Path { ...props } d="M225.2,242.4H214c-11.2,0-20.4,9.2-20.4,20.4v4.8c0,11.2,8.8,20.4,20.4,20.4h11.2c11.2,0,20.4-9.2,20.4-20.4v-4.8    C245.6,251.6,236.4,242.4,225.2,242.4z M232.8,267.6c0,4-3.6,7.6-7.6,7.6H214c-4,0-7.6-3.6-7.6-7.6v-4.8c0-4,3.6-7.6,7.6-7.6h11.2    c4,0,7.6,3.6,7.6,7.6V267.6z"/>
    	</g>
    	<g>
    		<Path { ...props } d="M357.6,71.2H70c-13.6,0-24.8,11.2-24.8,24.8v16H24.8C11.2,112,0,123.2,0,136.8v16.8v50v82.8c0,13.6,11.2,24.8,24.8,24.8    h287.6c13.6,0,24.8-11.2,24.8-24.8v-16h20.4c13.6,0,24.8-11.2,24.8-24.8V96C382.4,82,371.6,71.2,357.6,71.2z M12.8,136.8    c0-6.8,5.6-12,12-12h26.8H312c6.8,0,12,5.6,12,12v16.8H12.8V136.8z M324.4,264.4v22.4c0,6.8-5.6,12-12,12H24.8    c-6.8,0-12-5.6-12-12v-83.2h311.6V264.4z M324.4,190.8H12.8v-24.4h311.6V190.8z M369.6,246c0,6.8-5.6,12-12,12h-20.4v-54.4v-50    v-16.8c0-13.6-11.2-24.8-24.8-24.8H58V96c0-6.8,5.6-12,12-12h287.6c6.8,0,12,5.6,12,12V246z"/>
    	</g>
    </g>,
    size: 382
  },
  {
    name: 'switch',
    path: "M102,204L0,306l102,102v-76.5h178.5v-51H102V204z M459,153L357,51v76.5H178.5v51H357V255L459,153z",
    size: 459
  },
  {
    name: 'power',
    path: props => <g xmlns="http://www.w3.org/2000/svg">
		<Path { ...props } d="M237.545,255.816c9.899,0,18.468-3.609,25.696-10.848c7.23-7.229,10.854-15.799,10.854-25.694V36.547    c0-9.9-3.62-18.464-10.854-25.693C256.014,3.617,247.444,0,237.545,0c-9.9,0-18.464,3.621-25.697,10.854    c-7.233,7.229-10.85,15.797-10.85,25.693v182.728c0,9.895,3.617,18.464,10.85,25.694    C219.081,252.207,227.648,255.816,237.545,255.816z"/>
		<Path { ...props } d="M433.836,157.887c-15.325-30.642-36.878-56.339-64.666-77.084c-7.994-6.09-17.035-8.47-27.123-7.139    c-10.089,1.333-18.083,6.091-23.983,14.273c-6.091,7.993-8.418,16.986-6.994,26.979c1.423,9.998,6.139,18.037,14.133,24.128    c18.645,14.084,33.072,31.312,43.25,51.678c10.184,20.364,15.27,42.065,15.27,65.091c0,19.801-3.854,38.688-11.561,56.678    c-7.706,17.987-18.13,33.544-31.265,46.679c-13.135,13.131-28.688,23.551-46.678,31.261c-17.987,7.71-36.878,11.57-56.673,11.57    c-19.792,0-38.684-3.86-56.671-11.57c-17.989-7.71-33.547-18.13-46.682-31.261c-13.129-13.135-23.551-28.691-31.261-46.679    c-7.708-17.99-11.563-36.877-11.563-56.678c0-23.026,5.092-44.724,15.274-65.091c10.183-20.364,24.601-37.591,43.253-51.678    c7.994-6.095,12.703-14.133,14.133-24.128c1.427-9.989-0.903-18.986-6.995-26.979c-5.901-8.182-13.844-12.941-23.839-14.273    c-9.994-1.332-19.085,1.049-27.268,7.139c-27.792,20.745-49.344,46.442-64.669,77.084c-15.324,30.646-22.983,63.288-22.983,97.927    c0,29.697,5.806,58.054,17.415,85.082c11.613,27.028,27.218,50.34,46.826,69.948c19.602,19.603,42.919,35.215,69.949,46.815    c27.028,11.615,55.388,17.426,85.08,17.426c29.693,0,58.052-5.811,85.081-17.426c27.031-11.604,50.347-27.213,69.952-46.815    c19.602-19.602,35.207-42.92,46.818-69.948s17.412-55.392,17.412-85.082C456.809,221.174,449.16,188.532,433.836,157.887z"/>
	</g>,
    size: 512
  },
  {
    name: 'back',
    path: "M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12    C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084    c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864    l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z",
    size: 492
  },
  // {
  //   name: 'crowd',
  //   path: "M149.997,0C67.157,0,0.001,67.158,0.001,149.995s67.156,150.003,149.995,150.003s150-67.163,150-150.003    S232.836,0,149.997,0z M40.732,206.496c0-46.858,41.152-46.848,50.284-59.1l1.045-5.587c-12.83-6.505-21.887-22.178-21.887-40.514    c0-24.154,15.712-43.738,35.089-43.738c15.258,0,28.205,12.164,33.037,29.118c-19.41,6.168-33.768,27.214-33.768,52.232    c0,17.224,6.79,33.06,17.937,43.121c-1.79,0.918-3.781,1.854-5.493,2.656c-8.989,4.217-21.449,10.079-30.438,21.812H40.732z     M150.453,244.105v-0.002h-0.916H85.466c0-46.856,41.152-46.843,50.284-59.095l1.045-5.587    c-12.83-6.505-21.887-22.178-21.887-40.514c0-24.154,15.712-43.738,35.089-43.738c19.377,0,35.089,19.584,35.089,43.738    c0,18.178-8.896,33.758-21.555,40.361l1.19,6.352c10.019,11.658,49.802,12.418,49.802,58.485H150.453z M213.452,206.498v-0.002h0    c-8.992-11.731-21.452-17.592-30.441-21.809c-1.769-0.83-3.73-1.751-5.483-2.651c11.137-10.074,17.935-25.944,17.935-43.129    c0-25.015-14.353-46.057-33.758-52.227c4.829-16.957,17.776-29.121,33.037-29.121c19.379,0,35.089,19.584,35.089,43.738    c0,18.178-8.896,33.756-21.555,40.361l1.19,6.352c10.019,11.656,49.802,12.415,49.802,58.488H213.452z",
  //   size: 300
  // },
  // {
  //   name: 'crowd',
  //   path: "M204,267.75h-76.5v-76.5h-51v76.5H0v51h76.5v76.5h51v-76.5H204V267.75z M459,293.25c43.35,0,76.5-33.15,76.5-76.5    s-33.15-76.5-76.5-76.5c-7.65,0-15.3,2.55-22.95,2.55c15.3,22.95,22.95,45.9,22.95,73.95s-7.65,51-22.95,73.95    C443.7,290.7,451.35,293.25,459,293.25z M331.5,293.25c43.35,0,76.5-33.15,76.5-76.5s-33.15-76.5-76.5-76.5    c-43.35,0-76.5,33.15-76.5,76.5S288.15,293.25,331.5,293.25z M499.8,349.35c20.4,17.851,35.7,43.351,35.7,71.4v51H612v-51    C612,382.5,550.8,357,499.8,349.35z M331.5,344.25c-51,0-153,25.5-153,76.5v51h306v-51C484.5,369.75,382.5,344.25,331.5,344.25z",
  //   size: 612
  // },
  {
    name: 'crowd',
    path: "M2.644,10.29c0-2.144,1.746-3.889,3.891-3.889s3.89,1.745,3.89,3.889c0,2.145-1.745,3.89-3.89,3.89   S2.644,12.435,2.644,10.29z M20.27,21.382c3.505,0,6.361-2.855,6.361-6.363s-2.854-6.361-6.361-6.36   c-3.507,0-6.361,2.853-6.361,6.36S16.764,21.382,20.27,21.382z M34.005,14.181c2.146,0,3.892-1.745,3.892-3.89   c0-2.144-1.746-3.89-3.892-3.89s-3.89,1.746-3.89,3.89C30.117,12.435,31.861,14.181,34.005,14.181z M13.017,18.764l0.052-0.063   l-0.012-0.081c-0.333-2.178-1.471-3.926-3.203-4.926L9.73,13.623l-0.098,0.103c-0.817,0.857-1.918,1.33-3.097,1.33   c-1.179,0-2.279-0.473-3.097-1.33l-0.099-0.104l-0.124,0.071c-1.731,1-2.869,2.748-3.203,4.926L0,18.7l0.052,0.063   c1.729,2.073,4.031,3.214,6.481,3.214C8.983,21.978,11.288,20.836,13.017,18.764z M40.527,18.621   c-0.332-2.178-1.471-3.926-3.202-4.926l-0.124-0.071l-0.098,0.103c-0.818,0.857-1.918,1.33-3.099,1.33   c-1.179,0-2.278-0.472-3.097-1.33l-0.1-0.103l-0.123,0.071c-1.731,1-2.869,2.748-3.203,4.926l-0.012,0.081l0.051,0.063   c1.729,2.073,4.031,3.215,6.481,3.215c2.451,0,4.752-1.144,6.481-3.215l0.052-0.063L40.527,18.621z M25.697,20.584l-0.201-0.116   l-0.161,0.168c-1.336,1.403-3.136,2.175-5.064,2.175c-1.928,0-3.728-0.771-5.064-2.175l-0.161-0.168l-0.202,0.116   c-2.832,1.636-4.692,4.494-5.237,8.056l-0.02,0.133l0.085,0.103c2.827,3.393,6.591,5.26,10.599,5.26   c4.008,0,7.772-1.867,10.599-5.26l0.085-0.103l-0.02-0.133C30.391,25.079,28.529,22.22,25.697,20.584z",
    size: 40.536
  },
  {
    name: 'eye',
    path: props =>
  	<g>
  		<path { ...props } d="M508.177,245.995C503.607,240.897,393.682,121,256,121S8.394,240.897,3.823,245.995c-5.098,5.698-5.098,14.312,0,20.01    C8.394,271.103,118.32,391,256,391s247.606-119.897,252.177-124.995C513.274,260.307,513.274,251.693,508.177,245.995z M256,361    c-57.891,0-105-47.109-105-105s47.109-105,105-105s105,47.109,105,105S313.891,361,256,361z"/>
  		<path { ...props } d="M271,226c0-15.09,7.491-28.365,18.887-36.53C279.661,184.235,268.255,181,256,181c-41.353,0-75,33.647-75,75    c0,41.353,33.647,75,75,75c37.024,0,67.668-27.034,73.722-62.358C299.516,278.367,271,255.522,271,226z"/>
  	</g>,
    size: 512
  }
]

const Svg = props => {

  const { name, color, size } = props

  const icon = icons.find(icon => icon.name === name)
  const dimension = fontSize({ fontSize: size}).fontSize

  return <svg viewBox={`0 0 ${icon.size} ${icon.size}`} width={dimension} height={dimension}>
    { typeof(icon.path) === 'string'
      ? <Path alignmentBaseline="middle" d={icon.path} color={color} />
    : icon.path({ color })
    }
   </svg>
}

export default ({ name, color, size, ...props }) => (
  <Box { ...props }>
    <Svg name={name} color={color} size={size} />
  </Box>
)
