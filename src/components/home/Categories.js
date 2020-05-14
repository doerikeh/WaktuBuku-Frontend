import React, { Component } from 'react';

class Categories extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "loading"
        };
    }

    componentDidMount(){
        fetch("http://127.0.0.1:8000/api/story/categories//")
            .then(response => {
                if (response.status > 400 ){
                    return this.setState(() => {
                        return { placeholder: "something wrong"};
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render(){
    return (
        <div>
            <h1 className="ml-12 mt-8"><p className="font-bold text-3xl font-sans">Top Categories :</p></h1>

            <div className="flex">
                {this.state.data.map(categories => {
                    return(
                        <div key={categories.id} className="max-w-sm rounded overflow-hidden shadow-lg ml-12 mt-16">
                            <div className="relative">
                            <div className="static">
                                <img className="w-full" src={categories.image_categories} alt="Sunset in the mountains"/>
                            </div>
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{categories.title}</div>
                                
                            </div>
                        </div>
                    );
                 })}
                
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                    <div className="static">
                        <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Romance</div>
                        
                    </div>
                    
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                        <div className="static">
                            <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Adventure</div>
                        
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                        <div className="static">
                            <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">comedy</div>
                        
                    </div>
                </div>
                </div>
                <div className="flex">

                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-12 mt-16">
                    <div className="relative">
                    <div className="static">
                        <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Fantasy</div>
                        
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                    <div className="static">
                        <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                    </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Sains</div>
                        
                    </div>
                    
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                        <div className="static">
                            <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Life</div>
                        
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg ml-16 mt-16">
                    <div className="relative">
                        <div className="static">
                            <img className="w-full" src={require("../../assets/image/home/holmes.jpg")} alt="Sunset in the mountains"/>
                        </div>
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Action</div>
                        
                    </div>
                </div>
                </div>
        </div>
    );
    }
}

export default Categories;
