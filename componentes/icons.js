import React from 'react';

const Icons = (props) =>{
	switch (props.name){
	case 'polygon':
		return <Polygon className={props.className} />;
	case 'panelSetting':
		return <PanelSetting className={props.className} />;
	case 'panelUser':
		return <PanelUser className={props.className} />;
	case 'panelGraphic':
		return <PanelGraphic className={props.className} />;
	case 'pen':
		return <Pen className={props.className} />;
	case 'triangle':
		return <Triangle className={props.className} onClick={props.onClick} style={props.style} />;
	default:
		return <div>{props.name}</div >;
	}
};



export default Icons;

const Styles=`
cursor:pointer;
width:25px;
height:25px;
stroke:#767676;
fill:#767676;
transition:all 0.2s ease;
`;

const Polygon = ({
	style = {},
	width = '30',
	height = '26',
	viewBox = '0 0 30 26',
	className = '',
}) => (
	<svg
		style={style}
		width={width}
		height={height}
		viewBox={viewBox}
		className={className}
	> 
    <title>Polygon</title>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="polling" transform="translate(-106.000000, -522.000000)" fill="#17AD8D" stroke="#17AD8D">
            <g id="option-" transform="translate(107.000000, 521.000000)">
                <polygon id="Polygon" transform="translate(14.000000, 14.000000) rotate(-270.000000) translate(-14.000000, -14.000000) " points="14 0 26.1243557 7 26.1243557 21 14 28 1.87564435 21 1.87564435 7"></polygon>
            </g>
        </g>
    </g>
		<style jsx>
			{`
			svg{
				${Styles}
			}
			svg:hover{
				stroke:#3BBA90;
				transform:scale(1.1);
			}
			`}
		</style>
	</svg>
);

const PanelSetting = ({
	style = {},
	width = '30',
	height = '25',
	viewBox = '0 0 30 25',
	className = '',
}) => (
	<svg 
		style={style}
		width={width}
		height={height}
		viewBox={viewBox}
		className={className}
	>
		<defs>
			<polygon id="path-1" points="0 0 24 0 24 8.30769231 12 8.30769231 12 24 0 24" />
		</defs>
		<g id="Page-1"  strokeWidth="1" fill="none" fillRule="evenodd">
			<g id="panelSettings" transform="translate(-0.000000, -3.000000)">
				<g id="Group">
					<g id="Clipped">
						<mask id="mask-2" fill="white">
							<use xlinkHref="#path-1" />
						</mask>
						<g id="a" />
						<rect id="Rectangle"  mask="url(#mask-2)" x="3.5" y="3.5" width="19" height="19" rx="2" />
					</g>
				</g>
				<path d="M27.113,19.784 L28.848,21.104 C29.004,21.224 29.045,21.44 28.947,21.616 L27.302,24.384 C27.2017559,24.5593867 26.9878164,24.6343933 26.8,24.56 L24.752,23.76 C24.3233982,24.0786217 23.8563941,24.3420255 23.362,24.544 L23.05,26.664 C23.0189589,26.8612281 22.8465948,27.004936 22.647,27 L19.357,27 C19.1574052,27.004936 18.9850411,26.8612281 18.954,26.664 L18.641,24.544 C18.1450913,24.3451685 17.6776955,24.0815438 17.251,23.76 L15.204,24.56 C15.0161077,24.6287004 14.8058583,24.5549874 14.702,24.384 L13.057,21.616 C12.9571085,21.4446259 12.9994237,21.2257837 13.156,21.104 L14.891,19.784 C14.8550315,19.5241641 14.8356589,19.2623001 14.833,19 C14.833,18.736 14.858,18.472 14.891,18.216 L13.156,16.896 C12.9957058,16.7765242 12.9527982,16.5546186 13.057,16.384 L14.702,13.616 C14.801,13.44 15.014,13.368 15.204,13.44 L17.251,14.24 C17.6796018,13.9213783 18.1466059,13.6579745 18.641,13.456 L18.954,11.336 C18.9850411,11.1387719 19.1574052,10.995064 19.357,11 L22.647,11 C22.852,11 23.025,11.144 23.05,11.336 L23.362,13.456 C23.864,13.656 24.324,13.92 24.752,14.24 L26.8,13.44 C26.981,13.376 27.203,13.44 27.302,13.616 L28.947,16.384 C29.0466721,16.5556133 29.0039203,16.7745024 28.847,16.896 L27.113,18.216 C27.145,18.472 27.17,18.728 27.17,19 C27.17,19.272 27.145,19.528 27.113,19.784 Z M21.002,21.8 C22.589,21.8 23.88,20.544 23.88,19 C23.88,17.456 22.59,16.2 21.002,16.2 C19.415,16.2 18.123,17.456 18.123,19 C18.123,20.544 19.415,21.8 21.002,21.8 Z" id="gear" />
			</g>
		</g>
		<style jsx>
			{`
			svg{
				${Styles}
			}
			svg:hover{
				stroke:#3BBA90;
				transform:scale(1.1);
			}
			svg:hover #gear{
				animation:rotate 3s infinite ;
				animation-fill-mode: forwards;
				stroke:#3BBA90;
				transform-origin: 70% 75%;
			}
			@keyframes rotate{
				from{transform:rotate(0deg);}
				to{transform:rotate(360deg);}
			}
			`}
		</style>
	</svg>
);

