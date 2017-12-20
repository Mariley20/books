import React, {Component} from 'react';
// import Utils from './Utils.js';
import { Redirect, NavLink } from "react-router-dom";
import {searchISBN} from './actions';
// import { NavLink, Redirect } from './C:/Users/Maryory/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-router-dom';
import Details from './Details'
// import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-book"></span></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
            </div>
            </nav>
    )
}

const Search = () => {
    const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    searchISBN(this.isbn.value);
     this.isbn.value = "";
  }
    return (
        <div class="input-group">
        <form onSubmit = {onSubmit}>
            <span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
            <input id="email" type="text" class="search form-control" ref={(e) => this.isbn = e} name="email" placeholder="Email"/>
            <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    );
}

const Results = () => {
    return(
        <div>
            
        </div>
    );
}

const Book = (selected) => {
    return (
        <div>
            <Navbar/>
            <Search/>
            <button>Detalles
            <Redirect to="/details" />

            </button>
        </div>
    );
}
export default Book;