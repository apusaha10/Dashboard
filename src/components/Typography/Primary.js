import React from 'react';
import PropTypes from 'prop-types';
///material-ui/core cpmpents
import { makeStyles } from '@material-ui/core/styles';
//core components
import styles from '../../assets/typographyStyle.js';

const useStyles = makeStyles(styles);

export default function Primary(props) {
	const classes = useStyles();
	const { children } = props;
	return (
		<div className={classes.defaultFontStyle + " " + classes.primartText}>
			{children}
			
		</div>
			
	);
}

Primary.propTypes = {
	children: PropTypes.node
};