Implement this Figma design in the existing Angular component.

`FIGMA NODE URL`

Use Angular standalone component conventions.
Use signal inputs where inputs are needed.
Use native Angular control flow: @if and @for.
Use SCSS, not Tailwind.
Do not preserve Figma-generated utility classes.

### SCSS naming rules:

- Use Angular component-scoped styles.
- Style the root with `:host`.
- Use simple kebab-case child classes, e.g. `.badge`, `.header`, `.icon`, `.features`, `.feature`, `.button`.
- Use host state classes for variants, e.g. `:host(.popular)`, `:host(.disabled)`.
- Avoid long generated class names.
- Avoid classes based on Figma node IDs.
- Avoid Tailwind-style utility class names.

Preserve the visual design as closely as possible.

### Interactivity
Inspect all nested component instances.
For any instance that is part of a Component Set (Variants), identify the 'Hover' or 'Active' properties and map them to standard SCSS pseudo-classes (e.g., :hover, :active).

Identify interactive states defined in the Figma Prototype tab.
If a nested component has a 'While Hovering' interaction, implement those style changes within the parent's SCSS or the child's scoped styles using :hover.
