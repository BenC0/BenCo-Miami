import React from 'react';
import PageTitle from "../Modules/PageTitle/init"
import pageSwap from "../Modules/Utils/pageSwap"
import Section from "../Modules/Content/Section"
import CallToAction from "../Modules/CallToAction/init"

function Contact(props) {
	let doPageSwap = props.doPageSwap !== null || props.doPageSwap !== undefined ? props.doPageSwap : true
	if (!!doPageSwap) {
		pageSwap("Contact")
	}
	const WorkRelated = {
		"title": "Work Related",
		"copy": [
			<p>If you'd like to get in touch regarding anything work-related, please do so via LinkedIn.</p>,
			<CallToAction cta={{
							link: "https://www.linkedin.com/in/bencro/",
							target: "_blank",
							text: "Ben Co",
							icon: <svg xmlns="http://www.w3.org/2000/svg" width="19.999" height="20" viewBox="0 0 19.999 20"><path d="M4.477,20H.33V6.648H4.477ZM2.4,4.827A2.413,2.413,0,1,1,4.8,2.4,2.422,2.422,0,0,1,2.4,4.827ZM20,20H15.858V13.5c0-1.549-.031-3.536-2.156-3.536-2.156,0-2.486,1.683-2.486,3.424V20H7.074V6.648h3.977V8.47h.058a4.358,4.358,0,0,1,3.923-2.156c4.2,0,4.968,2.763,4.968,6.353V20Z" transform="translate(0 -0.001)" fill="#fff"/></svg>
						}} />
		]
	}
	const AnythingElse = {
		"title": "Anything Else",
		"copy": [
			<p>If you'd like to get in touch for any other purpose, or keep an eye on any of my projects, check out my twitter and GitHub profiles.</p>,
			<CallToAction cta={{
							link: "https://twitter.com/BenCR0",
							target: "_blank",
							text: "BenCR0",
							icon: <svg xmlns="http://www.w3.org/2000/svg" width="24.626" height="20" viewBox="0 0 24.626 20"><path d="M22.094,8.366c.016.219.016.438.016.656A14.261,14.261,0,0,1,7.75,23.381,14.266,14.266,0,0,1,0,21.115a10.516,10.516,0,0,0,1.219.062,10.11,10.11,0,0,0,6.266-2.156,5.055,5.055,0,0,1-4.719-3.5,6.411,6.411,0,0,0,.953.078,5.337,5.337,0,0,0,1.328-.172A5.047,5.047,0,0,1,1,10.475v-.062a5.077,5.077,0,0,0,2.281.64A5.055,5.055,0,0,1,1.72,4.3,14.346,14.346,0,0,0,12.126,9.584,5.7,5.7,0,0,1,12,8.428a5.052,5.052,0,0,1,8.735-3.453,9.951,9.951,0,0,0,3.2-1.219A5.033,5.033,0,0,1,21.72,6.537a10.123,10.123,0,0,0,2.906-.781A10.852,10.852,0,0,1,22.1,8.366Z" transform="translate(0 -3.381)" fill="#fff"/></svg>
						}} />,
			<CallToAction cta={{
							link: "https://github.com/BenC0/",
							target: "_blank",
							text: "BenC0",
							icon: <svg xmlns="http://www.w3.org/2000/svg" width="20.512" height="20" viewBox="0 0 20.512 20"><path d="M6.861,16.667c0,.083-.1.149-.215.149-.136.012-.232-.054-.232-.149s.1-.149.215-.149S6.861,16.571,6.861,16.667Zm-1.286-.186c-.029.083.054.178.178.2a.194.194,0,0,0,.256-.083c.025-.083-.054-.178-.178-.215A.212.212,0,0,0,5.575,16.481ZM7.4,16.41c-.12.029-.2.108-.19.2s.12.136.244.108.2-.108.19-.19-.124-.132-.244-.12ZM10.124.563A9.916,9.916,0,0,0,0,10.654a10.369,10.369,0,0,0,7.01,9.892c.529.1.715-.232.715-.5s-.012-1.671-.012-2.539c0,0-2.895.621-3.5-1.232,0,0-.472-1.2-1.15-1.513,0,0-.947-.649.066-.637a2.184,2.184,0,0,1,1.6,1.067,2.186,2.186,0,0,0,3.015.865A2.3,2.3,0,0,1,8.4,14.661c-2.312-.256-4.644-.591-4.644-4.57a3.133,3.133,0,0,1,.976-2.436,3.908,3.908,0,0,1,.108-2.808C5.7,4.579,7.693,5.964,7.693,5.964a9.766,9.766,0,0,1,5.195,0s1.989-1.39,2.854-1.116a3.906,3.906,0,0,1,.108,2.808,3.215,3.215,0,0,1,1.067,2.436c0,3.991-2.436,4.31-4.748,4.57a2.445,2.445,0,0,1,.7,1.919c0,1.394-.012,3.118-.012,3.457,0,.269.19.6.715.5a10.274,10.274,0,0,0,6.939-9.884A10.14,10.14,0,0,0,10.124.563ZM4.02,14.826c-.054.041-.041.136.029.215s.161.1.215.041.041-.136-.029-.215S4.074,14.772,4.02,14.826Zm-.446-.335c-.029.054.012.12.1.161a.123.123,0,0,0,.178-.029c.029-.054-.012-.12-.1-.161C3.668,14.437,3.6,14.45,3.573,14.491Zm1.34,1.472c-.066.054-.041.178.054.256.1.1.215.108.269.041s.029-.178-.054-.256C5.091,15.909,4.967,15.9,4.913,15.963Zm-.472-.608c-.066.041-.066.149,0,.244s.178.136.232.1a.188.188,0,0,0,0-.256C4.615,15.343,4.508,15.3,4.441,15.355Z" transform="translate(0 -0.563)" fill="#fff"/></svg>
						}} />
		]
	}
	return [
		<PageTitle title={"Contact"} />,
		<div className="contact page d-span-11 m-span-3">
			<Section content={WorkRelated} />
			<Section content={AnythingElse} />
		</div>
	]
}

export default Contact;