const PanelUser = ({
	style = {},
	width = '24',
	height = '23',
	viewBox = '0 0 24 23',
	className = '',
}) => (
	<svg
		style={style}
		width={width}
		height={height}
		viewBox={viewBox}
		className={className}
	> 
		<g id="User" strokeWidth="1"  transform="translate(0.000000, 1.000000)">
			<path d="M23,17.925 C23,13.825 19.73,10.5 15.696,10.5 C11.662,10.5 8.391,13.824 8.391,17.925 C8.391,22.025 23,22.025 23,17.925 Z" id="Path" strokeWidth="1.05" fill="none" />
			<ellipse id="Oval" strokeWidth="1.05" cx="15.696" cy="4.2" rx="4.174" ry="4.2" fill="none" />
			<polygon id="plus"  points="3.522 6.694 3.522 3.15 5.87 3.15 5.87 6.694 9.39 6.694 9.39 9.056 5.87 9.056 5.87 12.6 3.522 12.6 3.522 9.056 0 9.056 0 6.694" />
		</g>
		<style jsx>
			{`
			svg{
				${Styles}
			}
			svg:hover{
				stroke:#3BBA90;
				transform:scale(1.1);
			}
			svg:hover #plus{
				fill:#3BBA90;
				animation:scale 1s infinite ease forwards;
			}
			@keyframes scale{
				0%{transform:scale(0.9)}
				50%{transform:scale(1)}
				100%{transform:scale(0.9)}
			}
			`}
		</style>
	</svg>
);

