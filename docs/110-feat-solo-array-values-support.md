# feat: add string array support to solo object properties

## Project Goals

The goal of this feature is to enhance the filtering capabilities of the `ReactPivot` component by allowing the `solo` prop to accept arrays of strings. This enables multi-value filtering for a given dimension, providing more flexible and powerful data exploration for users.

## Approaches

### Approach 1 - Direct Implementation (Implemented Here)

This approach involves modifying the core logic of the `ReactPivot` component to natively support array values in the `solo` prop.

- **Core Logic Implementation:**
    - A new function, `getFilteredRows`, was introduced to filter the raw data based on the `solo` prop before any calculations are performed. This function iterates through the `solo` object and applies the following logic:
        - If a `solo` property value is an array, the function checks if the row's value for that dimension is present in the array (OR condition).
        - If a `solo` property value is a single string, it performs a direct comparison (existing AND condition).
        - The filtering combines multiple `solo` properties with AND logic.
    - The `setSolo` function was updated to handle array manipulation. When a value is selected:
        - If the existing `solo` value is an array, the new value is added or removed (toggled).
        - If the existing `solo` value is a single value, it's converted to an array when a second value is added.

- **UI Control for Solo Filters:**
    - To make this new functionality user-friendly, a new component, `SoloControl`, was created.
    - This new component provides a user interface for managing the `solo` filters. It displays each active filter and allows users to:
        - **Add values:** A dropdown menu for each dimension shows the unique values from the dataset, allowing users to add them to the filter.
        - **Remove values:** Each selected value in a filter can be individually removed.
        - **Remove filters:** The entire filter for a dimension can be removed.
    - The `SoloControl` component is rendered in the main `ReactPivot` component, and it communicates changes back to the parent component through the `onChange` prop.

- **Unique Value Extraction:**
    - To populate the dropdowns in the `SoloControl` component, a `getUniqueValues` function was added to `index.jsx`.
    - This function iterates through the dataset and extracts all unique values for each dimension, which are then passed to the `SoloControl` component.

#### Pros

- **Integrated Solution:** The feature is built directly into the component, providing a seamless experience for the user.
- **High Performance:** Filtering is done in memory, and the `getFilteredRows` function is optimized for performance.
- **Good User Experience:** The `SoloControl` component provides an intuitive way to manage complex filters.

#### Cons

- **Increased Complexity:** The core component's logic is now more complex, which could make future maintenance more challenging.
- **Tightly Coupled:** The filtering logic is tightly coupled with the `ReactPivot` component, making it difficult to reuse in other contexts.

### Approach 2 - Custom Patch Layer

This approach involves creating a custom patch layer that intercepts the `rows` prop and applies the filtering logic before passing the data to the `ReactPivot` component.

- **Patch Layer:**
    - A higher-order component (HOC) would be created to wrap the `ReactPivot` component.
    - This HOC would be responsible for managing the `solo` state and filtering the `rows` prop before passing it to the `ReactPivot` component.
    - The `solo` prop of the `ReactPivot` component would not be used directly.

#### Pros

- **Separation of Concerns:** The filtering logic is decoupled from the `ReactPivot` component, making the code easier to maintain and reason about.
- **Reusability:** The patch layer could be reused with other components that need similar filtering capabilities.
- **Less Intrusive:** This approach does not require any changes to the core `ReactPivot` component.

#### Cons

- **Potential for Bugs:** The patch layer could introduce subtle bugs if it's not carefully implemented and tested.
- **Less Performant:** The patch layer would add an extra layer of processing, which could impact performance, especially with large datasets.
- **More Complex to Use:** Users would need to understand how to use the patch layer in addition to the `ReactPivot` component.

### Approach 3 - Wrapper Component

This approach involves creating a new wrapper component that encapsulates the `ReactPivot` component and provides the desired filtering functionality.

- **Wrapper Component:**
    - A new component, `FilterableReactPivot`, would be created.
    - This component would render the `ReactPivot` component and provide its own `solo` prop that supports arrays.
    - The `FilterableReactPivot` component would be responsible for managing the `solo` state and filtering the `rows` prop before passing it to the `ReactPivot` component.

#### Pros

- **Clear API:** The `FilterableReactPivot` component would provide a clear and concise API for users who need the filtering functionality.
- **Good for a library:** This approach is well-suited for a library, as it provides a clean separation between the core component and the new functionality.
- **Easy to maintain:** The filtering logic is contained within the `FilterableReactPivot` component, making it easy to maintain and update without affecting the core `ReactPivot` component.

#### Cons

- **Code Duplication:** The `FilterableReactPivot` component would duplicate some of the logic from the `ReactPivot` component, which could lead to maintenance issues.
- **Less Flexible:** The `FilterableReactPivot` component would be less flexible than the patch layer approach, as it would be tightly coupled with the `ReactPivot` component.
- **Increased Bundle Size:** The `FilterableReactPivot` component would add to the overall bundle size of the application.


## Approach Chosen (Approach 1)

**Approach 1 (Direct Implementation)** was selected because it provides the best user experience with minimal complexity.

### Why This Approach

- **Simple for users**: No new components to learn - the existing `ReactPivot` API just works with arrays
- **Better performance**: No wrapper layers or extra processing overhead
- **Backward compatible**: Existing code continues to work without changes
- **Integrated UI**: The `SoloControl` component feels like a natural part of the component

### Why Not the Others

- **Approach 2**: Too complex for users and adds performance overhead
- **Approach 3**: Would require users to switch to a new component, fragmenting the API

