import React from 'react';
import NotificationSystem from 'react-notification-system';

const STYLE =
{
	NotificationItem :
	{
		DefaultStyle :
		{
			padding          : '6px 10px',
			backgroundColor  : 'rgba(255,255,255, 0.9)',
			fontFamily       : 'Roboto',
			fontWeight       : 400,
			fontSize         : '1rem',
			cursor           : 'default',
			WebkitUserSelect : 'none',
			MozUserSelect    : 'none',
			userSelect       : 'none',
			transition       : '0.15s ease-in-out'
		},
		info :
		{
			color     : '#000',
			borderTop : '2px solid rgba(66,66,66, 0.75)'
		},
		success :
		{
			color     : '#000',
			borderTop : '4px solid rgba(7,78,82, 0.85)'
		},
		error :
		{
			color     : '#000',
			borderTop : '4px solid #ff0014'
		}
	},
	Title :
	{
		DefaultStyle :
		{
			margin           : '0 0 8px 0',
			fontFamily       : 'Roboto',
			fontWeight       : 500,
			fontSize         : '1.1rem',
			userSelect       : 'none',
			WebkitUserSelect : 'none',
			MozUserSelect    : 'none'
		},
		info :
		{
			color : 'rgba(66,66,66, 0.85)'
		},
		success :
		{
			color : 'rgba(7,78,82, 0.9)'
		},
		error :
		{
			color : '#ff0014'
		}
	},
	Dismiss :
	{
		DefaultStyle :
		{
			display : 'none'
		}
	},
	Action :
	{
		DefaultStyle :
		{
			padding          : '8px 24px',
			fontSize         : '1.2rem',
			cursor           : 'pointer',
			userSelect       : 'none',
			WebkitUserSelect : 'none',
			MozUserSelect    : 'none'
		},
		info :
		{
			backgroundColor : 'rgba(66,66,66, 1)'
		},
		success :
		{
			backgroundColor : 'rgba(7,78,82, 1)'
		}
	}
};

export default class Notifier extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return (
			<NotificationSystem ref='NotificationSystem' style={STYLE} allowHTML={false}/>
		);
	}

	notify(data)
	{
		let data2;

		switch (data.level)
		{
			case 'info' :
				data2 = Object.assign(
					{
						position    : 'br',
						dismissible : true,
						autoDismiss : 2
					}, data);
				break;

			case 'success' :
				data2 = Object.assign(
					{
						position    : 'br',
						dismissible : true,
						autoDismiss : 2
					}, data);
				break;

			case 'error' :
				data2 = Object.assign(
					{
						position    : 'br',
						dismissible : true,
						autoDismiss : 4
					}, data);
				break;

			default:
				throw new Error(`unknown level "${data.level}"`);
		}

		this.refs.NotificationSystem.addNotification(data2);
	}

	hideNotification(uid)
	{
		this.refs.NotificationSystem.removeNotification(uid);
	}
}
