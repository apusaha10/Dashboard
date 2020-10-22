import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import styles from '../../assets/cardAvatarStyle.js';

const useStyles = makeStyles(styles);

export default function CardAvatar(props) {
	const classes = useStyles();
	const { children, className, plain, profile, ...rest} = props;
	const CardAvatarClasses = ClassNames({
		[classes.CardAvatar]: true,
		[classes.cardAvatarProfile]: profile,
		[classes.CardAvatarPlain]: plain,
		[className]: className !== undefined
		
	});

	return (
		<div className={CardAvatarClasses} {...rest}>
			{children}
		</div>
	);
}

CardAvatar.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	profile: PropTypes.bool,
	plain: PropTypes.bool
};