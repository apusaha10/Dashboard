import React from 'react'
//@material-ui/core componets
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
//core components

import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js'
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';

import styles from '../../assets/iconsStyle.js';

const useStyles = makeStyles(styles);

export default function Icons() {
	const classes = useStyles();
	return (
		<GridContainer>
			<GridItem xs={12} sm={12}>
				<Card plain>
					<CardHeader plain color="primary">
						<h4 className={classes.cardTitleWhite}>Materaial design icons</h4>
						<p className={classes.CardCategoryWhite}>
							Made by {" "}
							<a href="https://github.com/"
								>
									Google
								</a>
						</p>
					</CardHeader>
					<CardBody>
						<Hidden only={["sm", "xs"]}>
							<iframe
								className={classes.iframe}
								src="https://material.io/icons/"
								title="Icons iframes">
									<p>Your browser does not support iframes</p>
								</iframe>
						</Hidden>
						<Hidden only={["lg", "md"]}>
							<GridItem xs={12} sm={12} md={6}>
								<h5>
									The icons are visible on Desktop mode inside an iframe. Since
                                     the iframe is not working on Mobile and Tablets please visit
                                     the icons on their original page on Google. Check the

								</h5>
							</GridItem>
						</Hidden>
					</CardBody>

				</Card>
			</GridItem>
		</GridContainer>
	);
}