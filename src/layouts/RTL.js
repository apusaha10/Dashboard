import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
//beautiful scroolbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

//material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
//core comonents
import Navbar from '../components/Navbars/Navbar.js';
import Footer from '../components/Footer/Footer.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import FixedPlugin from '../components/FixedPlugin/FixedPlugin.js';

import routes from '../routes.js';
import styles from '../assets/rtlStyle.js';

import bgImage from '../assets/img/sidebar-2.jpg';
import logo from '../assets/img/reactlogo.png';

let ps;

const switchRoutes = (
	<Switch>
		{routes.map((prop, key) => {
			if(prop.layout === "/rtl") {
				return (
					<Route
						path={prop.layout + prop.path}
						component={prop.component}
						key={key}/>
					);
			}
			return null;
			})}
		<Redirect from="/rtl" to="/rtl/rtl-page" />
	</Switch>
	);

const useStyles = makeStyles(styles);


export default function RTL({...rest}) {
	//styles
	const classes = useStyles();
	//reference to initialize Perfectscrollbar on widows devices
	const mainPanel = React.createRef();
	//state and functions

	const [image, setImage] = React.useState(bgImage);
	const [color, setColor] = React.useState("blue");
	const [FixedClasses, setFixedClasses]= React.useState("dropdown show");
	const [mobileOpen, setMobileOpen]= React.useState(false);
	const handleImageClick = image => {
		setImage(image);
	};
	const handleColorClick = color => {
		setColor(color);
	};

	const handleFixedClick = () => {
		if(FixedClasses === "dropdown") {
			setFixedClasses("dropdown show");
		}else {
			setFixedClasses("dropdown");
		}
	};
	const handleDrawerToogle = () => {
		setMobileOpen(!mobileOpen);
	};
	const getRoute = () => {
		return window.location.pathname !== "/admin/maps";
	};

	const resizeFunction = () => {
		if(window.innerWidth >= 960) {
			setMobileOpen(false);
		}
	};
	//initializae and destroys the Perfect scrrollbar plugin
	React.useEffect(() => {
		if (navigator.platform.indexOf("Win") > -1) {
			ps= new PerfectScrollbar(mainPanel.current, {
				suppressScrollX: true,
				suppressScrollY: false
			});
			document.body.style.overflow = "hidden";
		}
		window.addEventListener("resize", resizeFunction);
		//specify how to clean up after this effect : 
	   return function cleanup(){
	   	if (navigator.platform.indexOf("win") > -1) {
	   		ps.destroy();
	   	}
	   	window.removeEventListener("resize", resizeFunction);
	   };
	}, [mainPanel]);
	return (
		<div className= {classes.wrapper}>
			<Sidebar 
				routes={routes}
				logoText={"Gcr"}
				logo={logo}
				image={image}
				handleDrawerToogle={handleDrawerToogle}
				open={mobileOpen}
				rtlActive
				{...rest}/>
				<div className= {classes.mainPanel} ref={mainPanel}>
					<Navbar
						routes={routes}
						handleDrawerToogle={handleDrawerToogle}
						rtlActive
						{...rest}
					/>
					{/* /*On the /maps route we want the map to be full screen */}

					{getRoute() ? (
						<div className={classes.content}>
							<div className={classes.container}>{switchRoutes}</div>
						</div>
						) : (
						<div className={classes.map}>{switchRoutes}</div>
						)}
						{getRoute() ? <Footer /> : null}
						<FixedPlugin
							handleImageClick={handleImageClick}
							handleColorClick={handleColorClick}
							bgColor={color}
							bgImage={image}
							handleFixedClick={handleFixedClick}
							FixedClasses={FixedClasses}
							rtlActive
						/>
				</div>

			
		</div>
	);
}