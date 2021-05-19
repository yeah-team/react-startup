import React, { Component } from 'react';

class NotFound extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="app-content content ">
                        <div className="content-wrapper">
                            <div className="content-body">
                                <div className="auth-wrapper auth-v1 px-2">
                                    <div className="auth-inner py-2">
                                        <p className="text-center text-warning pb-5">
                                            <div class="spinner-grow text-warning" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        </p>
                                        {/* <img src={img} width="150" className="img-center img-fluid pb-5" alt="" /> */}
                                        <h4 className="text-center text-warning">เว็บไซต์ดังกล่าวยังไม่เปิดให้บริการ</h4>
                                        <p className="text-center text-warning">กรุณาติดต่อผู้ให้บริการของท่าน</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;
