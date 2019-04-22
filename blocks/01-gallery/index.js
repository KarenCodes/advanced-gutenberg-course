/**
 *  Block dependencies
 */

import icon from './icon';
import './style.scss';

/**
 * Block libraries
 */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { MediaPlaceholder } = wp.editor;

/**
 * Register Block
 */

export default registerBlockType('jsforwpadvblocks/gallery', {
	title: __('Gallery', 'jsforwpadvblocks'),
	description: __('A demo custom gallery block', 'jsforwpadvblocks'),
	category: 'jsforwpadvblocks',
	icon,
	keywords: [
		__('Masonry', 'jsforwpadvblocks'),
		__('Images Media', 'jsforwpadvblocks'),
		__('Lightbox', 'jsforwpadvblocks')
	],
	supports: {
		align: ['full', 'wide']
	},
	attributes: {
		images: {
			type: 'array',
			default: []
		}
	},
	edit: props => {
		const {
			attributes: { images },
			className,
			setAttributes
		} = props;
		const onSelectImages = newImages => {
			const images = newImages.map(img => {
				return {
					src: img.sizes.large.url,
					width: img.sizes.large.width,
					height: img.sizes.large.height,
					id: img.id,
					alt: img.alt,
					caption: img.caption
				};
			});
			setAttributes({ images });
		};
		return (
			<Fragment>
				{!!!images.length ? (
					<MediaPlaceholder
						labels={{
							title: __('Gallery', 'jsforwpadvblocks'),
							instructions: __(
								'Drag images, upload new ones or select files from your library.',
								'jsforwpadvblocks'
							)
						}}
						icon={icon}
						accept="images/*"
						multiple
						onSelect={onSelectImages}
					/>
				) : (
					images.map(img => (
						<img
							src={img.src}
							alt={img.alt}
							title={img.caption}
							data-id={img.id}
							width={img.width}
							height={img.height}
						/>
					))
				)}
			</Fragment>
		);
	},
	save: props => {
		const { images } = props.attributes;
		return (
			<div>
				{images.map(img => (
					<img
						src={img.src}
						alt={img.alt}
						title={img.caption}
						data-id={img.id}
						width={img.width}
						height={img.height}
					/>
				))}
			</div>
		);
	}
});
