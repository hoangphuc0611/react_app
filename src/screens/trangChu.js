import '../App.css';
import React, { useState } from "react";
import axios from "axios";
import "./trangChu.css";
function trangchu() {
    return (
        <div className='divcha'>
            <div className='banner'>

            </div>

            <div className='footer row'>
                <div className="footercon1 col-lg-4">

                </div>
                <div className="footercon2 col-lg-8">
                    <ul>
                        <li>Em tên: Bùi Hoàng Phúc</li>
                        <li>Học sinh lớp 12a13</li>
                        <li>Trường THPT Nguyễn Bỉnh Kiếm thị trấn chư sê huyện chư sê tỉnh gia lai</li>
                        <li>Niên Khóa: 2016-2018</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default trangchu;



