import { describe, it, expect } from 'vitest';
import { Button } from './index';

describe('Button Component', () => {
  it('should return a button object with correct label', () => {
    const label = 'Click Me';
    const result = Button({ label });
    expect(result).toEqual({
      type: 'button',
      label: 'Click Me',
      disabled: false
    });
  });

  it('should respect the disabled prop', () => {
    const result = Button({ label: 'Submit', disabled: true });
    expect(result.disabled).toBe(true);
  });

  it('should default disabled to false', () => {
    const result = Button({ label: 'Default' });
    expect(result.disabled).toBe(false);
  });
});
