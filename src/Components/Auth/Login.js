import React, { Component } from 'react';


class Login extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <div className="app-content content ">
                    <div className="content-overlay" />
                    <div className="header-navbar-shadow" />
                    <div className="content-wrapper">
                        <div className="content-header row">
                        </div>
                        <div className="content-body"><div className="auth-wrapper auth-v1 px-2">
                            <div className="auth-inner py-2">
                                {/* Login v1 */}
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <a href="javascript:void(0);" className="brand-logo">
                                            <h2 className="brand-text text-primary ml-1">Vuexy</h2>
                                        </a>
                                        <h4 className="card-title mb-1">Welcome to Vuexy! 👋</h4>
                                        <p className="card-text mb-2">Please sign-in to your account and start the adventure</p>
                                        <form className="auth-login-form mt-2" action="index.html" method="POST" noValidate="novalidate">
                                            <div className="form-group">
                                                <label htmlFor="login-email" className="form-label">Email</label>
                                                <input type="text" className="form-control" id="login-email" name="login-email" placeholder="john@example.com" aria-describedby="login-email" tabIndex={1} autofocus />
                                            </div>
                                            <div className="form-group">
                                                <div className="d-flex justify-content-between">
                                                    <label htmlFor="login-password">Password</label>
                                                    <a href="page-auth-forgot-password-v1.html">
                                                        <small>Forgot Password?</small>
                                                    </a>
                                                </div>
                                                <div className="input-group input-group-merge form-password-toggle">
                                                    <input type="password" className="form-control form-control-merge" id="login-password" name="login-password" tabIndex={2} placeholder="············" aria-describedby="login-password" />
                                                    <div className="input-group-append">
                                                        <span className="input-group-text cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox">
                                                    <input className="custom-control-input" type="checkbox" id="remember-me" tabIndex={3} />
                                                    <label className="custom-control-label" htmlFor="remember-me"> Remember Me </label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-block waves-effect waves-float waves-light" tabIndex={4}>Sign in</button>
                                        </form>
                                        <p className="text-center mt-2">
                                            <span>New on our platform?</span>
                                            <a href="page-auth-register-v1.html">
                                                <span>Create an account</span>
                                            </a>
                                        </p>
                                        <div className="divider my-2">
                                            <div className="divider-text">or</div>
                                        </div>
                                        <div className="auth-footer-btn d-flex justify-content-center">
                                            <a href="javascript:void(0)" className="btn btn-facebook waves-effect waves-float waves-light">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                            </a>
                                            <a href="javascript:void(0)" className="btn btn-twitter white waves-effect waves-float waves-light">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                                            </a>
                                            <a href="javascript:void(0)" className="btn btn-google waves-effect waves-float waves-light">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                            </a>
                                            <a href="javascript:void(0)" className="btn btn-github waves-effect waves-float waves-light">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* /Login v1 */}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;

