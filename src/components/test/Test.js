import React, { useState } from "react";
import axios from "axios";
import { chat } from './testapi';
import { chatLoad } from './apiLoad';
function Test() {

    return (
        < div className = "keypad" >

            <div className="search">
                    <div className="row">

                        <div className="col col-lg-2">
                            <select className="form-select" aria-label="Default select example" name="k" id="district">
                                <option value='Quận'>Quận</option>
                                <option value="Quận 2">Quận 2</option>
                                <option value="Quận 9">Quận 9</option>
                                <option value="Quận Thủ Đức">Quận Thủ Đức</option>
                            </select>

                        </div>
                        <div className="col col-lg-2">
                            <select className="form-select" aria-label="Default select example" name="m" id="price">
                                <option value='Giá'>Giá</option>
                                <option value="1">30-80</option>
                                <option value="2">80-130</option>
                                <option value="3">130-180</option>
                                <option value="4">Đang cập nhật</option>
                            </select>

                        </div>
                        <div className="col col-lg-6">
                            <input type="text" className="form-control" name="q" placeholder="Tìm kiếm" id="name" autoComplete="off"
                               
                            ></input>

                        </div>
                        
                        <div className="col col-lg-2">
                            <button onClick={(e) => {
                                chat();
                            }}   className="btn btn-primary">
                            Search
                            </button>
                        </div>

                    </div>
                <div className='col col-lg-2' >
                <image onLoad={(e) => {
                                    chatLoad()
                                }}></image>
                </div>

            </div>
            <div className='chats' id='chats' >
                
            </div>

        </div >
    )
}
export default Test;