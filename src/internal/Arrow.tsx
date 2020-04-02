import React from 'react';
import styled from 'styled-components';

const ArrowSvg = styled.svg<{ disabled: boolean }>`
	path {
		fill: ${props =>
			props.disabled
				? props.theme.colors.tertiary.semilight
				: props.theme.colors.tertiary.light};
	}
`;

interface ArrowProps {
	disabled?: boolean;
}

export const Arrow = ({ disabled }: ArrowProps) => {
	return (
		<ArrowSvg
			disabled={Boolean(disabled)}
			xmlns="http://www.w3.org/2000/svg"
			x="0"
			y="0"
			width="29.4"
			height="9"
			viewBox="0 0 29.4 9"
		>
			<g transform="translate(1.000000, 4.000000)">
				<path
					fillRule="nonzero"
					d="M20-4c0.1,0,0.2,0,0.2,0.1l0,0l7.9,4c0.3,0.1,0.4,0.5,0.2,0.7c-0.1,0.1-0.1,0.2-0.2,0.2l0,0
			l-8,3.9c-0.3,0.1-0.6,0-0.7-0.2c0-0.1-0.1-0.2-0.1-0.2l0,0l0-3.5l-3.9,0C15.2,1,15,0.8,15,0.5l0-0.1C15,0.2,15.2,0,15.5,0l0,0
			l3.9,0l0-3.5C19.4-3.7,19.6-4,20-4L20-4z M7.5-0.1l4,0c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5l0,0l-4,0C7.2,0.9,7,0.7,7,0.4
			C7,0.1,7.2-0.1,7.5-0.1L7.5-0.1z M-0.5-0.2l4,0C3.8-0.1,4,0.1,4,0.4S3.8,0.9,3.5,0.9l0,0l-4,0C-0.8,0.8-1,0.6-1,0.3
			C-1,0-0.8-0.2-0.5-0.2L-0.5-0.2z"
				/>
			</g>
		</ArrowSvg>
	);
};
