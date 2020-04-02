# OrderedSteps

A visual guide showing an ordered number of steps to be performed by the user. This is a _controlled_ component - the
active step index is passed into the component as a prop. Unlike the `Steps` component, whether you can click on a
step's label is strictly controlled by the state of the component.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/OrderedSteps/story.js)

## Props

| Name              | Type                      | Default | Required | Description                                                         |
| ----------------- | ------------------------- | -       | ---------| ------------------------------------------------------------------- |
| `activeStepIndex` | `number`                  | -       | ✓        | The index of the currently active step.                             |
| `onStepSelected`  | `(index: number) => void` | -       | ✓        | Called when a (clickable) step label is clicked on.                 |
| `steps`           | `Array<StepOptions>`      | -       | ✓        | The step options. Each option should define `complete` and `label`. |
