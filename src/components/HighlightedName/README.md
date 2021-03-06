# HighlightedName

By default, the background color of a `HighlightedName` component is generated
automatically from its `children` (which must be a string), though this can be overridden.

[View story source](https://github.com/balena-io-modules/rendition/blob/master/src/components/HighlightedName/story.js)

## Props

| Name       | Type     | Default                             | Required | Description                                         |
|------------|----------|-------------------------------------|----------|-----------------------------------------------------|
| `children` | `string` | -                                   | ✓        | The text to display inside the highlighted name     |
| `bg`       | `string` | autogenerated from `children`       | -        | If passed, it will be used as the background color of the component |
| `color`    | `string` | `theme.colors.text.main` or `white` | -        | If passed, it will be used as the text color of the component |
