const { __ } = wp.i18n;
const { Component } = wp.element;
const { select, subscribe } = wp.data;

export default class SubscribeDemo extends Component {
	state = {
		blockCount: ''
	};

	componentDidMount() {
		const unsubscribe = subscribe(() => {
			const blockCount = select('core/editor').getBlockCount();
			this.setState({ blockCount });
		});
	}

	render() {
		return (
			<div>
				<pre>
					<code> {'subscribe( () => {} )'} </code>
				</pre>
				<p>
					{__('Block Count', 'jsforwpadvblocks')} {this.state.blockCount}
				</p>
			</div>
		);
	}
}
