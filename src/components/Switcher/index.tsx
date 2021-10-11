import React from 'react'


interface Props {
	label: string;
	icon: React.ReactElement;
	className?: string;
	children: React.FC;
	isActive?: boolean;
}




const Switcher: React.FC<Props> = (props) => {

	const { icon, children, label } = props;

	return (
		<div>
			{icon}
			{children}
			{label}
		</div>
	)
}



export default Switcher