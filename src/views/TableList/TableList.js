import React from 'react';
//@material-ui /core components
import { makeStyles} from '@material-ui/core/styles';
//core componets
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Table from '../../components/Table/Table.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);


export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Nikujo", "Bangladesh", "Tangail", "$36,738"],
                ["Basudev", "Bangladesh", "Tangail", "$23,789"],
                ["Sumon", "Bangladesh", "Tangail", "$56,142"],
                ["Kaiser", "Bangladesh", "Tangail", "$38,735"],
                ["Shakil", "Bangladesh", "Tangail", "$63,542"],
                ["Prokash", "Bangladesh", "Tangail", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Nikunja", "Bangladesh", "Tangail", "$36,738"],
                ["2", "Basudev", "Bangladesh", "Tangail", "$23,789"],
                ["3", "Sumon", "Bangladesh", "Tangail", "$56,142"],
                [
                  "4",
                  "Kaiser",
                  "Bangladesh",
                  "Tangail",
                  "$38,735"
                ],
                [
                  "5",
                  "Shakil",
                  "Bangladesh",
                  "Tangail",
                  "$63,542"
                ],
                ["6", "Prokash", "Bangladesh", "Tangail", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}