const PanelGraphic = ({
	style = {},
	width = '26',
	height = '26',
	viewBox = '0 0 26 26',
	className = '',
}) =>(
	<svg 
		style={style}
		width={width}
		height={height}
		viewBox={viewBox}
		className={className}
	>
		<defs>
			<path d="M14.23,0.5 L14.23,11.493 L23.5,11.493 L23.5,21.5 C23.5,22.6045695 22.6045695,23.5 21.5,23.5 L2.5,23.5 C1.3954305,23.5 0.5,22.6045695 0.5,21.5 L0.5,2.5 C0.5,1.3954305 1.3954305,0.5 2.5,0.5 L14.23,0.5 Z" id="path-graphic" />
		</defs>
		<g  strokeWidth="1"  fillRule="evenodd">
			<g>
				<g id="Rectangle" fill="none">
					<mask id="mask-graphic" fill="white">
						<use xlinkHref="#path-graphic" />
					</mask>
					<g id="Mask" />
					<rect  mask="url(#mask-graphic)" x="0.5" y="0.5" width="23" height="23" rx="2" />
				</g>
				<g id="columns" transform="translate(6.000000, 7.000000)"  fillRule="nonzero">
					<polygon className="column" points="0 3 2 3 2 13 0 13" />
					<polygon className="column" points="5 0 7 0 7 13 5 13" />
					<polygon className="column" points="10 6 12 6 12 13 10 13" />
				</g>
				<g id="plus" transform="translate(14.000000, 0.000000)" >
					<polygon className="plus" points="4 0 6 0 6 10 4 10" />
					<polygon className="plus" points="0 4 10 4 10 6 0 6" />
				</g>
			</g>
		</g>
		<style jsx>
			{`
			svg{
				${Styles}
			}
			svg:hover{
				stroke:#3BBA90;
				transform:scale(1.1);
			}
			svg:hover #columns{
				fill:#3BBA90;
			}
			svg:hover .plus{
				fill:#3BBA90;
			}
			svg:hover #plus{
				transform:translate(15px, 0px);
			}
			svg:hover .column{
				animation:move 2s infinite ease;
				animation-fill-mode: forwards;
			}
			svg:hover .column:nth-of-type(1){
				animation-delay: 0s;
			}
			svg:hover .column:nth-of-type(2){
				animation-delay: 0.5s;
			}
			svg:hover .column:nth-of-type(3){
				animation-delay: 1s;
			}
			@keyframes move{
				0%{transform:translateY(0px);}
				25%{transform:translateY(-2px);}
				50%{transform:translateY(0px);}
				75%{transform:translateY(0px);}
				100%{transform:translateY(0px);}
			}
			`}
		</style>
	</svg>
);

const Pen = ({
	style = {},
	width = '24',
	height = '24',
	viewBox = '0 0 24 24',
	className = '',
}) => (
	<svg 
		style={style}
		width={width}
		height={height}
		viewBox={viewBox}
		className={className}
	>
		<g id="Page-1" strokeWidth="1"  fillRule="evenodd">
			<g id="pen">
				<rect id="container" strokeOpacity="0.0110394022" stroke="#FFFFFF" x="0.5" y="0.5" width="23" height="23" fill="none" />
				<rect id="Rectangle" fill="none" transform="translate(11.598076, 10.160254) rotate(-360.000000) translate(-11.598076, -10.160254) " x="9.09807621" y="0.660254038" width="5" height="19" rx="1" />
				<polygon id="Triangle" stroke="none" transform="translate(11.584818, 21.424427) rotate(-180.000000) translate(-11.584818, -21.424427) " points="11.6696367 19.8488535 14.2411589 23 8.92847781 23" />
				<path d="M13.5,4.5 L11.5,4.5" id="Line"  strokeLinecap="square" />
			</g>
		</g>
		<style jsx>
			{`
			svg{
				stroke:#979797;
				fill:#979797;
			}
			svg:hover{
				stroke:#3BBA90;
				fill:#3BBA90;
				transform:scale(1.1);
			}
			`}
		</style>
	</svg>
);

const Triangle = ({
	style = {},
	width = '10',
	height = '10',
	viewBox = '0 0 10 10',
	className= '',
	onClick,
}) => (
	<svg
		style={style}
		width={width}
		height={height}
		viewBox={viewBox}
		className={className}
		onClick={onClick}
	>
		<polygon id="Triangle" transform="translate(5.000000, 5.000000) rotate(-90.000000) translate(-5.000000, -5.000000) " points="5 0 10 10 -1.13686838e-13 10" />
		<style jsx>
			{`
			svg{
				width:10px;
				height:10px;
				fill:#3BBA90;
				cursor:pointer;
				transition:transform 0.3s ease;
				vertical-algin:center;
			}
		
			.left{
				transform: rotate(0deg);
			}
			.left:hover{
				transform:rotate(0deg) translateX(-2px);
			}
			.right{
				transform: rotate(180deg);
			}
			.right:hover{
				transform:rotate(180deg) translateX(-2px);
			}
			.gris{
				fill:#979797;
				cursor:not-allowed;
			}
			.right.gris:hover{
				transform:rotate(180deg) translateX(0);
			}
			`}
		</style>
	</svg>
);


