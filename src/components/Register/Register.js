import React from 'react';

const Register = ({ onRouteChange }) => {
	return(
		<article className="mw6 shadow-5 center dark-gray br3 pa4 pa4-ns mv4 w-100 ba b--black-10">
		<main className="pa4 black-80">
  <div className="measure">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f1 fw6 ph0 mh0">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name" /> 
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" /> 
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
      </div>
    </fieldset>
    <div className="">
      <input 
      onClick={() => onRouteChange('home')}
      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib" 
      type="submit" 
      value="register" />
    </div>
  </div>
</main>
</article>
		
		);
}

export default Register;