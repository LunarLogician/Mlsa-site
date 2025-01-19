import * as React from 'react';
import { cn } from '/src/components/ui/lib/utils.js';  // Make sure 'utils.js' is in 'src/lib'


const Separator = React.forwardRef(({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'shrink-0 bg-border',        // Default styles
      orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',  // Apply styles based on orientation
      className                   // Allow additional customization via className prop
    )}
    {...props}                    // Spread remaining props
  />
));

Separator.displayName = 'Separator'; // Set displayName for debugging purposes

export { Separator };
