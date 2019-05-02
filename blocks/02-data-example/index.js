const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import icon from './icon';
import './style.scss';

import SelectDemo from './components/SelectDemo';
import SubscribeDemo from './components/SubscribeDemo';

export default registerBlockType('jsforwpadvblocks/data-example', {
	title: __('Data API Example', 'jsforwpadvblocks'),
	description: __(
		'Demo of select, subscribe, dispatch, withSelect, withDispatch and compose',
		'jsforwpadvblocks'
	),
	category: 'jsforwpadvblocks',
	icon,
	attributes: {},
	edit: props => {
		return (
			<div>
				<p>{__('Data Api Block', 'jsforwpadvblocks')}</p>
				<SelectDemo />
				<SubscribeDemo />
			</div>
		);
	},
	save: props => {
		return (
			<div>
				<p>{__('Data Api Block', 'jsforwpadvblocks')}</p>
			</div>
		);
	}
});
