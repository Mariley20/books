import React, {Component} from 'react';
// import Utils from './Utils.js';
import { Redirect, NavLink } from "react-router-dom";
import {searchISBN} from './actions';
// import { NavLink, Redirect } from './C:/Users/Maryory/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
import Details from './Details'
// import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'

/*
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-book"></span>    BookMe</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Regístrate</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Iniciar sesión</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span>Carrito</a></li>
                </ul>
                </div>
            </div>
            </nav>

    )
}*/

const Search = () => {
    const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    searchISBN(this.isbn.value);
     this.isbn.value = "";
  }
    return (
        <div className="input-group">
        <form className="form-search" onSubmit = {onSubmit}>
            <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
            <input id="search" type="text" className="search form-control" ref={(e) => this.isbn = e}  placeholder="Buscar..."/>
            <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    );
}

const Results = ({equalBooks}) => {
let list = '';
    if(equalBooks != undefined){
     list = equalBooks.map((item, index) => {
        return (
            <div className="card col-md-3 col-xs-4 col-sm-3" key={index}>
                <img className="portada" src={item.img} alt="Portada" />
                <div className="container-card">
                <h4><b>{item.title}</b></h4> 
                <p>{item.author}</p> 
                <NavLink to="/details" className="text-right button-sgte">Mas detalles...  </NavLink> 
            </div>
        </div>
        )
    });
    }else {
      list = (<div>Ingresa Isbn</div>)
    }
    return(
        <div className='row'>{list}</div>
    );
}

const Book = ({equalBooks, selected}) => {
    return (
        <div>
            
            <Search/>
            <hr/>
            <Results equalBooks={equalBooks}/>
        </div>
    );
}
export default Book;