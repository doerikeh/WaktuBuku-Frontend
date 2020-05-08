import React, { Component } from 'react';
import Viewuser from "./Viewuser";
import Terbarulist from './Terbarulist';
import Informasi from './Informasi';
import Categories from './Categories';
import Promosi from './Promosi';

export class Home extends Component {
    render() {
        return (
            <div>
                <Viewuser />
                <Terbarulist />
                <Informasi />
                <Categories />
                <Promosi />
            </div>
        )
    }
}

export default Home;
