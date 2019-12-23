```jsx
import Radio from '@rakuten-rex/__COMPONENT_NAME__';

function MyCustomComponent() {
  return (
    <Radio name='pet' label='dog' value='dog' id='choice1' area-label='dog' />
    <Radio name='pet' label='cat' value='cat' area-label='cat' id='choice2' checked={true} />
    <Radio name='pet' label='rabbit' value='rabbit' area-label='rabbit' id='choice3' />
    <Radio name='pet' label='pig' value='pig' id='choice4' area-label='pig' disabled={true} />
  );
}
```