import React from 'react';

import './App.scss';


import SearchField from "./components/search-field/search-field.component";

import DataPreview from "./components/data-preview/data-preview.component";

import AdditionalData from "./components/additional-data/additional-data.component";


import Header from "./components/header/header.component";

import {Data1} from "./data";

class App extends React.Component{
  constructor(){
    super();
    this.state ={
        data: Data1,
        copedData: Data1,
        sortToogle: {boolean: true, currentItem: ""},
        clickedItem: {address: ""},
        previousItem: ""
    };
  }

 



  
  render(){
        

        
        
        return(
            <div className="data">
                


              <Header sortToogle={this.state.sortToogle} sortElements={e =>{
                e.preventDefault();
               
                
                const element = e.target.getAttribute("element");
                
            
                this.setState({data: this.state.data.sort((a,b)=> {
                    
                    if(this.state.sortToogle.boolean){
                        if (a[element] > b[element]){
                            return 1;
                        }
                        if (a[element] < b[element]){
                            return -1;
                        }
                        return 0;
                    }
                    else{
                        if (a[element] < b[element]){
                            return 1;
                        }
                        if (a[element] > b[element]){
                            return -1;
                        }
                        return 0;
                    }
                    
                })});
                
                
                this.setState({sortToogle: {boolean: !this.state.sortToogle.boolean,currentItem:e.target.getAttribute("element")}});
              
              
              }} />
                
                
                <SearchField handleChange={e => {
                  console.log();
                  console.log();
                  this.setState({data:this.state.copedData.filter(person => person[e.target.getAttribute("element")].toString().toLowerCase().includes(e.target.value.toLowerCase()))})
                  console.log();
                 

                }} />
                
                  <DataPreview key={this.state.data.id} persons={this.state.data}  handleClick = {e => {
                  
                    e.preventDefault();

                  
                    const foundItem = this.state.data.find(item => item.id==e.target.parentNode.getAttribute("id"));
                    
                    e.target.parentNode.setAttribute("style","background-color:#10e0e0")
                    
                   

                    if(e.target.parentNode!==this.state.previousItem){
                      this.setState({clickedItem: foundItem})
                      this.setState({previousItem: e.target.parentNode});
                    }else{
                       this.setState({previousItem: ""});
                       this.setState({clickedItem: {address: ""}});

                    }
                    
                    if(this.state.previousItem){this.state.previousItem.setAttribute("style","background-color:none")}
                    
                    
                   
                 
                }} />



               <AdditionalData clickedItem={this.state.clickedItem} />
                
               
            
            </div>
        )
        
    }
}

export default App;
