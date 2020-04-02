import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import every from 'lodash/every';
import * as React from 'react';
import styled, { css } from 'styled-components';
import asRendition from '../../asRendition';
import { DefaultProps, RenditionSystemProps, Theme } from '../../common-types';
import { Arrow } from '../../internal/Arrow';
import { px } from '../../utils';
import { Flex } from '../Flex';
import Link from '../Link';
import Txt from '../Txt';

interface StepOptions {
	complete: boolean;
	label: string;
}

interface InternalOrderedStepsProps extends DefaultProps {
	activeStepIndex: number;
	steps: StepOptions[];
	onStepSelected: (stepIndex: number) => void;
}

interface InternalStepProps extends StepOptions {
	index: number;
	active: boolean;
	onClick: (() => void) | null;
}

interface StepIconProps {
	index: number;
	active: boolean;
	complete: boolean;
}

const getIconBg = (theme: Theme, complete: boolean, active: boolean) => {
	let bgColor = '#fff';
	if (active) {
		bgColor = theme.colors.primary.main;
	} else if (complete) {
		bgColor = theme.colors.success.main;
	}
	const size = px(theme.fontSizes[4]);
	return css`
		border-radius: 50%;
		border: ${complete || active
			? 'none'
			: `solid 1px ${theme.colors.tertiary.semilight}`};
		color: ${complete || active ? '#fff' : theme.colors.tertiary.semilight};
		background-color: ${bgColor};
		height: ${size};
		width: ${size};
	`;
};

const StepIconBg = styled(Flex)<{ complete: boolean; active: boolean }>`
	${props => getIconBg(props.theme, props.complete, props.active)};
`;

const getStepTxt = (theme: Theme, isDisabled: boolean) => {
	return isDisabled ? `color: ${theme.colors.tertiary.light};` : '';
};

const StepTxt = styled(Txt)<{ isDisabled: boolean }>`
	${props => getStepTxt(props.theme, props.isDisabled)};
`;

const StepIcon = ({ complete, active, index }: StepIconProps) => {
	return (
		<StepIconBg
			alignItems="center"
			justifyContent="center"
			complete={complete}
			active={active}
		>
			{complete ? <FontAwesomeIcon icon={faCheck} /> : <Txt>{index + 1}</Txt>}
		</StepIconBg>
	);
};

const OrderedStep = ({
	complete,
	label,
	active,
	index,
	onClick,
}: InternalStepProps) => {
	return (
		<Flex flexDirection="row" justifyContent="center" alignItems="center">
			<StepIcon complete={complete} active={active} index={index} />
			{onClick ? (
				<Link ml={2} onClick={onClick}>
					{label}
				</Link>
			) : (
				<StepTxt bold={active} isDisabled={!complete && !active} ml={2}>
					{label}
				</StepTxt>
			)}
		</Flex>
	);
};

// A step should be clickable if:
// - it's located before the active step OR
// - it's not the current step AND all previous steps are complete
const isStepClickable = (
	steps: StepOptions[],
	index: number,
	activeStepIndex: number,
) => {
	const allPreviousStepsComplete = every(steps.slice(0, index), 'complete');
	return Boolean(
		index < activeStepIndex ||
			(index !== activeStepIndex && allPreviousStepsComplete),
	);
};

const OrderedStepsInternal = React.forwardRef(
	(
		{
			className,
			steps,
			activeStepIndex,
			onStepSelected,
		}: InternalOrderedStepsProps,
		ref,
	) => {
		return (
			<Flex className={className} ref={ref as any}>
				<Flex mx="auto" flexDirection="row" alignItems="center" flexWrap="wrap">
					{steps.map((step, index) => {
						const clickHandler = isStepClickable(steps, index, activeStepIndex)
							? () => onStepSelected(index)
							: null;
						return (
							<Flex key={step.label} flexDirection="row" alignItems="center">
								<OrderedStep
									{...step}
									active={activeStepIndex === index}
									onClick={clickHandler}
									index={index}
								/>
								{index < steps.length - 1 && (
									<Flex justifyContent="center" alignItems="center" mx={3}>
										<Arrow
											disabled={!every(steps.slice(0, index + 1), 'complete')}
										/>
									</Flex>
								)}
							</Flex>
						);
					})}
				</Flex>
			</Flex>
		);
	},
);

export type OrderedStepsProps = InternalOrderedStepsProps &
	RenditionSystemProps;

export default asRendition<
	React.ForwardRefExoticComponent<
		OrderedStepsProps & React.RefAttributes<HTMLDivElement>
	>
>(OrderedStepsInternal);
