import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getCerita} from "../../actions/cerita";
export class UserStoryList extends Component {

    componentDidMount(){
        this.props.getCerita();
    }
    render() {
        return (
            <div>
            {this.props.cerita.map(story =>(
                <div key={story.id}>
                    <div className="border p-5 w-full h-32">
                        <div className="border border-none flex">
                            <img src={story.image_cover} className="h-20 w-24" alt=""/>
                            <div className="mr-32">
                                <h2 className="ml-6 mb-1"><p className="font-bold">{story.judul}</p></h2>
                                <h2 className="ml-6 mb-1"><p className="text-xs">{story.chapter}</p></h2>
                                <h2 className="ml-6 w-px2"><p className="text-sm">{story.isi_cerita}</p></h2>
                            </div>
                            <div className="right-0">
                                <h2 className="mb-1"><p className="text-xs">total Chapter:</p></h2>
                                <h2 className="mb-1"><p className="text-xs">Word:</p></h2>
                                <h2 className="w-px2"><p className="text-xs">Di upload Date:</p></h2>
                                <div className="flex">
                                <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2 mr-6" alt="" />
                                <img src={require("../../assets/image/home/unlike.svg")} className="h-6 w-6 mt-3 mr-6" alt="" />  
                                <img src={require("../../assets/image/home/like.svg")} className="h-6 w-6 mt-2" alt="" />  
                                </div>
                            </div>
                            
                        </div>
                    </div>
               </div>

            ))}
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cerita:Object.values(state.cerita)
})

export default connect(mapStateToProps, {getCerita})(UserStoryList);
