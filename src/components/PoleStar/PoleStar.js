import React, {Component, PureComponent} from "react";
import screeningData from '../../mockData/screenings.json';
import DataTable from '../DataTable/DataTable';
import SearchTable from '../SearchTable/SearchTable';


class PoleStar extends Component {
    constructor(props){
        super(props);
  
        this.state = {
            results:screeningData[0].results,
            filtered:screeningData[0].results,
            direction:'ascending'
           
        }
    }
    
    onChangeNameHandler = (e) => {
        const searchString = e.target.value;
        const results = this.state.results.filter(result => {
            if (searchString === "") return this.state.results
            return result.name.toLowerCase().includes(searchString.toLowerCase())
        });

        this.setState({
            searchText: searchString,
            filtered: results
        })
    };

    onChangeCountryseverityHandler = (e) => {
        const searchString = e.target.value;
        const results = this.state.results.filter(result => {
            if (searchString === "") return this.state.results
            return result.country_check_severity.substring(2).includes(searchString)
        })
        this.setState({
            searchText: searchString,
            filtered: results
        })
    };

    sortByNameField = () => {
        let sortedProducts = [...this.state.filtered];
        sortedProducts.sort((a, b)=>{
            if(a.name > b.name) {
              return this.state.direction === 'ascending' ? -1 : 1;
            }
            if(a.name < b.name){
                return this.state.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });

        let dir = this.state.direction === 'ascending' ? 'descending' : 'ascending';
        this.setState({...this.state, direction: dir, filtered:sortedProducts});
    }

    sortByCreatedField = () => {
        let sortedProducts = [...this.state.filtered];
        sortedProducts.sort((a, b)=> {
            if(a.created > b.created){
              return this.state.direction === 'ascending' ? -1 : 1;
            }
            if(a.created < b.created){
                return this.state.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });

        let dir = this.state.direction === 'ascending' ? 'descending' : 'ascending';
        this.setState({...this.state, direction: dir, filtered:sortedProducts});
    }
    sortByModifiedField = () => {
        let sortedProducts = [...this.state.filtered];
        sortedProducts.sort((a, b)=>{
            if(a.modified > b.modified){
              return this.state.direction === 'ascending' ? -1 : 1;
            }
            if(a.modified < b.modified){
                return this.state.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });

        let dir = this.state.direction === 'ascending' ? 'descending' : 'ascending';
        this.setState({...this.state, direction: dir, filtered:sortedProducts});
    }

    render() {

        return (
            <div className="container">
                <h1>Pole Star</h1>
                <div className="mb-4">
                    <SearchTable 
                    onNameChange={this.onChangeNameHandler}
                    onSeverityChange={this.onChangeCountryseverityHandler}
                    />
                </div>
                <DataTable results={this.state.filtered} 
                    sortByNameField={this.sortByNameField}
                    sortByCreatedField={this.sortByCreatedField}
                    sortByModifiedField={this.sortByModifiedField}
                />
            </div>
        );
    }
}

export default PoleStar;